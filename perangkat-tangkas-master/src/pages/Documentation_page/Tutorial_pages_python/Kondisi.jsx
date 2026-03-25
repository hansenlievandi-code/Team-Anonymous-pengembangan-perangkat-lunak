import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const Kondisi = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Struktur Kontrol Python - Kondisi</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>
                
                <p className="lead">
                  Struktur kontrol kondisi digunakan untuk mengeksekusi blok kode tertentu
                  berdasarkan kondisi yang diberikan. Python menggunakan pernyataan{" "}
                  <code>if</code>, <code>elif</code>, dan <code>else</code> untuk mengontrol
                  alur program.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Kondisi dalam Python bergantung pada indentasi yang benar. Pastikan indentasi konsisten!
                </div>
                
                <h3 className="mt-4">Pernyataan If</h3>
                <p>
                  Pernyataan <code>if</code> digunakan untuk mengeksekusi kode jika kondisi
                  bernilai <code>True</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`x = 10

if x > 5:
    print("x lebih besar dari 5")

# Output: x lebih besar dari 5`}
                />
                 
                <h3 className="mt-4">Pernyataan If-Else</h3>
                <p>
                  Pernyataan <code>if-else</code> digunakan ketika kita ingin mengeksekusi
                  kode alternatif jika kondisi bernilai <code>False</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`usia = 17

if usia >= 18:
    print("Anda sudah dewasa")
else:
    print("Anda masih di bawah umur")

# Output: Anda masih di bawah umur`}
                />
                 
                <h3 className="mt-4">Pernyataan If-Elif-Else</h3>
                <p>
                  Pernyataan <code>if-elif-else</code> digunakan ketika kita memiliki
                  beberapa kondisi yang perlu diperiksa.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`nilai = 85

if nilai >= 90:
    print("Grade: A")
elif nilai >= 80:
    print("Grade: B")
elif nilai >= 70:
    print("Grade: C")
elif nilai >= 60:
    print("Grade: D")
else:
    print("Grade: E")

# Output: Grade: B`}
                />
                 
                <h3 className="mt-4">Kondisi Bersarang (Nested If)</h3>
                <p>
                  Kita dapat memiliki pernyataan <code>if</code> di dalam pernyataan{" "}
                  <code>if</code> lainnya.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`x = 15

if x > 10:
    print("x lebih besar dari 10")
    if x > 20:
        print("dan juga lebih besar dari 20")
    else:
        print("tetapi tidak lebih besar dari 20")

# Output: 
# x lebih besar dari 10
# tetapi tidak lebih besar dari 20`}
                />
                  
                <h3 className="mt-4">Operator Ternary</h3>
                <p>
                  Python juga mendukung operator ternary untuk menulis kondisi dalam satu
                  baris.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`usia = 20
status = "Dewasa" if usia >= 18 else "Anak-anak"
print(status)

# Output: Dewasa`}
                />
                 
                <h3 className="mt-4">Pernyataan Kondisi dengan Operator Logika</h3>
                <p>
                  Kita dapat menggabungkan beberapa kondisi menggunakan operator{" "}
                  <code>and</code>, <code>or</code>, dan <code>not</code>.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered" style={{ 
                    backgroundColor: theme === 'dark' ? '#2d2d2d' : 'white',
                    color: theme === 'dark' ? '#e0e0e0' : 'inherit'
                  }}>
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>and</code></td>
                        <td>True jika kedua kondisi benar</td>
                        <td><code>if x &gt; 5 and x &lt; 10:</code></td>
                      </tr>
                      <tr>
                        <td><code>or</code></td>
                        <td>True jika salah satu kondisi benar</td>
                        <td><code>if x == 5 or x == 10:</code></td>
                      </tr>
                      <tr>
                        <td><code>not</code></td>
                        <td>Membalikkan hasil kondisi</td>
                        <td><code>if not x &gt; 5:</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`username = "admin"
password = "12345"

if username == "admin" and password == "12345":
    print("Login berhasil")
else:
    print("Login gagal")

# Output: Login berhasil`}
                />
                
                <h3 className="mt-4">Pernyataan Pass</h3>
                <p>
                  Pernyataan <code>pass</code> digunakan sebagai placeholder ketika kita
                  tidak ingin mengeksekusi kode apapun dalam blok kondisi.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`x = 5

if x > 10:
    pass # Akan diisi nanti
else:
    print("x tidak lebih besar dari 10")

# Output: x tidak lebih besar dari 10`}
                />
                 
                <div className="alert alert-warning mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Latihan:</strong> Coba jalankan kode berikut untuk memahami struktur kontrol kondisi
                </div>

                <CodeBlock title="Latihan Analisis:" theme={theme} code=
{`# Program penentu bilangan ganjil/genap
angka = int(input("Masukkan sebuah angka: "))

if angka % 2 == 0:
    print(f"{angka} adalah bilangan genap")
else:
    print(f"{angka} adalah bilangan ganjil")

# Program penilaian siswa
nilai = float(input("Masukkan nilai siswa: "))

if nilai >= 90:
    print("Sangat Baik")
elif nilai >= 80:
    print("Baik")
elif nilai >= 70:
    print("Cukup")
elif nilai >= 60:
    print("Kurang")
else:
    print("Sangat Kurang")`}
                />
                 
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/Operator" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Operator
                    </Link>
                    <Link 
                      to="/Perulangan" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Perulangan <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  )
}