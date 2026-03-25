import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

export const ReportBug = () => {
  const { theme } = useOutletContext();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('bug');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => navigate(-1), 2500); 
    }, 1500);
  };

  const fullPageOverlay = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme === 'dark' ? '#0f172a' : '#f8fafc',
    backgroundImage: theme === 'dark' 
      ? `radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0, transparent 50%), 
         radial-gradient(at 100% 100%, rgba(30, 41, 59, 1) 0, transparent 50%)`
      : `radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0, transparent 50%), 
         radial-gradient(at 100% 100%, rgba(226, 232, 240, 1) 0, transparent 50%)`,
    backgroundSize: 'cover',
  };

  const inputStyle = {
    borderRadius: '12px',
    fontSize: '0.9rem',
    border: '1px solid',
    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
    backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
    color: theme === 'dark' ? '#f8fafc' : '#1e293b',
    padding: '12px 16px'
  };

  return (
    <div style={fullPageOverlay}>
      <div className="card shadow-lg p-4 text-center border-0" style={{ 
        width: '90%', 
        maxWidth: '450px', 
        borderRadius: '28px',
        backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
        color: theme === 'dark' ? '#f1f5f9' : '#0f172a'
      }}>

        {status === 'success' ? (
          <div className="py-5 animate-fade-in">
             <h2 className="fw-bold mb-2">Terima Kasih!</h2>
             <p className="opacity-75">Laporanmu sudah kami terima. Kami akan segera memeriksanya untuk memberikan pengalaman belajar yang lebih baik.</p>
             <div className="mt-4 text-primary spinner-border spinner-border-sm"></div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="fw-bold mb-1">Help Us Improve</h3>
              <p className="small opacity-75">Punya masukan atau menemukan error?</p>
            </div>

            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
                <label className="form-label small fw-bold opacity-75 text-uppercase">Judul Masalah</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Apa kendala kamu..." 
                  style={inputStyle}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold opacity-75 text-uppercase">Kategori</label>
                <div className="d-flex gap-2">
                  {[{id:'bug', n:'🐛Bug'}, {id:'saran', n:'💡Saran'}, {id:'materi', n:'📝Materi'}].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className="btn btn-sm flex-grow-1 py-2"
                      style={{
                        borderRadius: '10px',
                        border: 'none',
                        backgroundColor: category === cat.id ? '#6366f1' : (theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : '#f1f5f9'),
                        color: category === cat.id ? '#fff' : (theme === 'dark' ? '#94a3b8' : '#64748b'),
                        transition: '0.2s'
                      }}
                    >
                      {cat.n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold opacity-75 text-uppercase">Deskripsi</label>
                <textarea 
                  className="form-control"
                  rows="4" 
                  placeholder="Jelaskan detail kendala Anda..."
                  style={inputStyle}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold py-3 mb-2 border-0 shadow-sm"
                      style={{ borderRadius: '14px', backgroundColor: '#6366f1' }}>
                {status === 'loading' ? 'MENGIRIM...' : 'SUBMIT FEEDBACK'}
              </button>
              
              <button type="button" className="btn btn-link w-100 text-decoration-none text-muted small"
                      onClick={() => navigate(-1)}>
                Mungkin Nanti Saja
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};