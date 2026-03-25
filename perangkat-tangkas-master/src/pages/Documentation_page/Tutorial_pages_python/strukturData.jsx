import { Link, useOutletContext} from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const StrukturData = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Struktur Data Python</h2>
                  <div className="badge bg-primary fs-6">Menengah</div>
                </div>

                <p className="lead">
                  Struktur data adalah cara mengorganisir dan menyimpan data di komputer agar dapat diakses dan dimodifikasi
                  secara efisien. Python menyediakan beberapa struktur data built-in yang sangat berguna untuk berbagai
                  keperluan pemrograman.
                </p>

                <div
                  className="alert alert-info"
                  style={{
                    backgroundColor: theme === "dark" ? "#1e3a8a" : "#dbeafe",
                    borderColor: theme === "dark" ? "#3730a3" : "#93c5fd",
                    color: theme === "dark" ? "#e0e7ff" : "#1e40af",
                  }}
                >
                  <i className="bi bi-info-circle me-2"></i>
                  Python memiliki 4 struktur data bawaan utama: List, Tuple, Set, dan Dictionary.
                </div>

                <h3 className="mt-4">Jenis-jenis Struktur Data</h3>
                <p>Python memiliki empat struktur data koleksi utama:</p>
                <table className="table table-bordered" style={{ color: "var(--text-color)" }}>
                  <thead>
                    <tr>
                      <th>Struktur Data</th>
                      <th>Ordered</th>
                      <th>Mutable</th>
                      <th>Duplikat</th>
                      <th>Penggunaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>List</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>Koleksi data yang dapat diubah</td>
                    </tr>
                    <tr>
                      <td>Tuple</td>
                      <td>✓</td>
                      <td>✗</td>
                      <td>✓</td>
                      <td>Koleksi data yang tidak dapat diubah</td>
                    </tr>
                    <tr>
                      <td>Set</td>
                      <td>✗</td>
                      <td>✓</td>
                      <td>✗</td>
                      <td>Koleksi data unik tanpa urutan</td>
                    </tr>
                    <tr>
                      <td>Dictionary</td>
                      <td>✓ (Python 3.7+)</td>
                      <td>✓</td>
                      <td>✗ (key)</td>
                      <td>Koleksi data key-value</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="mt-4">1. List (Daftar)</h3>
                <p>
                  List adalah koleksi data yang terurut dan dapat diubah. List memperbolehkan duplikasi nilai.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuat list
buah = ["apel", "pisang", "jeruk"]
angka = [1, 2, 3, 4, 5]
campuran = [1, "dua", 3.0, True]

# Mengakses elemen
print(buah[0])  # Output: apel
print(buah[-1]) # Output: jeruk

# Mengubah elemen
buah[1] = "mangga"
print(buah)     # Output: ['apel', 'mangga', 'jeruk']

# Menambah elemen
buah.append("anggur")
print(buah)     # Output: ['apel', 'mangga', 'jeruk', 'anggur']`}
                />
                 
                <h4>Metode List</h4>
                <table className="table table-bordered" style={{ color: "var(--text-color)" }}>
                  <thead>
                    <tr>
                      <th>Metode</th>
                      <th>Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>append()</code>
                      </td>
                      <td>Menambahkan elemen di akhir list</td>
                    </tr>
                    <tr>
                      <td>
                        <code>insert()</code>
                      </td>
                      <td>Menambahkan elemen pada posisi tertentu</td>
                    </tr>
                    <tr>
                      <td>
                        <code>remove()</code>
                      </td>
                      <td>Menghapus elemen berdasarkan nilai</td>
                    </tr>
                    <tr>
                      <td>
                        <code>pop()</code>
                      </td>
                      <td>Menghapus elemen berdasarkan indeks</td>
                    </tr>
                    <tr>
                      <td>
                        <code>sort()</code>
                      </td>
                      <td>Mengurutkan list</td>
                    </tr>
                    <tr>
                      <td>
                        <code>reverse()</code>
                      </td>
                      <td>Membalik urutan list</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="mt-4">2. Tuple</h3>
                <p>
                  Tuple adalah koleksi data yang terurut dan tidak dapat diubah (immutable). Tuple memperbolehkan duplikasi
                  nilai.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuat tuple
koordinat = (10, 20)
warna = ("merah", "hijau", "biru")

# Mengakses elemen
print(koordinat[0])  # Output: 10
print(warna[1])      # Output: hijau

# Tuple tidak bisa diubah
# koordinat[0] = 15  # Error!

# Unpacking tuple
x, y = koordinat
print(f"x={x}, y={y}")  # Output: x=10, y=20`}
                />
                  
                <h3 className="mt-4">3. Set</h3>
                <p>
                  Set adalah koleksi data yang tidak terurut dan tidak memperbolehkan duplikasi. Set berguna untuk operasi
                  matematika seperti union dan intersection.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuat set
