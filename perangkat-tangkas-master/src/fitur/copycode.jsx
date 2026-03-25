import { useState } from "react";

export default function CodeBlock({ title, subtitle, code, theme }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-example position-relative">
      {title && (
        subtitle ? (
        <h4 className={`mt-0 mb-1`}>{title}</h4>
        ) : (
        <h5 className={`mt-0 mb-3`}>{title}</h5>
        )
      )}
      {subtitle && (
      <div>
        {subtitle}
      </div>
      )}
      <button 
        onClick={handleCopy} 
        className={`btn btn-sm ${copied ? 'btn-success' : 'btn-outline-secondary'}`}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          fontSize: "12px",
          opacityz: 0.8
        }}
      >
        {copied ? "Tersalin!" : "Salin Kode"}
      </button>

      <div className="code-block">
        <pre className="mb-0">
            <code style={{ color: theme === 'dark' ? '#7dd3fc' : '#0369a1' }}>
                {code}
            </code>
        </pre>
      </div>
    </div>
  );
}