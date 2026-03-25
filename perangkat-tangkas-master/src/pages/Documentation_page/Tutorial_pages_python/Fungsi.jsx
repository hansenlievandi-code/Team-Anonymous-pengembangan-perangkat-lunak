import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const Fungsi = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Fungsi Python</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>
                
                <p className="lead">
                  Fungsi adalah blok kode yang terorganisir dan dapat digunakan kembali
                  untuk melakukan sebuah tindakan tertentu. Fungsi membantu memecah program
                  menjadi bagian-bagian kecil yang lebih modular dan mudah dikelola.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Fungsi membuat kode lebih mudah dibaca, digunakan kembali, dan di-debug.
                </div>
                
                <h3 className="mt-4">Mendefinisikan Fungsi</h3>
                <p>
                  Fungsi didefinisikan menggunakan kata kunci <code>def</code> diikuti oleh
                  nama fungsi dan tanda kurung <code>()</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Mendefinisikan fungsi sederhana
def sapa():
    print("Halo, selamat datang!")

# Memanggil fungsi
sapa()

# Output:
# Halo, selamat welcome!`}
                />
                  
                <h3 className="mt-4">Parameter dan Argumen</h3>
                <p>
                  Fungsi dapat menerima parameter untuk memproses data yang berbeda-beda.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered" style={{ 
                    backgroundColor: theme === 'dark' ? '#2d2d2d' : 'white',
                    color: theme === 'dark' ? '#e0e0e0' : 'inherit'
                  }}>
                    <thead>
                      <tr>
                        <th>Jenis Parameter</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Parameter Posisi</td>
                        <td>Parameter yang harus diisi sesuai urutan</td>
                        <td><code>def tambah(a, b):</code></td>
                      </tr>
                      <tr>
                        <td>Parameter Default</td>
                        <td>Parameter dengan nilai default</td>
                        <td><code>def sapa(nama="Guest"):</code></td>
                      </tr>
                      <tr>
                        <td>Parameter Keyword</td>
                        <td>Parameter yang dipanggil dengan nama</td>
                        <td><code>tambah(b=5, a=3)</code></td>
                      </tr>
                      <tr>
                        <td>Parameter Arbitrer</td>
                        <td>Parameter dengan jumlah tidak tetap</td>
                        <td><code>def cetak(*args):</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Fungsi dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}!")

# Fungsi dengan multiple parameter
def tambah(a, b):
    return a + b

# Memanggil fungsi
sapa_nama("Budi")
hasil = tambah(5, 3)
print(f"5 + 3 = {hasil}")

# Output:
# Halo, Budi!
# 5 + 3 = 8`}
                />
                  
                <h3 className="mt-4">Return Value</h3>
                <p>
                  Fungsi dapat mengembalikan nilai menggunakan pernyataan{" "}
                  <code>return</code>.
                </p>
                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Fungsi dengan return value
def kuadrat(angka):
    return angka ** 2

def cek_genap(angka):
    if angka % 2 == 0:
        return True
    else:
        return False

# Menggunakan fungsi
hasil_kuadrat = kuadrat(4)
status_genap = cek_genap(7)

print(f"Kuadrat dari 4 adalah {hasil_kuadrat}")
print(f"Apakah 7 genap? {status_genap}")

# Output:
# Kuadrat dari 4 adalah 16
# Apakah 7 genap? False`}
                />
                
                <h3 className="mt-4">Parameter Default</h3>
                <p>Fungsi dapat memiliki parameter dengan nilai default.</p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Fungsi dengan parameter default
def sapa(nama="Guest", waktu="pagi"):
    print(f"Selamat {waktu}, {nama}!")

# Memanggil dengan berbagai cara
sapa()
sapa("Budi")
sapa("Ani", "siang")
sapa(waktu="malam", nama="Citra")

# Output:
# Selamat pagi, Guest!
# Selamat pagi, Budi!
# Selamat siang, Ani!
# Selamat malam, Citra!`}
                />
                 
                <h3 className="mt-4">Args dan Kwargs</h3>
                <p>
                  Python mendukung parameter arbitrer untuk menerima jumlah argumen yang
                  tidak tetap.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# *args untuk parameter posisi arbitrer
