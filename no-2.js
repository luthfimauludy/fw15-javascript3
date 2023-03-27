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
// penggunaan .then() dan .catch() untuk mengatasi error handling yang nantinya jika ada satu code promise yang di reject,
// maka akan langsung di lempar ke block .catch()

// b
// (async () => {
//   try {
//     const data = await cekHariKerja(1);
//     console.log(data);
//   } catch (error) {
//     console.log(error.toString());
//   }
// })();
// penggunaan try biasanya kita menyisipkan pada code yang mungkin akan terjadi error,
// lalu catch akan menangkapnya apabila terjadi suatu error pada block try
