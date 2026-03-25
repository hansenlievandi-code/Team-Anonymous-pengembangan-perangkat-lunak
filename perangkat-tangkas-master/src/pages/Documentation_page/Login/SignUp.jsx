import { Link } from "react-router-dom"
import { Navbar } from "../../../component/Navbar"

export const SignUp = () => {
    return (<>
    <Navbar/>
    <div
  className="container d-flex justify-content-center align-items-center"
  style={{ minHeight: "100vh" }}
>
  <div
    className="card shadow border-0"
    style={{ maxWidth: 480, width: "100%" }}
  >
    <div className="card-body p-5">
      <h2 className="text-center fw-bold text-dark mb-3">
        <i className="fa-solid fa-user-plus" /> Sign Up
      </h2>
      <p className="text-center text-muted mb-4">Buat akun baru</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Nama Lengkap</label>
          <input
            type="text"
            className="form-control border-dark"
            placeholder="Nama lengkap"
            required=""
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control border-dark"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control border-dark"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Konfirmasi Password</label>
          <input
            type="password"
            className="form-control border-dark"
            placeholder="Ulangi password"
            required=""
          />
        </div>
        <button type="submit" className="btn btn-dark w-100 mb-3">
          Daftar
        </button>
        <hr />
        <p className="text-center small mb-0">{" "}
          Sudah punya akun?
       
          <Link to='/Login' className="text-dark fw-bold text-decoration-none">Login</Link>
        </p>
      </form>
    </div>
  </div>
</div>

    </>)
}