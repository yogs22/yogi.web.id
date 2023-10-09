import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  // Inisialisasi AOS setelah aplikasi Nuxt.js dimulai
  app.AOS = new AOS.init({ disable: "phone" }); // Atur konfigurasi AOS sesuai kebutuhan Anda
};
