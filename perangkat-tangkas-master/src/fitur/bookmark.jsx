import { useEffect, useState } from "react";

export default function BookmarkIcon({ pageId, onToggle }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarked(saved.includes(pageId));
  }, [pageId]);

  const toggle = (e) => {
    e.stopPropagation();      
    e.preventDefault();       

    let saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (saved.includes(pageId)) {
      saved = saved.filter(id => id !== pageId);
    } else {
      saved.push(pageId);
    }

    localStorage.setItem("bookmarks", JSON.stringify(saved));
    setBookmarked(!bookmarked);

    if (onToggle) {
      onToggle();
    }
  };

  return (
    <span
      onClick={toggle}
      style={{
        cursor: "pointer",
        fontSize: "18px",
        marginLeft: "8px"
      }}
    >
      {bookmarked ? "⭐" : "✰"}
    </span>
  );
}
