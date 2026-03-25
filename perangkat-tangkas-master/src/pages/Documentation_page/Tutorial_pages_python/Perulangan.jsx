import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const Perulangan = () => {
  const { theme } = useOutletContext();
  
  return (
    <> 
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Perulangan Python</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>
                
                <p className="lead">
                  Perulangan (looping) digunakan untuk mengeksekusi blok kode secara
                  berulang-ulang selama kondisi tertentu terpenuhi. Python memiliki dua
                  jenis perulangan utama: <code>for</code> dan <code>while</code>.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Perulangan sangat penting untuk mengotomatisasi tugas berulang dan memproses data koleksi.
                </div>
                
                <h3 className="mt-4">Perulangan For</h3>
                <p>
                  Perulangan <code>for</code> digunakan untuk mengiterasi melalui sebuah
                  sequence (seperti list, tuple, string) atau objek iterable lainnya.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Iterasi melalui list
buah = ["apel", "pisang", "jeruk"]
for item in buah:
    print(item)

# Output:
# apel
# pisang
# jeruk`}
                />
                 
                <h4 className="mt-4">Fungsi range()</h4>
                <p>
                  Fungsi <code>range()</code> digunakan untuk menghasilkan sequence angka,
                  sangat berguna dalam perulangan for.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered" style={{ 
                    backgroundColor: theme === 'dark' ? '#2d2d2d' : 'white',
                    color: theme === 'dark' ? '#e0e0e0' : 'inherit'
                  }}>
                    <thead>
                      <tr>
                        <th>Penggunaan</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>range(stop)</code></td>
                        <td>Menghasilkan angka dari 0 hingga stop-1</td>
                        <td><code>range(5) → 0,1,2,3,4</code></td>
                      </tr>
                      <tr>
                        <td><code>range(start, stop)</code></td>
                        <td>Menghasilkan angka dari start hingga stop-1</td>
                        <td><code>range(2,6) → 2,3,4,5</code></td>
                      </tr>
                      <tr>
                        <td><code>range(start, stop, step)</code></td>
                        <td>Menghasilkan angka dari start hingga stop-1 dengan step</td>
                        <td><code>range(1,10,2) → 1,3,5,7,9</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Menggunakan range()
for i in range(5):
    print(f"Perulangan ke-{i}")

# Output:
# Perulangan ke-0
# Perulangan ke-1
# Perulangan ke-2
# Perulangan ke-3
# Perulangan ke-4`}
                />
                 
                <h3 className="mt-4">Perulangan While</h3>
                <p>
                  Perulangan <code>while</code> mengeksekusi blok kode selama kondisi
                  bernilai <code>True</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Perulangan while sederhana
counter = 1
while counter <= 5:
    print(f"Counter: {counter}")
    counter += 1

# Output:
# Counter: 1
# Counter: 2
# Counter: 3
# Counter: 4
# Counter: 5`}
                />
                  
                <h3 className="mt-4">Pernyataan Break dan Continue</h3>
                <h4>Break</h4>
                <p>
                  Pernyataan <code>break</code> digunakan untuk menghentikan perulangan
                  secara paksa.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Menggunakan break
for i in range(10):
    if i == 5:
        break
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4`}
                />
                 
                <h4>Continue</h4>
                <p>
                  Pernyataan <code>continue</code> digunakan untuk melewati iterasi saat ini
                  dan melanjutkan ke iterasi berikutnya.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Menggunakan continue
for i in range(5):
    if i == 2:
        continue
    print(i)

# Output:
# 0
# 1
# 3
# 4`}
                />
                 
                <h3 className="mt-4">Perulangan Bersarang (Nested Loop)</h3>
                <p>Kita dapat memiliki perulangan di dalam perulangan lainnya.</p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Perulangan bersarang
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")

# Output:
# i=0, j=0
# i=0, j=1
# i=1, j=0
# i=1, j=1
# i=2, j=0
# i=2, j=1`}
                />
                 
                <h3 className="mt-4">Else dalam Perulangan</h3>
                <p>
                  Python memungkinkan penggunaan <code>else</code> dalam perulangan, yang
                  akan dieksekusi ketika perulangan selesai secara normal (tidak dihentikan
                  oleh <code>break</code>).
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Else dalam for loop
for i in range(3):
    print(i)
else:
    print("Perulangan selesai")

# Output:
# 0
# 1
# 2
# Perulangan selesai`}
                />
                  
                <div className="alert alert-warning mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Latihan:</strong> Coba jalankan kode berikut untuk memahami perulangan Python
                </div>

                <CodeBlock title="Latihan Analisis:" theme={theme} code=
{`# Program menampilkan bilangan genap
print("Bilangan genap dari 1-10:")
for i in range(1, 11):
    if i % 2 == 0:
        print(i, end=" ")

# Program menghitung faktorial
angka = 5
faktorial = 1
for i in range(1, angka + 1):
    faktorial *= i
print(f"\\nFaktorial dari {angka} adalah {faktorial}")

# Program pencarian dalam list
numbers = [10, 20, 30, 40, 50]
cari = 30
for num in numbers:
    if num == cari:
        print(f"Angka {cari} ditemukan!")
        break
else:
    print(f"Angka {cari} tidak ditemukan!")`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/Kondisi" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Kondisi
                    </Link>
                    <Link 
                      to="/Fungsi" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Fungsi <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  )
}