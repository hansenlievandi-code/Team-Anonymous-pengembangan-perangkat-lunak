import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const ErrorHandeling = () => {
  const { theme } = useOutletContext();

  return(
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Error Handling Python</h2>
                  <div className="badge bg-primary fs-6">Menengah</div>
                </div>
                
                <p className="lead">
                  Error Handling (Penanganan Kesalahan) adalah teknik untuk menangani error
                  yang mungkin terjadi selama eksekusi program. Python menggunakan sistem
                  exception (pengecualian) untuk menangani error secara elegan dan mencegah
                  program berhenti secara tiba-tiba.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Dengan error handling yang baik, program dapat memberikan feedback yang jelas dan melanjutkan eksekusi meskipun terjadi error.
                </div>
                
                <h3 className="mt-4">Mengapa Error Handling Penting?</h3>
                <ul>
                  <li><strong>Mencegah program berhenti secara tiba-tiba</strong> - Program dapat menangani error dengan grace</li>
                  <li><strong>Memberikan feedback yang jelas kepada pengguna</strong> - Pesan error yang informatif</li>
                  <li><strong>Memungkinkan pemulihan dari kondisi error</strong> - Program dapat mencoba alternatif</li>
                  <li><strong>Meningkatkan keandalan dan stabilitas program</strong> - Lebih robust dan reliable</li>
                  <li><strong>Memudahkan debugging dan maintenance</strong> - Error lebih mudah dilacak</li>
                </ul>
                
                <h3 className="mt-4">Try-Except Block</h3>
                <p>
                  Blok <code>try-except</code> digunakan untuk menangkap dan menangani exception.
                </p>
                
                <CodeBlock title="Sintaks Dasar:" theme={theme} code=
                      {`try:
    # Kode yang mungkin menyebabkan error
    result = 10 / 0
except ZeroDivisionError:
    # Kode untuk menangani error
    print("Error: Tidak bisa membagi dengan nol!")`}
                />
                
                <CodeBlock title="Contoh Kode Lengkap:" theme={theme} code=
                      {`# Menangani division by zero
try:
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    print("Error: Tidak bisa membagi dengan nol!")

# Output: Error: Tidak bisa membagi dengan nol!

# Menangani file not found
try:
    with open('file_tidak_ada.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("Error: File tidak ditemukan!")

# Output: Error: File tidak ditemukan!

# Menangani multiple exceptions
try:
    number = int("bukan_angka")
    result = 10 / number
except (ValueError, ZeroDivisionError) as e:
    print(f"Terjadi error: {e}")

# Output: Terjadi error: invalid literal for int() with base 10: 'bukan_angka'`}
                />
                  
                <h3 className="mt-4">Jenis-Jenis Exception Umum</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Exception</th>
                      <th>Deskripsi</th>
                      <th>Contoh Penyebab</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>ZeroDivisionError</code></td>
                      <td>Pembagian dengan nol</td>
                      <td><code>10 / 0</code></td>
                    </tr>
                    <tr>
                      <td><code>ValueError</code></td>
                      <td>Nilai tidak valid untuk operasi</td>
                      <td><code>int("abc")</code></td>
                    </tr>
                    <tr>
                      <td><code>TypeError</code></td>
                      <td>Operasi pada tipe data yang tidak sesuai</td>
                      <td><code>"hello" + 5</code></td>
                    </tr>
                    <tr>
                      <td><code>IndexError</code></td>
                      <td>Index di luar range</td>
                      <td><code>list[10] pada list dengan 5 elemen</code></td>
                    </tr>
                    <tr>
                      <td><code>KeyError</code></td>
                      <td>Key tidak ditemukan dalam dictionary</td>
                      <td><code>dict['key_tidak_ada']</code></td>
                    </tr>
                    <tr>
                      <td><code>FileNotFoundError</code></td>
                      <td>File tidak ditemukan</td>
                      <td><code>open('file_tidak_ada.txt')</code></td>
                    </tr>
                    <tr>
                      <td><code>AttributeError</code></td>
                      <td>Attribute tidak ada pada objek</td>
                      <td><code>obj.method_tidak_ada()</code></td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 className="mt-4">Else dan Finally</h3>
                <p>
                  Blok <code>else</code> dijalankan jika tidak ada exception, dan{" "}
                  <code>finally</code> selalu dijalankan.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Menggunakan else dan finally
def bagi_angka(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Pembagian dengan nol!")
    except TypeError:
        print("Error: Tipe data tidak valid!")
    else:
        print(f"Hasil: {result}")
        return result
    finally:
        print("Blok finally selalu dijalankan")

# Test fungsi
print("Test 1 (berhasil):")
bagi_angka(10, 2)

print("\nTest 2 (error division):")
bagi_angka(10, 0)

print("\nTest 3 (error type):")
bagi_angka(10, "2")

# Output:
# Test 1 (berhasil):
# Hasil: 5.0
# Blok finally selalu dijalankan
# 
# Test 2 (error division):
# Error: Pembagian dengan nol!
# Blok finally selalu dijalankan
# 
# Test 3 (error type):
# Error: Tipe data tidak valid!
# Blok finally selalu dijalankan`}
                />
                
                <h3 className="mt-4">Membuat Custom Exception</h3>
                <p>Kita dapat membuat exception kustom untuk kasus spesifik aplikasi.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Custom exception class
class SaldoTidakCukupError(Exception):
    """Exception ketika saldo tidak cukup"""
    def __init__(self, saldo, jumlah):
        self.saldo = saldo
        self.jumlah = jumlah
        self.pesan = f"Saldo {saldo} tidak cukup untuk penarikan {jumlah}"
        super().__init__(self.pesan)

class NilaiTidakValidError(Exception):
    """Exception ketika nilai tidak valid"""
    pass

# Menggunakan custom exception
class BankAccount:
    def __init__(self, saldo_awal):
        self.saldo = saldo_awal

    def tarik(self, jumlah):
        if jumlah <= 0:
            raise NilaiTidakValidError("Jumlah penarikan harus positif")
        if jumlah > self.saldo:
            raise SaldoTidakCukupError(self.saldo, jumlah)
        self.saldo -= jumlah
        return self.saldo

# Test custom exception
account = BankAccount(1000)

try:
    account.tarik(1500)
except SaldoTidakCukupError as e:
    print(f"Error: {e}")
except NilaiTidakValidError as e:
    print(f"Error: {e}")

# Output: Error: Saldo 1000 tidak cukup untuk penarikan 1500`}
                />
                  
                <h3 className="mt-4">Raise Exception</h3>
                <p>
                  Kita dapat secara manual memunculkan exception menggunakan{" "}
                  <code>raise</code>.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Manual raising exceptions
def validasi_usia(usia):
    if not isinstance(usia, int):
        raise TypeError("Usia harus berupa angka")
    if usia < 0:
        raise ValueError("Usia tidak boleh negatif")
    if usia < 18:
        raise ValueError("Usia harus minimal 18 tahun")
    return True

# Test fungsi validasi
test_cases = [17, 25, -5, "20", 18]

for usia in test_cases:
    try:
        validasi_usia(usia)
        print(f"Usia {usia}: Valid")
    except (TypeError, ValueError) as e:
        print(f"Usia {usia}: Error - {e}")

# Output:
# Usia 17: Error - Usia harus minimal 18 tahun
# Usia 25: Valid
# Usia -5: Error - Usia tidak boleh negatif
# Usia 20: Error - Usia harus berupa angka
# Usia 18: Valid`}
                />
                
                <h3 className="mt-4">Exception Chaining</h3>
                <p>Python mendukung exception chaining untuk melacak rantai exception.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Exception chaining
def proses_file(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            return int(data.strip())
    except FileNotFoundError as e:
        raise ValueError(f"File {filename} tidak dapat diproses") from e

try:
    proses_file('data.txt')
except ValueError as e:
    print(f"Error: {e}")
    print(f"Penyebab: {e.__cause__}")

# Output (jika file tidak ada):
# Error: File data.txt tidak dapat diproses
# Penyebab: [Errno 2] No such file or directory: 'data.txt'`}
                />
                  
                <h3 className="mt-4">Best Practices Error Handling</h3>
                <h4>Do's and Don'ts</h4>
                <div className="row mt-3">
                  <div className="col-md-6 mb-3">
                    <div className="card border-success h-100">
                      <div className="card-header bg-success text-white">
                        <h6 className="mb-0">
                          <i className="bi bi-check-circle me-2"></i> Yang Harus Dilakukan
                        </h6>
                      </div>
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>Tangkap exception spesifik, bukan general</li>
                          <li>Gunakan finally untuk cleanup resources</li>
                          <li>Buat custom exception untuk domain logic</li>
                          <li>Log exception untuk debugging</li>
                          <li>Berikan pesan error yang informatif</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-danger h-100">
                      <div className="card-header bg-danger text-white">
                        <h6 className="mb-0">
                          <i className="bi bi-x-circle me-2"></i> Yang Tidak Dilakukan
                        </h6>
                      </div>
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>Jangan tangkap semua exception dengan except kosong</li>
                          <li>Jangan sembunyikan exception tanpa penanganan</li>
                          <li>Jangan gunakan exception untuk flow control normal</li>
                          <li>Jangan ignore exception dengan pass</li>
                          <li>Jangan expose detail sensitif dalam error message</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CodeBlock title="Latihan:" subtitle="Coba tangani error dalam kasus-kasus berikut:" theme={theme} code=
                      {`# 1. Buat fungsi kalkulator yang menangani division by zero dan invalid input
def kalkulator(a, b, operasi):
    # Implementasi di sini
    pass

# 2. Buat fungsi untuk membaca file JSON dan handle parsing errors
def baca_json_file(filename):
    # Implementasi di sini
    pass

# 3. Buat custom exception untuk validasi email
class EmailTidakValidError(Exception):
    pass

def validasi_email(email):
    # Implementasi di sini
    pass`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/OOP" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: OOP
                    </Link>
                    <Link 
                      to="/Decorator" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Decorator <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};