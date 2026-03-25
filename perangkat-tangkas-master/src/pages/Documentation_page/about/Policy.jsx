import { Navbar } from "../../../component/Navbar.jsx";
export const Policy=()=>{
    return(<>
        <Navbar/>
<div className="container my-5">
  <div className="card shadow-sm border-0">
    <div className="card-body p-5">
      <h1 className="text-center text-dark mb-4">
        <i className="fa-solid fa-rocket me-2" />
        Kebijakan Anonymous Project
      </h1>

      <p className="text-muted text-center mb-5">
        Panduan, Aturan, dan Prinsip Penggunaan Platform Anonymous
      </p>

      <h4 className="text-dark">1. Pendahuluan</h4>
      <p className="text-secondary">
        Halaman ini menjelaskan kebijakan umum dalam penggunaan Rocket Project,
        sebuah platform pembelajaran dan dokumentasi teknologi yang bertujuan
        membantu pengguna memahami konsep pemrograman secara terstruktur dan
        mudah dipahami.
      </p>

      <h4 className="text-dark mt-4">2. Hak Cipta dan Konten</h4>
      <p className="text-secondary">
        Seluruh konten yang tersedia di Anonymous Project, termasuk teks,
        kode contoh, dan materi pembelajaran, digunakan untuk tujuan edukasi.
        Pengguna diperbolehkan menggunakan materi ini sebagai referensi belajar
        dengan tetap menghormati hak cipta dan sumber asli.
      </p>

      <h4 className="text-dark mt-4">3. Kontribusi Pengguna</h4>
      <p className="text-secondary">
        Rocket Project terbuka terhadap kontribusi berupa saran, perbaikan,
        maupun pengembangan konten. Setiap kontribusi diharapkan disampaikan
        secara profesional, sopan, dan tidak melanggar norma maupun hukum yang
        berlaku.
      </p>

      <h4 className="text-dark mt-4">4. Penggunaan Platform</h4>
      <p className="text-secondary">
        Pengguna dilarang menggunakan Anonymous Project untuk aktivitas yang
        merugikan pihak lain, menyebarkan konten berbahaya, atau melakukan
        penyalahgunaan sistem. Platform ini ditujukan murni untuk pembelajaran
        dan pengembangan diri.
      </p>

      <h4 className="text-dark mt-4">5. Privasi Pengguna</h4>
      <p className="text-secondary">
        Rocket Project menghargai privasi pengguna. Data yang dikumpulkan
        terbatas pada kebutuhan sistem dan tidak dibagikan kepada pihak ketiga
        tanpa izin pengguna kecuali diwajibkan oleh hukum.
      </p>

      <h4 className="text-dark mt-4">6. Perubahan dan Pembaruan</h4>
      <p className="text-secondary">
        Kebijakan Anonymous Project dapat diperbarui sewaktu-waktu untuk
        meningkatkan kualitas layanan. Pengguna disarankan untuk meninjau
        halaman kebijakan ini secara berkala.
      </p>

      <h4 className="text-dark mt-4">7. Informasi Kontak</h4>
      <p className="text-secondary">
        Untuk pertanyaan atau masukan terkait Anonymous Project, silakan hubungi
        pengelola melalui halaman kontak resmi proyek ini.
      </p>

    
    </div>
  </div>
</div>
 <footer
  className="hero position-relative overflow-hidden"
  style={{
    height: "50vh",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
    marginTop: "50px",
  }}
>
  <img
    src="/src/pages/img_page/Rocket_footer.png"
    alt="portal"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.85)",
    }}
  />

  <div
    className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white"
    style={{
      maxWidth: "900px",
      padding: "0 1rem",
    }}
  >
    <h2
      className="fw-bold mb-3"
      style={{ letterSpacing: "1px" }}
    >
      Anonymous
    </h2>

    <p
      className="mb-4"
      style={{ opacity: 0.9, lineHeight: "1.8" }}
    >
      Platform dokumentasi pemrograman yang dirancang untuk membantu developer
      belajar, memahami, dan mengembangkan aplikasi secara terstruktur,
      efisien, dan berkelanjutan.
    </p>

    <div className="d-flex justify-content-center align-items-center gap-4 mb-4 ">
      <a href="https://discord.com" className="text-dark link-offset-2 link-underline link-underline-opacity-0">
      Discord
      </a>

      <a href="https://linkedin.com" className="text-dark link-offset-2 link-underline link-underline-opacity-0">
        LinkIn
      </a>

      <a href="https://youtube.com" className="text-dark link-offset-2 link-underline link-underline-opacity-0">
        YouTube
      </a>
    </div>

    <p
      className="fw-bold"
      style={{ letterSpacing: "1px", opacity: 0.85 }}
    >
      © 2026 Anonymous IDN Inc.
    </p>
  </div>
</footer>
    </>)
}