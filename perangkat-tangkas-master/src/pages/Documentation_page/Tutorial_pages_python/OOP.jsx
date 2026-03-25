import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const OOP = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">OOP (Object-Oriented Programming)</h2>
                  <div className="badge bg-primary fs-6">Intermediate</div>
                </div>
                
                <p className="lead">
                  OOP (Pemrograman Berorientasi Objek) adalah paradigma pemrograman yang
                  berfokus pada objek — yaitu kombinasi antara data (atribut) dan perilaku
                  (method).
                  <br />
                  Dengan OOP, kode menjadi lebih terstruktur, mudah dipelihara, dan dapat
                  digunakan kembali (reusable).
                  <br />
                  Python mendukung OOP sepenuhnya dengan penggunaan class dan object.
                </p>
                
                <h3 className="mt-4">Konsep-Konsep Dasar OOP</h3>
                
                <div className="table-responsive mb-4">
                  <table className="table table-bordered" style={{
                    backgroundColor: 'var(--sidebar-bg)',
                    borderColor: 'var(--sidebar-border)',
                    color: 'var(--text-color)'
                  }}>
                    <thead style={{
                      backgroundColor: theme === 'dark' ? '#2d2d2d' : '#e9ecef'
                    }}>
                      <tr>
                        <th>Nama Konsep</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Class</strong></td>
                        <td>Blueprint (cetak biru) dari objek — berisi atribut &amp; method.</td>
                        <td>
                          <code>
                            class Mobil:
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;pass # membuat class kosong
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Object</strong></td>
                        <td>Instance (bentuk nyata) dari sebuah class.</td>
                        <td>
                          <code>m = Mobil() # membuat objek dari class Mobil</code>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Attribute</strong></td>
                        <td>Variabel yang dimiliki oleh objek atau class.</td>
                        <td>
                          <code>
                            m.warna = "Merah" # menambah atribut pada objek
                            <br />
                            print(m.warna)
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Method</strong></td>
                        <td>Fungsi yang ada di dalam class.</td>
                        <td>
                          <code>
                            class Mobil:
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;def jalan(self):
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Mobil sedang berjalan")
                            <br />
                            m = Mobil()
                            <br />
                            m.jalan() # Output "Mobil sedang berjalan"
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Constructor (__init__)</strong></td>
                        <td>Method khusus yang otomatis dipanggil saat object dibuat.</td>
                        <td>
                          <code>
                            class Mobil:
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, merk):
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.merk = merk
                            <br />
                            m = Mobil("Toyota")
                            <br />
                            print(m.merk) # Output Toyota
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="mt-4">Membuat Class, Object, dan Method</h4>
                <p>
                  Adapun contoh kode membuat class dan object serta method dan memanggilnya
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuat class bernama Mahasiswa
class Mahasiswa:
    def __init__(self, nama, jurusan):
        self.nama = nama
        self.jurusan = jurusan

    def tampilkan_info(self):
        print(f"Nama: {self.nama}")
        print(f"Jurusan: {self.jurusan}")

# Membuat object dari class Mahasiswa
mhs1 = Mahasiswa("Budi", "Informatika")
mhs2 = Mahasiswa("Siti", "Sistem Informasi")

# Memanggil method
mhs1.tampilkan_info()
mhs2.tampilkan_info()

# Output
# Nama: Budi
# Jurusan: Informatika
# Nama: Siti
# Jurusan: Sistem Informasi`}
                />
                 
                <h4 className="mt-4">Menambahkan Method Lain</h4>
                <p>Membuat Method lebih dari satu dalam class</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`class PersegiPanjang:
    def __init__(self, panjang, lebar):
        self.panjang = panjang
        self.lebar = lebar

    def luas(self):
        return self.panjang * self.lebar

    def keliling(self):
        return 2 * (self.panjang + self.lebar)

# Membuat object
pp = PersegiPanjang(5, 3)

print("Luas:", pp.luas())
print("Keliling:", pp.keliling())

# Output
# Luas: 15
# Keliling: 16`}
                />
                 
                <div className="alert alert-info mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Tip:</strong> Parameter <code>self</code> dalam method merujuk pada instance objek itu sendiri. Parameter ini harus ada di setiap method instance.
                </div>

                <CodeBlock title="Latihan Analisis:" subtitle="Coba jalankan kode berikut untuk memahami OOP Python:" theme={theme} code=
                      {`# Program sederhana OOP

class Hewan:
    def __init__(self, nama, jenis):
        self.nama = nama
        self.jenis = jenis

    def suara(self, bunyi):
        print(f"{self.nama} bersuara '{bunyi}'")

# Buat beberapa object dari class Hewan
hewan1 = Hewan("Kucing", "Mamalia")
hewan2 = Hewan("Ayam", "Unggas")

print("=== Informasi Hewan ===")
print(f"Nama: {hewan1.nama}, Jenis: {hewan1.jenis}")
print(f"Nama: {hewan2.nama}, Jenis: {hewan2.jenis}")

hewan1.suara("Meong")
hewan2.suara("Kukuruyuk")`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/modulePackage" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Module & Package
                    </Link>
                    <Link 
                      to="/errorHandeling" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Error Handling <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  )
}