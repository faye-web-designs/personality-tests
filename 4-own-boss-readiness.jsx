import { useState } from "react";

const questions = [
  { text: "It's Monday morning. Your alarm goes off. You have NO job, NO boss, and NO plan today. What's your real reaction?", subtext: "Not what you'd want to feel — what you'd actually feel.", options: [
    { text: "Excitement. I'd already have 3 things I want to attack today.", score: 3 },
    { text: "Mostly excited, but a little anxious about wasting the day", score: 2 },
    { text: "Honestly? I'd probably scroll for 2 hours before doing anything", score: 1 },
    { text: "Panic. I need structure to function.", score: 0 },
  ]},
  { text: "How do you feel about going 6+ months without a single paycheck?", subtext: "This is the actual reality of starting a business.", options: [
    { text: "I've already saved a runway. I can stomach it.", score: 3 },
    { text: "It would be tight but I'd find a way to make it work", score: 2 },
    { text: "I'd probably take side gigs to survive", score: 1 },
    { text: "That sounds like a nightmare. I need consistent income.", score: 0 },
  ]},
  { text: "When something you built fails publicly, your gut reaction is:", subtext: "The honest one — not the wise one you'd say later.", options: [
    { text: "Frustrated for an hour, then I'm asking what to fix", score: 3 },
    { text: "Hurt for a few days, but I bounce back", score: 2 },
    { text: "I'd want to hide for a few weeks", score: 1 },
    { text: "I'd take it personally and probably quit", score: 0 },
  ]},
  { text: "Your friend tells you they think your business idea is stupid. How long does it take you to recover?", subtext: "Public opinion will hit you constantly as a founder.", options: [
    { text: "About 5 minutes. Their opinion isn't data.", score: 3 },
    { text: "An hour or two. I check my conviction, then move forward.", score: 2 },
    { text: "A few days. I question myself.", score: 1 },
    { text: "I'd probably abandon the idea or seriously rethink it.", score: 0 },
  ]},
  { text: "Pick the most honest answer about how you handle ambiguity:", subtext: "Most of being a founder is making decisions without enough info.", options: [
    { text: "I make a decision with 60% info and adjust as I go", score: 3 },
    { text: "I gather info, then commit. I don't paralyze.", score: 2 },
    { text: "I research extensively before committing to anything", score: 1 },
    { text: "I struggle with decisions when there's no clear right answer", score: 0 },
  ]},
  { text: "When was the last time you finished something hard with no one watching?", subtext: "External accountability vs. internal accountability.", options: [
    { text: "Recently. I do hard things even when no one would know", score: 3 },
    { text: "Within the last few months", score: 2 },
    { text: "It's been a while — I struggle without someone counting on me", score: 1 },
    { text: "Honestly, I usually need accountability or deadlines", score: 0 },
  ]},
  { text: "How do you feel about selling — actually asking for money?", subtext: "If this part scares you, founder life will gut you.", options: [
    { text: "Comfortable. I see selling as helping people decide.", score: 3 },
    { text: "Mostly fine. A little nervous before, fine during.", score: 2 },
    { text: "I dread it. I'd rather give my work away than ask for money.", score: 1 },
    { text: "I avoid selling completely. Hope people just buy.", score: 0 },
  ]},
  { text: "Imagine working 60 hours/week for 2 years and making LESS than your old job. How do you feel?", subtext: "This is the actual math of startup life for most founders.", options: [
    { text: "Fine. I'm playing a long game and the cap is uncapped.", score: 3 },
    { text: "Hard but doable, if I see progress month over month", score: 2 },
    { text: "I'd start questioning the path around month 6", score: 1 },
    { text: "I wouldn't last. The math has to work much faster than that.", score: 0 },
  ]},
  { text: "What's your true relationship with rejection?", subtext: "You'll get rejected 50x more as a founder than an employee.", options: [
    { text: "It's data. Each 'no' tells me something about my offer.", score: 3 },
    { text: "It stings briefly, but doesn't slow me down", score: 2 },
    { text: "It hurts and I avoid putting myself in positions to get it", score: 1 },
    { text: "I take rejection deeply personally", score: 0 },
  ]},
  { text: "If your business made you wildly successful — like, genuinely rich — would the people in your life be happy for you?", subtext: "Your environment matters more than people realize.", options: [
    { text: "Yes — I have people who'd celebrate it with me", score: 3 },
    { text: "Most would be happy, a few would be weird about it", score: 2 },
    { text: "I'd lose some friends. There'd be tension.", score: 1 },
    { text: "I'd probably need to find new community entirely", score: 0 },
  ]},
  { text: "What's your real motivation for wanting to be your own boss?", subtext: "The wrong reasons fall apart. The right ones sustain you.", options: [
    { text: "I want to build something that's mine and matters", score: 3 },
    { text: "Freedom and autonomy over my time", score: 2 },
    { text: "I want to make a lot of money", score: 1 },
    { text: "I just don't want a boss telling me what to do", score: 0 },
  ]},
  { text: "Pick the description that fits you BEST right now:", subtext: "The honest one, even if it's uncomfortable.", options: [
    { text: "I'm already taking action on building something. Have momentum.", score: 3 },
    { text: "I'm doing research and planning. Ready to start soon.", score: 2 },
    { text: "I dream about it but haven't really started anything tangible", score: 1 },
    { text: "I'm mostly thinking about it. Not sure I'll actually do it.", score: 0 },
  ]},
];

