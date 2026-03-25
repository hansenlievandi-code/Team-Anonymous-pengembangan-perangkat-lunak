import { Link, useOutletContext } from "react-router-dom"
import CodeBlock from "../../../fitur/copycode";

export const Testing = () => {
  const { theme } = useOutletContext();
  
  return (
    <>
          <div className="col-lg-9 col-xl-10">
            <div className="content-container">
              <section id="introduksi">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0">Testing Python</h2>
                  <div className="badge bg-primary fs-6">Kualitas</div>
                </div>
                
                <p className="lead">
                  Testing adalah proses penting dalam pengembangan perangkat lunak untuk
                  memastikan kode berfungsi dengan benar. Python menyediakan modul{" "}
                  <code>unittest</code> bawaan dan framework testing populer seperti{" "}
                  <code>pytest</code> untuk membantu menulis dan menjalankan test.
                </p>
                
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  Testing membantu mendeteksi bug lebih awal, memastikan kode berfungsi seperti yang diharapkan, dan memudahkan refactoring.
                </div>
                
                <h3 className="mt-4">Mengapa Testing Penting?</h3>
                <ul>
                  <li><strong>Mendeteksi bug lebih awal</strong> - Menemukan masalah sebelum produk dirilis</li>
                  <li><strong>Memastikan kode berfungsi</strong> - Verifikasi bahwa kode bekerja sesuai spesifikasi</li>
                  <li><strong>Memudahkan refactoring</strong> - Memberikan kepercayaan untuk mengubah kode tanpa merusak fungsionalitas</li>
                  <li><strong>Meningkatkan kualitas kode</strong> - Mendorong penulisan kode yang lebih modular dan terstruktur</li>
                  <li><strong>Berfungsi sebagai dokumentasi</strong> - Test case menunjukkan cara menggunakan fungsi/modul</li>
                </ul>
                
                <h3 className="mt-4">Unit Testing dengan unittest</h3>
                <p>
                  Modul <code>unittest</code> adalah framework testing bawaan Python yang
                  terinspirasi dari JUnit.
                </p>

                <CodeBlock title="Contoh Kode yang akan di-test:" theme={theme} code=
                      {`# calculator.py - Kode yang akan di-test
class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Tidak bisa membagi dengan nol")
        return a / b`}
                />
                  
                <CodeBlock title="Test Case dengan unittest:" theme={theme} code=
                      {`# test_calculator.py - File test
import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):
    def setUp(self):
        # Setup yang dijalankan sebelum setiap test
        self.calc = Calculator()

    def test_add(self):
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertEqual(self.calc.add(0, 0), 0)

    def test_subtract(self):
        self.assertEqual(self.calc.subtract(5, 3), 2)
        self.assertEqual(self.calc.subtract(0, 5), -5)

    def test_multiply(self):
        self.assertEqual(self.calc.multiply(3, 4), 12)
        self.assertEqual(self.calc.multiply(0, 5), 0)

    def test_divide(self):
        self.assertEqual(self.calc.divide(10, 2), 5)
        self.assertEqual(self.calc.divide(5, 2), 2.5)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            self.calc.divide(10, 0)

    def tearDown(self):
        # Cleanup setelah setiap test
        pass

if __name__ == '__main__':
    unittest.main()`}
                />
                  
                <h3 className="mt-4">Assert Methods dalam unittest</h3>
                <p>unittest menyediakan berbagai method untuk melakukan assertion.</p>
                
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Deskripsi</th>
                        <th>Contoh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>assertEqual(a, b)</code></td>
                        <td>Memeriksa apakah a == b</td>
                        <td><code>self.assertEqual(5, 5)</code></td>
                      </tr>
                      <tr>
                        <td><code>assertTrue(x)</code></td>
                        <td>Memeriksa apakah x True</td>
                        <td><code>self.assertTrue(10 &gt; 5)</code></td>
                      </tr>
                      <tr>
                        <td><code>assertFalse(x)</code></td>
                        <td>Memeriksa apakah x False</td>
                        <td><code>self.assertFalse(10 &lt; 5)</code></td>
                      </tr>
                      <tr>
                        <td><code>assertRaises(Error, func, *args)</code></td>
                        <td>Memeriksa apakah fungsi memunculkan error</td>
                        <td><code>self.assertRaises(ValueError, calc.divide, 10, 0)</code></td>
                      </tr>
                      <tr>
                        <td><code>assertIn(a, b)</code></td>
                        <td>Memeriksa apakah a ada dalam b</td>
                        <td><code>self.assertIn(3, [1, 2, 3])</code></td>
                      </tr>
                      <tr>
                        <td><code>assertIsNone(x)</code></td>
                        <td>Memeriksa apakah x None</td>
                        <td><code>self.assertIsNone(None)</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-4">Testing dengan pytest</h3>
                <p>
                  pytest adalah framework testing populer yang lebih sederhana dan powerful.
                </p>

                <CodeBlock title="Contoh pytest:" theme={theme} code=
                      {`# test_calculator_pytest.py
import pytest
from calculator import Calculator

@pytest.fixture
def calculator():
    return Calculator()

def test_add(calculator):
    assert calculator.add(2, 3) == 5
    assert calculator.add(-1, 1) == 0

def test_subtract(calculator):
    assert calculator.subtract(5, 3) == 2

def test_multiply(calculator):
    assert calculator.multiply(3, 4) == 12

def test_divide(calculator):
    assert calculator.divide(10, 2) == 5

def test_divide_by_zero(calculator):
    with pytest.raises(ValueError):
        calculator.divide(10, 0)

# Parameterized test
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0)
])
def test_add_parameterized(calculator, a, b, expected):
    assert calculator.add(a, b) == expected`}
                />
                  
                <h3 className="mt-4">Test Organization dan Best Practices</h3>
                
                <CodeBlock title="Struktur Direktori Test" theme={theme} code=
                      {`project/
├── src/
│   ├── __init__.py
│   ├── calculator.py
│   └── utils.py
├── tests/
│   ├── __init__.py
│   ├── test_calculator.py
│   └── test_utils.py
├── requirements.txt
└── pytest.ini`}
                />
                  
                <h4>Best Practices Testing</h4>
                <ul>
                  <li><strong>Test harus independen</strong> - Tidak bergantung pada test lain</li>
                  <li><strong>Gunakan nama test yang deskriptif</strong> - Jelaskan apa yang di-test</li>
                  <li><strong>Test satu fungsi/fitur per test method</strong> - Fokus pada satu aspek</li>
                  <li><strong>Gunakan setup dan teardown</strong> - Untuk persiapan dan cleanup</li>
                  <li><strong>Test edge cases dan boundary conditions</strong> - Kasus khusus dan batasan</li>
                  <li><strong>Jalankan test secara teratur</strong> - Integrasi kontinu</li>
                  <li><strong>Gunakan coverage tools</strong> - Untuk mengukur cakupan test</li>
                </ul>

                <h3 className="mt-4">Test Coverage</h3>
                <p>Test coverage mengukur persentase kode yang di-cover oleh test.</p>
                
                <CodeBlock title="Menggunakan coverage.py:" theme={theme} code=
                      {`# Install coverage
pip install coverage

# Menjalankan test dengan coverage
coverage run -m pytest

# Melihat report
coverage report

# Membuat HTML report
coverage html

# Contoh output coverage report:
# Name               Stmts   Miss  Cover
# --------------------------------------
# calculator.py         10      0   100%
# test_calculator.py    15      0   100%
# --------------------------------------
# TOTAL                25      0   100%`}
                />
                  
                <h3 className="mt-4">Mocking dan Patching</h3>
                <p>
                  Mocking digunakan untuk mengisolasi unit yang di-test dari dependencies
                  eksternal.
                </p>

                <CodeBlock title="Contoh Mocking:" theme={theme} code=
                      {`from unittest.mock import Mock, patch
import requests

# Fungsi yang akan di-test
def get_user_data(user_id):
    response = requests.get(f"https://api.example.com/users/{user_id}")
    return response.json() if response.status_code == 200 else None

# Test dengan mocking
def test_get_user_data():
    # Mock response
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {"id": 1, "name": "John Doe"}
    
    # Patch requests.get
    with patch('requests.get') as mock_get:
        mock_get.return_value = mock_response
        
        result = get_user_data(1)
        
        assert result == {"id": 1, "name": "John Doe"}
        mock_get.assert_called_once_with("https://api.example.com/users/1")`}
                />
                  
                <div className="alert alert-warning" style={{ 
                  backgroundColor: theme === 'dark' ? '#78350f' : '#fef3c7',
                  borderColor: theme === 'dark' ? '#92400e' : '#fbbf24',
                  color: theme === 'dark' ? '#fde68a' : '#92400e'
                }}>
                  <i className="bi bi-lightbulb me-2"></i>
                  <strong>Latihan:</strong> Coba buat test untuk fungsi-fungsi di file string_utils.py
                </div>

                <CodeBlock title="Latihan - String Utils:" theme={theme} code=
                      {`# string_utils.py
def reverse_string(s):
    return s[::-1]

def is_palindrome(s):
    return s == s[::-1]

def count_vowels(s):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in s if char in vowels)

# Tugas: Buat test untuk fungsi-fungsi di atas
# menggunakan unittest atau pytest`}
                />
                  
                <div className="alert alert-info" style={{ 
                  backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                  borderColor: theme === 'dark' ? '#3730a3' : '#93c5fd',
                  color: theme === 'dark' ? '#e0e7ff' : '#1e40af'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Tips Penting Testing:</strong>
                  <ul className="mb-0 mt-2">
                    <li>Mulai dengan test sederhana dan berkembang secara bertahap</li>
                    <li>Test behavior, bukan implementation</li>
                    <li>Gunakan meaningful data dalam test</li>
                    <li>Jangan test fungsi built-in Python</li>
                    <li>Gunakan continuous integration untuk menjalankan test otomatis</li>
                    <li>Test failure scenarios dan exception handling</li>
                    <li>Keep tests fast dan isolated</li>
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--sidebar-border)' }}>
                  <div className="d-flex justify-content-between">
                    <Link 
                      to="/virtualEnvPip" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Virtualenv & Pip
                    </Link>
                    <Link 
                      to="/Debugging" 
                      className="btn btn-primary"
                    >
                      Selanjutnya: Debugging <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};