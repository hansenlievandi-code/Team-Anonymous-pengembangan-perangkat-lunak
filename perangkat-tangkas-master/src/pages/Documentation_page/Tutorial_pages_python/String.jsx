import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const String = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">String di Python</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>

                <p className="lead">
                  String adalah tipe data yang digunakan untuk menyimpan teks. Di Python, string didefinisikan dengan
                  tanda kutip tunggal ('...') atau ganda ("..."). Anda dapat menampilkan literal string dengan fungsi
                  print().
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
                  String di Python bersifat immutable, artinya tidak dapat diubah setelah dibuat.
                </div>

                <h3 className="mt-4">Membuat dan Menampilkan String</h3>
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Menggunakan tanda kutip ganda
print("Hello World")  # Output: Hello World

# Menggunakan tanda kutip tunggal
print('Hello World')  # Output: Hello World

# Menetapkan string ke variabel
pesan = "Selamat belajar Python!"
print(pesan)  # Output: Selamat belajar Python!`}
                    />
                
                <h3 className="mt-4">Mengakses Karakter dalam String</h3>
                <p>
                  Kamu bisa mengakses karakter dalam string menggunakan indeks (dimulai dari 0) atau indeks negatif
                  (dimulai dari -1 untuk karakter terakhir).
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`teks = "Python"
print(teks[0])   # Output: P (indeks pertama)
print(teks[3])   # Output: h (indeks ke-4)
print(teks[-1])  # Output: n (karakter terakhir)
print(teks[-3])  # Output: h (karakter ketiga dari belakang)

# Mengakses substring (slicing)
print(teks[0:3]) # Output: Pyt (dari indeks 0 sampai 2)
print(teks[2:])  # Output: thon (dari indeks 2 sampai akhir)
print(teks[:4])  # Output: Pyth (dari awal sampai indeks 3)`}
                />
                  
                <h3 className="mt-4">Menggabungkan dan Mengulang String</h3>
                <p>
                  Kamu bisa menggabungkan string dengan operator + dan mengulanginya dengan operator *.
                </p>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`a = "Halo"
b = "Dunia"

# Menggabungkan string
gabung = a + " " + b
print(gabung)  # Output: Halo Dunia

# Mengulang string
ulang = a * 3
print(ulang)   # Output: HaloHaloHalo

# Menggabungkan dengan f-string (Python 3.6+)
nama = "Budi"
usia = 20
kalimat = f"Nama saya {nama} dan usia saya {usia} tahun"
print(kalimat)  # Output: Nama saya Budi dan usia saya 20 tahun`}
                />
                  
                <h3 className="mt-4">Metode String yang Umum Digunakan</h3>
                <table className="table table-bordered" style={{ color: "var(--text-color)" }}>
                  <thead>
                    <tr>
                      <th>Metode</th>
                      <th>Deskripsi</th>
                      <th>Contoh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>len(s)</code>
                      </td>
                      <td>Mengembalikan panjang string</td>
                      <td>
                        <code>len("Python") # Output: 6</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.upper()</code>
                      </td>
                      <td>Mengubah huruf menjadi kapital</td>
                      <td>
                        <code>"python".upper() # Output: "PYTHON"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.lower()</code>
                      </td>
                      <td>Mengubah huruf menjadi kecil</td>
                      <td>
                        <code>"PYTHON".lower() # Output: "python"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.replace(a,b)</code>
                      </td>
                      <td>Mengganti teks a dengan b</td>
                      <td>
                        <code>"apel".replace("a", "s") # Output: "spel"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.split()</code>
                      </td>
                      <td>Memisah string menjadi list</td>
                      <td>
                        <code>"a,b,c".split(",") # Output: ['a', 'b', 'c']</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.strip()</code>
                      </td>
                      <td>Menghapus spasi di awal & akhir</td>
                      <td>
                        <code>" halo ".strip() # Output: "halo"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.find(sub)</code>
                      </td>
                      <td>Mencari posisi substring</td>
                      <td>
                        <code>"python".find("th") # Output: 2</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>s.startswith(pref)</code>
                      </td>
                      <td>Memeriksa awalan string</td>
                      <td>
                        <code>"python".startswith("py") # Output: True</code>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="mt-4">Metode String Lainnya</h3>

                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Metode count() - menghitung kemunculan substring
kalimat = "saya suka python, python itu mudah"
print(kalimat.count("python"))  # Output: 2

# Metode capitalize() - mengkapitalisasi huruf pertama
print("hello world".capitalize())  # Output: Hello world

# Metode title() - mengkapitalisasi setiap kata
print("hello world".title())  # Output: Hello World

# Metode join() - menggabungkan list menjadi string
kata = ["Python", "itu", "menyenangkan"]
gabung = " ".join(kata)
print(gabung)  # Output: Python itu menyenangkan

# Metode isdigit() - memeriksa apakah semua karakter angka
print("123".isdigit())  # Output: True
print("123a".isdigit()) # Output: False`}
                />
                  
                <h3 className="mt-4">Latihan </h3>

                <CodeBlock title="Latihan Analisis" subtitle="Coba jalankan kode berikut untuk memahami operasi string di Python:" theme={theme} code=
                      {`# 1. Input data dari pengguna
nama = input("Masukkan nama kamu: ")
hobi = input("Masukkan hobi kamu: ")

print(f"Halo, nama saya {nama}")
print(f"Hobi saya {hobi}")

# 2. Operasi string dasar
kata1 = "Python"
kata2 = "Seru"

gabung = kata1 + " itu " + kata2
ulang = (kata1 + " ") * 3
print(gabung)  # Output: Python itu Seru
print(ulang)   # Output: Python Python Python 

# 3. Analisis teks
kalimat = input("Masukkan sebuah kalimat: ")

print(f"Jumlah karakter: {len(kalimat)}")
print(f"Karakter pertama: {kalimat[0]}")
print(f"Karakter terakhir: {kalimat[-1]}")
print(f"Versi huruf besar: {kalimat.upper()}")
print(f"Versi huruf kecil: {kalimat.lower()}")
print(f"Kapitalisasi: {kalimat.capitalize()}")

# 4. Pembersihan dan transformasi teks
teks_kotor = "  Data Science dengan Python  "
teks_bersih = teks_kotor.strip()
print(f"Teks asli: '{teks_kotor}'")
print(f"Teks bersih: '{teks_bersih}'")
print(f"Kata-kata: {teks_bersih.split()}")`}
                />
                 
                <div className="mt-5 pt-4 border-top" style={{ borderColor: "var(--sidebar-border)" }}>
                  <div className="d-flex justify-content-between">
                    <Link to="/Comprehension" className="btn btn-outline-primary">
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Comprehension
                    </Link>
                    <Link to="/file_io" className="btn btn-primary">
                      Selanjutnya: File I/O <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};