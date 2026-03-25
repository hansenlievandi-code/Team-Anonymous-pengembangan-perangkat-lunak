import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { sidebarItems } from "./sidebardata";
import BookmarkIcon from "../fitur/bookmark";

export const Sidebar = () => {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const refreshBookmarks = () => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setFavoriteIds(saved);

  };
  useEffect(() => {
    refreshBookmarks();
  }, []);

  const displayItems = showFavoritesOnly
    ? sidebarItems.filter((item) => favoriteIds.includes(item.id))
    : sidebarItems;

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h5 className="fw-bold mb-0" style={{ color: "var(--sidebar-text)" }}>
          {showFavoritesOnly ? "⭐ Materi Favorit" : "📚 Dokumentasi Python"}
        </h5>
        <small className="text-muted">Pilih topik untuk mempelajari</small>
      </div>

      <div className="sidebar-content">
        <ul className="list-group list-group-flush">
          {displayItems.length > 0 ? (
           displayItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive, isPending }) =>
                isPending ? "list-group-item" : isActive ? "list-group-item active" : "list-group-item"
              }
            >
              <div className="d-flex align-items-center justify-content-between w-100">
                <div  className="d-flex align-items-center">
                  <span className="me-2">•</span>
                  <span>{item.label}</span>
                </div>
                <BookmarkIcon pageId={item.id} onToggle={refreshBookmarks} />
              </div>
            </NavLink>
          ))
        ) : (
          <div className="p-3 text-center text-muted small">
              Tidak ada materi favorit ditemukan.
          </div>
        )}
        </ul>
      </div>

      <div
        className="sidebar-footer p-3 border-top"
        style={{ borderColor: "var(--sidebar-border)" }}
      >
        <div className="d-grid gap-2">
          <button className={`btn btn-sm ${showFavoritesOnly ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => {
            refreshBookmarks();
            setShowFavoritesOnly(!showFavoritesOnly);
          }}
          >
            <i className={`"bi ${showFavoritesOnly ? 'bi-arrow-left' : 'bi-star'} me-1`}></i> {showFavoritesOnly ? "Kembali ke Default" : "List Favorit"}
          </button>
           <Link to="/discussion" className="btn btn-sm btn-outline-success">
            <i className="bi bi-bug me-1"></i> Discussion
          </Link>
          <Link to="/report-bug" className="btn btn-sm btn-outline-danger">
            <i className="bi bi-bug me-1"></i> Report Bug/Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};
