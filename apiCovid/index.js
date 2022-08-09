const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const DataCovid = ref({});
    const orangSembuh = ref("");
    const orangMeninggal = ref("");
    const url = "https://data.covid19.go.id/public/api/update.json";

    const getDataCovid = async () => {
      const res = await axios.get(url);
      DataCovid.value = res.data.update;
      orangSembuh.value = DataCovid.value.penambahan.jumlah_sembuh;
      orangMeninggal.value = DataCovid.value.penambahan.jumlah_meninggal;
      return res.data;
    };
    onMounted(async () => {
      await getDataCovid();
    });
    return {
      getDataCovid,
      DataCovid,
      orangSembuh,
      orangMeninggal,
    };
  },
});

app.mount("#app");
