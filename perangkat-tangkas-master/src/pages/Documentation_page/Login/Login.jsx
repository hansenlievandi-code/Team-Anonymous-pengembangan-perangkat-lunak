import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../../component/Navbar.jsx";

export const Login = () => {
  // ─── State ────────────────────────────────────────────────────────────────
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ─── Handler Submit ───────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5173/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Tampilkan pesan error dari server
        setError(data.message || "Login gagal. Coba lagi.");
        return;
      }

      // Simpan token: localStorage jika "ingat saya", sessionStorage jika tidak
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem("token", data.token);
      storage.setItem("user", JSON.stringify(data.user));

      // Arahkan ke halaman utama setelah login berhasil
      navigate("/dashboard"); // sesuaikan dengan route tujuanmu
    } catch (err) {
      setError("Tidak dapat terhubung ke server. Pastikan server berjalan.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Tampilan (TIDAK DIUBAH dari versi asli) ─────────────────────────────
  return (
    <>
      <Navbar />

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card shadow border-0"
          style={{ maxWidth: 420, width: "100%" }}
        >
          <div className="card-body p-5">
            <h2 className="text-center mb-4 fw-bold text-dark">
              <i className="fa-solid fa-right-to-bracket" /> Login
            </h2>
            <p className="text-center text-muted mb-4">
              Silakan masuk untuk melanjutkan
            </p>

            {/* Pesan Error */}
            {error && (
              <div className="alert alert-danger py-2 text-center small" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-dark">Email</label>
                <input
                  type="email"
                  className="form-control border-dark"
                  placeholder="Masukkan email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-dark">Password</label>
                <input
                  type="password"
                  className="form-control border-dark"
                  placeholder="Masukkan password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Remember */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input border-dark"
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label className="form-check-label text-dark" htmlFor="remember">
                  Ingat saya
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-dark w-100 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                    Memproses...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              {/* Links */}
              <div className="text-center"></div>

              <hr className="my-4" />
              <p className="text-center text-muted small mb-0">
                {" "}
                Belum punya akun?{" "}
                <Link
                  to="/SignUp"
                  className="text-dark fw-bold text-decoration-none"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
