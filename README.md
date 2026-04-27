import Link from "next/link";

const tests = [
  {
    href: "/side-hustle",
    title: "What Business Were You Built For?",
    subtitle: "The Founder's Blueprint",
    description: "Discover which of 5 entrepreneur archetypes matches your wiring — and the exact path your personality is built to win at.",
    duration: "4 min",
    color: "#FF2E63",
    bg: "#1a0008",
  },
  {
    href: "/money-block",
    title: "What's Quietly Keeping You Broke?",
    subtitle: "The Wealth Block Diagnostic",
    description: "It's not your skills. It's a hidden money block sabotaging you since before you knew what money was.",
    duration: "4 min",
    color: "#FF3D71",
    bg: "#1a0008",
  },
  {
    href: "/procrastination",
    title: "Why You Really Can't Just Start",
    subtitle: "The Procrastination Diagnostic",
    description: "Procrastination isn't a discipline problem. It's a fear pattern with 5 distinct flavors. Find yours.",
    duration: "4 min",
    color: "#F0ABFC",
    bg: "#1a0019",
  },
  {
    href: "/own-boss",
    title: "Are You Built to Be Your Own Boss?",
    subtitle: "The Readiness Diagnostic",
    description: "Most quizzes will tell you what you want to hear. This one won't. Brutal honesty, scoring, and a verdict.",
    duration: "4 min",
    color: "#FFD700",
    bg: "#1a1500",
  },
  {
    href: "/leadership-shadow",
    title: "What's Your Hidden Leadership Shadow?",
    subtitle: "The Shadow Assessment",
    description: "Every leader has a shadow — a survival strategy that became a personality, then a ceiling. The deepest test.",
    duration: "5 min",
    color: "#A78BFA",
    bg: "#0d0019",
  },
];

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080a",
      fontFamily: "'Inter', sans-serif",
      padding: "60px 20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08080a; }
        a { text-decoration: none; }
        .test-card { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
        .test-card:hover { transform: translateY(-6px); }
      `}</style>

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontWeight: 600,
          }}>
            ◆ 5 PERSONALITY TESTS · NO EMAIL REQUIRED ◆
          </p>
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: 20,
          }}>
            Tests That<br />
            <span style={{ fontStyle: "italic", color: "#FF2E63" }}>Read You</span> Like a Book
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 2.8vw, 19px)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            maxWidth: 540,
            margin: "0 auto",
            fontWeight: 400,
          }}>
            Five diagnostics for entrepreneurs, creators, and people doing the inner work of building something real. Pick one — or take them all.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          {tests.map((t) => (
            <Link key={t.href} href={t.href} className="test-card" style={{
              display: "block",
              background: t.bg,
              border: `1px solid ${t.color}30`,
              borderRadius: 12,
              padding: "32px 28px",
              color: "#fff",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 16 }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: t.color,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>
                  ◆ {t.subtitle}
                </p>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: t.color,
                  border: `1px solid ${t.color}50`,
                  padding: "3px 10px",
                  borderRadius: 12,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>
                  ⏱ {t.duration}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(22px, 4vw, 30px)",
                fontWeight: 800,
                color: t.color,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}>
                {t.title}
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
                marginBottom: 16,
                fontWeight: 400,
              }}>
                {t.description}
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: t.color,
                letterSpacing: "0.15em",
                fontWeight: 600,
                textTransform: "uppercase",
              }}>
                Take the Test →
              </p>
            </Link>
          ))}
        </div>

        <p style={{
          textAlign: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.2em",
          marginTop: 60,
          textTransform: "uppercase",
        }}>
          ◆ FREE · NO SIGN-UP · YOUR DATA STAYS YOURS ◆
        </p>
      </div>
    </div>
  );
}
