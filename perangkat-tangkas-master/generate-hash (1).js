/**
 * generate-hash.js
 * Jalankan: node generate-hash.js
 * Hash akan otomatis dicetak — copy ke server.js bagian users
 */

const bcrypt = require("bcryptjs");

// ─── Sesuaikan data user di sini ─────────────────────────────────────────────
const users = [
  {
    id: 1,
    name: "Laurencio Luckson",
    email: "laurencio@gmail.id",
    password: "12345678",   // ← ganti dengan password yang kamu inginkan
  },
];

// ─── Generate hash & tampilkan hasil ─────────────────────────────────────────
(async () => {
  console.log("🔐 Generating bcrypt hashes...\n");

  for (const user of users) {
    const hash = await bcrypt.hash(user.password, 10);

    console.log("─".repeat(60));
    console.log(`Nama     : ${user.name}`);
    console.log(`Email    : ${user.email}`);
    console.log(`Password : ${user.password}`);
    console.log(`Hash     : ${hash}`);
    console.log("─".repeat(60));
    console.log("\n📋 Copy bagian ini ke array users di server.js:\n");
    console.log(`  {`);
    console.log(`    id: ${user.id},`);
    console.log(`    name: "${user.name}",`);
    console.log(`    email: "${user.email}",`);
    console.log(`    password: "${hash}",`);
    console.log(`  },`);
    console.log("");
  }

  console.log("✅ Selesai! Paste kode di atas ke server.js lalu jalankan: node server.js");
})();
