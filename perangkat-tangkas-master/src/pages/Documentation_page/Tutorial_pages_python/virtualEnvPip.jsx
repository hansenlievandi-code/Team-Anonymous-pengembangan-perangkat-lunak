import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const VirtualEnvPip = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Virtualenv & Pip</h2>
                  <div className="badge bg-primary fs-6">Manajemen</div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-primary">📜 Sejarah Virtualenv & Pip</h3>
                  <p className="lead" style={{textAlign: 'justify'}}>
                    Virtualenv diciptakan pada tahun 2007 oleh Ian Bicking sebagai solusi
                    untuk masalah isolasi dependensi dalam proyek Python. Sebelum virtualenv
                    ada, semua package Python diinstal secara global di sistem, yang sering
                    menyebabkan konflik versi antar proyek. Pip (Package Installer for
                    Python) dikembangkan pada tahun 2008 oleh Ian Bicking dan komunitas
                    Python sebagai pengganti easy_install yang lebih modern dan
                    user-friendly. Pada Python 3.3 (2012), Python secara resmi
                    mengintegrasikan modul venv ke dalam standard library sebagai alternatif
                    bawaan untuk virtualenv. Sejak Python 3.4 (2014), pip sudah otomatis
                    terinstal bersama Python, membuat proses instalasi package menjadi jauh
                    lebih mudah. Hingga saat ini, kombinasi virtualenv/venv dan pip menjadi
                    standar industri dalam pengembangan aplikasi Python profesional.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-primary">📖 Definisi</h3>
                  <p className="lead" style={{textAlign: 'justify'}}>
                    Virtual Environment (virtualenv) adalah direktori yang berisi instalasi
                    Python yang terisolasi beserta package-package yang spesifik untuk satu
                    proyek tertentu. Virtual environment memungkinkan developer untuk
                    memiliki beberapa versi Python dan package yang berbeda-beda tanpa
                    konflik satu sama lain. Pip adalah sistem manajemen package untuk Python
                    yang digunakan untuk menginstal dan mengelola software packages yang
                    tersedia di Python Package Index (PyPI). Pip memudahkan proses
                    instalasi, upgrade, dan penghapusan package Python dengan satu perintah
                    sederhana. Kombinasi virtual environment dan pip membuat pengembangan
                    aplikasi Python menjadi lebih terorganisir, reproducible, dan mudah
                    di-maintain.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-primary">🎯 Kegunaan</h3>
                  <p className="lead" style={{textAlign: 'justify'}}>
                    Virtual environment sangat penting dalam pengembangan Python modern
                    karena memungkinkan isolasi dependensi antar proyek. Dengan virtual
                    environment, Anda dapat menjalankan Proyek A dengan Django versi 3.2 dan
                    Proyek B dengan Django versi 4.0 tanpa konflik. Virtual environment juga
                    memudahkan deployment karena Anda dapat dengan mudah membuat
                    requirements.txt yang berisi semua package yang dibutuhkan proyek. Pip
                    digunakan untuk menginstal package dari PyPI dengan mudah, misalnya
                    untuk instalasi library populer seperti requests, numpy, pandas, atau
                    framework seperti Flask dan Django. Dengan pip, Anda juga dapat
                    menginstal package dari Git repository, local files, atau sumber lain.
                    Kombinasi keduanya membuat kolaborasi tim menjadi lebih mudah karena
                    setiap developer dapat dengan cepat menyiapkan environment yang identik.
                  </p>
                </div>

                <h2 className="mt-5">Cara Membuat Virtual Environment</h2>

                <CodeBlock title="Membuat Virtual Environment" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Di Windows
python -m venv myenv

# Di macOS/Linux
python3 -m venv myenv

# Perintah ini akan membuat folder 'myenv' yang berisi:
# - Interpreter Python
# - Pip
# - Package standar Python`}
                />
                
                <CodeBlock title="Mengaktifkan Virtual Environment" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Di Windows
myenv\\Scripts\\activate

# Di macOS/Linux
source myenv/bin/activate

# Setelah aktif, prompt akan berubah:
# (myenv) C:\\Users\\YourName>

# Untuk menonaktifkan:
deactivate`}
                />
                 
                <h2 className="mt-5">Menggunakan Pip</h2>

                <CodeBlock title="Instalasi Package dengan Pip" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Instalasi package tunggal
pip install requests

# Instalasi versi spesifik
pip install Django==4.0

# Instalasi beberapa package sekaligus
pip install numpy pandas matplotlib

# Output:
# Collecting requests
# Successfully installed requests-2.31.0`}
                />

                <CodeBlock title="Melihat Package yang Terinstal" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Melihat semua package
pip list

# Output:
# Package    Version
# ---------- -------
# pip        23.0.1
# requests   2.31.0
# setuptools 65.5.0

# Melihat info detail package
pip show requests

# Output:
# Name: requests
# Version: 2.31.0
# Summary: Python HTTP for Humans.`}
                />
                
                <CodeBlock title="Upgrade dan Uninstall Package" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Upgrade package ke versi terbaru
pip install --upgrade requests

# Atau bisa pakai:
pip install -U requests

# Uninstall package
pip uninstall requests

# Output saat uninstall:
# Found existing installation: requests 2.31.0
# Proceed (Y/n)? y
# Successfully uninstalled requests-2.31.0`}
                />
                 
                <CodeBlock title="Requirements.txt" subtitle="Contoh Kode:" theme={theme} code=
                      {`# Menyimpan semua package ke file
pip freeze > requirements.txt

# Isi file requirements.txt:
# requests==2.31.0
# Django==4.0
# numpy==1.24.0

# Instalasi dari requirements.txt
pip install -r requirements.txt

# Output:
# Successfully installed requests-2.31.0 Django-4.0 numpy-1.24.0`}
                />
                 
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>💡 Tips:</strong>
                  <ul className="mb-0 mt-2">
                    <li>Selalu gunakan virtual environment untuk setiap proyek baru agar dependensi tidak konflik</li>
                    <li>Jangan commit folder virtual environment ke Git, cukup requirements.txt saja</li>
                    <li>Gunakan <code>pip freeze requirements.txt</code> untuk menyimpan daftar package proyek</li>
                    <li>Aktifkan virtual environment sebelum menjalankan proyek atau instalasi package</li>
                    <li>Gunakan <code>pip list --outdated</code> untuk cek package yang perlu di-update</li>
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/Decorator" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Decorator
                    </Link>
                    <Link 
                      to="/Testing" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Testing <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};