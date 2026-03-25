import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const Operator = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="operators">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Operator Python</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>
                
                <p className="lead">
                  Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada
                  variabel dan nilai. Python memiliki berbagai jenis operator yang
                  dikelompokkan berdasarkan fungsinya.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Operator memungkinkan Anda melakukan operasi matematika, perbandingan, logika, dan lainnya pada data.
                </div>
                
                <h3 className="mt-4">Jenis-jenis Operator</h3>
                
                <h4 className="mt-3">1. Operator Aritmatika</h4>
                <p>Digunakan untuk melakukan operasi matematika dasar.</p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Nama</th>
                        <th>Contoh</th>
                        <th>Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>+</code></td>
                        <td>Penjumlahan</td>
                        <td><code>10 + 3</code></td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td><code>-</code></td>
                        <td>Pengurangan</td>
                        <td><code>10 - 3</code></td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td><code>*</code></td>
                        <td>Perkalian</td>
                        <td><code>10 * 3</code></td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td><code>/</code></td>
                        <td>Pembagian</td>
                        <td><code>10 / 3</code></td>
                        <td>3.333...</td>
                      </tr>
                      <tr>
                        <td><code>%</code></td>
                        <td>Modulus</td>
                        <td><code>10 % 3</code></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td><code>**</code></td>
                        <td>Eksponen</td>
                        <td><code>10 ** 3</code></td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <td><code>//</code></td>
                        <td>Pembagian Bulat</td>
                        <td><code>10 // 3</code></td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`a = 10
b = 3

