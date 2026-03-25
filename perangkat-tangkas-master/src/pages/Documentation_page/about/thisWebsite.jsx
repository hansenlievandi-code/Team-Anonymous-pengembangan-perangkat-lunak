import { Navbar } from "../../../component/Navbar.jsx";

export const ThisWebsite=()=>{
    return(<>
     <Navbar/>
<div className="container my-5">
  <div className="card shadow-sm border-0">
    <div className="card-body p-5">
      <h1 className="text-center text-dark mb-4">
        <i className="fa-solid fa-users me-2"></i> Tentang Anonymous Project
      </h1>

      <p className="text-muted text-center mb-5">
        Mengenal lebih dekat platform Rocket dan tujuan pengembangannya.
      </p>

      <h4 className="text-dark">1. Tujuan Website</h4>
      <p className="text-secondary">
        Rocket Project dibuat sebagai platform pembelajaran dan dokumentasi
        teknologi yang bertujuan membantu pelajar, mahasiswa, dan pemula
        memahami konsep pemrograman secara terstruktur, praktis, dan mudah
        dipahami dalam bahasa Indonesia.
      </p>

      <h4 className="text-dark mt-4">2. Apa yang Kami Tawarkan</h4>
      <ul className="text-secondary">
        <li>Materi pembelajaran pemrograman yang tersusun rapi.</li>
        <li>Contoh kode yang mudah dipahami dan aplikatif.</li>
        <li>Penjelasan konsep dari dasar hingga lanjutan.</li>
        <li>Dokumentasi teknologi modern dalam satu platform.</li>
      </ul>

      <h4 className="text-dark mt-4">3. Tim Pengembang</h4>
      <p className="text-secondary">
        Rocket Project dikembangkan oleh individu dan tim kecil yang memiliki
        ketertarikan di bidang teknologi, pendidikan digital, dan pengembangan
        perangkat lunak.
      </p>

      <div className="row text-center my-4">
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fa-solid fa-user-graduate fa-2x text-dark mb-2"></i>
              <h6 className="fw-bold">Creator</h6>
              <p className="text-muted small">
                Pengembang & Penyusun Materi
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fa-solid fa-code fa-2x text-dark mb-2"></i>
              <h6 className="fw-bold">Tim Developer</h6>
              <p className="text-muted small">
                Frontend & Backend Development
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fa-solid fa-book fa-2x text-dark mb-2"></i>
              <h6 className="fw-bold">Kontributor</h6>
              <p className="text-muted small">
                Dokumentasi & Konten Edukasi
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-dark mt-4">4. Visi Kami</h4>
      <p className="text-secondary">
        Menjadi platform pembelajaran teknologi yang sederhana, informatif,
        dan dapat diakses oleh siapa saja untuk mendukung pengembangan diri
        di dunia digital.
      </p>

      <h4 className="text-dark mt-4">5. Hubungi Kami</h4>
      <p className="text-secondary">
        Untuk pertanyaan, saran, atau kerja sama terkait Rocket Project,
        silakan hubungi kami melalui:
      </p>

      <ul className="text-secondary">
        <li>Email: <span className="text-dark">contact@anonymousproject.dev</span></li>
        <li>Repository: <span className="text-dark">GitHub Anonymous Project</span></li>
        <li>Website: <span className="text-dark">Anonymous Project</span></li>
      </ul>
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