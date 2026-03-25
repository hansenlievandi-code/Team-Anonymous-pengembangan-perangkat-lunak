import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const Decorator = () => {
  const { theme } = useOutletContext();

  return (
    <>
      <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Decorator Python</h2>
                  <div className="badge bg-primary fs-6">Lanjutan</div>
                </div>
                
                <p className="lead">
                  Decorator adalah fitur Python yang memungkinkan kita untuk memodifikasi
                  atau memperluas perilaku fungsi atau metode tanpa mengubah kode aslinya
                  secara permanen. Decorator pada dasarnya adalah fungsi yang menerima
                  fungsi sebagai argumen dan mengembalikan fungsi baru.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Decorator adalah contoh yang bagus dari "first-class functions" di Python, di mana fungsi dapat diteruskan sebagai argumen dan dikembalikan sebagai nilai.
                </div>
                
                <h3 className="mt-4">Mengapa Decorator Penting?</h3>
                <ul>
                  <li><strong>Meningkatkan reusability kode</strong> - Dapat digunakan kembali di berbagai fungsi</li>
                  <li><strong>Memisahkan concern (separation of concerns)</strong> - Logika tambahan dipisahkan dari fungsi utama</li>
                  <li><strong>Menerapkan pola decorator untuk menambah fungsionalitas</strong> - Tanpa mengubah struktur asli</li>
                  <li><strong>Mengurangi duplikasi kode</strong> - Satu decorator untuk banyak fungsi</li>
                  <li><strong>Memudahkan maintenance dan testing</strong> - Decorator dapat diuji secara terpisah</li>
                </ul>
                
                <h3 className="mt-4">Function Decorator</h3>
                <p>
                  Decorator fungsi adalah cara paling umum untuk menggunakan decorator di
                  Python.
                </p>
                
                  <CodeBlock title="Sintaks Dasar:" theme={theme} code=
                     {`def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        # Kode sebelum eksekusi fungsi asli
        result = original_function(*args, **kwargs)
        # Kode setelah eksekusi fungsi asli
        return result
    return wrapper_function

@decorator_function
def display():
    print("Fungsi display dijalankan")`}
                    />

                  <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Decorator sederhana untuk menambahkan logging
def log_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Memanggil fungsi {func.__name__} dengan args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"Fungsi {func.__name__} selesai dijalankan")
        return result
    return wrapper

@log_decorator
def tambah(a, b):
    return a + b

@log_decorator
def sapa(nama):
    return f"Halo, {nama}!"

# Test decorator
print(tambah(5, 3))
print(sapa("Budi"))

# Output:
# Memanggil fungsi tambah dengan args: (5, 3), kwargs: {}
# Fungsi tambah selesai dijalankan
# 8
# Memanggil fungsi sapa dengan args: ('Budi',), kwargs: {}
# Fungsi sapa selesai dijalankan
# Halo, Budi!`}
                    />
                
                <h3 className="mt-4">Jenis-Jenis Decorator Umum</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Decorator</th>
                      <th>Deskripsi</th>
                      <th>Contoh Penggunaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>@staticmethod</code></td>
                      <td>Mengubah method menjadi static method</td>
                      <td><code>@staticmethod</code> pada method class</td>
                    </tr>
                    <tr>
                      <td><code>@classmethod</code></td>
                      <td>Mengubah method menjadi class method</td>
                      <td><code>@classmethod</code> pada method class</td>
                    </tr>
                    <tr>
                      <td><code>@property</code></td>
                      <td>Mengubah method menjadi property</td>
                      <td><code>@property</code> pada getter method</td>
                    </tr>
                    <tr>
                      <td><code>@functools.wraps</code></td>
                      <td>Mempertahankan metadata fungsi asli</td>
                      <td><code>@wraps(func)</code> pada wrapper</td>
                    </tr>
                    <tr>
                      <td><code>@functools.lru_cache</code></td>
                      <td>Menambahkan caching ke fungsi</td>
                      <td><code>@lru_cache(maxsize=128)</code></td>
                    </tr>
                    <tr>
                      <td><code>@dataclasses.dataclass</code></td>
                      <td>Membuat class data secara otomatis</td>
                      <td><code>@dataclass</code> pada class</td>
                    </tr>
                    <tr>
                      <td><code>@app.route</code> (Flask)</td>
                      <td>Mendefinisikan route dalam web framework</td>
                      <td><code>@app.route('/')</code> pada view function</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 className="mt-4">Decorator dengan Argumen</h3>
                <p>
                  Kita dapat membuat decorator yang menerima argumen dengan menambahkan
                  layer tambahan.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Decorator dengan argumen
def repeat(n):
    def decorator_repeat(func):
        import functools
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator_repeat

# Menggunakan decorator dengan argumen
@repeat(3)
def sapa(nama):
    print(f"Halo, {nama}!")

# Test decorator
sapa("Alice")

# Output:
# Halo, Alice!
# Halo, Alice!
# Halo, Alice!`}
                />
                
                <h3 className="mt-4">Class Decorator</h3>
                <p>Selain fungsi, kita juga dapat menggunakan class sebagai decorator.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Class sebagai decorator
class HitungEksekusi:
    def __init__(self, func):
        self.func = func
        self.jumlah_panggilan = 0

    def __call__(self, *args, **kwargs):
        self.jumlah_panggilan += 1
        print(f"Fungsi {self.func.__name__} dipanggil sebanyak {self.jumlah_panggilan} kali")
        return self.func(*args, **kwargs)

# Menggunakan class decorator
@HitungEksekusi
def faktorial(n):
    if n == 0:
        return 1
    return n * faktorial(n-1)

# Test class decorator
print(faktorial(5))

# Output:
# Fungsi faktorial dipanggil sebanyak 1 kali
# Fungsi faktorial dipanggil sebanyak 2 kali
# ... (beberapa baris serupa)
# 120`}
                />
                 
                <h3 className="mt-4">Menggunakan functools.wraps</h3>
                <p>
                  Decorator <code>functools.wraps</code> membantu mempertahankan metadata
                  fungsi asli.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Perbedaan dengan dan tanpa functools.wraps
import functools

def decorator_tanpa_wraps(func):
    def wrapper(*args, **kwargs):
        """Wrapper function"""
        return func(*args, **kwargs)
    return wrapper

def decorator_dengan_wraps(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        """Wrapper function"""
        return func(*args, **kwargs)
    return wrapper

@decorator_tanpa_wraps
def contoh_tanpa_wraps():
    """Fungsi contoh tanpa wraps"""
    pass

@decorator_dengan_wraps
def contoh_dengan_wraps():
    """Fungsi contoh dengan wraps"""
    pass

# Periksa metadata
print("Tanpa wraps:")
print(f" Nama: {contoh_tanpa_wraps.__name__}")
print(f" Docstring: {contoh_tanpa_wraps.__doc__}")
print()
print("Dengan wraps:")
print(f" Nama: {contoh_dengan_wraps.__name__}")
print(f" Docstring: {contoh_dengan_wraps.__doc__}")

# Output:
# Tanpa wraps:
# Nama: wrapper
# Docstring: Wrapper function
#
# Dengan wraps:
# Nama: contoh_dengan_wraps
# Docstring: Fungsi contoh dengan wraps`}
                />
                  
                <h3 className="mt-4">Multiple Decorators</h3>
                <p>Kita dapat menerapkan beberapa decorator pada satu fungsi.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Multiple decorators
def decorator_satu(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("Decorator satu - sebelum")
        result = func(*args, **kwargs)
        print("Decorator satu - setelah")
        return result
    return wrapper

def decorator_dua(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("Decorator dua - sebelum")
        result = func(*args, **kwargs)
        print("Decorator dua - setelah")
        return result
    return wrapper

# Multiple decorators - diterapkan dari bawah ke atas
@decorator_satu
@decorator_dua
def contoh_fungsi():
    print("Fungsi asli dijalankan")

# Test multiple decorators
contoh_fungsi()

# Output:
# Decorator satu - sebelum
# Decorator dua - sebelum
# Fungsi asli dijalankan
# Decorator dua - setelah
# Decorator satu - setelah`}
                />
                  
                <h3 className="mt-4">Decorator untuk Autentikasi dan Authorization</h3>
                <p>
                  Decorator sering digunakan dalam web development untuk menangani
                  autentikasi.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Decorator untuk autentikasi (contoh sederhana)
import functools

def require_login(func):
    @functools.wraps(func)
    def wrapper(user, *args, **kwargs):
        if not user.get('is_authenticated', False):
            raise PermissionError("User harus login untuk mengakses fungsi ini")
        return func(user, *args, **kwargs)
    return wrapper

def require_role(role):
    def decorator_require_role(func):
        @functools.wraps(func)
        def wrapper(user, *args, **kwargs):
            if user.get('role') != role:
                raise PermissionError(f"User harus memiliki role {role}")
            return func(user, *args, **kwargs)
        return wrapper
    return decorator_require_role

# Menggunakan decorator autentikasi
@require_login
def akses_dashboard(user):
    return f"Selamat datang di dashboard, {user['username']}!"

@require_login
@require_role('admin')
def akses_admin(user):
    return f"Akses panel admin untuk {user['username']}"

# Test decorator autentikasi
user1 = {'username': 'budi', 'is_authenticated': True, 'role': 'user'}
user2 = {'username': 'admin', 'is_authenticated': True, 'role': 'admin'}
user3 = {'username': 'guest', 'is_authenticated': False, 'role': 'guest'}

try:
    print(akses_dashboard(user1))
    print(akses_admin(user2))
    print(akses_dashboard(user3))
except PermissionError as e:
    print(f"Error: {e}")

# Output:
# Selamat datang di dashboard, budi!
# Akses panel admin untuk admin
# Error: User harus login untuk mengakses fungsi ini`}
                />
                
                <h3 className="mt-4">Best Practices Decorator</h3>
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
                          <li>Gunakan <code>@functools.wraps</code> untuk mempertahankan metadata</li>
                          <li>Buat decorator yang reusable dan generik</li>
                          <li>Dokumentasi behavior decorator dengan jelas</li>
                          <li>Pertimbangkan performa saat menggunakan decorator</li>
                          <li>Test decorator secara terpisah dari fungsi yang didekorasi</li>
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
                          <li>Jangan ubah signature fungsi secara tidak terduga</li>
                          <li>Jangan sembunyikan side effect yang penting</li>
                          <li>Jangan buat decorator yang terlalu kompleks</li>
                          <li>Jangan gunakan decorator berlebihan (over-decoration)</li>
                          <li>Jangan abaikan error handling dalam decorator</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CodeBlock title="Latihan:" subtitle="Coba buat decorator untuk kasus-kasus berikut:"theme={theme} code=
                      {`# 1. Buat decorator untuk meng-cache hasil fungsi
def cache_decorator(func):
    # Implementasi di sini
    pass

# 2. Buat decorator untuk mengukur waktu eksekusi
def timing_decorator(func):
    # Implementasi di sini
    pass

# 3. Buat decorator untuk retry otomatis jika gagal
def retry_decorator(max_retries=3):
    # Implementasi di sini
    pass

# 4. Buat decorator untuk validasi input
def validate_input(*validators):
    # Implementasi di sini
    pass`}
                />
                
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/errorHandeling" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Error Handling
                    </Link>
                    <Link 
                      to="/virtualEnvPip" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Virtualenv & Pip <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};
