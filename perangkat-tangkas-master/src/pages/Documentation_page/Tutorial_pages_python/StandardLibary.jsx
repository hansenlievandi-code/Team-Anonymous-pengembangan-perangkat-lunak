import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const StandardLibary = () => {
  const { theme } = useOutletContext();

  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Standard Library</h2>
                  <div className="badge bg-primary fs-6">Menengah</div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-primary">📜 Sejarah Standard Library</h3>
                  <p className="lead" style={{textAlign: 'justify'}}>
                    Standard Library Python lahir bersamaan dengan bahasa Python itu sendiri
                    pada tahun 1991 ketika Guido van Rossum merilis Python untuk pertama
                    kalinya. Sejak awal, Python mengusung filosofi "Batteries Included" yang
                    berarti Python sudah dilengkapi dengan berbagai tools dan modul yang siap
                    pakai tanpa perlu instalasi tambahan. Pada masa Python 1.x (1994),
                    Standard Library masih sangat sederhana dan hanya fokus pada fungsi-fungsi
                    dasar pemrograman. Seiring perkembangan waktu, khususnya pada era Python
                    2.x (2000), Standard Library mengalami perluasan signifikan dengan
                    penambahan modul-modul untuk internet, database, GUI, dan berbagai
                    keperluan pengembangan aplikasi modern. Ketika Python 3.x dirilis pada
                    tahun 2008, Standard Library mengalami reorganisasi dan peningkatan
                    kualitas dengan fokus pada konsistensi API dan performa yang lebih baik.
                    Hingga saat ini, Standard Library terus berkembang dan menjadi salah satu
                    kekuatan utama Python yang membedakannya dari bahasa pemrograman lain.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-primary">📖 Definisi</h3>
                  <p className="lead" style={{textAlign: 'justify'}}>
                    Standard Library adalah kumpulan modul, paket, fungsi, dan kelas yang
                    secara resmi disediakan dan didistribusikan bersama dengan instalasi
                    Python. Pustaka ini merupakan bagian integral dari ekosistem Python yang
                    tidak memerlukan instalasi terpisah menggunakan package manager seperti
                    pip. Standard Library dikembangkan dan dikelola langsung oleh Python
                    Software Foundation dan tim core developer Python, sehingga terjamin
                    kualitas, keamanan, dan kompatibilitasnya. Semua modul dalam Standard
                    Library bersifat cross-platform, artinya dapat berjalan di berbagai sistem
                    operasi seperti Windows, macOS, dan Linux tanpa modifikasi kode.
                    Dokumentasi resmi Standard Library tersedia lengkap di docs.python.org dan
                    terus diperbarui seiring dengan rilis versi Python baru. Standard Library
                    mencakup ratusan modul yang dikelompokkan berdasarkan fungsinya, mulai
                    dari manipulasi data, operasi file, networking, hingga pemrosesan teks dan
                    multimedia.
                  </p>
                </div>
                
                <div className="mb-4">
                <h3 className="text-primary">🎯 Kegunaan</h3>
                <p className="lead" style={{textAlign: 'justify'}}>
                  Standard Library memiliki peran yang sangat vital dalam ekosistem Python
                  karena menyediakan solusi siap pakai untuk berbagai kebutuhan pemrograman
                  sehari-hari. Dengan adanya Standard Library, developer dapat langsung
                  memulai proyek tanpa harus mencari dan menginstal library pihak ketiga
                  untuk fungsi-fungsi dasar. Dalam pengembangan aplikasi web, Standard
                  Library menyediakan modul seperti http.server untuk membuat web server
                  sederhana, urllib untuk melakukan HTTP request, dan json untuk memproses
                  data JSON. Untuk keperluan manipulasi data, tersedia modul seperti
                  datetime untuk mengelola tanggal dan waktu, math untuk operasi matematika
                  kompleks, dan statistics untuk analisis statistik. Standard Library juga
                  sangat berguna dalam otomasi sistem dengan modul os untuk operasi sistem
                  operasi, shutil untuk manipulasi file dan folder, serta subprocess untuk
                  menjalankan program eksternal. Dalam pengembangan aplikasi yang memerlukan
                  konkurensi, Standard Library menyediakan threading dan multiprocessing
                  untuk eksekusi paralel. Kegunaan lainnya mencakup re untuk regular
                  expression dalam pemrosesan teks, sqlite3 untuk database lokal, logging
                  untuk sistem logging aplikasi, unittest untuk testing, serta banyak modul
                  lain yang mempercepat proses development dan mengurangi ketergantungan
                  pada library eksternal.
                </p>
                </div>
                
                <h3 className="mt-4">Contoh Penggunaan Standard Library</h3>
                <p>Berikut adalah beberapa modul populer dalam Standard Library Python:</p>
                
                <CodeBlock title="Modul math" theme={theme} code=
{`import math

akar_kuadrat = math.sqrt(16)
print(f"Akar kuadrat dari 16 adalah: {akar_kuadrat}")
nilai_pi = math.pi
print(f"Nilai pi adalah: {nilai_pi}")

# Output:
# Akar kuadrat dari 16 adalah: 4.0
# Nilai pi adalah: 3.141592653589793`}
                />
                
                <CodeBlock title="Modul datetime" theme={theme} code=
{`import datetime

# Menampilkan tanggal dan waktu sekarang
sekarang = datetime.datetime.now()
print(f"Waktu sekarang: {sekarang}")

# Membuat objek tanggal tertentu
tanggal = datetime.datetime(2025, 11, 7)
print(f"Tanggal: {tanggal}")

# Format tanggal
format_tanggal = sekarang.strftime("%d/%m/%Y %H:%M:%S")
print(f"Format: {format_tanggal}")

# Output:
# Waktu sekarang: 2025-11-07 10:30:45.123456
# Tanggal: 2025-11-07 00:00:00
# Format: 07/11/2025 10:30:45`}
                />
                
                <CodeBlock title="Modul random" theme={theme} code=
{`import random

# Angka acak antara 0 dan 1
angka_acak = random.random()
print(f"Angka acak: {angka_acak}")

# Integer acak antara 1 dan 10
angka_random = random.randint(1, 10)
print(f"Integer acak: {angka_random}")

# Pilih item acak dari list
buah = ["apel", "jeruk", "mangga", "pisang"]
pilihan = random.choice(buah)
print(f"Buah terpilih: {pilihan}")

# Output:
# Angka acak: 0.7234567
# Integer acak: 7
# Buah terpilih: mangga`}
                />
                 
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <h5 className="mb-2">💡 Tips:</h5>
                  <ul className="mb-0">
                    <li>
                      Modul math cocok untuk operasi matematika seperti akar kuadrat,
                      pangkat, dan konstanta matematis
                    </li>
                    <li>
                      Modul datetime sangat berguna untuk manipulasi tanggal, waktu, dan
                      perhitungan selisih waktu
                    </li>
                    <li>
                      Modul random berguna untuk membuat aplikasi games, simulasi, atau
                      sampling data acak
                    </li>
                  </ul>
                </div>
                
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/typeHints" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Type Hints
                    </Link>
                    <Link 
                      to="/" 
                      className="btn btn-primary"
                    >
                      Kembali ke Beranda <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  )
}