def jumlahkan(*args):
    total = 0
    for angka in args:
        total += angka
    return total

# **kwargs untuk parameter keyword arbitrer
def cetak_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Menggunakan fungsi
hasil1 = jumlahkan(1, 2, 3)
hasil2 = jumlahkan(10, 20, 30, 40)

cetak_info(nama="Budi", usia=25, kota="Jakarta")

# Output:
# 1 + 2 + 3 = 6
# 10 + 20 + 30 + 40 = 100
# nama: Budi
# usia: 25
# kota: Jakarta`}
                />
                 
                <h3 className="mt-4">Lambda Function</h3>
                <p>
                  Lambda function adalah fungsi anonim yang dapat didefinisikan dalam satu
                  baris.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Lambda function sederhana
kuadrat = lambda x: x ** 2
tambah = lambda a, b: a + b

# Menggunakan lambda function
print(f"Kuadrat dari 5: {kuadrat(5)}")
print(f"10 + 15: {tambah(10, 15)}")

# Lambda dalam fungsi built-in
numbers = [1, 2, 3, 4, 5]
numbers_kuadrat = list(map(lambda x: x**2, numbers))
numbers_genap = list(filter(lambda x: x % 2 == 0, numbers))

print(f"Numbers: {numbers}")
print(f"Numbers kuadrat: {numbers_kuadrat}")
print(f"Numbers genap: {numbers_genap}")

# Output:
# Kuadrat dari 5: 25
# 10 + 15: 25
# Numbers: [1, 2, 3, 4, 5]
# Numbers kuadrat: [1, 4, 9, 16, 25]
# Numbers genap: [2, 4]`}
                />
                
                <h3 className="mt-4">Scope Variabel</h3>
                <p>
                  Python memiliki beberapa jenis scope variabel: local, enclosing, global,
                  dan built-in (LEGB).
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Variabel global
nama_global = "Python"

def contoh_scope():
    # Variabel local
    nama_local = "Lokal"
    print(f"Di dalam fungsi: {nama_local}")
    print(f"Variabel global: {nama_global}")

contoh_scope()
print(f"Di luar fungsi: {nama_global}")
# print(nama_local) # Error: nama_local tidak terdefinisi

# Output:
# Di dalam fungsi: Lokal
# Variabel global: Python
# Di luar fungsi: Python`}
                />
                 
                <h3 className="mt-4">Docstring</h3>
                <p>
                  Docstring digunakan untuk mendokumentasikan fungsi dan dapat diakses
                  menggunakan <code>help()</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`def hitung_luas_persegi_panjang(panjang, lebar):
    """
    Menghitung luas persegi panjang.

    Parameters:
    panjang (float): Panjang persegi panjang
    lebar (float): Lebar persegi panjang

    Returns:
    float: Luas persegi panjang
    """
    return panjang * lebar

# Mengakses docstring
print(hitung_luas_persegi_panjang.__doc__)
# atau
# help(hitung_luas_persegi_panjang)

# Menggunakan fungsi
luas = hitung_luas_persegi_panjang(5, 3)
print(f"Luas persegi panjang: {luas}")

# Output docstring dan hasil:
# Menghitung luas persegi panjang.
# ...
# Luas persegi panjang: 15`}
                />
                 
                <div className="alert alert-warning mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Latihan:</strong> Coba jalankan kode berikut untuk memahami fungsi Python
                </div>

                <CodeBlock title="Latihan Analisis:" theme={theme} code=
{`# 1. Fungsi untuk menghitung faktorial
def faktorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * faktorial(n-1)

print(f"Faktorial 5: {faktorial(5)}")

# 2. Fungsi untuk mengecek bilangan prima
def is_prima(angka):
    if angka < 2:
        return False
    for i in range(2, int(angka**0.5) + 1):
        if angka % i == 0:
            return False
    return True

print(f"Apakah 17 prima? {is_prima(17)}")

# 3. Fungsi dengan lambda
pangkat = lambda x, y: x ** y
print(f"2 pangkat 8: {pangkat(2, 8)}")`}
                />
                 
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/Perulangan" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Perulangan
                    </Link>
                    <Link 
                      to="/strukturData" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Struktur Data <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};