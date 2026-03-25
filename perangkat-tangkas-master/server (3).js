const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || "rahasia_jwt_super_aman_2024";

// ─── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"], credentials: true }));
app.use(express.json());

// ─── Database (ganti email & password sesuai kebutuhan) ──────────────────────
// Untuk menambah user baru, jalankan dulu: node generate-hash.js
// lalu copy hash-nya ke sini
const users = [
  {
    id: 1,
    name: "Laurencio Luckson",
    email: "laurencio@gmail.id",         // ← email yang kamu pakai di form
    password: "$2a$10$xxxhasildarigenerate-hashxxx",     // ← hash dari generate-hash.js
  },
];

// ─── Jalankan ini SEKALI untuk buat hash password kamu ───────────────────────
// Uncomment baris di bawah, jalankan node server.js, copy hash-nya, lalu comment lagi
/*
(async () => {
  const hash = await bcrypt.hash("isi_password_kamu_disini", 10);
  console.log("HASH:", hash);
})();
*/

// ─── Helper: Generate token ──────────────────────────────────────────────────
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ─── Helper: Verify token ────────────────────────────────────────────────────
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token tidak ditemukan" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ success: false, message: "Token tidak valid atau sudah kadaluarsa" });
  }
};

// ─── Route: POST /api/login ──────────────────────────────────────────────────
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email dan password wajib diisi",
    });
  }

  const user = users.find((u) => u.email === email.toLowerCase().trim());
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Email atau password salah",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Email atau password salah",
    });
  }

  const token = generateToken(user);

  return res.status(200).json({
    success: true,
    message: "Login berhasil",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

// ─── Route: GET /api/me ──────────────────────────────────────────────────────
app.get("/api/me", verifyToken, (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
});

// ─── Route: POST /api/logout ─────────────────────────────────────────────────
app.post("/api/logout", verifyToken, (req, res) => {
  return res.status(200).json({ success: true, message: "Logout berhasil." });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
  console.log(`📌 Endpoint login: POST http://localhost:${PORT}/api/login`);
});

module.exports = app;
