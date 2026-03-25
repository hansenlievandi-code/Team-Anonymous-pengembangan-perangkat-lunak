import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const ModulePackage = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Module & Package</h2>
                  <div className="badge bg-primary fs-6">Intermediate</div>
                </div>
                
                <p className="lead">
                  Dalam Python, module dan package adalah konsep mendasar untuk mengatur dan
                  menyusun kode.
                </p>
                
                <h3 className="mt-4">Module 📄</h3>
                <p>
                  Module adalah file Python yang berisi kumpulan fungsi, variabel, dan class
                  yang dapat digunakan kembali di program lain.
                  <br />
                  Tujuan module adalah agar kode menjadi lebih terstruktur, mudah dikelola,
                  dan tidak perlu menulis ulang.
                  <br />
                  Setiap file .py di Python bisa dianggap sebagai sebuah module.
                </p>
                
                <h4 className="mt-4">Beberapa tahapan module</h4>
                
                <h5 className="mt-3">1. Membuat Module</h5>
                <p>Buat file bernama matematika.py dengan isi:</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# File: matematika.py

def tambah(a, b):
    return a + b

def kali(a, b):
    return a * b`}
                />
                  
                <h5 className="mt-3">2. Menggunakan Module</h5>
                <p>Gunakan Module yang sudah dibuat di file lain</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# File utama: main.py

import matematika

print(matematika.tambah(5, 3))
print(matematika.kali(4, 2))

# Output:
# 8
# 8`}
                />
                 
                <h5 className="mt-3">3. Mengimpor Sebagian Fungsi</h5>
                <p>
                  Dapat Mengimpor fungsi yang dibutuhkan saja dari module, atau kamu bisa
                  ubah nama fungsi/module dengan alias:
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=               
                      {`# Hanya mengambil fungsi tambah dari matematika.py
from matematika import tambah

print(tambah(10, 20))

# Ubah nama fungsi dengan alias m
import matematika as m

print(m.kali(6, 7))`}
                />
                 
                <h3 className="mt-4">Package 📦</h3>
                <p>
                  Package adalah kumpulan beberapa module yang dikelompokkan dalam satu
                  folder.
                  <br />
                  Di dalam folder package harus ada file __init__.py (boleh kosong) agar
                  Python mengenali folder itu sebagai package.
                </p>
                
                <h4 className="mt-3">Contoh Package</h4>
                <p>Buat sebuah package operasi matematika</p>
                
                <CodeBlock title="Contoh Struktur:" theme={theme} code=
                      {`operasi/
    __init__.py
    penjumlahan.py
    perkalian.py`}
                />

                <CodeBlock title="penjumlahan.py" subtitle="Kode:" theme={theme} code=
                      {`# operasi/penjumlahan.py
def tambah(a, b):
    return a + b`}
                />
                
                <CodeBlock title="perkalian.py" subtitle="Kode:" theme={theme} code=
                      {`# operasi/perkalian.py
def kali(a, b):
    return a * b`}
                />
                 
                <h5 className="mt-3">Gunakan module dengan mengimport dari package</h5>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`from operasi import penjumlahan, perkalian

print(penjumlahan.tambah(5, 3))
print(perkalian.kali(4, 2))

# Output:
# 8
# 8`}
                />
                 
                <div className="alert alert-info mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Tip:</strong> File <code>__init__.py</code> diperlukan untuk membuat folder menjadi package Python. File ini bisa kosong atau berisi kode inisialisasi.
                </div>

                <CodeBlock title="Latihan Analisis" subtitle="Coba jalankan kode berikut untuk memahami Module & Package Python:" theme={theme} code=
                      {`# Contoh File Module dan Package

# Buat file bernama matematika.py dengan isi berikut:
def kurang(a, b):
    return a - b

def bagi(a, b):
    if b != 0:
        return a / b
    else:
        return "Tidak bisa dibagi dengan nol!"

# Buat package bernama operasi yang berisi file sebelumnya:
operasi/
    __init__.py
    matematika.py
    penjumlahan.py
    perkalian.py
    
#Kode Utama:

# Buat file bernama main.py dan disimpan di folder yang sama dengan
# module dan package sebelumnya

# import module
import matematika

a1 = int(input("Masukkan angka pertama: "))
a2 = int(input("Masukkan angka kedua: "))
print("Hasil pengurangan:", matematika.kurang(a1, a2))
print("Hasil pembagian:", matematika.bagi(a1, a2))

# import module dari package
from operasi import penjumlahan, perkalian
print("Hasil penjumlahan:", penjumlahan.tambah(a1, a2))
print("Hasil perkalian:", perkalian.kali(a1, a2))`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/file_io" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: File I/O
                    </Link>
                    <Link 
                      to="/OOP" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: OOP <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  )
}