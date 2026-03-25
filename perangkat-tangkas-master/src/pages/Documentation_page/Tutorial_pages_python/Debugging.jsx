import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const Debugging = () => {
  const { theme } = useOutletContext();

  return (
    <>
      <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Debugging Python</h2>
                  <div className="badge bg-primary fs-6">Troubleshooting</div>
                </div>

                <p className="lead">
                  Debugging adalah proses menemukan dan memperbaiki bug
                  (kesalahan) dalam kode Python. Python menyediakan debugger
                  bawaan called <code>pdb</code> yang membantu dalam proses
                  debugging.
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
                  Debugger memungkinkan Anda untuk menjalankan kode langkah demi
                  langkah, menghentikan eksekusi pada breakpoints, dan memeriksa
                  nilai variabel selama eksekusi.
                </div>

                <h3 className="mt-4">Apa itu Debugger?</h3>
                <p>
                  Debugger adalah program yang dapat digunakan untuk menguji dan
                  mendebug program lainnya. Debugger memungkinkan Anda untuk:
                </p>
                <ul>
                  <li>
                    <strong>Menjalankan kode langkah demi langkah</strong> -
                    Melihat eksekusi baris per baris
                  </li>
                  <li>
                    <strong>Menghentikan eksekusi pada titik tertentu</strong> -
                    Menggunakan breakpoints
                  </li>
                  <li>
                    <strong>Memeriksa nilai variabel selama eksekusi</strong> -
                    Melihat perubahan nilai secara real-time
                  </li>
                  <li>
                    <strong>Menganalisis alur program</strong> - Memahami
                    jalannya program
                  </li>
                </ul>

                <h3 className="mt-4">Debugger Bawaan Python - pdb</h3>
                <p>
                  Python memiliki modul <code>pdb</code> yang merupakan debugger
                  interaktif untuk program Python.
                </p>

                <CodeBlock title="Contoh Penggunaan pdb:" theme={theme} code=
                      {`import pdb

def calculate_average(numbers):
    pdb.set_trace() # Set breakpoint
    total = sum(numbers)
    count = len(numbers)
    average = total / count
    return average

# Test the function
numbers = [10, 20, 30, 40, 50]
result = calculate_average(numbers)
print(f"Average: {result}")`}
                />
                  
                <h3 className="mt-4">Perintah pdb yang Umum</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Perintah</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>h</code> atau <code>help</code>
                        </td>
                        <td>Menampilkan daftar perintah yang tersedia</td>
                        <td>
                          <code>h</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>n</code> atau <code>next</code>
                        </td>
                        <td>Menjalankan baris berikutnya</td>
                        <td>
                          <code>n</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>s</code> atau <code>step</code>
                        </td>
                        <td>Masuk ke dalam fungsi</td>
                        <td>
                          <code>s</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>c</code> atau <code>continue</code>
                        </td>
                        <td>
                          Melanjutkan eksekusi sampai breakpoint berikutnya
                        </td>
                        <td>
                          <code>c</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>p</code> atau <code>print</code>
                        </td>
                        <td>Mencetak nilai variabel</td>
                        <td>
                          <code>p variable_name</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>l</code> atau <code>list</code>
                        </td>
                        <td>Menampilkan kode sekitar baris saat ini</td>
                        <td>
                          <code>l</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>q</code> atau <code>quit</code>
                        </td>
                        <td>Keluar dari debugger</td>
                        <td>
                          <code>q</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>w</code> atau <code>where</code>
                        </td>
                        <td>Menampilkan stack trace</td>
                        <td>
                          <code>w</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-4">Contoh Debugging dengan pdb</h3>

                <CodeBlock title="Kode dengan Bug:" theme={theme} code=
                      {`def divide_numbers(a, b):
    result = a / b
    return result

# Test dengan input yang menyebabkan error
print(divide_numbers(10, 2)) # Output: 5.0
print(divide_numbers(10, 0)) # Error: Division by zero`}
                />
                
                <CodeBlock title="Debugging dengan pdb:" theme={theme} code=
                      {`import pdb

def divide_numbers(a, b):
    pdb.set_trace() # Debugger akan berhenti di sini
    result = a / b
    return result

# Saat debugger aktif, Anda dapat:
# - Melihat nilai a dan b: p a, p b
# - Melanjutkan eksekusi: c
# - Melihat tipe data: p type(a)
# - Mengecek apakah b adalah nol: p b == 0`}
                />
                
                <h3 className="mt-4">Metode Debugging Lainnya</h3>

                <h4>1. Print Statement Debugging</h4>
                <p>
                  Cara sederhana dengan menambahkan print statement untuk
                  melacak nilai variabel.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`def calculate_discount(price, discount_rate):
    print(f"DEBUG: price={price}, discount_rate={discount_rate}")
    discount = price * discount_rate
    print(f"DEBUG: discount={discount}")
    final_price = price - discount
    print(f"DEBUG: final_price={final_price}")
    return final_price

result = calculate_discount(100, 0.2)
print(f"Final price: {result}")`}
                />
        
                <h4>2. Assert Statement</h4>
                <p>
                  Menggunakan <code>assert</code> untuk memeriksa kondisi selama
                  development.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`def calculate_area(length, width):
    assert length > 0, "Length must be positive"
    assert width > 0, "Width must be positive"
    area = length * width
    return area

# Test cases
print(calculate_area(5, 3)) # Output: 15
print(calculate_area(-5, 3)) # AssertionError: Length must be positive`}
                />
                  
                <h4>3. Logging</h4>
                <p>
                  Menggunakan modul <code>logging</code> untuk debugging yang
                  lebih terstruktur.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`import logging

# Setup logging
logging.basicConfig(level=logging.DEBUG)

def complex_calculation(x, y):
    logging.debug(f"Starting calculation with x={x}, y={y}")
    result = x ** y
    logging.debug(f"Calculation result: {result}")
    return result

complex_calculation(2, 8)`}
                />
                 
                <h3 className="mt-4">Breakpoints di Editor Modern</h3>
                <p>
                  Editor seperti VS Code, PyCharm, dan lainnya memiliki debugger
                  visual yang memudahkan debugging.
                </p>

                <div
                  className="alert alert-info"
                  style={{
                    backgroundColor: theme === "dark" ? "#1e3a8a" : "#dbeafe",
                    borderColor: theme === "dark" ? "#3730a3" : "#93c5fd",
                    color: theme === "dark" ? "#e0e7ff" : "#1e40af",
                  }}
                >
                  <i className="bi bi-lightbulb me-2"></i>
                  <strong>💡 Tips Debugging:</strong>
                  <ul className="mb-0 mt-2">
                    <li>
                      <strong>Mulai dengan print statements</strong> untuk
                      masalah sederhana
                    </li>
                    <li>
                      <strong>Gunakan pdb</strong> untuk masalah yang lebih
                      kompleks
                    </li>
                    <li>
                      <strong>Set breakpoints strategis</strong> di area kode
                      yang mencurigakan
                    </li>
                    <li>
                      <strong>Periksa tipe data variabel</strong> dengan{" "}
                      <code>type()</code>
                    </li>
                    <li>
                      <strong>Gunakan try-except</strong> untuk menangkap dan
                      menganalisis exceptions
                    </li>
                    <li>
                      <strong>Test dengan input kecil</strong> yang mudah
                      dilacak
                    </li>
                    <li>
                      <strong>Baca error messages dengan teliti</strong> -
                      mereka memberikan petunjuk penting
                    </li>
                  </ul>
                </div>

                <div
                  className="alert alert-warning"
                  style={{
                    backgroundColor: theme === "dark" ? "#78350f" : "#fef3c7",
                    borderColor: theme === "dark" ? "#92400e" : "#fbbf24",
                    color: theme === "dark" ? "#fde68a" : "#92400e",
                  }}
                >
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Latihan Debugging:</strong> Coba debug kode berikut
                  yang mengandung beberapa bug
                </div>

                <CodeBlock title="Latihan Debugging:" theme={theme} code=
                      {`# Kode dengan bug
def find_max(numbers):
    max_num = 0
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# Test cases
print(find_max([1, 5, 3, 9, 2])) # Seharusnya 9
print(find_max([-1, -5, -3])) # Bug: mengembalikan 0, seharusnya -1

# Gunakan pdb untuk debug:
# import pdb; pdb.set_trace()
# Periksa nilai max_num di setiap iterasi`}
                />

                <div
                  className="alert alert-warning"
                  style={{
                    backgroundColor: theme === "dark" ? "#78350f" : "#fef3c7",
                    borderColor: theme === "dark" ? "#92400e" : "#fbbf24",
                    color: theme === "dark" ? "#fde68a" : "#92400e",
                  }}
                >
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>⚠️ Penting:</strong> Selalu hapus atau comment out
                  debug statements (<code>pdb.set_trace()</code>,{" "}
                  <code>print</code> debugging) sebelum deploy ke production!
                </div>

                <div
                  className="mt-5 pt-4 border-top"
                  style={{ borderColor: "var(--sidebar-border)" }}
                >
                  <div className="d-flex justify-content-between">
                    <Link to="/Testing" className="btn btn-outline-primary">
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya:
                      Testing
                    </Link>
                    <Link to="/typeHints" className="btn btn-primary">
                      Selanjutnya: Type Hints{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};