const tiers = [
  {
    range: [0, 11],
    title: "The Dreamer Stage",
    archetype: "NOT YET — AND THAT'S OK",
    emoji: "🌱",
    color: "#A78BFA",
    bg: "#0d0019",
    tagline: "You're not built to be your own boss yet. But you could be — if you do the inner work first.",
    description: "Here's something most quizzes won't tell you: there's a HUGE difference between wanting freedom and being ready to handle freedom. Right now, you're in the wanting phase. That's not a failure — it's a real stage. Most founders spent years here before they were ready.\n\nBut you need to know what's true: starting a business right now, in your current state, would likely break you. Not because you lack ambition — because the foundational pieces aren't in place. You probably need: more financial runway, a thicker skin around rejection, more comfort with ambiguity, or stronger internal accountability. Maybe all four.\n\nThe good news? Every one of those is buildable. The founders you admire weren't born ready — they BECAME ready. And the work that makes you ready isn't business strategy. It's identity work, financial work, and skill-building. Spend 6-12 months on this, and you'll come back to entrepreneurship as a different person.",
    truth: "You don't have a business problem yet. You have a readiness problem.",
    nextSteps: ["Build 6 months of expenses in savings before you make any leaps", "Take a sales job for 6 months — it's the fastest way to build entrepreneurial muscles", "Start a side hustle while you're employed, NOT after you quit", "Find one person who's done what you want to do and shadow their journey for a year"],
    danger: "If you quit your job right now, statistically you'll be back at a worse one in 12 months and your savings will be gone. Don't do it.",
    encouragement: "Many of the most successful founders weren't ready at your stage either. The fact that you're being honest about where you are is actually a great sign.",
    timeline: "12-24 months of preparation",
  },
  {
    range: [12, 23],
    title: "The Side Hustle Stage",
    archetype: "READY TO START SMALL",
    emoji: "🔥",
    color: "#FBBF24",
    bg: "#1a1500",
    tagline: "You're ready to start — but not ready to quit your day job. Yet.",
    description: "You're closer than most. You have some of the right wiring — you handle ambiguity okay, you can take rejection without falling apart, and you're more action-oriented than your peers. But you're not quite at full-founder readiness yet. That's actually a perfect place to be.\n\nThe smartest move you can make right now is starting a side hustle while keeping your job. This isn't a compromise — it's the strategy most successful founders actually used. Pieter Levels worked on side projects for years before going full-time. Sara Blakely sold fax machines while building Spanx. Side hustling lets you test, iterate, and BUILD CONVICTION without betting your rent on it.\n\nYour 12-month plan: build something on the side that earns $1K/month. Not because $1K replaces your salary — but because earning your first dollar online changes you. After that, $10K/month is mostly skill and reps. Your goal isn't to escape your job. It's to make your job financially optional.",
    truth: "You're ready to start. You're just not ready to quit. Build first, leap second.",
    nextSteps: ["Pick ONE business model. Commit for 12 months minimum.", "Aim for $1K/month side income before considering quitting", "Use your day job as your investor — it's funding your transition", "Get profitable BEFORE you go full-time. Most founders do this backwards."],
    danger: "Don't romanticize quitting. The 'leap of faith' founder story is survivor bias. The smart founders built first, leapt second.",
    encouragement: "You're more ready than 80% of people who think about being entrepreneurs. The next 12 months can change your life.",
    timeline: "6-18 months to first $1K/month",
  },
  {
    range: [24, 31],
    title: "The Full-Time Ready Stage",
    archetype: "BUILT FOR THE LEAP",
    emoji: "⚡",
    color: "#00D4FF",
    bg: "#000a1a",
    tagline: "You have the wiring of a founder. Now it's about execution and timing.",
    description: "You're rare. Most people are NOT psychologically built for full-time entrepreneurship — they THINK they are, but the moment things get hard, they fold. You have the actual psychological architecture: you handle rejection without spiraling, you make decisions without all the info, you finish hard things without external accountability, and you understand selling as service rather than burden.\n\nWhat's holding you back isn't readiness — it's strategic clarity. You probably have multiple ideas you could pursue, and you might be flip-flopping between them or waiting for the 'perfect' moment. That waiting is costing you. The market won't wait. The window for your specific opportunity won't stay open forever.\n\nYour next move is to pick ONE thing and commit. Not for 6 months — for 24. Most founder failures aren't because they picked the wrong business; they're because they switched too soon. You have the rare ability to grind through hard years. Use it. Pick the vehicle that aligns with your strengths and run with it for 2 years before you even consider switching.",
    truth: "You're built for this. The only thing in your way is your refusal to commit to ONE thing for long enough.",
    nextSteps: ["Choose your business model THIS WEEK. Decide and execute.", "Commit publicly — tell people. Make backing out embarrassing.", "Build a 24-month plan. The first 12 will be painful.", "Find ONE mentor who's 5 years ahead of you. Buy their time if needed."],
    danger: "Your biggest risk is shiny-object syndrome. You see opportunity everywhere. Pick one, dig deep, and win the long game.",
    encouragement: "If you commit fully to one thing for 24 months, you'll be in the top 1% of founders — most don't have your wiring AND don't commit.",
    timeline: "12-24 months to $10K/month income",
  },
  {
    range: [32, 36],
    title: "The Born-For-It Stage",
    archetype: "BUILT TO BUILD",
    emoji: "👑",
    color: "#FFD700",
    bg: "#1a1500",
    tagline: "You weren't designed to work for someone else. You were built to build.",
    description: "You're not just ready to be your own boss — you might be incapable of being a good employee long-term. You have the personality, financial preparation, mental toughness, and self-driven motivation that makes traditional employment feel like wearing shoes that are slightly too small. You'll function in a job, but you'll never be fully alive in one.\n\nYou know it. Other people know it too. The question isn't whether you should do this — it's why you haven't already. There's probably a specific block you're hitting: maybe it's perfectionism (waiting for the perfect idea), maybe it's people-pleasing (waiting for permission), maybe it's a self-worth issue dressed up as 'preparation.' But your readiness isn't the problem. Your action is.\n\nThe risk for someone like you is different than for everyone else. The risk isn't that you'll fail. It's that you'll keep delaying — staying in a job that's slowly grinding you down — because the longer you wait, the more comfortable the cage feels. Don't be 50 still talking about the business you'll start someday. Most founders who succeed at your level started before they felt ready, because they realized waiting feels like preparation but is actually fear.",
    truth: "You don't need more readiness. You need to start before the perfect moment arrives — because it never will.",
    nextSteps: ["Set a hard deadline within 90 days to launch SOMETHING — even ugly.", "Stop preparing. Start shipping. The market teaches you faster than research.", "Take action on a scale that scares you. Small steps reinforce the small identity.", "Surround yourself with other founders, NOT employees. Your environment shapes your speed."],
    danger: "Your biggest risk is staying employed too long. The skills that make you valuable to a boss are also the skills that make you angry at having a boss.",
    encouragement: "You're in rare air. Most people will spend their lives wishing they had your wiring. Don't waste it on someone else's company.",
    timeline: "Now. Like, actually now.",
  },
];

