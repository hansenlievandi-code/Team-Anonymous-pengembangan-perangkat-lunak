import { Link, useOutletContext } from "react-router-dom";
import CodeBlock from "../../../fitur/copycode";

export const Comprehension = () => {
  const { theme } = useOutletContext();

  return (
    <>
      <div className="col-lg-9 col-xl-10">
        <div className="content-container">
          <section id="introduksi">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Comprehension Python</h2>
              <div className="badge bg-primary fs-6">Menengah</div>
            </div>

            <p className="lead">
              Comprehension adalah fitur Python yang memungkinkan pembuatan
              struktur data (list, dictionary, set) dengan sintaks yang ringkas
              dan ekspresif. Comprehension membuat kode lebih mudah dibaca dan
              sering kali lebih cepat daripada menggunakan loop tradisional.
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
              Comprehension tersedia untuk tiga struktur data: List
              Comprehension, Dictionary Comprehension, dan Set Comprehension.
            </div>

            <h3 className="mt-4">List Comprehension</h3>
            <p>
              List Comprehension adalah cara ringkas untuk membuat list baru
              dengan mengolah setiap elemen dari iterable.
            </p>

            <CodeBlock title="Contoh Kode:" theme={theme} code=
                  {`# Membuat list kuadrat dari 0 sampai 9
kuadrat = [x**2 for x in range(10)]
print(kuadrat)

# Hanya angka genap dari 0 sampai 19
genap = [x for x in range(20) if x % 2 == 0]
print(genap)

# Mengubah semua buah ke huruf besar
fruits = ['apple', 'banana', 'cherry']
upper_fruits = [fruit.upper() for fruit in fruits]
print(upper_fruits)

# Filter angka lebih besar dari 5 dan genap
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = [x for x in numbers if x > 5 and x % 2 == 0]
print(filtered)`}
            />
             
            <h3 className="mt-4">Dictionary Comprehension</h3>
            <p>
              Dictionary Comprehension memungkinkan pembuatan dictionary dengan
              sintaks yang ringkas.
            </p>

            <CodeBlock title="Contoh Kode:" theme={theme} code=
                  {`# Membuat dictionary dengan key angka dan value kuadratnya
kuadrat_dict = {x: x**2 for x in range(1, 6)}
print(kuadrat_dict)

# Mengubah key menjadi huruf besar
student = {'name': 'budi', 'age': 20, 'grade': 'A'}
upper_student = {key.upper(): value for key, value in student.items()}
print(upper_student)

# Filter nilai di atas atau sama dengan 85
scores = {'math': 85, 'science': 92, 'history': 78, 'english': 88}
high_scores = {subject: score for subject, score in scores.items() if score >= 85}
print(high_scores)

# Menggabungkan dua list menjadi dictionary
keys = ['a', 'b', 'c']
values = [1, 2, 3]
merged = {k: v for k, v in zip(keys, values)}
print(merged)`}
            />

            <h3 className="mt-4">Set Comprehension</h3>
            <p>
              Set Comprehension mirip dengan list comprehension tetapi
              menghasilkan set (tidak ada duplikat).
            </p>

            <CodeBlock title="Contoh Kode:" theme={theme} code=
                  {`# Membuat set angka dari 0 sampai 9
angka = {x for x in range(10)}
print(angka)

# Set dari huruf dalam string 'python' (huruf besar)
huruf = {ch.upper() for ch in 'python'}
print(huruf)

# Kelipatan tiga dari 0 sampai 29
kelipatan_tiga = {x for x in range(30) if x % 3 == 0}
print(kelipatan_tiga)

# Kombinasi dari dua iterable
gabungan = {x + y for x in 'ab' for y in '12'}
print(gabungan)`}
            />
             
            <h3 className="mt-4">Nested Comprehension</h3>
            <p>
              Comprehension dapat digunakan secara bersarang untuk struktur data
              multidimensi.
            </p>

            <CodeBlock title="Contoh Kode:" theme={theme} code=
                  {`# Flatten matrix
matriks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matriks for num in row]
print(flattened)

# Membuat matriks 3x3
matrix = [[j for j in range(3)] for i in range(3)]
print(matrix)

# Transpose matriks
transposed = [[row[i] for row in matriks] for i in range(3)]
print(transposed)

# Kombinasi koordinat
kombinasi = [(x, y) for x in range(3) for y in range(3)]
print(kombinasi)`}
            />
              
            <h3 className="mt-4">Keuntungan Menggunakan Comprehension</h3>
            <div
              className="border p-3 rounded mb-3"
              style={{
                backgroundColor: theme === "dark" ? "#1e3a8a" : "#dbeafe",
                borderColor: theme === "dark" ? "#3730a3" : "#93c5fd",
                color: theme === "dark" ? "#e0e7ff" : "#1e40af",
              }}
            >
              <ul>
                <li>
                  <strong>Kode lebih ringkas</strong> - Mengurangi baris kode
                  dibanding loop tradisional
                </li>
                <li>
                  <strong>Lebih mudah dibaca</strong> - Sintaks yang deklaratif
                  dan ekspresif
                </li>
                <li>
                  <strong>Lebih cepat</strong> - Sering kali lebih cepat karena
                  dioptimalkan oleh Python
                </li>
                <li>
                  <strong>Fungsional</strong> - Mendorong gaya pemrograman
                  fungsional yang bebas side-effect
                </li>
              </ul>
            </div>

            <CodeBlock title="Latihan Praktis:" subtitle="Coba jalankan kode berikut untuk memahami penggunaan
                comprehension:" theme={theme} code=
                  {`# Contoh 1: Konversi suhu dari Celcius ke Fahrenheit
celcius = [0, 10, 20, 30, 40]
fahrenheit = [(c * 9/5) + 32 for c in celcius]
print(fahrenheit)

# Contoh 2: Mencari kata yang panjangnya lebih dari 5 huruf
words = ["apple", "banana", "cherry", "date", "elderberry"]
long_words = [word for word in words if len(word) > 5]
print(long_words)

# Contoh 3: Membuat dictionary frekuensi huruf
text = "hello world"
freq = {char: text.count(char) for char in set(text) if char != ' '}
print(freq)

# Contoh 4: Menghasilkan bilangan prima dari 1 sampai 50
primes = [x for x in range(2, 51) if all(x % y != 0 for y in range(2, int(x**0.5) + 1))]
print(primes)`}
            />
              
            <div
              className="mt-5 pt-4 border-top"
              style={{ borderColor: "var(--sidebar-border)" }}
            >
              <div className="d-flex justify-content-between">
                <Link to="/strukturData" className="btn btn-outline-primary">
                  <i className="bi bi-arrow-left me-2"></i> Sebelumnya: Struktur
                  Data
                </Link>
                <Link to="/String" className="btn btn-primary">
                  Selanjutnya: String <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  );
};