print("a + b =", a + b)   # Output: 13
print("a - b =", a - b)   # Output: 7
print("a * b =", a * b)   # Output: 30
print("a / b =", a / b)   # Output: 3.3333333333333335
print("a % b =", a % b)   # Output: 1
print("a ** b =", a ** b) # Output: 1000
print("a // b =", a // b) # Output: 3`}
                />
                 
                <h4 className="mt-4">2. Operator Perbandingan</h4>
                <p>
                  Digunakan untuk membandingkan dua nilai, menghasilkan nilai boolean (True
                  atau False).
                </p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Nama</th>
                        <th>Contoh</th>
                        <th>Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>==</code></td>
                        <td>Sama dengan</td>
                        <td><code>10 == 3</code></td>
                        <td><code>False</code></td>
                      </tr>
                      <tr>
                        <td><code>!=</code></td>
                        <td>Tidak sama dengan</td>
                        <td><code>10 != 3</code></td>
                        <td><code>True</code></td>
                      </tr>
                      <tr>
                        <td><code>&gt;</code></td>
                        <td>Lebih besar dari</td>
                        <td><code>10 &gt; 3</code></td>
                        <td><code>True</code></td>
                      </tr>
                      <tr>
                        <td><code>&lt;</code></td>
                        <td>Lebih kecil dari</td>
                        <td><code>10 &lt; 3</code></td>
                        <td><code>False</code></td>
                      </tr>
                      <tr>
                        <td><code>&gt;=</code></td>
                        <td>Lebih besar atau sama dengan</td>
                        <td><code>10 &gt;= 3</code></td>
                        <td><code>True</code></td>
                      </tr>
                      <tr>
                        <td><code>&lt;=</code></td>
                        <td>Lebih kecil atau sama dengan</td>
                        <td><code>10 &lt;= 3</code></td>
                        <td><code>False</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="mt-4">3. Operator Penugasan</h4>
                <p>Digunakan untuk memberikan nilai ke variabel.</p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Contoh</th>
                        <th>Ekuivalen</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>=</code></td>
                        <td><code>x = 5</code></td>
                        <td><code>x = 5</code></td>
                        <td>Penugasan dasar</td>
                      </tr>
                      <tr>
                        <td><code>+=</code></td>
                        <td><code>x += 3</code></td>
                        <td><code>x = x + 3</code></td>
                        <td>Penambahan dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>-=</code></td>
                        <td><code>x -= 3</code></td>
                        <td><code>x = x - 3</code></td>
                        <td>Pengurangan dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>*=</code></td>
                        <td><code>x *= 3</code></td>
                        <td><code>x = x * 3</code></td>
                        <td>Perkalian dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>/=</code></td>
                        <td><code>x /= 3</code></td>
                        <td><code>x = x / 3</code></td>
                        <td>Pembagian dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>%=</code></td>
                        <td><code>x %= 3</code></td>
                        <td><code>x = x % 3</code></td>
                        <td>Modulus dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>//=</code></td>
                        <td><code>x //= 3</code></td>
                        <td><code>x = x // 3</code></td>
                        <td>Pembagian bulat dan penugasan</td>
                      </tr>
                      <tr>
                        <td><code>**=</code></td>
                        <td><code>x **= 3</code></td>
                        <td><code>x = x ** 3</code></td>
                        <td>Eksponen dan penugasan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="mt-4">4. Operator Logika</h4>
                <p>Digunakan untuk menggabungkan pernyataan kondisional.</p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                        <th>Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>and</code></td>
                        <td>Mengembalikan True jika kedua pernyataan benar</td>
                        <td><code>x &lt; 5 and x &lt; 10</code></td>
                        <td><code>True jika x &lt; 5</code></td>
                      </tr>
                      <tr>
                        <td><code>or</code></td>
                        <td>Mengembalikan True jika salah satu pernyataan benar</td>
                        <td><code>x &lt; 5 or x &lt; 4</code></td>
                        <td><code>True jika x &lt; 5</code></td>
                      </tr>
                      <tr>
                        <td><code>not</code></td>
                        <td>Membalikkan hasil, mengembalikan False jika hasilnya benar</td>
                        <td><code>not(x &lt; 5 and x &lt; 10)</code></td>
                        <td><code>False jika x &lt; 5</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="mt-4">5. Operator Keanggotaan</h4>
                <p>
                  Digunakan untuk menguji apakah suatu urutan disajikan dalam suatu objek.
                </p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                        <th>Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>in</code></td>
                        <td>Mengembalikan True jika nilai yang ditentukan ada dalam objek</td>
                        <td><code>x in y</code></td>
                        <td><code>True jika x ditemukan dalam y</code></td>
                      </tr>
                      <tr>
                        <td><code>not in</code></td>
                        <td>
                          Mengembalikan True jika nilai yang ditentukan tidak ada dalam objek
                        </td>
                        <td><code>x not in y</code></td>
                        <td><code>True jika x tidak ditemukan dalam y</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="mt-4">6. Operator Identitas</h4>
                <p>
                  Digunakan untuk membandingkan objek, bukan jika mereka sama, tetapi jika
                  mereka sebenarnya objek yang sama, dengan lokasi memori yang sama.
                </p>
                
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                        <th>Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>is</code></td>
                        <td>Mengembalikan True jika kedua variabel adalah objek yang sama</td>
                        <td><code>x is y</code></td>
                        <td><code>True jika x dan y merujuk objek yang sama</code></td>
                      </tr>
                      <tr>
                        <td><code>is not</code></td>
                        <td>Mengembalikan True jika kedua variabel bukan objek yang sama</td>
                        <td><code>x is not y</code></td>
                        <td><code>True jika x dan y tidak merujuk objek yang sama</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodeBlock title="Latihan Analisis:" subtitle="Coba jalankan kode berikut untuk memahami operator Python:" theme={theme} code=
                      {`# Operator Aritmatika
a = 15
b = 4
print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)
print("a % b =", a % b)
print("a // b =", a // b)
print("a ** b =", a ** b)

# Operator Perbandingan
print("\\nOperator Perbandingan:")
print("a == b :", a == b)
print("a != b :", a != b)
print("a > b :", a > b)
print("a < b :", a < b)
print("a >= b :", a >= b)
print("a <= b :", a <= b)

# Operator Logika
print("\\nOperator Logika:")
x = True
y = False
print("x and y :", x and y)
print("x or y :", x or y)
print("not x :", not x)

# Operator Keanggotaan
print("\\nOperator Keanggotaan:")
buah = ["apel", "jeruk", "pisang"]
print("'apel' in buah :", 'apel' in buah)
print("'mangga' in buah :", 'mangga' in buah)
print("'mangga' not in buah :", 'mangga' not in buah)`}
                />
                
                <div className="alert alert-warning mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Perhatian:</strong> Operator <code>==</code> membandingkan nilai, sedangkan operator <code>is</code> membandingkan identitas objek (lokasi memori).
                </div>
                
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/VariabelTipeData" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Variabel & Tipe Data
                    </Link>
                    <Link 
                      to="/Kondisi" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Kondisi <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};