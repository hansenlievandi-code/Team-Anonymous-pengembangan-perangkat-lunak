import { Policy } from "./pages/Documentation_page/about/Policy.jsx"
import { ThisWebsite } from "./pages/Documentation_page/about/thisWebsite.jsx"
import { DocumentationPage } from "./pages/Documentation_page/Documentation_page.jsx"
import { Login } from "./pages/Documentation_page/Login/Login.jsx"
import { Main_page } from "./pages/main_page.jsx"
import { Comprehension } from "./pages/Documentation_page/Tutorial_pages_python/Comprehension.jsx";
import { Debugging } from "./pages/Documentation_page/Tutorial_pages_python/Debugging.jsx";
import { Decorator } from "./pages/Documentation_page/Tutorial_pages_python/Decorator.jsx";
import { ErrorHandeling } from "./pages/Documentation_page/Tutorial_pages_python/errorHandeling.jsx";
import { File_io } from "./pages/Documentation_page/Tutorial_pages_python/file_io.jsx";
import { Fungsi } from "./pages/Documentation_page/Tutorial_pages_python/Fungsi.jsx";
import { Kondisi } from "./pages/Documentation_page/Tutorial_pages_python/Kondisi.jsx";
import { ModulePackage } from "./pages/Documentation_page/Tutorial_pages_python/modulePackage.jsx";
import { OOP } from "./pages/Documentation_page/Tutorial_pages_python/OOP.jsx";
import { Operator } from "./pages/Documentation_page/Tutorial_pages_python/Operator.jsx";
import { PengenalanPython } from "./pages/Documentation_page/Tutorial_pages_python/pengenalanPython.jsx";
import { Perulangan } from "./pages/Documentation_page/Tutorial_pages_python/Perulangan.jsx";
import { StandardLibary } from "./pages/Documentation_page/Tutorial_pages_python/StandardLibary.jsx";
import { String } from "./pages/Documentation_page/Tutorial_pages_python/String.jsx";
import { StrukturData } from "./pages/Documentation_page/Tutorial_pages_python/strukturData.jsx";
import { Testing } from "./pages/Documentation_page/Tutorial_pages_python/Testing.jsx";
import { TypeHints } from "./pages/Documentation_page/Tutorial_pages_python/typeHints.jsx";
import { VariabelTipeData } from "./pages/Documentation_page/Tutorial_pages_python/VariabelTipeData.jsx";
import { VirtualEnvPip } from "./pages/Documentation_page/Tutorial_pages_python/virtualEnvPip.jsx";
import { BrowserRouter,Routes, Route} from "react-router-dom"
import { SignUp } from "./pages/Documentation_page/Login/SignUp.jsx"
import { Rating } from "./pages/Documentation_page/about/Rating.jsx";
import { ReportBug } from "./fitur/reportbug-feed.jsx"
import './App.css'
import MainLayout from "./component/MainLayout.jsx"
import { useState, useEffect } from "react";
import { Discussion } from "./pages/Documentation_page/Discussion/Discussion.jsx"

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }
  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/about" element={<ThisWebsite />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/report-bug" element={<ReportBug />} />
        <Route path="/discussion" element={<Discussion/>}/>
        <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/DocumentationPage" element={<DocumentationPage />} />
          <Route path="/Comprehension" element={<Comprehension />} />
          <Route path="/Debugging" element={<Debugging />} />
          <Route path="/Decorator" element={<Decorator />} />
          <Route path="/errorHandeling" element={<ErrorHandeling />} />
          <Route path="/file_io" element={<File_io />} />
          <Route path="/Fungsi" element={<Fungsi />} />
          <Route path="/Kondisi" element={<Kondisi />} />
          <Route path="/modulePackage" element={<ModulePackage />} />
          <Route path="/OOP" element={<OOP />} />
          <Route path="/Operator" element={<Operator />} />
          <Route path="/pengenalanPython" element={<PengenalanPython />} />
          <Route path="/Perulangan" element={<Perulangan />} />
          <Route path="/StandardLibary" element={<StandardLibary />} />
          <Route path="/String" element={<String />} />
          <Route path="/strukturData" element={<StrukturData />} />
          <Route path="/Testing" element={<Testing />} />
          <Route path="/typeHints" element={<TypeHints />} />
          <Route path="/VariabelTipeData" element={<VariabelTipeData />} />
          <Route path="/virtualEnvPip" element={<VirtualEnvPip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)};
export default App;