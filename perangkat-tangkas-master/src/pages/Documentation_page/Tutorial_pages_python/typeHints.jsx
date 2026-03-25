import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const TypeHints = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Type Hints Python</h2>
                  <div className="badge bg-primary fs-6">Menengah</div>
                </div>
                
                <p className="lead">
                  Type Hints (Anotasi Tipe) adalah fitur Python yang memungkinkan kita untuk
                  menentukan tipe data variabel, parameter fungsi, dan return value. Fitur
                  ini membantu meningkatkan kejelasan kode, memudahkan debugging, dan
                  memungkinkan tool seperti linter dan IDE memberikan saran yang lebih baik.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Type hints tidak mempengaruhi runtime Python - mereka hanya untuk analisis statis dan bantuan pengembangan.
                </div>
                
                <h3 className="mt-4">Dasar Type Hints</h3>
                <p>
                  Type hints menggunakan sintaks <code>variabel: tipe</code> untuk
                  mendeklarasikan tipe variabel.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Type hints untuk variabel dasar
nama: str = "Budi"
usia: int = 25
tinggi: float = 175.5
is_student: bool = True

print(f"Nama: {nama}, tipe: {type(nama)}")
print(f"Usia: {usia}, tipe: {type(usia)}")
print(f"Tinggi: {tinggi}, tipe: {type(tinggi)}")
print(f"Student: {is_student}, tipe: {type(is_student)}")

# Output:
# Nama: Budi, tipe: <class 'str'>
# Usia: 25, tipe: <class 'int'>
# Tinggi: 175.5, tipe: <class 'float'>
# Student: True, tipe: <class 'bool'>`}
                />
                  
                <h3 className="mt-4">Type Hints untuk Fungsi</h3>
                <p>
                  Kita dapat menentukan tipe parameter dan return value fungsi menggunakan
                  type hints.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`# Type hints untuk fungsi
def sapa(nama: str) -> str:
    return f"Halo, {nama}!"

def tambah(a: int, b: int) -> int:
    return a + b

def bagi(a: float, b: float) -> float:
    if b == 0:
        raise ValueError("Pembagian dengan nol")
    return a / b

# Menggunakan fungsi
pesan: str = sapa("Ani")
hasil_tambah: int = tambah(10, 5)
hasil_bagi: float = bagi(15.0, 3.0)

print(pesan)
print(f"10 + 5 = {hasil_tambah}")
print(f"15.0 / 3.0 = {hasil_bagi}")

# Output:
# Halo, Ani!
# 10 + 5 = 15
# 15.0 / 3.0 = 5.0`}
                />
                  
                <h3 className="mt-4">Tipe Koleksi</h3>
                <p>
                  Untuk tipe koleksi seperti list, dict, tuple, kita menggunakan modul{" "}
                  <code>typing</code>.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`from typing import List, Dict, Tuple, Set

# Type hints untuk koleksi
numbers: List[int] = [1, 2, 3, 4, 5]
student: Dict[str, str] = {"nama": "Budi", "kelas": "12A"}
coordinates: Tuple[float, float] = (3.14, 2.71)
unique_numbers: Set[int] = {1, 2, 3, 2, 1}

# Fungsi dengan parameter koleksi
def hitung_rata_rata(numbers: List[float]) -> float:
    return sum(numbers) / len(numbers)

def cetak_info_student(info: Dict[str, str]) -> None:
    for key, value in info.items():
        print(f"{key}: {value}")

# Menggunakan fungsi
rata_rata: float = hitung_rata_rata([10.5, 8.5, 9.0, 7.5])
print(f"Rata-rata: {rata_rata}")
cetak_info_student(student)

# Output:
# Rata-rata: 8.875
# nama: Budi
# kelas: 12A`}
                />
                  
                <h3 className="mt-4">Optional dan Union</h3>
                <p>
                  <code>Optional</code> digunakan untuk nilai yang bisa <code>None</code>,
                  sedangkan <code>Union</code> untuk nilai yang bisa beberapa tipe.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`from typing import Optional, Union

# Optional untuk nilai yang bisa None
def cari_student(nama: str) -> Optional[Dict[str, str]]:
    students = {
        "budi": {"nama": "Budi", "kelas": "12A"},
        "ani": {"nama": "Ani", "kelas": "11B"}
    }
    return students.get(nama.lower())

# Union untuk nilai yang bisa beberapa tipe
def proses_data(data: Union[int, str, List[int]]) -> str:
    if isinstance(data, int):
        return f"Angka: {data}"
    elif isinstance(data, str):
        return f"String: {data}"
    else:
        return f"List: {data}"

# Menggunakan fungsi
student_budi: Optional[Dict[str, str]] = cari_student("budi")
student_joko: Optional[Dict[str, str]] = cari_student("joko")

print(student_budi)
print(student_joko)
print(proses_data(42))
print(proses_data("Hello"))
print(proses_data([1, 2, 3]))

# Output:
# {'nama': 'Budi', 'kelas': '12A'}
# None
# Angka: 42
# String: Hello
# List: [1, 2, 3]`}
                />
                  
                <h3 className="mt-4">Type Aliases</h3>
                <p>
                  Kita dapat membuat alias untuk tipe yang kompleks agar kode lebih mudah
                  dibaca.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
{`from typing import List, Dict, Tuple, Union

# Type aliases
Vector = List[float]
Student = Dict[str, Union[str, int, float]]
Point = Tuple[float, float]

# Menggunakan type aliases
def hitung_jarak(point1: Point, point2: Point) -> float:
    x1, y1 = point1
    x2, y2 = point2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

def cetak_info(student: Student) -> None:
    for key, value in student.items():
        print(f"{key}: {value}")

# Menggunakan fungsi
titik_a: Point = (0.0, 0.0)
titik_b: Point = (3.0, 4.0)
jarak: float = hitung_jarak(titik_a, titik_b)

student_info: Student = {
    "nama": "Budi",
    "usia": 17,
    "tinggi": 170.5,
    "kelas": "12A"
}

print(f"Jarak: {jarak}")
cetak_info(student_info)

# Output:
# Jarak: 5.0
# nama: Budi
# usia: 17
# tinggi: 170.5
# kelas: 12A`}
                />
                  
                <h3 className="mt-4">Final dan Literal</h3>
                <p>
                  <code>Final</code> untuk nilai konstan, <code>Literal</code> untuk nilai
                  yang harus spesifik.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
               
