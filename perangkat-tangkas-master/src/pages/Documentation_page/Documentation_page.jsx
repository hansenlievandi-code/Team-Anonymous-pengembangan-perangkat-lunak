import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import CodeBlock from "../../fitur/copycode"; 
export const DocumentationPage = () => {
  const { theme } = useOutletContext();
  const [selectedLang, setSelectedLang] = useState('python');

  return (
    <>
      <div className="col-lg-9 col-xl-10">
        <div className="content-container">
          <section id="introduksi">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Apa itu Python?</h2>
              <div className="badge bg-primary fs-6">Pemula</div>
            </div>

            <p className="lead" style={{ textAlign: 'justify' }}>
              Python adalah bahasa pemrograman yang populer. Bahasa ini dibuat oleh{' '}
              <strong>Guido van Rossum</strong> dan dirilis pada{' '}
              <strong>tahun 1991</strong>.
            </p>

            <div className="alert alert-info" style={{ 
              backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
              borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
              color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
            }}>
              <i className="bi bi-info-circle me-2"></i>
              Python dikenal dengan sintaksnya yang bersih dan mudah dibaca, membuatnya ideal untuk pemula.
            </div>

            <h3 className="mt-4">Python digunakan untuk:</h3>
            <ul className="mb-4">
              <li><strong>Pengembangan web (server-side)</strong> - Django, Flask</li>
              <li><strong>Pengembangan perangkat lunak</strong> - aplikasi desktop, tools</li>
              <li><strong>Perhitungan matematika & data science</strong> - NumPy, Pandas</li>
              <li><strong>System scripting</strong> - otomatisasi sistem dan administrasi</li>
              <li><strong>Machine Learning & AI</strong> - TensorFlow, PyTorch</li>
              <li><strong>Game development</strong> - PyGame</li>
            </ul>

            <h3>Apa yang bisa dilakukan Python?</h3>
                <div className="row mt-3">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Web Development</h5>
                        <p className="card-text">Python dapat digunakan di server untuk membuat aplikasi web yang kuat dan scalable.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Data Analysis</h5>
                        <p className="card-text">Python dapat menangani big data dan melakukan analisis statistik yang kompleks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Automation</h5>
                        <p className="card-text">Python sangat baik untuk mengotomatisasi tugas-tugas yang berulang dan sistem scripting.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Prototyping</h5>
                        <p className="card-text">Python memungkinkan pembuatan prototype dengan cepat berkat sintaks yang sederhana.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="mt-4">Mengapa Python?</h3>
                <ul>
                  <li><strong>Multi-platform</strong> - Berjalan di Windows, Mac, Linux, Raspberry Pi, dll.</li>
                  <li><strong>Sintaks sederhana</strong> - Mirip bahasa Inggris, mudah dipelajari pemula.</li>
                  <li><strong>Produktif</strong> - Lebih sedikit baris kode dibanding bahasa lain.</li>
                  <li><strong>Interpreter</strong> - Kode langsung dijalankan, prototyping cepat.</li>
                  <li><strong>Multi-paradigma</strong> - Prosedural, OOP, dan fungsional.</li>
                  <li><strong>Komunitas besar</strong> - Banyak library dan dukungan.</li>
                </ul>
                
                <h3 className="mt-4">Hal yang Perlu Diketahui</h3>
                <div className="alert alert-warning" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Perhatian:</strong> Versi besar terbaru adalah <strong>Python 3</strong>. Python 2 sudah tidak didukung sejak 2020.
                </div>

            <h3 className="mt-4">Sintaks Python Dibandingkan Bahasa Lain</h3>
            
            <CodeBlock 
              title="Contoh: Hello World" 
              theme={theme}
              subtitle={
                <div className="d-flex gap-3 mt-2">
                  <button 
                    className={`btn btn-sm ${selectedLang === 'python' ? 'btn-secondary active' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLang('python')}
                  >
                    Python
                  </button>
                  <button 
                    className={`btn btn-sm ${selectedLang === 'javascript' ? 'btn-secondary active' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLang('javascript')}
                  >
                    JavaScript
                  </button>
                  <button 
                    className={`btn btn-sm ${selectedLang === 'java' ? 'btn-secondary active' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLang('java')}
                  >
                    Java
                  </button>
                </div>
              } 
              code={
                selectedLang === 'python' ? 
`# Python
print("Hello, World!")

# Tidak perlu titik koma
# Tidak perlu kurung kurawal
# Indentasi menentukan blok kode`
                : selectedLang === 'javascript' ?
`// JavaScript
console.log("Hello, World!");

// Menggunakan titik koma (opsional)
// Menggunakan kurung kurawal { }
// Menggunakan console.log untuk output`
                : 
`// Java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}

// Harus berada di dalam class
// Wajib menggunakan titik koma (;)
// Tipe data sangat ketat (Strongly Typed)`
              }
            />

            <div className="mt-3">
              <h6>Keunggulan </h6>
              {selectedLang === 'python' && (
                <ul className="mb-0">
                  <li>Tidak perlu titik koma di akhir baris</li>
                  <li>Tidak perlu kurung kurawal untuk blok kode</li>
                  <li>Indentasi yang konsisten meningkatkan keterbacaan</li>
                </ul>
              )}
              {selectedLang === 'javascript' && (
                <ul className="mb-0">
                  <li>Bahasa utama untuk pengembangan web (Frontend & Backend)</li>
                  <li>Sangat fleksibel dan mendukung pemrograman asinkron</li>
                  <li>Memiliki ekosistem library (NPM) terbesar di dunia</li>
                </ul>
              )}
              {selectedLang === 'java' && (
                <ul className="mb-0">
                  <li>Sangat stabil untuk aplikasi skala besar (Enterprise)</li>
                  <li>Mendukung Object-Oriented Programming (OOP) yang kuat</li>
                  <li>"Write Once, Run Anywhere" berkat Java Virtual Machine (JVM)</li>
                </ul>
              )}
            </div>

            <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
              <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-outline-primary">
                  <i className="bi bi-arrow-left me-2"></i> Kembali ke Beranda
                </Link>
                <Link to="/VariabelTipeData" className="btn btn-primary">
                  Selanjutnya: Variabel & Tipe Data <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};