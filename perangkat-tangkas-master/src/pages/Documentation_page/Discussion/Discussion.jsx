import { useState, useEffect } from "react";
import { Navbar } from "../../../component/Navbar";

const avatar = (name) => {
  const colors = ["#e76f51","#2a9d8f","#e9c46a","#264653","#a8dadc","#457b9d","#f4a261","#6d6875"];
  const i = name.charCodeAt(0) % colors.length;
  return { bg: colors[i], initials: name.slice(0, 2).toUpperCase() };
};

const timeAgo = (date) => {
  const diff = Math.floor((Date.now() - date) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

const tagColors = {
  Question:   { bg: "#fff3f0", border: "#e76f51", text: "#c1440e" },
  Discussion: { bg: "#f0faf8", border: "#2a9d8f", text: "#1f7d72" },
  Tip:        { bg: "#fffbf0", border: "#d4a017", text: "#a07800" },
  Help:       { bg: "#f0f5ff", border: "#457b9d", text: "#2c5f7e" },
};

const initialThreads = [
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
  .disc-wrap * { box-sizing: border-box; }

  /* ===== DARK (default) ===== */
  .disc-wrap { font-family: 'DM Sans', sans-serif; min-height: 100vh; background: #0f0f0f; color: #f0ede8; transition: background 0.2s, color 0.2s; }
  .disc-hero { padding: 3rem 2rem 2rem; max-width: 820px; margin: 0 auto; }
  .disc-hero h1 { font-family: 'Lora', serif; font-size: 2.6rem; font-weight: 700; margin: 0 0 0.3rem; letter-spacing: -1px; color: #f0ede8; }
  .disc-hero p { color: #777; font-size: 0.9rem; font-weight: 300; margin: 0; }
  .disc-divider { height: 1px; background: #1e1e1e; margin: 0 2rem; }
  .disc-toolbar { max-width: 820px; margin: 0 auto; padding: 0 2rem 1.5rem; display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center; }
  .disc-cat { border: 1px solid #2a2a2a; background: none; color: #888; padding: 0.35rem 1rem; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 500; cursor: pointer; border-radius: 99px; transition: all 0.15s; letter-spacing: 0.3px; }
  .disc-cat:hover { border-color: #555; color: #f0ede8; }
  .disc-cat.active { background: #f0ede8; color: #0f0f0f; border-color: #f0ede8; font-weight: 600; }
  .disc-list { max-width: 820px; margin: 0 auto; padding: 0 2rem 2rem; display: flex; flex-direction: column; gap: 2px; }
  .disc-card { background: #161616; border: 1px solid #222; padding: 1.4rem 1.6rem; cursor: pointer; transition: background 0.15s, border-color 0.15s; position: relative; }
  .disc-card:hover { background: #1c1c1c; border-color: #333; }
  .disc-card.pinned { border-left: 3px solid #e76f51; }
  .disc-pin { position: absolute; top: 1rem; right: 1rem; font-size: 0.75rem; color: #e76f51; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; }
  .disc-meta { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
  .disc-av { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.62rem; font-weight: 700; color: #fff; flex-shrink: 0; }
  .disc-author { font-size: 0.82rem; font-weight: 600; color: #ccc; }
  .disc-time { font-size: 0.75rem; color: #555; }
  .disc-badge { font-size: 0.68rem; font-weight: 600; padding: 0.18rem 0.6rem; border-radius: 3px; letter-spacing: 0.4px; text-transform: uppercase; border: 1px solid; }
  .disc-title { font-family: 'Lora', serif; font-size: 1.1rem; font-weight: 600; color: #f0ede8; margin-bottom: 0.4rem; line-height: 1.45; }
  .disc-preview { font-size: 0.85rem; color: #666; line-height: 1.65; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .disc-foot { display: flex; gap: 1rem; align-items: center; }
  .disc-btn-like { background: none; border: 1px solid #2a2a2a; color: #666; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; cursor: pointer; padding: 0.25rem 0.7rem; border-radius: 99px; transition: all 0.15s; display: flex; align-items: center; gap: 0.3rem; }
  .disc-btn-like:hover { border-color: #e76f51; color: #e76f51; }
  .disc-btn-like.liked { background: #1a0a08; border-color: #e76f51; color: #e76f51; }
  .disc-replies-ct { font-size: 0.78rem; color: #555; }
  .disc-fab { position: fixed; bottom: 2rem; right: 2rem; background: #f0ede8; color: #0f0f0f; border: none; width: 52px; height: 52px; border-radius: 50%; font-size: 1.4rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.5); transition: transform 0.15s, box-shadow 0.15s; z-index: 50; }
  .disc-fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(0,0,0,0.6); }
  .disc-empty { text-align: center; padding: 3rem; color: #444; font-size: 0.9rem; }

  /* Overlay */
  .disc-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 100; display: flex; align-items: center; justify-content: center;  padding: 5rem 1rem 1rem; backdrop-filter: blur(3px); }

  /* Thread modal - DARK */
  .disc-tmodal { background: #161616; border: 1px solid #2a2a2a; width: 100%; max-width: 640px; max-height: 90vh; display: flex; flex-direction: column; border-top: 3px solid #e76f51; animation: fadeUp 0.2s ease; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .disc-tmodal-head { padding: 1.2rem 1.5rem; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: flex-start; flex-shrink: 0; }
  .disc-tmodal-title { font-family: 'Lora', serif; font-size: 1.15rem; font-weight: 600; color: #f0ede8; line-height: 1.4; flex: 1; margin-right: 1rem; }
  .disc-close { background: none; border: none; color: #555; font-size: 1.3rem; cursor: pointer; line-height: 1; padding: 0; transition: color 0.15s; }
  .disc-close:hover { color: #f0ede8; }
  .disc-tmodal-body { padding: 1.2rem 1.5rem; font-size: 0.88rem; color: #aaa; line-height: 1.75; border-bottom: 1px solid #222; flex-shrink: 0; }
  .disc-tmodal-acts { padding: 0.8rem 1.5rem; border-bottom: 1px solid #222; display: flex; gap: 1rem; align-items: center; flex-shrink: 0; }
  .disc-replies-list { overflow-y: auto; flex: 1; padding: 0.5rem 1.5rem; }
  .disc-reply-item { padding: 0.9rem 0; border-bottom: 1px solid #1e1e1e; }
  .disc-reply-item:last-child { border-bottom: none; }
  .disc-reply-text { font-size: 0.85rem; color: #aaa; line-height: 1.65; margin: 0.4rem 0 0.5rem; }
  .disc-reply-form { padding: 1rem 1.5rem; border-top: 1px solid #222; background: #111; flex-shrink: 0; }
  .disc-reply-form h4 { font-family: 'Lora', serif; font-size: 0.9rem; color: #f0ede8; margin: 0 0 0.7rem; }
  .disc-input { width: 100%; background: #1a1a1a; border: 1px solid #2a2a2a; color: #f0ede8; padding: 0.5rem 0.8rem; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; outline: none; margin-bottom: 0.5rem; transition: border-color 0.15s; }
  .disc-input:focus { border-color: #e76f51; }
  .disc-textarea { width: 100%; background: #1a1a1a; border: 1px solid #2a2a2a; color: #f0ede8; padding: 0.6rem 0.8rem; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; outline: none; resize: vertical; min-height: 75px; margin-bottom: 0.5rem; transition: border-color 0.15s; }
  .disc-textarea:focus { border-color: #e76f51; }
  .disc-submit { background: #e76f51; color: #fff; border: none; padding: 0.5rem 1.2rem; font-family: 'DM Sans', sans-serif; font-size: 0.83rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
  .disc-submit:hover { background: #c1440e; }

  /* New thread modal - DARK */
  .disc-nmodal { background: #161616; border: 1px solid #2a2a2a; width: 100%; max-width: 520px; border-top: 3px solid #2a9d8f; animation: fadeUp 0.2s ease; }
  .disc-nmodal-head { padding: 1.2rem 1.5rem; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: center; background: #111; }
  .disc-nmodal-title { font-family: 'Lora', serif; font-size: 1.05rem; font-weight: 600; color: #f0ede8; }
  .disc-nmodal-body { padding: 1.4rem 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
  .disc-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; color: #555; display: block; margin-bottom: 0.3rem; }
  .disc-select { width: 100%; background: #1a1a1a; border: 1px solid #2a2a2a; color: #f0ede8; padding: 0.5rem 0.8rem; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; outline: none; cursor: pointer; }
  .disc-select:focus { border-color: #2a9d8f; }
  .disc-submit-green { background: #2a9d8f; color: #fff; border: none; padding: 0.55rem 1.4rem; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; align-self: flex-start; }
  .disc-submit-green:hover { background: #1f7d72; }

  /* ===== LIGHT THEME - disc-wrap ===== */
  .disc-wrap.light { background: #f7f3ee; color: #1a1a1a; }
  .disc-wrap.light .disc-hero h1 { color: #1a1a1a; }
  .disc-wrap.light .disc-hero p { color: #888; }
  .disc-wrap.light .disc-divider { background: #e8e0d6; }
  .disc-wrap.light .disc-cat { border-color: #ddd; color: #666; }
  .disc-wrap.light .disc-cat:hover { border-color: #999; color: #1a1a1a; }
  .disc-wrap.light .disc-cat.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
  .disc-wrap.light .disc-card { background: #fff; border-color: #e8e0d6; }
  .disc-wrap.light .disc-card:hover { background: #faf8f5; border-color: #c0a882; }
  .disc-wrap.light .disc-title { color: #1a1a1a; }
  .disc-wrap.light .disc-preview { color: #888; }
  .disc-wrap.light .disc-author { color: #333; }
  .disc-wrap.light .disc-time { color: #bbb; }
  .disc-wrap.light .disc-btn-like { border-color: #ddd; color: #bbb; }
  .disc-wrap.light .disc-replies-ct { color: #bbb; }
  .disc-wrap.light .disc-pin { color: #e76f51; }
  .disc-wrap.light .disc-fab { background: #1a1a1a; color: #fff; }
  .disc-wrap.light .disc-empty { color: #bbb; }

  /* ===== LIGHT THEME - disc-tmodal (di luar disc-wrap) ===== */
  .disc-tmodal.light { background: #fff; border-color: #e8e0d6; }
  .disc-tmodal.light .disc-tmodal-head { border-color: #e8e0d6; }
  .disc-tmodal.light .disc-tmodal-title { color: #1a1a1a; }
  .disc-tmodal.light .disc-tmodal-body { color: #555; border-color: #e8e0d6; }
  .disc-tmodal.light .disc-tmodal-acts { border-color: #e8e0d6; }
  .disc-tmodal.light .disc-author { color: #333; }
  .disc-tmodal.light .disc-time { color: #bbb; }
  .disc-tmodal.light .disc-reply-item { border-color: #f0ebe3; }
  .disc-tmodal.light .disc-reply-text { color: #555; }
  .disc-tmodal.light .disc-reply-form { background: #faf8f5; border-color: #e8e0d6; }
  .disc-tmodal.light .disc-reply-form h4 { color: #1a1a1a; }
  .disc-tmodal.light .disc-input { background: #fff; border-color: #d0c8be; color: #1a1a1a; }
  .disc-tmodal.light .disc-textarea { background: #fff; border-color: #d0c8be; color: #1a1a1a; }
  .disc-tmodal.light .disc-close { color: #aaa; }
  .disc-tmodal.light .disc-close:hover { color: #1a1a1a; }
  .disc-tmodal.light .disc-btn-like { border-color: #ddd; color: #bbb; }
  .disc-tmodal.light .disc-replies-ct { color: #bbb; }

  /* ===== LIGHT THEME - disc-nmodal (di luar disc-wrap) ===== */
  .disc-nmodal.light { background: #fff; border-color: #e8e0d6; }
  .disc-nmodal.light .disc-nmodal-head { background: #faf8f5; border-color: #e8e0d6; }
  .disc-nmodal.light .disc-nmodal-title { color: #1a1a1a; }
  .disc-nmodal.light .disc-label { color: #999; }
  .disc-nmodal.light .disc-input { background: #fff; border-color: #d0c8be; color: #1a1a1a; }
  .disc-nmodal.light .disc-textarea { background: #fff; border-color: #d0c8be; color: #1a1a1a; }
  .disc-nmodal.light .disc-select { background: #fff; border-color: #d0c8be; color: #1a1a1a; }
  .disc-nmodal.light .disc-close { color: #aaa; }
  .disc-nmodal.light .disc-close:hover { color: #1a1a1a; }
`;

export const Discussion = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [activeTag, setActiveTag] = useState("All");
  const [openThread, setOpenThread] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [replyForm, setReplyForm] = useState({ author: "", body: "" });
  const [newForm, setNewForm] = useState({ author: "", title: "", body: "", tag: "Question" });
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const tags = ["All", ...Object.keys(tagColors)];

  const filtered = threads
    .filter(t => activeTag === "All" || t.tag === activeTag)
    .sort((a, b) => b.pinned - a.pinned);

  const handleLikeThread = (id, e) => {
    e && e.stopPropagation();
    setThreads(ts => ts.map(t => {
      if (t.id !== id) return t;
      const liked = t.likedBy.has("me");
      const next = new Set(t.likedBy);
      liked ? next.delete("me") : next.add("me");
      return { ...t, likes: liked ? t.likes - 1 : t.likes + 1, likedBy: next };
    }));
    if (openThread?.id === id) {
      setOpenThread(prev => {
        const liked = prev.likedBy.has("me");
        const next = new Set(prev.likedBy);
        liked ? next.delete("me") : next.add("me");
        return { ...prev, likes: liked ? prev.likes - 1 : prev.likes + 1, likedBy: next };
      });
    }
  };

  const handleLikeReply = (replyId) => {
    setThreads(ts => ts.map(t => {
      if (t.id !== openThread.id) return t;
      return {
        ...t, replies: t.replies.map(r => {
          if (r.id !== replyId) return r;
          const liked = r.likedBy.has("me");
          const next = new Set(r.likedBy);
          liked ? next.delete("me") : next.add("me");
          return { ...r, likes: liked ? r.likes - 1 : r.likes + 1, likedBy: next };
        })
      };
    }));
    setOpenThread(prev => ({
      ...prev, replies: prev.replies.map(r => {
        if (r.id !== replyId) return r;
        const liked = r.likedBy.has("me");
        const next = new Set(r.likedBy);
        liked ? next.delete("me") : next.add("me");
        return { ...r, likes: liked ? r.likes - 1 : r.likes + 1, likedBy: next };
      })
    }));
  };

  const handleReply = () => {
    if (!replyForm.author.trim() || !replyForm.body.trim()) return;
    const reply = { id: Date.now(), author: replyForm.author, time: Date.now(), body: replyForm.body, likes: 0, likedBy: new Set() };
    setThreads(ts => ts.map(t => t.id === openThread.id ? { ...t, replies: [...t.replies, reply] } : t));
    setOpenThread(prev => ({ ...prev, replies: [...prev.replies, reply] }));
    setReplyForm({ author: "", body: "" });
  };

  const handleNewThread = () => {
    if (!newForm.author.trim() || !newForm.title.trim() || !newForm.body.trim()) return;
    const tc = tagColors[newForm.tag];
    setThreads(ts => [{
      id: Date.now(), pinned: false,
      author: newForm.author, time: Date.now(),
      tag: newForm.tag, tagColor: tc.border,
      title: newForm.title, body: newForm.body,
      likes: 0, likedBy: new Set(), replies: [],
    }, ...ts]);
    setNewForm({ author: "", title: "", body: "", tag: "Question" });
    setShowNew(false);
  };

  const openCard = (t) => {
    setOpenThread(threads.find(x => x.id === t.id));
    setReplyForm({ author: "", body: "" });
  };

  return (
    <>
      <style>{css}</style>
      <Navbar />
      <div className={`disc-wrap ${theme}`}>
        <div className="disc-hero">
          <h1>Forum Diskusi</h1>
          <p>{threads.length} threads · {threads.reduce((a, t) => a + t.replies.length, 0)} replies</p>
        </div>

        <div className="disc-divider" />

        <div className="disc-toolbar" style={{ paddingTop: "1.2rem" }}>
          {tags.map(tag => (
            <button key={tag} className={`disc-cat${activeTag === tag ? " active" : ""}`} onClick={() => setActiveTag(tag)}>
              {tag}
            </button>
          ))}
        </div>

        <div className="disc-list">
          {filtered.length === 0 && <div className="disc-empty">Tidak ada thread di kategori ini.</div>}
          {filtered.map(t => {
            const av = avatar(t.author);
            const tc = tagColors[t.tag];
            const liked = t.likedBy.has("me");
            return (
              <div key={t.id} className={`disc-card${t.pinned ? " pinned" : ""}`} onClick={() => openCard(t)}>
                {t.pinned && <span className="disc-pin">📌 pinned</span>}
                <div className="disc-meta">
                  <div className="disc-av" style={{ background: av.bg }}>{av.initials}</div>
                  <span className="disc-author">{t.author}</span>
                  <span className="disc-time">{timeAgo(t.time)}</span>
                  <span className="disc-badge" style={{ background: tc.bg, borderColor: tc.border, color: tc.text }}>{t.tag}</span>
                </div>
                <div className="disc-title">{t.title}</div>
                <div className="disc-preview">{t.body}</div>
                <div className="disc-foot">
                  <button className={`disc-btn-like${liked ? " liked" : ""}`} onClick={e => handleLikeThread(t.id, e)}>
                    ♥ {t.likes}
                  </button>
                  <span className="disc-replies-ct">💬 {t.replies.length} replies</span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="disc-fab" onClick={() => setShowNew(true)} title="Buat Thread Baru">＋</button>
      </div>

      {/* Thread detail modal */}
      {openThread && (() => {
        const t = threads.find(x => x.id === openThread.id) || openThread;
        const av = avatar(t.author);
        const tc = tagColors[t.tag];
        const liked = t.likedBy.has("me");
        return (
          <div className="disc-overlay" onClick={() => setOpenThread(null)}>
            <div className={`disc-tmodal ${theme}`} onClick={e => e.stopPropagation()}>
              <div className="disc-tmodal-head">
                <div style={{ flex: 1, marginRight: "1rem" }}>
                  <div className="disc-meta" style={{ marginBottom: "0.5rem" }}>
                    <div className="disc-av" style={{ background: av.bg }}>{av.initials}</div>
                    <span className="disc-author">{t.author}</span>
                    <span className="disc-time">{timeAgo(t.time)}</span>
                    <span className="disc-badge" style={{ background: tc.bg, borderColor: tc.border, color: tc.text }}>{t.tag}</span>
                  </div>
                  <div className="disc-tmodal-title">{t.title}</div>
                </div>
                <button className="disc-close" onClick={() => setOpenThread(null)}>×</button>
              </div>
              <div className="disc-tmodal-body">{t.body}</div>
              <div className="disc-tmodal-acts">
                <button className={`disc-btn-like${liked ? " liked" : ""}`} onClick={() => handleLikeThread(t.id)}>
                  ♥ {t.likes} Likes
                </button>
                <span className="disc-replies-ct">💬 {t.replies.length} Replies</span>
              </div>
              <div className="disc-replies-list">
                {t.replies.length === 0 && (
                  <div style={{ textAlign: "center", padding: "1.5rem 0", color: "#888", fontSize: "0.85rem" }}>
                    Belum ada reply. Jadilah yang pertama!
                  </div>
                )}
                {t.replies.map(r => {
                  const rav = avatar(r.author);
                  const rLiked = r.likedBy.has("me");
                  return (
                    <div key={r.id} className="disc-reply-item">
                      <div className="disc-meta">
                        <div className="disc-av" style={{ background: rav.bg, width: 24, height: 24, fontSize: "0.58rem" }}>{rav.initials}</div>
                        <span className="disc-author" style={{ fontSize: "0.8rem" }}>{r.author}</span>
                        <span className="disc-time">{timeAgo(r.time)}</span>
                      </div>
                      <div className="disc-reply-text">{r.body}</div>
                      <button className={`disc-btn-like${rLiked ? " liked" : ""}`} onClick={() => handleLikeReply(r.id)}>
                        ♥ {r.likes}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="disc-reply-form">
                <h4>Tulis Balasan</h4>
                <input className="disc-input" placeholder="Nama kamu" value={replyForm.author} onChange={e => setReplyForm(f => ({ ...f, author: e.target.value }))} />
                <textarea className="disc-textarea" placeholder="Tulis balasanmu..." value={replyForm.body} onChange={e => setReplyForm(f => ({ ...f, body: e.target.value }))} />
                <button className="disc-submit" onClick={handleReply}>Kirim →</button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* New thread modal */}
      {showNew && (
        <div className="disc-overlay" onClick={() => setShowNew(false)}>
          <div className={`disc-nmodal ${theme}`} onClick={e => e.stopPropagation()}>
            <div className="disc-nmodal-head">
              <span className="disc-nmodal-title">Buat Thread Baru</span>
              <button className="disc-close" onClick={() => setShowNew(false)}>×</button>
            </div>
            <div className="disc-nmodal-body">
              <div>
                <label className="disc-label">Nama Kamu</label>
                <input className="disc-input" placeholder="Nama lengkap" value={newForm.author} onChange={e => setNewForm(f => ({ ...f, author: e.target.value }))} />
              </div>
              <div>
                <label className="disc-label">Kategori</label>
                <select className="disc-select" value={newForm.tag} onChange={e => setNewForm(f => ({ ...f, tag: e.target.value }))}>
                  {Object.keys(tagColors).map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="disc-label">Judul Thread</label>
                <input className="disc-input" placeholder="Tulis judul yang jelas dan spesifik" value={newForm.title} onChange={e => setNewForm(f => ({ ...f, title: e.target.value }))} />
              </div>
              <div>
                <label className="disc-label">Isi Diskusi</label>
                <textarea className="disc-textarea" style={{ minHeight: 100 }} placeholder="Jelaskan pertanyaan atau topik diskusimu..." value={newForm.body} onChange={e => setNewForm(f => ({ ...f, body: e.target.value }))} />
              </div>
              <button className="disc-submit-green" onClick={handleNewThread}>Posting Thread →</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};