angka = {1, 2, 3, 4, 5}
buah = {"apel", "pisang", "jeruk"}

# Duplikat akan dihapus otomatis
angka_duplikat = {1, 2, 2, 3, 3, 3}
print(angka_duplikat)  # Output: {1, 2, 3}

# Menambah elemen
buah.add("mangga")
print(buah)

# Operasi set
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))        # Output: {1, 2, 3, 4, 5}
print(set1.intersection(set2)) # Output: {3}`}
                />
                
                <h3 className="mt-4">4. Dictionary</h3>
                <p>
                  Dictionary adalah koleksi data key-value yang tidak memperbolehkan key duplikat. Dictionary sangat efisien
                  untuk pencarian data.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuat dictionary
siswa = {
    "nama": "Budi",
    "usia": 17,
    "kelas": "12 IPA"
}

# Mengakses nilai
print(siswa["nama"])      # Output: Budi
print(siswa.get("usia"))  # Output: 17

# Mengubah nilai
siswa["usia"] = 18

# Menambah key-value baru
siswa["alamat"] = "Jakarta"

# Iterasi dictionary
for key, value in siswa.items():
    print(f"{key}: {value}")`}
                />
                  
                <h4>Metode Dictionary</h4>
                <table className="table table-bordered" style={{ color: "var(--text-color)" }}>
                  <thead>
                    <tr>
                      <th>Metode</th>
                      <th>Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>keys()</code>
                      </td>
                      <td>Mengembalikan semua key</td>
                    </tr>
                    <tr>
                      <td>
                        <code>values()</code>
                      </td>
                      <td>Mengembalikan semua value</td>
                    </tr>
                    <tr>
                      <td>
                        <code>items()</code>
                      </td>
                      <td>Mengembalikan pasangan key-value</td>
                    </tr>
                    <tr>
                      <td>
                        <code>get()</code>
                      </td>
                      <td>Mengambil nilai dengan key tertentu</td>
                    </tr>
                    <tr>
                      <td>
                        <code>pop()</code>
                      </td>
                      <td>Menghapus key tertentu</td>
                    </tr>
                    <tr>
                      <td>
                        <code>update()</code>
                      </td>
                      <td>Menambah/mengubah beberapa key-value</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="mt-4">Memilih Struktur Data yang Tepat</h3>
                <div
                  className="border p-3 rounded mb-3"
                  style={{
                    backgroundColor: theme === "dark" ? "#1e3a8a" : "#dbeafe",
                    borderColor: theme === "dark" ? "#3730a3" : "#93c5fd",
                    color: theme === "dark" ? "#e0e7ff" : "#1e40af",
                  }}
                >
                  <h5>Tips:</h5>
                  <ul>
                    <li>
                      <strong>Gunakan List</strong> jika perlu koleksi yang terurut dan dapat diubah
                    </li>
                    <li>
                      <strong>Gunakan Tuple</strong> jika perlu koleksi yang terurut tapi tidak boleh diubah (untuk
                      keamanan data)
                    </li>
                    <li>
                      <strong>Gunakan Set</strong> jika perlu koleksi tanpa duplikat dan sering melakukan operasi
                      matematika
                    </li>
                    <li>
                      <strong>Gunakan Dictionary</strong> jika perlu menyimpan data dengan label/key untuk akses cepat
                    </li>
                  </ul>
                </div>

                <CodeBlock title="Latihan Analisis" subtitle="Coba jalankan kode berikut untuk memahami struktur data Python:" theme={theme} code=
                      {`# Program pengelolaan data siswa
siswa_list = []

# Menambah data siswa
siswa1 = {"nama": "Budi", "nilai": [80, 85, 90]}
siswa2 = {"nama": "Ani", "nilai": [90, 88, 92]}

siswa_list.append(siswa1)
siswa_list.append(siswa2)

# Menampilkan data
for siswa in siswa_list:
    rata_rata = sum(siswa["nilai"]) / len(siswa["nilai"])
    print(f"{siswa['nama']}: Rata-rata = {rata_rata}")

# Program menghapus duplikat dari list
angka_duplikat = [1, 2, 2, 3, 3, 3, 4, 4, 5]
angka_unik = list(set(angka_duplikat))
print(f"Angka unik: {sorted(angka_unik)}")`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: "var(--sidebar-border)" }}>
                  <div className="d-flex justify-content-between">
                    <Link to="/Fungsi" className="btn btn-outline-primary">
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Fungsi
                    </Link>
                    <Link to="/Comprehension" className="btn btn-primary">
                      Selanjutnya: Comprehension <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>  
    </>
  );
};