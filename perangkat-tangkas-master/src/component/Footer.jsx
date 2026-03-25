const Footer = () => {
    return (
        <footer
        className="position-relative overflow-hidden"
        style={{
          height: "50vh",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
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
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{
            maxWidth: "900px",
            padding: "0 1rem",
          }}
        >
          <h2 className="fw-bold mb-3">Anonymous</h2>
          <p className="mb-4" style={{ opacity: 0.9, lineHeight: "1.8" }}>
            Platform dokumentasi pemrograman yang dirancang untuk membantu
            developer belajar, memahami, dan mengembangkan aplikasi secara
            terstruktur, efisien, dan berkelanjutan.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
            <a
              href="https://discord.com"
              className="text-white link-offset-2 link-underline link-underline-opacity-0"
            >
              Discord
            </a>
            <a
              href="https://linkedin.com"
              className="text-white link-offset-2 link-underline link-underline-opacity-0"
            >
              LinkIn
            </a>
            <a
              href="https://youtube.com"
              className="text-white link-offset-2 link-underline link-underline-opacity-0"
            >
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
    );
};

export default Footer;

