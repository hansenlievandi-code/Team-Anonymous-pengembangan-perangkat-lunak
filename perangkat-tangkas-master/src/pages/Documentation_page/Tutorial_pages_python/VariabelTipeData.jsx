import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const VariabelTipeData = () => {
  const { theme } = useOutletContext();

  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="variables">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0" style={{ color: 'var(--text-color)' }}>Variabel & Tipe Data</h2>
                  <div className="badge bg-primary fs-6">Pemula</div>
                </div>
                
                <p className="lead" style={{ color: 'var(--text-color)' }}>
                  Variabel adalah wadah untuk menyimpan nilai data dalam Python.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Python adalah bahasa yang dinamis, jadi Anda tidak perlu mendeklarasikan tipe data secara eksplisit.
                </div>
                
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Membuat Variabel</h3>
                <p style={{ color: 'var(--text-color)' }}>
                  Python tidak memiliki perintah khusus untuk mendeklarasikan variabel. Variabel dibuat saat Anda pertama kali menetapkan nilai padanya.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=    
                      {`# Membuat variabel
x = 5
y = "John"
print(x)
print(y)`}
                />
                  
                <p style={{ color: 'var(--text-color)' }}>
                  Variabel tidak perlu dideklarasikan dengan tipe tertentu, dan bahkan dapat berubah tipe setelah ditetapkan.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`x = 4        # x bertipe integer
x = "Sally"  # x sekarang bertipe string
print(x)`}
                />
                  
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Casting</h3>
                <p style={{ color: 'var(--text-color)' }}>
                  Jika Anda ingin menentukan tipe data variabel, ini dapat dilakukan dengan casting.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=               
                      {`x = str(3)    # x akan menjadi '3'
y = int(3)    # y akan menjadi 3
z = float(3)  # z akan menjadi 3.0`}
                />
                 
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Mendapatkan Tipe Data</h3>
                <p style={{ color: 'var(--text-color)' }}>
                  Anda bisa mendapatkan tipe data variabel dengan fungsi <code>type()</code>.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=             
                      {`x = 5
y = "John"
print(type(x))  # Output: <class 'int'>
print(type(y))  # Output: <class 'str'>`}
                />
                 
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Single atau Double Quotes?</h3>
                <p style={{ color: 'var(--text-color)' }}>
                  Variabel string dapat dideklarasikan dengan menggunakan single atau double quotes.
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`x = "John"
# sama dengan
x = 'John'`}
                />
                 
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Case-Sensitive</h3>
                <p style={{ color: 'var(--text-color)' }}>
                  Nama variabel bersifat case-sensitive (huruf besar dan kecil berpengaruh).
                </p>
                
                <CodeBlock title="Contoh Kode:" theme={theme} code=
                      {`a = 4
A = "Sally"
# A tidak akan menimpa a`}
                />
                
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Aturan Penamaan Variabel</h3>
                <ul style={{ color: 'var(--text-color)' }}>
                  <li>Nama variabel harus dimulai dengan huruf atau underscore (_)</li>
                  <li>Nama variabel tidak boleh dimulai dengan angka</li>
                  <li>Nama variabel hanya boleh mengandung karakter alfanumerik dan underscore (A-z, 0-9, _)</li>
                  <li>Nama variabel bersifat case-sensitive</li>
                </ul>
                
                <CodeBlock title="Contoh yang valid:" theme={theme} code=              
                      {`myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"`}
                />
                 
                <h3 className="mt-4" style={{ color: 'var(--text-color)' }}>Tipe Data Dasar Python</h3>
                <div className="row mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Text Type</h5>
                        <p className="card-text"><code>str</code> - String/teks</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Numeric Types</h5>
                        <p className="card-text"><code>int</code>, <code>float</code>, <code>complex</code> - Angka</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100" style={{ 
                      backgroundColor: 'var(--sidebar-bg)',
                      borderColor: 'var(--sidebar-border)'
                    }}>
                      <div className="card-body">
                        <h5 className="card-title">Boolean Type</h5>
                        <p className="card-text"><code>bool</code> - True atau False</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/pengenalanPython" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Pengenalan Python
                    </Link>
                    <Link 
                      to="/Operator" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Operator <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};