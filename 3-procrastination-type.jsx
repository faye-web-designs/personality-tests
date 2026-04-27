import { useState } from "react";

const questions = [
  { text: "It's 8pm. The thing you've been avoiding is still not done. What are you actually doing right now?", subtext: "Be honest about your actual escape behavior.", options: [
    { text: "Researching it more — but not actually doing it", traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Frozen, scrolling, brain feels full and empty at the same time", traits: { perfectionist: 1, freezer: 3, pleaser: 1, thrillseeker: 0, dreamer: 1 } },
    { text: "Doing something for someone else who 'really needed help'", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: "Telling myself I'll do it tomorrow when I'm fresh", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "Daydreaming about how amazing it'll be when finished", traits: { perfectionist: 1, freezer: 0, pleaser: 0, thrillseeker: 1, dreamer: 3 } },
  ]},
  { text: "Pick the lie you tell yourself most. The really sneaky one.", subtext: "The one that sounds productive but isn't.", options: [
    { text: '"I work better under pressure"', traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: '"I just need to research it more"', traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: '"I\'ll get to it after I help them"', traits: { perfectionist: 0, freezer: 0, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: '"There\'s too much to even know where to start"', traits: { perfectionist: 1, freezer: 3, pleaser: 1, thrillseeker: 0, dreamer: 0 } },
    { text: '"I\'ll do it when I feel inspired"', traits: { perfectionist: 1, freezer: 0, pleaser: 0, thrillseeker: 1, dreamer: 3 } },
  ]},
  { text: "When you finally start a hard task, what happens in the first 15 minutes?", subtext: "Your real avoidance lives here.", options: [
    { text: "I spend it 'getting set up' — desk, drinks, environment", traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "I work in a panicked sprint, pure adrenaline", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 0 } },
    { text: "I do small bits, then drift to something else", traits: { perfectionist: 1, freezer: 2, pleaser: 1, thrillseeker: 0, dreamer: 3 } },
    { text: "I stare at it, then start panic-cleaning instead", traits: { perfectionist: 1, freezer: 3, pleaser: 1, thrillseeker: 0, dreamer: 1 } },
    { text: "I get pulled into someone else's emergency", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
  ]},
  { text: "How do you feel right before starting something important?", subtext: "Not how you talk about it — what your body actually feels.", options: [
    { text: "Tight, anxious — what if I do it wrong?", traits: { perfectionist: 3, freezer: 2, pleaser: 1, thrillseeker: 0, dreamer: 0 } },
    { text: "Heavy, foggy — I can't even pick a starting point", traits: { perfectionist: 1, freezer: 3, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Conflicted — I want to start but feel pulled in 5 directions", traits: { perfectionist: 0, freezer: 0, pleaser: 3, thrillseeker: 0, dreamer: 1 } },
    { text: "Calm — almost too calm. The deadline isn't real yet.", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "Excited — I can already see the finished thing perfectly", traits: { perfectionist: 1, freezer: 0, pleaser: 0, thrillseeker: 0, dreamer: 3 } },
  ]},
  { text: "Where does your to-do list live? And what does it look like?", subtext: "This is more revealing than people realize.", options: [
    { text: "Beautifully color-coded. Mostly untouched.", traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 2 } },
    { text: "47 overdue items I'm too overwhelmed to even open", traits: { perfectionist: 1, freezer: 3, pleaser: 2, thrillseeker: 0, dreamer: 1 } },
    { text: "Everyone else's stuff at the top, mine at the bottom", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: "I don't make lists — they're for boring people", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 2 } },
    { text: "Full of beautiful future projects I'll start 'someday'", traits: { perfectionist: 1, freezer: 1, pleaser: 0, thrillseeker: 1, dreamer: 3 } },
  ]},
  { text: "What's the REAL fear underneath the procrastination?", subtext: "Not the surface excuse. The one that actually controls you.", options: [
    { text: "That I'll do it wrong and confirm I'm not enough", traits: { perfectionist: 3, freezer: 1, pleaser: 1, thrillseeker: 0, dreamer: 0 } },
    { text: "That I'll be so overwhelmed I'll completely shut down", traits: { perfectionist: 0, freezer: 3, pleaser: 1, thrillseeker: 0, dreamer: 0 } },
    { text: "That I'll disappoint or upset someone I care about", traits: { perfectionist: 0, freezer: 0, pleaser: 3, thrillseeker: 0, dreamer: 1 } },
    { text: "That it'll be boring or ordinary or not feel important", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 2 } },
    { text: "That reality won't match the perfect version in my head", traits: { perfectionist: 1, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 3 } },
  ]},
  { text: "How many tabs/apps are open on your phone right now?", subtext: "And what does that say about your brain?", options: [
    { text: "Just a few — I'm careful and organized", traits: { perfectionist: 3, freezer: 0, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Lost count weeks ago, can't bring myself to clean it", traits: { perfectionist: 0, freezer: 3, pleaser: 1, thrillseeker: 1, dreamer: 2 } },
    { text: "Lots of links from people I'm 'meaning to follow up on'", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: "Whatever's open right now — I close them often", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "20+ different exciting future projects I've researched", traits: { perfectionist: 1, freezer: 1, pleaser: 0, thrillseeker: 1, dreamer: 3 } },
  ]},
  { text: "What's your pattern after you finally do the hard thing?", subtext: "Even your wins reveal your type.", options: [
    { text: "Immediately spot 5 things I should've done better", traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Crash. Need a full day to recover.", traits: { perfectionist: 1, freezer: 3, pleaser: 1, thrillseeker: 1, dreamer: 1 } },
    { text: "Worry I made other people feel bad with my success", traits: { perfectionist: 0, freezer: 0, pleaser: 3, thrillseeker: 0, dreamer: 1 } },
    { text: "High for an hour, then need a new exciting thing immediately", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "Already imagining the next big thing instead of celebrating", traits: { perfectionist: 1, freezer: 0, pleaser: 0, thrillseeker: 1, dreamer: 3 } },
  ]},
  { text: "Pick the productivity hack that NEVER works for you:", subtext: "Be honest. Whatever you keep buying and abandoning.", options: [
    { text: "Detailed planning systems with too many rules", traits: { perfectionist: 3, freezer: 2, pleaser: 0, thrillseeker: 1, dreamer: 1 } },
    { text: "'Just start small' — I never know what 'small' means", traits: { perfectionist: 1, freezer: 3, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Strict schedules — they get derailed by everyone else's needs", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: "Discipline-based methods — I get bored and rebel", traits: { perfectionist: 0, freezer: 0, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "Vision boards — I love making them, never execute on them", traits: { perfectionist: 1, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 3 } },
  ]},
  { text: "If you're being completely honest with yourself, what would change EVERYTHING?", subtext: "The thing you already know but keep avoiding.", options: [
    { text: "Letting it be imperfect and shipping it anyway", traits: { perfectionist: 3, freezer: 1, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Breaking it into pieces so small they feel impossible to mess up", traits: { perfectionist: 1, freezer: 3, pleaser: 0, thrillseeker: 0, dreamer: 1 } },
    { text: "Saying no to other people's needs to make room for my own", traits: { perfectionist: 0, freezer: 1, pleaser: 3, thrillseeker: 0, dreamer: 0 } },
    { text: "Building structure I actually stick to, even when bored", traits: { perfectionist: 1, freezer: 1, pleaser: 0, thrillseeker: 3, dreamer: 1 } },
    { text: "Making the imagined version real — even badly", traits: { perfectionist: 1, freezer: 0, pleaser: 0, thrillseeker: 0, dreamer: 3 } },
  ]},
];

const results = {
  perfectionist: {
    title: "The Perfectionist",
    archetype: "FEAR IN A SMART COSTUME",
    emoji: "💎",
    color: "#7DD3FC",
    bg: "#001a26",
    tagline: "If I can't do it perfectly, I won't do it at all.",
    description: "Your standards aren't high — they're impossible. And that's the point. Impossible standards mean you can't be judged because you never finish. Every 'I just need to fix one more thing' is fear in a smart costume.\n\nHere's the part that hurts: the world has been telling you that perfectionism is just high standards. It isn't. High standards produce excellent finished work. Perfectionism produces excellent unfinished work. The difference is whether the standard serves the outcome or protects the ego.\n\nYou've built your whole identity around being the careful one, the thoughtful one, the one who 'doesn't put junk into the world.' But that identity is also why you're stuck. You confuse caring deeply with not shipping. The truth is: people who ship imperfect work iterate their way to greatness. People who wait for perfect get left behind by people who shipped messy.",
    triggers: ["Big visible projects", "Anything that gets judged", "Creative work where there's no 'right' answer", "Work tied to your professional identity"],
    fix: ["Set a HARD time limit and stop when it dings — even mid-sentence", "Publish at 80% — let the world help you finish it", "Track 'launches' as your KPI, not edits or improvements", "Make a 'good enough' list before starting — define when you'll stop"],
    cost: "You build perfect things nobody sees. Lesser versions go viral while yours waits in drafts.",
    mantra: "Done is better than perfect. Always.",
    secretGift: "Your perfectionism is also your taste. Channel it into discernment AFTER you ship — not before.",
  },
  freezer: {
    title: "The Overwhelm Freezer",
    archetype: "THE FLOOD RESPONSE",
    emoji: "🥶",
    color: "#A78BFA",
    bg: "#0d0019",
    tagline: "There's so much to do that I do nothing.",
    description: "When the task gets too big, your brain pulls the emergency brake. You're not lazy — you're flooded. There's actually a name for this: it's a nervous system freeze response, and it happens when your brain perceives the demand as bigger than your resources.\n\nThe shame spiral makes this worse. The to-do list grows, the avoidance grows, the self-criticism grows, and you scroll instead of starting because everything feels equally impossible. Your brain has stopped being able to differentiate between 'send one email' and 'reorganize my entire life' — they both feel like climbing a mountain.\n\nThe fix isn't more discipline. Discipline is what you reach for when you have capacity. Right now, your capacity is depleted. The fix is making the next step so absurdly small that your brain doesn't perceive it as a threat. Two minutes. One sentence. One tab. That's it.",
    triggers: ["Vague open-ended tasks", "Big life changes", "When everything's a priority", "Multiple stressors stacking"],
    fix: ["Break it down until the next step takes 2 minutes — literally", "Do ONLY that step. Then stop. No 'while I'm at it.'", "Brain dump everything onto paper — clarity comes from emptying chaos", "Make a 'capacity check' before deciding — am I depleted or have fuel?"],
    cost: "You stay frozen while opportunities pass. Each unstarted thing becomes another weight.",
    mantra: "Small step. Right now. That's all.",
    secretGift: "Your sensitivity to overwhelm is also why you see complexity others miss. You just need a system that respects your nervous system.",
  },
  pleaser: {
    title: "The People-Pleaser",
    archetype: "THE BOUNDARYLESS HEART",
    emoji: "🤲",
    color: "#FB923C",
    bg: "#1a0d00",
    tagline: "I'll do my stuff after I help everyone else.",
    description: "Your own goals always end up at the bottom of the list. You answer the text, take the call, help the friend, do the favor — and your dreams stay parked indefinitely. You don't have a procrastination problem. You have a boundaries problem dressed up as one.\n\nThis pattern usually has a story. You learned somewhere — maybe from a parent, a religion, a relationship — that being needed was how you stayed safe. So you became indispensable to others, expecting your own needs would be met somewhere along the way. They weren't. They never get met automatically. They have to be claimed.\n\nThe brutal truth: nobody is going to clear space in your calendar for you. Nobody is going to say 'go work on your dream now.' If you don't make your own goals as non-negotiable as other people's needs, your goals will lose every single time. The world will always have one more emergency to throw at you.",
    triggers: ["Anyone asking for help", "Group projects", "When saying no feels selfish", "Times someone is having a hard time"],
    fix: ["Block 'self-time' BEFORE you accept other people's time", "Practice 'I can't right now' — no excuse, no apology", "Treat your dreams like a paying client deadline", "Notice when 'helping' is actually you avoiding your own work"],
    cost: "You spend your life building everyone else's lives while yours stays on hold.",
    mantra: "My goals are not optional. Their requests are.",
    secretGift: "Your generosity is real and powerful. Once you protect your own life, that generosity becomes sustainable.",
  },
  thrillseeker: {
    title: "The Adrenaline Procrastinator",
    archetype: "THE CRISIS ADDICT",
    emoji: "⚡",
    color: "#FBBF24",
    bg: "#1a1500",
    tagline: "I'll do it when there's no time left.",
    description: "You wait until the last possible moment because the panic feels like motivation. You confuse 'working under pressure' with 'unable to start without crisis.' And here's the trap: it works. Sometimes. The all-nighters produce something. The deadline panics deliver. So you keep doing it.\n\nBut you're paying a hidden tax you don't see. Your best work isn't possible in panic mode — only your fastest work. The strategic thinking, the depth, the polish, the 'this could be great' version — that requires calm. Adrenaline gets you to 'finished.' Calm gets you to 'extraordinary.' You're trading your potential for the dopamine hit of last-minute saves.\n\nThe deeper pattern: you've made boredom into the enemy. Steady, consistent work feels intolerable to you. So you create artificial chaos to feel alive. The work people remember from you is brilliant — and you're capable of so much more if you could tolerate calm.",
    triggers: ["Tasks with no firm deadline", "Long-term goals", "Boring but important work", "Anything that requires patience"],
    fix: ["Create artificial deadlines and TELL someone — make stalling embarrassing", "Build accountability with someone who'll actually call you out", "Notice: chaos isn't motivation, it's avoidance with a costume", "Reward consistency, not just intensity"],
    cost: "You confuse panic with productivity. Your best work goes unmade because you only do urgent work.",
    mantra: "Calm consistency beats panicked brilliance.",
    secretGift: "Your ability to perform under pressure is real. The question is whether you'll learn to perform without needing pressure.",
  },
  dreamer: {
    title: "The Dreamer",
    archetype: "THE FANTASY GUARDIAN",
    emoji: "☁️",
    color: "#F0ABFC",
    bg: "#1a0019",
    tagline: "It's so beautiful in my head, I'm scared to ruin it.",
    description: "You've already lived the project a thousand times in your imagination. You can see it perfectly — the website, the launch, the praise, the impact. But the moment you try to make it real, it disappoints. The first draft is clunky. The early version looks amateur. Reality breaks the fantasy.\n\nSo you retreat back to fantasy, where everything is still flawless and you're still the genius. You start a new project instead, where the perfect imagined version is still intact. And you keep doing this — collecting unrealized brilliant ideas — because each one, in its imagined state, is still magic.\n\nHere's what nobody tells dreamers: the fantasy ISN'T the work. The fantasy is the avoidance OF the work. Real creators make the messy first version, hate it, and keep going. The only way to make the imagined thing real is to be willing to ruin it temporarily — to let it exist in its ugly draft form long enough to become beautiful through iteration. You can't iterate on a fantasy. You can only iterate on what's real.",
    triggers: ["Creative projects", "Ambitious life dreams", "Anything tied to your identity", "Starting something brand new"],
    fix: ["Commit to making something IMPERFECT and real — that's the actual win", "Show your messy version to ONE trusted person within 7 days", "Realize: imagining ≠ creating. Only one builds a life.", "Set a 'launch the ugly version' date you can't move"],
    cost: "You collect brilliant unrealized ideas while watching others make mediocre versions of them and become successful.",
    mantra: "A messy real thing beats a perfect imagined one.",
    secretGift: "Your vision is real and rare. The world needs it. You just have to be willing to bring it into the world imperfect.",
  },
};

export default function ProcrastinationTest() {
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
        setAnswers(newAnswers); setCurrent(current + 1); setSelected(null);
      } else {
        const totals = {};
        newAnswers.forEach((ans) => { Object.entries(ans.traits).forEach(([t, v]) => { totals[t] = (totals[t] || 0) + v; }); });
        const top = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
        setResult(results[top]);
      }
    }, 350);
  }

  function restart() { setCurrent(0); setAnswers([]); setSelected(null); setResult(null); setStarted(false); }
  const q = questions[current];

  return (
    <div style={{ minHeight: "100vh", background: result ? result.bg : "#0d0d12", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 18px", transition: "background 1s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .opt { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.78); padding: 18px 22px; border-radius: 10px; cursor: pointer; text-align: left; font-family: 'Geist', sans-serif; font-size: 15px; line-height: 1.5; transition: all 0.2s; width: 100%; margin-bottom: 10px; font-weight: 500; }
        .opt:hover { border-color: rgba(255,255,255,0.4); color: #fff; transform: translateX(4px); }
        .opt.sel { border-color: #fff; color: #fff; background: rgba(255,255,255,0.08); }
        .nxt { background: #fff; color: #000; border: none; padding: 16px 40px; font-family: 'Geist Mono', monospace; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; cursor: pointer; border-radius: 10px; margin-top: 24px; opacity: 0.3; transition: all 0.2s; }
        .nxt.act { opacity: 1; }
        .nxt.act:hover { transform: translateY(-2px); }
        .start-btn { background: #fff; color: #000; border: none; padding: 18px 52px; font-family: 'Geist Mono', monospace; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; cursor: pointer; border-radius: 10px; margin-top: 32px; transition: all 0.3s; }
        .start-btn:hover { transform: translateY(-3px); }
        .rst { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); padding: 14px 28px; font-family: 'Geist Mono', monospace; font-size: 12px; cursor: pointer; border-radius: 10px; margin-top: 28px; }
        .rst:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .fade { opacity: 0; transform: translateY(12px); }
        .fade-in { opacity: 1; transform: translateY(0); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {!started ? (
        <div className="fade-in" style={{ width: "100%", maxWidth: 620, textAlign: "center" }}>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>⏰ THE PROCRASTINATION DIAGNOSTIC</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(40px, 8vw, 68px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 0.95, letterSpacing: "-0.025em", marginBottom: 24 }}>
            Why You <em style={{ fontWeight: 700, color: "#F0ABFC" }}>Really</em><br />Can't Just Start
          </h1>
          <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto 12px", fontWeight: 400 }}>
            "Just stop procrastinating" is the worst advice ever given. Procrastination isn't a discipline problem. It's a fear pattern with 5 distinct flavors.
          </p>
          <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto", fontWeight: 400 }}>
            This 10-question diagnostic identifies your specific type — and the exact unlock that ends years of stuckness in days.
          </p>
          <button className="start-btn" onClick={() => setStarted(true)}>BEGIN →</button>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", marginTop: 20, textTransform: "uppercase" }}>⏱ 4 MIN · NO EMAIL · UNCOMFORTABLY ACCURATE</p>
        </div>
      ) : !result ? (
        <div className={animating ? "fade" : "fade-in"} style={{ width: "100%", maxWidth: 620 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>
              <span>{current + 1}/{questions.length}</span><span>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
              <div style={{ height: 3, width: `${progress}%`, background: "linear-gradient(90deg, #F0ABFC, #FBBF24)", borderRadius: 2, transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.2, letterSpacing: "-0.015em" }}>{q.text}</h2>
          <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28, fontStyle: "italic" }}>{q.subtext}</p>
          <div>
            {q.options.map((opt, i) => (
              <button key={i} className={`opt${selected === opt ? " sel" : ""}`} onClick={() => setSelected(opt)}>{opt.text}</button>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={`nxt${selected ? " act" : ""}`} onClick={handleNext} disabled={!selected}>{current + 1 === questions.length ? "REVEAL MY TYPE →" : "NEXT →"}</button>
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{ width: "100%", maxWidth: 700, textAlign: "center" }}>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>YOUR PROCRASTINATION TYPE</p>
          <div style={{ fontSize: 72, marginBottom: 14 }}>{result.emoji}</div>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{result.archetype}</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(48px, 11vw, 80px)", fontWeight: 900, color: result.color, margin: "0 0 16px", lineHeight: 0.92, letterSpacing: "-0.03em" }}>{result.title}</h1>
          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(255,255,255,0.85)", marginBottom: 36, fontWeight: 700, lineHeight: 1.3 }}>"{result.tagline}"</p>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>▸ THE PATTERN</p>
            {result.description.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontFamily: "'Geist', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.85)", marginTop: i === 0 ? 0 : 14, marginBottom: 0, lineHeight: 1.7, fontWeight: 400 }}>{p}</p>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ YOUR TRIGGERS</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {result.triggers.map((t, i) => (
                <span key={i} style={{ background: result.color + "15", color: result.color, padding: "6px 14px", borderRadius: 20, fontSize: 12, fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ THE COST IF YOU DON'T HEAL THIS</p>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(17px, 3.2vw, 21px)", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.5, fontWeight: 500, fontStyle: "italic" }}>{result.cost}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 28, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>▸ HOW TO BREAK FREE</p>
            {result.fix.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 14, fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.5, fontFamily: "'Geist', sans-serif" }}>
                <span style={{ color: result.color, fontWeight: 700, fontFamily: "'Geist Mono', monospace", fontSize: 14, minWidth: 24 }}>0{i + 1}</span>{f}
              </div>
            ))}
          </div>

          <div style={{ background: result.color + "12", border: `2px solid ${result.color}`, borderRadius: 12, padding: 32, marginBottom: 14 }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ YOUR MANTRA</p>
            <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "clamp(22px, 4.5vw, 30px)", color: "#fff", margin: 0, lineHeight: 1.3, fontWeight: 700 }}>"{result.mantra}"</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>▸ THE SECRET GIFT</p>
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.6, fontWeight: 400 }}>{result.secretGift}</p>
          </div>

          <button className="rst" onClick={restart}>↺ Retake</button>
        </div>
      )}
    </div>
  );
}
