import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const File_io = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">File I/O di Python</h2>
                  <div className="badge bg-primary fs-6">Intermediate</div>
                </div>
                
                <p className="lead">
                  File I/O (Input/Output) adalah proses untuk membaca dan menulis data ke
                  dalam file. Dengan fitur ini, program Python bisa menyimpan data ke file
                  atau membaca kembali data yang sudah ada di file.
                </p>
                
                <h3 className="mt-4">Fungsi-fungsi bawaan Python untuk menangani file</h3>
                
                <h4 className="mt-3">open()</h4>
                <p>Digunakan untuk membuka file, ada beberapa mode dalam Fungsi open():</p>
                
                <div className="table-responsive mb-4">
                  <table className="table table-bordered" style={{
                    backgroundColor: 'var(--sidebar-bg)',
                    borderColor: 'var(--sidebar-border)',
                    color: 'var(--text-color)'
                  }}>
                    <thead style={{
                      backgroundColor: theme === 'dark' ? '#2d2d2d' : '#e9ecef'
                    }}>
                      <tr>
                        <th>Mode</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>'r'</code></td>
                        <td>Membuka file untuk membaca (read). Akan error jika file tidak ada.</td>
                        <td><code>open("data.txt", "r")</code></td>
                      </tr>
                      <tr>
                        <td><code>'w'</code></td>
                        <td>Membuka file untuk menulis (write). Jika file sudah ada, isinya akan terhapus.</td>
                        <td><code>open("data.txt", "w")</code></td>
                      </tr>
                      <tr>
                        <td><code>'a'</code></td>
                        <td>Membuka file untuk menambahkan (append). Tidak menghapus isi lama.</td>
                        <td><code>open("data.txt", "a")</code></td>
                      </tr>
                      <tr>
                        <td><code>'r+'</code></td>
                        <td>Membaca dan menulis file sekaligus.</td>
                        <td><code>open("data.txt", "r+")</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="mt-4">read()</h4>
                <p>Digunakan untuk membaca isi file</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuka file untuk membaca
file = open("data.txt", "r")

# Membaca seluruh isi file
isi = file.read()
print("Isi file:")
print(isi)

# Menutup file
file.close()`}
                />
  
                <h4 className="mt-4">write()</h4>
                <p>Digunakan untuk menulis ke file, kalau file belum ada Python akan membuat file baru.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`# Membuka file untuk menulis
file = open("data.txt", "w")

# Menulis data ke file
file.write("Halo, ini baris pertama!\\n")
file.write("Belajar File I/O di Python itu mudah.\\n")

file.close()`}
                />
                
                <h4 className="mt-4">close()</h4>
                <p>Digunakan untuk menutup file setelah selesai digunakan.</p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`file = open("data.txt", "a")

file.write("Baris tambahan di akhir file.\\n")

# Menutup file
file.close()`}
                />

                <div className="alert alert-info mt-4" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Tip:</strong> Selalu gunakan <code>close()</code> setelah selesai bekerja dengan file untuk menghindari kebocoran memori.
                </div>

                <CodeBlock title="Latihan Analisis:" subtitle="Coba jalankan kode berikut untuk memahami File I/O Python:" theme={theme} code=
                      {`# Program menulis dan membaca file teks

# Menulis file
nama = input("Masukkan nama kamu: ")
hobi = input("Masukkan hobi kamu: ")

file = open("biodata.txt", "w")
file.write(f"Nama: {nama}\\n")
file.write(f"Hobi: {hobi}\\n")
file.close()

# Membaca kembali isi file
file = open("biodata.txt", "r")
print("\\nIsi file biodata.txt:")
print(file.read())
file.close()`}
                />
                  
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/String" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: String
                    </Link>
                    <Link 
                      to="/modulePackage" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Module & Package <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};