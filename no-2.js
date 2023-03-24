const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a
cekHariKerja("senin")
  .then((result) => console.log(result))
  .catch((error) => console.log(error.toString()))
  .finally(() => console.log("Selesai"));

// b
// (async () => {
//   try {
//     const data = await cekHariKerja(1);
//     console.log(data);
//   } catch (error) {
//     console.log(error.toString());
//   }
// })();
