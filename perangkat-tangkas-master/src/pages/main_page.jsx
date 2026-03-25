import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navbar } from "../component/Navbar";

export const Main_page = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }

  return (
    <>

 <Navbar/>
      <div
        className="hero position-relative overflow-hidden"
        style={{
          height: "75vh",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
        }}
      >
        <img
          src="/src/pages/img_page/rocket_fly.png"
          alt="Rocket"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.85)",
          }}
        />

        <div
          className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ maxWidth: "900px", padding: "0 1rem" }}
        >
          <h1
            className="fw-bold display-2"
            style={{ letterSpacing: "1px" }}
          >
            Rocket
          </h1>
          <p
            className="fs-3 mt-3"
            style={{ opacity: 0.9 }}
          >
            Dokumentasi Pemrograman yang Cepat, Modern, dan Terstruktur
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 1rem",
          fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: "1.1rem",
          lineHeight: "1.95",
          color: "var(--text-color)",
          textAlign: "center",
          letterSpacing: "0.3px",
        }}
      >
        <p style={{ marginBottom: "2.2rem" }}>
          Website ini dikembangkan sebagai sarana pembelajaran yang bertujuan untuk membantu pengguna
          mempelajari pemrograman melalui dokumentasi yang terstruktur, jelas, dan mudah dipahami. Seluruh
          materi disusun secara sistematis dan berurutan agar pengguna dapat mengikuti setiap pembahasan
          dengan alur yang logis dan konsisten, baik bagi pemula maupun pengembang berpengalaman. Setiap topik
          dilengkapi dengan penjelasan konsep, contoh penerapan, serta panduan langkah demi langkah yang
          membantu pengguna memahami tidak hanya aspek teoritis, tetapi juga implementasi praktis dalam
          pengembangan aplikasi. Selain sebagai media pembelajaran, website ini juga berfungsi sebagai
          referensi yang efisien dan terpercaya untuk meninjau kembali konsep tertentu serta mengikuti
          perkembangan terbaru di dunia pemrograman, sehingga dapat mendukung peningkatan kompetensi dan
          pengembangan keterampilan secara berkelanjutan seiring dengan kemajuan teknologi.
        </p>
      </div>
      
      <div className="d-flex justify-content-center" style={{ marginTop: "-25px" }}>
        <button type="button" className="btn btn-dark">
          <Link 
            className="text-light link-offset-2 link-underline link-underline-opacity-0" 
            to="/DocumentationPage"
          >
            Explore Documentation
          </Link>
        </button>
      </div>

      <footer
        className="hero position-relative overflow-hidden"
        style={{
          height: "50vh",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
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

          <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
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
    </>
  );
};

// Tambahkan CSS untuk tema gelap di file CSS global atau dalam komponen
const themeStyles = `
  body.light {
    --bg-color: #ffffff;
    --text-color: #1f2937;
    --nav-bg: #ffffff;
    --footer-text: #ffffff;
  }
  
  body.dark {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --nav-bg: #1e1e1e;
    --footer-text: #ffffff;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }
  
  body.dark .navbar {
    background-color: var(--nav-bg) !important;
  }
  
  body.dark .navbar-brand,
  body.dark .nav-link,
  body.dark .dropdown-toggle,
  body.dark .text-dark {
    color: #e0e0e0 !important;
  }
  
  body.dark .dropdown-menu {
    background-color: #6d6767ff;
  }
  
  body.dark .dropdown-item {
    color: #070707ff;
  }
  
  body.dark .dropdown-item:hover {
    background-color: #686666ff;
  }
  
  body.dark footer a {
    color: #171717ff !important;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = themeStyles;
document.head.appendChild(styleSheet);