{`from typing import Final, Literal

# Final untuk konstanta
PI: Final[float] = 3.14159
MAX_SIZE: Final[int] = 100

# Literal untuk nilai spesifik
Status = Literal["active", "inactive", "pending"]

def set_status(status: Status) -> str:
    return f"Status diubah menjadi: {status}"

# Menggunakan
print(f"PI: {PI}")
print(f"MAX_SIZE: {MAX_SIZE}")
print(set_status("active"))
# print(set_status("unknown")) # Error type checking

# Output:
# PI: 3.14159
# MAX_SIZE: 100
# Status diubah menjadi: active`}
                />

                <CodeBlock title="Latihan Analisis" subtitle="Coba jalankan kode berikut untuk memahami Type Hints Python:" theme={theme} code=
{`from typing import List, Dict, Optional, Union

# 1. Fungsi dengan type hints lengkap
def hitung_statistik(numbers: List[float]) -> Dict[str, float]:
    return {
        "rata_rata": sum(numbers) / len(numbers),
        "maksimum": max(numbers),
        "minimum": min(numbers)
    }

# 2. Fungsi dengan Optional dan Union
def proses_input(data: Union[str, int, None]) -> Optional[str]:
    if data is None:
        return None
    return f"Diproses: {data}"

# Menggunakan fungsi
stats: Dict[str, float] = hitung_statistik([10.0, 20.0, 30.0, 40.0])
result1: Optional[str] = proses_input("Hello")
result2: Optional[str] = proses_input(None)

print("Statistik:", stats)
print("Result 1:", result1)
print("Result 2:", result2)`}
                />
                 
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/Debugging" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Debugging
                    </Link>
                    <Link 
                      to="/StandardLibary" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Standard Library <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>  
    </>
  )
}