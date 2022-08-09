const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const url = "https://randomuser.me/api/";
    const profileUser = ref("");
    const nameUser = ref("");
    const nameLast = ref("");

    const generateUser = async () => {
      const resUser = await axios.get(url);
      nameUser.value = resUser.data.results[0].name.first;
      nameLast.value = resUser.data.results[0].name.last;
      profileUser.value = resUser.data.results[0].picture.large;
    };

    return {
      generateUser,
      profileUser,
      nameUser,
      nameLast,
    };
  },
});

app.mount("#app");
