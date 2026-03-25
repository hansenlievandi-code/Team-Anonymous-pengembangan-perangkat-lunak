import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const docs = [
  "DocumentationPage","Comprehension","Debugging","Decorator","errorHandeling",
  "file_io","Fungsi","Kondisi","modulePackage","OOP",
  "Operator","pengenalanPython","Perulangan","StandardLibary","String",
  "strukturData","Testing","typeHints","VariabelTipeData","virtualEnvPip",
];

export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  /* THEME */
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.className = saved;
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.body.className = next;
  };

  /* SEARCH */
  const handleChange = (value) => {
    setQuery(value);
    if (!value.trim()) return setSuggestions([]);
    setSuggestions(
      docs.filter(d => d.toLowerCase().includes(value.toLowerCase())).slice(0, 5)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSuggestions([]);
    navigate(`/${query}`);
  };

  const selectSuggestion = (text) => {
    setQuery(text);
    setSuggestions([]);
    navigate(`/${text}`);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-2" to="/">Anonymous</Link>

        <div className="search-container position-relative" style={{ marginRight: "-280px" }}>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cari dokumentasi..."
              value={query}
              onChange={e => handleChange(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </form>

          {suggestions.length > 0 && (
            <div className="position-absolute w-100 shadow rounded mt-1 search-suggest">
              {suggestions.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 suggestion-item"
                  onClick={() => selectSuggestion(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="d-flex align-items-center gap-4">
          <Link className="nav-link" to="/">Home</Link>
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle fw-medium"
              type="button"
              data-bs-toggle="dropdown"
            >
              About
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
              <li>
                <Link className="dropdown-item" to="/policy">
                  Policy
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about">
                  This Website
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/rating">
                  Rating
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleTheme} className="btn btn-outline-secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <Link to="/login" className="btn btn-dark px-4">Sign In / Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};