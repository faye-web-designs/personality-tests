import { useState } from "react";

const questions = [
  { text: "When was the last time you actually felt rich?", subtext: "Not 'comfortable.' Not 'fine.' Truly abundant.", options: [
    { text: "I genuinely can't remember a time", traits: { scarcity: 3, visibility: 1, guilt: 1, perfectionism: 0, worthiness: 2 } },
    { text: "Years ago, briefly. It didn't last.", traits: { scarcity: 2, visibility: 0, guilt: 2, perfectionism: 0, worthiness: 3 } },
    { text: "When I helped someone else", traits: { scarcity: 0, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 1 } },
    { text: "When my account hit a number I'd been working toward", traits: { scarcity: 1, visibility: 1, guilt: 0, perfectionism: 2, worthiness: 1 } },
    { text: "I've never let myself feel rich, even when I was", traits: { scarcity: 2, visibility: 2, guilt: 1, perfectionism: 1, worthiness: 3 } },
  ]},
  { text: "Picture yourself making $500K next year. What feeling comes up first?", subtext: "Be honest about what's actually under the excitement.", options: [
    { text: "Excitement, then panic about losing it", traits: { scarcity: 3, visibility: 1, guilt: 0, perfectionism: 1, worthiness: 1 } },
    { text: "Discomfort about how others would treat me", traits: { scarcity: 0, visibility: 3, guilt: 2, perfectionism: 0, worthiness: 1 } },
    { text: "Guilt — like I didn't earn it the 'right' way", traits: { scarcity: 0, visibility: 1, guilt: 3, perfectionism: 1, worthiness: 1 } },
    { text: "Pressure to make sure it's all done perfectly", traits: { scarcity: 1, visibility: 0, guilt: 0, perfectionism: 3, worthiness: 0 } },
    { text: "Disbelief — like that's not for someone like me", traits: { scarcity: 1, visibility: 0, guilt: 0, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "When you're about to ask for what you're worth, what stops you?", subtext: "The exact moment before you lower the price or back down.", options: [
    { text: "I'd rather be safe than risk losing the deal", traits: { scarcity: 3, visibility: 1, guilt: 1, perfectionism: 0, worthiness: 2 } },
    { text: "I don't want them to think I'm full of myself", traits: { scarcity: 0, visibility: 3, guilt: 2, perfectionism: 0, worthiness: 1 } },
    { text: "I feel selfish charging that much for something I love", traits: { scarcity: 0, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 1 } },
    { text: "I worry it isn't quite good enough yet", traits: { scarcity: 0, visibility: 0, guilt: 0, perfectionism: 3, worthiness: 2 } },
    { text: "Some part of me doesn't believe I'm worth it", traits: { scarcity: 1, visibility: 0, guilt: 0, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "What did you absorb about money before you were 12?", subtext: "Not what was said — what was felt in the room.", options: [
    { text: "Tension. Stress. There was never enough.", traits: { scarcity: 3, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "Money is for showing off — and that's ugly", traits: { scarcity: 0, visibility: 3, guilt: 2, perfectionism: 0, worthiness: 0 } },
    { text: "Rich people are greedy or did something wrong", traits: { scarcity: 1, visibility: 0, guilt: 3, perfectionism: 0, worthiness: 0 } },
    { text: "You only deserve money if you work yourself ragged", traits: { scarcity: 2, visibility: 0, guilt: 1, perfectionism: 3, worthiness: 1 } },
    { text: "We don't talk about money. Ever.", traits: { scarcity: 1, visibility: 2, guilt: 1, perfectionism: 0, worthiness: 2 } },
  ]},
  { text: "When you make more than usual in a month, you:", subtext: "Watch what your nervous system does, not what you'd say.", options: [
    { text: "Move it to savings immediately. Brace for the dip.", traits: { scarcity: 3, visibility: 0, guilt: 0, perfectionism: 0, worthiness: 0 } },
    { text: "Don't tell anyone. Stay quiet about it.", traits: { scarcity: 0, visibility: 3, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "Feel weirdly guilty and want to give some away", traits: { scarcity: 0, visibility: 0, guilt: 3, perfectionism: 0, worthiness: 1 } },
    { text: "Worry that next month I won't be able to repeat it", traits: { scarcity: 2, visibility: 0, guilt: 0, perfectionism: 3, worthiness: 1 } },
    { text: "Spend it fast — like the universe will take it back", traits: { scarcity: 1, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "Pick the thought that hits the deepest:", subtext: "The one that makes your stomach drop a little.", options: [
    { text: "There's only so much money to go around — taking more means others get less", traits: { scarcity: 3, visibility: 0, guilt: 2, perfectionism: 0, worthiness: 0 } },
    { text: "If I succeed too much, my friends and family will resent me", traits: { scarcity: 0, visibility: 3, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "Wanting more than I need is greedy", traits: { scarcity: 1, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 1 } },
    { text: "If it's not perfect, I shouldn't put it out there at all", traits: { scarcity: 0, visibility: 1, guilt: 0, perfectionism: 3, worthiness: 1 } },
    { text: "Other people deserve this. I don't.", traits: { scarcity: 0, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "How do you respond when someone you know gets really wealthy?", subtext: "Not the polite reaction. The instant gut one.", options: [
    { text: "Quietly worried it means there's less for me", traits: { scarcity: 3, visibility: 1, guilt: 0, perfectionism: 0, worthiness: 1 } },
    { text: "Sense distance growing — they're 'one of them' now", traits: { scarcity: 0, visibility: 3, guilt: 2, perfectionism: 0, worthiness: 0 } },
    { text: "Suspicious — what shortcut did they take?", traits: { scarcity: 1, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 0 } },
    { text: "I focus on what they did 'wrong' or could've done better", traits: { scarcity: 1, visibility: 0, guilt: 1, perfectionism: 3, worthiness: 1 } },
    { text: "Not me. Never me. Why never me?", traits: { scarcity: 1, visibility: 1, guilt: 0, perfectionism: 1, worthiness: 3 } },
  ]},
  { text: "What do you secretly believe wealthy people had that you don't?", subtext: "The unfair advantage you've quietly used as an excuse.", options: [
    { text: "More starting money. They had a safety net.", traits: { scarcity: 3, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "Connections, family, a different social class", traits: { scarcity: 1, visibility: 3, guilt: 1, perfectionism: 0, worthiness: 2 } },
    { text: "A willingness to be ruthless I don't have", traits: { scarcity: 0, visibility: 0, guilt: 3, perfectionism: 0, worthiness: 0 } },
    { text: "Some innate talent or genius I'm missing", traits: { scarcity: 0, visibility: 0, guilt: 0, perfectionism: 3, worthiness: 3 } },
    { text: "Permission to believe they deserved it", traits: { scarcity: 0, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "What's your sabotage of choice when things start going well?", subtext: "Everyone has one. Pick the one you recognize.", options: [
    { text: "Stop investing in growth. Hoard. Get safe.", traits: { scarcity: 3, visibility: 0, guilt: 0, perfectionism: 0, worthiness: 1 } },
    { text: "Stop posting. Go quiet. Disappear.", traits: { scarcity: 0, visibility: 3, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "Slash my prices or refund people who didn't ask", traits: { scarcity: 0, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 2 } },
    { text: "Tear apart what I built — it's not perfect enough", traits: { scarcity: 0, visibility: 0, guilt: 0, perfectionism: 3, worthiness: 1 } },
    { text: "Self-destruct. Spend it. Date wrong. Get back to broke.", traits: { scarcity: 1, visibility: 0, guilt: 1, perfectionism: 0, worthiness: 3 } },
  ]},
  { text: "Finish this sentence: 'If I really succeeded, I'd lose…'", subtext: "Whatever your subconscious is protecting.", options: [
    { text: "My safety. My peace. My ability to relax.", traits: { scarcity: 3, visibility: 0, guilt: 0, perfectionism: 1, worthiness: 1 } },
    { text: "The people I love. They wouldn't relate to me anymore.", traits: { scarcity: 0, visibility: 3, guilt: 1, perfectionism: 0, worthiness: 1 } },
    { text: "My identity as a 'good person'", traits: { scarcity: 0, visibility: 1, guilt: 3, perfectionism: 0, worthiness: 1 } },
    { text: "Control. There'd be more eyes on every mistake.", traits: { scarcity: 1, visibility: 1, guilt: 0, perfectionism: 3, worthiness: 1 } },
    { text: "The familiar version of me. I don't know who I'd be.", traits: { scarcity: 1, visibility: 1, guilt: 0, perfectionism: 0, worthiness: 3 } },
  ]},
];

const results = {
  scarcity: {
    title: "Scarcity",
    archetype: "THE HOARDER",
    emoji: "🔒",
    color: "#FF3D71",
    bg: "#1a0008",
    tagline: "You hold tight because some part of you is still bracing for it to disappear.",
    description: "You don't have a money problem. You have a nervous system problem that shows up in your finances. Somewhere in your past — maybe it was generational, maybe it was a specific moment — you learned that money is dangerous to enjoy. So you tense around it. You watch it instead of growing it. You count it instead of investing it.\n\nThis is why you save aggressively but never feel financially safe. Why you turn down opportunities that require risk. Why even when you have enough, your body still feels like there isn't. The Scarcity Mindset isn't fixed by making more money — people with scarcity wounds win the lottery and lose it all because the inner state stayed the same.\n\nWhat will free you isn't more income. It's recalibrating your nervous system to TRUST that money flows TO you, not away from you. Until then, every dollar you make will feel like it's borrowed from a future where you go broke.",
    sounds: ['"I can\'t afford that" — said reflexively, even when you can', '"What if it all goes away?"', '"I need to wait until I have more saved"', '"I\'ll invest in myself once I feel safe enough"'],
    healing: ["Track every dollar that flows IN — not as anxiety, as evidence", "Invest in ONE income-producing skill every quarter", "Notice the gap between actual scarcity and imagined scarcity", "Build a 'fearless fund' — money you let yourself spend without anxiety"],
    cost: "You stay broke not because you don't earn enough, but because your wiring won't let money rest comfortably with you.",
    truth: "Wealthy people don't avoid losing money. They make peace with it.",
    nextStep: "This week, spend $50 on something that feels indulgent and watch your nervous system survive it.",
  },
  visibility: {
    title: "Visibility",
    archetype: "THE HIDDEN ONE",
    emoji: "👁",
    color: "#FFB800",
    bg: "#1a1100",
    tagline: "Part of you doesn't want to be seen winning.",
    description: "There's a version of success you're afraid of — and it's not the one you tell people about. You're afraid of being too visible. Too loud. Too 'much.' So you stay just successful enough to feel proud, but not so successful that you'd actually stand out.\n\nThis pattern usually starts young. You might have been told to 'not get a big head' or watched a family member be punished — socially, emotionally, financially — for shining too bright. So you learned to make yourself smaller. You learned that being palatable was safer than being powerful.\n\nYour income is a perfect mirror of how visible you let yourself be. You don't need to learn marketing. You need to learn permission. Permission to take up space. Permission to be the person who succeeded while others didn't. Permission to outgrow the people who feel comfortable with the smaller version of you.",
    sounds: ['"I don\'t want to brag"', '"I don\'t need that much, just enough"', '"I\'d rather stay under the radar"', '"What will people say?"'],
    healing: ["Post your wins publicly — even the ones that feel uncomfortable", "Make a list of who you're shrinking for, and ask why", "Spend time with people who celebrate ambition, not punish it", "Practice taking compliments without deflecting"],
    cost: "You build businesses that stay perpetually small, then convince yourself you didn't really want more.",
    truth: "Your visibility isn't selfish. It's how others see what's possible for them too.",
    nextStep: "This week, share ONE win publicly that you'd usually keep quiet.",
  },
  guilt: {
    title: "Guilt",
    archetype: "THE GOOD PERSON",
    emoji: "💔",
    color: "#A78BFA",
    bg: "#0d0019",
    tagline: "You secretly believe wanting more makes you a bad person.",
    description: "You absorbed a story somewhere — from religion, from family, from culture, from politics — that wealth and goodness can't coexist. That if you have a lot, you must have taken it from someone. That spiritual people don't chase money. That the love of money is the root of all evil.\n\nSo you sabotage yourself right at the edge of breakthrough. You undercharge and call it 'fair.' You give discounts to people who didn't ask. You overdeliver until your work isn't profitable. You stay broke and ethical instead of wealthy and generous — because deep down, you believe those are your only two options.\n\nThe truth nobody told you: money is a magnifier. If you're a good person broke, you'll be a good person rich. The world doesn't need fewer ethical wealthy people — it needs more. Your guilt isn't protecting your goodness. It's protecting you from having to actually use your power.",
    sounds: ['"I\'d feel weird charging that much"', '"I just want enough — not a lot"', '"Money isn\'t everything" (said defensively)', '"I want to help people, not get rich"'],
    healing: ["List 5 wealthy people whose values you actually admire", "Reframe: you can't be generous with money you don't have", "Notice the difference between greed and self-respect", "Charge what your work is actually worth, then donate the difference"],
    cost: "You stay broke as a moral identity, while pretending you don't want what you actually want.",
    truth: "Money is morally neutral. YOU decide what it does in the world.",
    nextStep: "This week, charge full price on the next sale and notice if anyone actually thinks you're a bad person.",
  },
  perfectionism: {
    title: "Perfectionism",
    archetype: "THE ENDLESS POLISHER",
    emoji: "✨",
    color: "#00D4FF",
    bg: "#000a1a",
    tagline: "You won't sell it until it's flawless. So you never sell.",
    description: "You've been hiding behind 'making it better' as your strategy for not being seen. The website needs one more update. The product needs one more feature. The copy needs one more pass. Each tweak feels productive — but it's actually a sophisticated form of avoidance.\n\nPerfectionism isn't about high standards. It's about a deep, often invisible, fear of judgment. As long as you're still working on it, you can't be criticized for it. As long as it's not launched, it can't fail. As long as you're 'almost there,' you're protected from finding out what would actually happen if you let people in.\n\nThe cruel irony: the version of your work that exists in your head — perfect, complete, beyond critique — is also the version that earns you nothing. Your real work doesn't get better in private. It gets better in public, with feedback, with use, with iteration. Until you're willing to be visible imperfectly, you'll keep being invisible perfectly.",
    sounds: ['"It\'s not quite ready yet"', '"I just need to fix one more thing"', '"What if people criticize it?"', '"I want to make sure it\'s right before I launch"'],
    healing: ["Set a launch date publicly — make withdrawal embarrassing", "Embrace 'good enough to get feedback'", "Track launches, not edits", "Show your work at 60% complete and let strangers shape it"],
    cost: "You build perfect things nobody sees, then watch lesser versions get rich while yours stays in drafts.",
    truth: "Done makes money. Perfect stays a draft on your desktop.",
    nextStep: "This week, launch ONE thing that isn't ready. Watch the world not end.",
  },
  worthiness: {
    title: "Worthiness",
    archetype: "THE UNDESERVING",
    emoji: "🌑",
    color: "#00FFA3",
    bg: "#001a0d",
    tagline: "Your bank account isn't a money problem. It's a self-worth problem.",
    description: "Underneath everything else, there's a quieter, more devastating belief: you don't believe you deserve more. Not really. So no matter what you do — how hard you work, how skilled you become, how often opportunity arrives — you find a way to stay just below the level you actually want.\n\nYou undercharge. You overdeliver. You apologize for taking up space. You sabotage right before things get good. And from the outside, it looks like bad luck or inconsistency. From the inside, it's a perfect feedback loop: you don't believe you deserve more, so you don't ask for more, so you don't receive more, so the belief stays intact.\n\nWorthiness can't be earned. That's the trap. The harder you work to 'prove' you deserve it, the more you reinforce the belief that you didn't deserve it to begin with. Worthiness has to be claimed. Not by feeling worthy first — but by acting worthy and letting the feeling catch up.",
    sounds: ['"Who am I to charge that much?"', '"Other people deserve this more than me"', '"I don\'t want to seem greedy"', '"I\'ll feel ready when I\'ve done a bit more"'],
    healing: ["Raise your prices by 30% TODAY. Yes, today.", "Write down 10 reasons you're already qualified", "Notice every apology and stop mid-sentence", "Surround yourself with people who treat you like you're worth more"],
    cost: "You spend a lifetime trying to earn permission for the success you could have just claimed.",
    truth: "You don't earn worth by overdelivering. You start by claiming it.",
    nextStep: "This week, ask for something you'd normally feel too unworthy to request.",
  },
};

export default function MoneyBlockTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [started, setStarted] = useState(false);

  const progress = (current / questions.length) * 100;

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      if (current + 1 < questions.length) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        const totals = {};
        newAnswers.forEach((ans) => {
          Object.entries(ans.traits).forEach(([trait, val]) => { totals[trait] = (totals[trait] || 0) + val; });
        });
        const top = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
        setResult(results[top]);
      }
    }, 350);
  }

  function restart() { setCurrent(0); setAnswers([]); setSelected(null); setResult(null); setStarted(false); }
  const q = questions[current];

  return (
    <div style={{ minHeight: "100vh", background: result ? result.bg : "#08080a", fontFamily: "'Cormorant Garamond', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 18px", transition: "background 1s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&family=Cormorant+SC:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .opt { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); padding: 20px 24px; border-radius: 4px; cursor: pointer; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.45; font-weight: 500; transition: all 0.25s; width: 100%; margin-bottom: 10px; font-style: italic; }
        .opt:hover { border-color: rgba(255,255,255,0.4); color: #fff; background: rgba(255,255,255,0.04); }
        .opt.sel { border-color: #fff; color: #fff; background: rgba(255,255,255,0.06); }
        .nxt { background: #fff; color: #000; border: none; padding: 16px 44px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.25em; cursor: pointer; border-radius: 2px; margin-top: 28px; opacity: 0.25; text-transform: uppercase; transition: all 0.2s; }
        .nxt.act { opacity: 1; }
        .nxt.act:hover { transform: translateY(-2px); }
        .start-btn { background: #fff; color: #000; border: none; padding: 18px 56px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.3em; cursor: pointer; border-radius: 2px; margin-top: 36px; text-transform: uppercase; transition: all 0.3s; }
        .start-btn:hover { transform: translateY(-3px); }
        .rst { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.6); padding: 14px 32px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; cursor: pointer; border-radius: 2px; margin-top: 32px; text-transform: uppercase; }
        .rst:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .fade { opacity: 0; transform: translateY(12px); }
        .fade-in { opacity: 1; transform: translateY(0); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {!started ? (
        <div className="fade-in" style={{ width: "100%", maxWidth: 620, textAlign: "center" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 24, fontWeight: 500 }}>◆ THE WEALTH BLOCK DIAGNOSTIC ◆</p>
          <h1 style={{ fontFamily: "'Cormorant SC', serif", fontSize: "clamp(36px, 7vw, 60px)", fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.05, letterSpacing: "0.02em", marginBottom: 24 }}>
            What's Quietly<br />Keeping You<br /><em style={{ fontFamily: "'Cormorant Garamond', serif", color: "#FF3D71" }}>Broke?</em>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(18px, 3.2vw, 22px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, maxWidth: 480, margin: "0 auto 16px", fontWeight: 500 }}>
            It's not your skills. It's not the economy. It's not even your business.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 2.8vw, 19px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.55, maxWidth: 480, margin: "0 auto", fontWeight: 400 }}>
            It's a hidden money block — a subconscious belief that's been sabotaging you since long before you knew what money was. This 10-question diagnostic reveals which of 5 wealth blocks is yours.
          </p>
          <button className="start-btn" onClick={() => setStarted(true)}>BEGIN THE DIAGNOSTIC</button>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", marginTop: 20, textTransform: "uppercase" }}>⏱ 4 MINUTES · BRUTAL HONESTY REQUIRED</p>
        </div>
      ) : !result ? (
        <div className={animating ? "fade" : "fade-in"} style={{ width: "100%", maxWidth: 620 }}>
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 10, letterSpacing: "0.15em" }}>
              <span>QUESTION {String(current + 1).padStart(2, "0")} OF {String(questions.length).padStart(2, "0")}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ height: 1, width: `${progress}%`, background: "#fff", transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Cormorant SC', serif", fontSize: "clamp(24px, 5vw, 34px)", fontWeight: 600, color: "#fff", marginBottom: 8, lineHeight: 1.25, letterSpacing: "0.01em" }}>{q.text}</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 28, fontStyle: "italic", fontWeight: 500 }}>{q.subtext}</p>
          <div>
            {q.options.map((opt, i) => (
              <button key={i} className={`opt${selected === opt ? " sel" : ""}`} onClick={() => setSelected(opt)}>{opt.text}</button>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={`nxt${selected ? " act" : ""}`} onClick={handleNext} disabled={!selected}>{current + 1 === questions.length ? "Reveal My Block" : "Next"}</button>
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{ width: "100%", maxWidth: 700, textAlign: "center" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>◆ YOUR WEALTH BLOCK ◆</p>
          <div style={{ fontSize: 64, marginBottom: 14 }}>{result.emoji}</div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{result.archetype}</p>
          <h1 style={{ fontFamily: "'Cormorant SC', serif", fontSize: "clamp(56px, 13vw, 96px)", fontWeight: 600, color: result.color, margin: "0 0 24px", lineHeight: 0.95, letterSpacing: "0.02em" }}>{result.title}</h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(255,255,255,0.85)", marginBottom: 40, fontWeight: 500, lineHeight: 1.4, maxWidth: 540, margin: "0 auto 40px" }}>{result.tagline}</p>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: 32, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>The Pattern</p>
            {result.description.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.85)", marginTop: i === 0 ? 0 : 16, marginBottom: 0, lineHeight: 1.65, fontWeight: 500 }}>{p}</p>
            ))}
          </div>

          <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: 32, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>The Voice In Your Head</p>
            {result.sounds.map((s, i) => (
              <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 12px", lineHeight: 1.5, fontWeight: 500 }}>{s}</p>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: 32, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>The Cost If You Don't Heal It</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 3.2vw, 20px)", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{result.cost}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: 32, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>How To Break Free</p>
            {result.healing.map((h, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 14, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "rgba(255,255,255,0.9)", lineHeight: 1.55, fontWeight: 500 }}>
                <span style={{ color: result.color, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, minWidth: 24 }}>{String(i + 1).padStart(2, "0")}</span>{h}
              </div>
            ))}
          </div>

          <div style={{ background: result.color + "12", border: `2px solid ${result.color}`, borderRadius: 4, padding: 32, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Do This Within 7 Days</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 3.5vw, 22px)", color: "#fff", margin: 0, lineHeight: 1.5, fontWeight: 600, fontStyle: "italic" }}>{result.nextStep}</p>
          </div>

          <div style={{ background: "rgba(0,0,0,0.5)", border: "1px solid " + result.color + "60", borderRadius: 4, padding: 36 }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>The Truth</p>
            <p style={{ fontFamily: "'Cormorant SC', serif", fontSize: "clamp(22px, 4.5vw, 30px)", color: "#fff", margin: 0, lineHeight: 1.4, fontWeight: 600, letterSpacing: "0.01em" }}>"{result.truth}"</p>
          </div>

          <button className="rst" onClick={restart}>↺ Retake</button>
        </div>
      )}
    </div>
  );
}