export default function OwnBossTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [started, setStarted] = useState(false);

  const progress = (current / questions.length) * 100;

  function handleNext() {
    if (selected === null) return;
    const newScore = score + selected.score;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      if (current + 1 < questions.length) {
        setScore(newScore);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        const tier = tiers.find(t => newScore >= t.range[0] && newScore <= t.range[1]);
        setResult({ ...tier, finalScore: newScore });
      }
    }, 350);
  }

  function restart() {
    setCurrent(0); setScore(0); setSelected(null); setResult(null); setStarted(false);
  }

  const q = questions[current];

  return (
    <div style={{ minHeight: "100vh", background: result ? result.bg : "#08080a", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 18px", transition: "background 1s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;900&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        .opt { background: rgba(255,255,255,0.025); border: 2px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.78); padding: 18px 22px; cursor: pointer; text-align: left; font-family: 'Archivo', sans-serif; font-size: 15px; line-height: 1.5; transition: all 0.2s; width: 100%; margin-bottom: 10px; font-weight: 500; }
        .opt:hover { border-color: rgba(255,255,255,0.5); color: #fff; transform: translateX(4px); }
        .opt.sel { border-color: #fff; color: #fff; background: rgba(255,255,255,0.08); transform: translateX(4px); }
        .nxt { background: #fff; color: #000; border: none; padding: 16px 44px; font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; cursor: pointer; margin-top: 24px; opacity: 0.25; transition: all 0.2s; text-transform: uppercase; }
        .nxt.act { opacity: 1; }
        .nxt.act:hover { transform: translateY(-2px); }
        .start-btn { background: #fff; color: #000; border: none; padding: 20px 56px; font-family: 'Space Mono', monospace; font-size: 14px; font-weight: 700; letter-spacing: 0.15em; cursor: pointer; margin-top: 32px; text-transform: uppercase; transition: all 0.3s; }
        .start-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(255,255,255,0.15); }
        .rst { background: transparent; border: 2px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); padding: 14px 30px; font-family: 'Space Mono', monospace; font-size: 12px; cursor: pointer; margin-top: 28px; text-transform: uppercase; letter-spacing: 0.1em; }
        .rst:hover { border-color: #fff; color: #fff; }
        .fade { opacity: 0; transform: translateY(12px); }
        .fade-in { opacity: 1; transform: translateY(0); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {!started ? (
        <div className="fade-in" style={{ width: "100%", maxWidth: 620, textAlign: "center" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>◾ THE READINESS DIAGNOSTIC ◾</p>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(44px, 9vw, 84px)", color: "#fff", margin: 0, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 24, textTransform: "uppercase" }}>
            Are You<br />ACTUALLY<br /><span style={{ color: "#FFD700" }}>Built</span> To Be<br />Your Own<br /><span style={{ fontStyle: "italic" }}>Boss?</span>
          </h1>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto 14px", fontWeight: 500 }}>
            Most quizzes will tell you what you want to hear. This one won't.
          </p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto", fontWeight: 400 }}>
            12 questions. Brutally honest scoring. 4 possible tiers. By the end, you'll know exactly where you actually stand — and what to do about it.
          </p>
          <button className="start-btn" onClick={() => setStarted(true)}>BEGIN THE TEST →</button>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", marginTop: 20, textTransform: "uppercase" }}>⏱ 4 MIN · UNCOMFORTABLY HONEST</p>
        </div>
      ) : !result ? (
        <div className={animating ? "fade" : "fade-in"} style={{ width: "100%", maxWidth: 620 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10, fontWeight: 700, letterSpacing: "0.05em" }}>
              <span>Q{String(current + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 4, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ height: 4, width: `${progress}%`, background: "linear-gradient(90deg, #FFD700, #00D4FF)", transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(22px, 4.5vw, 30px)", color: "#fff", marginBottom: 8, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "uppercase" }}>{q.text}</h2>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28, fontStyle: "italic" }}>{q.subtext}</p>
          <div>
            {q.options.map((opt, i) => (
              <button key={i} className={`opt${selected === opt ? " sel" : ""}`} onClick={() => setSelected(opt)}>{opt.text}</button>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={`nxt${selected ? " act" : ""}`} onClick={handleNext} disabled={selected === null}>{current + 1 === questions.length ? "GET MY VERDICT →" : "NEXT →"}</button>
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{ width: "100%", maxWidth: 700, textAlign: "center" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>◾ YOUR VERDICT ◾</p>
          <div style={{ fontSize: 64, marginBottom: 12 }}>{result.emoji}</div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>{result.archetype}</p>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(48px, 11vw, 84px)", color: result.color, margin: "0 0 8px", lineHeight: 0.92, letterSpacing: "-0.04em", textTransform: "uppercase" }}>{result.title}</h1>

          <div style={{ display: "inline-block", padding: "8px 24px", border: `2px solid ${result.color}`, marginBottom: 24, fontFamily: "'Space Mono', monospace", fontSize: 13, color: result.color, fontWeight: 700, letterSpacing: "0.1em" }}>
            SCORE: {result.finalScore} / 36
          </div>

          <p style={{ fontFamily: "'Archivo', sans-serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(255,255,255,0.85)", marginBottom: 36, fontWeight: 600, lineHeight: 1.35, maxWidth: 560, margin: "0 auto 36px" }}>"{result.tagline}"</p>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "2px solid rgba(255,255,255,0.08)", padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>▸ THE FULL READOUT</p>
            {result.description.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.85)", marginTop: i === 0 ? 0 : 14, marginBottom: 0, lineHeight: 1.7, fontWeight: 400 }}>{p}</p>
            ))}
          </div>

          <div style={{ background: "rgba(0,0,0,0.5)", border: "2px solid " + result.color + "60", padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>▸ THE TRUTH</p>
            <p style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(20px, 4vw, 26px)", color: "#fff", margin: 0, lineHeight: 1.35, textTransform: "uppercase", letterSpacing: "-0.02em" }}>"{result.truth}"</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "2px solid rgba(255,255,255,0.08)", padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 18, fontWeight: 700 }}>▸ YOUR NEXT MOVES</p>
            {result.nextSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 14, fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.55, fontFamily: "'Archivo', sans-serif", fontWeight: 500 }}>
                <span style={{ color: result.color, fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, minWidth: 28 }}>{String(i + 1).padStart(2, "0")}</span>{step}
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,0,0,0.06)", border: "2px solid rgba(255,80,80,0.3)", padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#FF6B6B", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>⚠ DANGER ZONE</p>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{result.danger}</p>
          </div>

          <div style={{ background: result.color + "12", border: `2px solid ${result.color}`, padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>▸ THE GOOD NEWS</p>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "#fff", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{result.encouragement}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.2)", padding: 20, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>YOUR TIMELINE</p>
            <p style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 20, color: result.color, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>{result.timeline}</p>
          </div>

          <button className="rst" onClick={restart}>↺ Retake Test</button>
        </div>
      )}
    </div>
  );
}
