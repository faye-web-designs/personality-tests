import { useState } from "react";

const questions = [
  { text: "When the team you're leading drops the ball on something important, what's your true first reaction?", subtext: "Not what you'd say out loud — what fires inside you.", options: [
    { text: "I should have just done it myself. They can't be trusted.", traits: { controller: 3, lone: 2, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: "I retreat. I'll just do everything important myself from now on.", traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: "I obsess over what went wrong and how to make it never happen again", traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 0, avoider: 0 } },
    { text: "I worry they're upset with me for being upset", traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "I don't bring it up. I'll let it slide and hope it doesn't happen again.", traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 2, avoider: 3 } },
  ]},
  { text: "How do you really feel about delegating?", subtext: "The honest answer, not the leadership-book one.", options: [
    { text: "It's faster to do it myself than explain it correctly", traits: { controller: 3, lone: 2, perfectionist: 2, pleaser: 0, avoider: 0 } },
    { text: "I delegate, but I check on it constantly", traits: { controller: 3, lone: 0, perfectionist: 2, pleaser: 0, avoider: 0 } },
    { text: "I prefer working alone — I trust my own execution most", traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: "I delegate easily but feel guilty asking people to do work", traits: { controller: 0, lone: 0, perfectionist: 0, pleaser: 3, avoider: 1 } },
    { text: "I delegate the conflict-prone stuff to avoid the friction", traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "What's the hardest conversation you've been avoiding for too long?", subtext: "The one that's lived in the back of your mind for weeks or months.", options: [
    { text: "Telling someone they're not performing — I'd rather just take their work back", traits: { controller: 3, lone: 1, perfectionist: 1, pleaser: 1, avoider: 1 } },
    { text: "I don't avoid them — I just go silent and create distance instead", traits: { controller: 1, lone: 3, perfectionist: 0, pleaser: 0, avoider: 2 } },
    { text: "Admitting something isn't working — I want to fix it before they notice", traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 1, avoider: 1 } },
    { text: "Saying no to someone who'll be disappointed in me", traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "Pretty much any uncomfortable conversation", traits: { controller: 0, lone: 1, perfectionist: 1, pleaser: 1, avoider: 3 } },
  ]},
  { text: "How does conflict in your business really land for you?", subtext: "Watch what your nervous system actually does.", options: [
    { text: "I escalate to win — I need to be right or in charge", traits: { controller: 3, lone: 1, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: "I shut down emotionally and handle it transactionally", traits: { controller: 1, lone: 3, perfectionist: 0, pleaser: 0, avoider: 2 } },
    { text: "I rerun the conflict in my head for days, planning what I should've said", traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 1, avoider: 1 } },
    { text: "I cave to keep the peace, then resent it later", traits: { controller: 0, lone: 0, perfectionist: 0, pleaser: 3, avoider: 2 } },
    { text: "I dodge it entirely — change the subject, leave the room", traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "When something goes wrong, where does your mind go FIRST?", subtext: "The reflex matters more than the wisdom.", options: [
    { text: '"Who can I blame? Who let this happen?"', traits: { controller: 3, lone: 0, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: '"I should have been the one doing this. I knew better."', traits: { controller: 2, lone: 3, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: '"What did I miss? I should have caught this."', traits: { controller: 0, lone: 1, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: '"Are people upset with me? Did I cause this?"', traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: '"Maybe if I just don\'t bring attention to it, it\'ll go away"', traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "Pick the inner voice you hear most often as a leader:", subtext: "The one that runs in the background while you make decisions.", options: [
    { text: '"If I don\'t handle this, it won\'t get done right"', traits: { controller: 3, lone: 2, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: '"No one understands what I\'m carrying. I\'m alone in this."', traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: '"It needs to be perfect or it doesn\'t count"', traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: '"I just want everyone to be happy with me"', traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: '"Maybe if I don\'t look at it directly, it\'ll resolve itself"', traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "What do people closest to you wish you'd let go of?", subtext: "The thing they've gently — or not-so-gently — pointed out.", options: [
    { text: '"You don\'t have to control every detail"', traits: { controller: 3, lone: 0, perfectionist: 2, pleaser: 0, avoider: 0 } },
    { text: '"You don\'t have to do everything by yourself"', traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: '"You don\'t have to be perfect"', traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: '"You don\'t have to please everyone"', traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: '"You can\'t ignore problems and hope they go away"', traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "What did your earliest model of leadership look like at home?", subtext: "Whoever held authority when you were young shaped your shadow.", options: [
    { text: "Someone who needed to be in control. Their way or chaos.", traits: { controller: 3, lone: 1, perfectionist: 1, pleaser: 1, avoider: 0 } },
    { text: "Someone who carried it all alone — a martyr or a stoic", traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: "Someone with impossibly high standards I could never meet", traits: { controller: 1, lone: 0, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: "Someone whose love felt conditional on my behavior", traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "Someone absent or checked out — emotionally or physically", traits: { controller: 0, lone: 2, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "Pick the failure scenario that scares you the deepest:", subtext: "The specific kind of falling apart that haunts you.", options: [
    { text: "Losing control — the whole thing spinning out of my hands", traits: { controller: 3, lone: 1, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: "Being abandoned — left alone holding everything", traits: { controller: 1, lone: 3, perfectionist: 0, pleaser: 1, avoider: 1 } },
    { text: "Being exposed as not actually that good at this", traits: { controller: 0, lone: 1, perfectionist: 3, pleaser: 1, avoider: 1 } },
    { text: "Being disliked, talked about, judged", traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "Having to actually face the thing I've been avoiding", traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "How do you actually receive feedback?", subtext: "Not how you say you do — how it lands in your body.", options: [
    { text: "Defensive. I have to fight the urge to push back immediately.", traits: { controller: 3, lone: 1, perfectionist: 2, pleaser: 0, avoider: 0 } },
    { text: "I take it in silently, then withdraw and process alone", traits: { controller: 0, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: "I spiral and feel like a failure, even from minor critique", traits: { controller: 0, lone: 1, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: "I agree and over-apologize, even when I disagree internally", traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "I deflect, change the subject, or get conveniently busy", traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "When was the last time you cried, broke down, or felt overwhelmed alone?", subtext: "The honest one — even if you brushed past it quickly.", options: [
    { text: "I don't really break down — I just push through", traits: { controller: 3, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: "Recently — but I never let anyone see it", traits: { controller: 1, lone: 3, perfectionist: 2, pleaser: 1, avoider: 1 } },
    { text: "When something I worked hard on wasn't received the way I hoped", traits: { controller: 1, lone: 1, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: "When someone I cared about was disappointed in me", traits: { controller: 0, lone: 1, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: "I numb out before I get there — it doesn't really happen anymore", traits: { controller: 1, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
  { text: "If your shadow had a voice — the part of you running the show in private — what would it say?", subtext: "The one that nobody else hears. The deepest, truest one.", options: [
    { text: '"I have to stay in charge or everything will fall apart"', traits: { controller: 3, lone: 1, perfectionist: 1, pleaser: 0, avoider: 0 } },
    { text: '"No one is coming to help. It\'s always been me."', traits: { controller: 1, lone: 3, perfectionist: 1, pleaser: 0, avoider: 1 } },
    { text: '"If they really saw me, they\'d know I\'m not enough"', traits: { controller: 0, lone: 1, perfectionist: 3, pleaser: 1, avoider: 0 } },
    { text: '"I have to be loved or I don\'t exist"', traits: { controller: 0, lone: 0, perfectionist: 1, pleaser: 3, avoider: 1 } },
    { text: '"If I don\'t look at it, it can\'t hurt me"', traits: { controller: 0, lone: 1, perfectionist: 0, pleaser: 1, avoider: 3 } },
  ]},
];

const results = {
  controller: {
    title: "The Controller",
    archetype: "THE FORTRESS",
    emoji: "♛",
    color: "#DC2626",
    bg: "#170303",
    accent: "#FCA5A5",
    tagline: "You confused control with safety. Now your grip is choking what you built.",
    description: "You learned somewhere — probably young — that loosening your grip meant chaos. Maybe a parent was unpredictable, maybe responsibility was thrust on you too early, maybe you survived something where being in control was the only way to stay safe. You internalized the lesson: if I let go, everything falls apart.\n\nThe lesson worked when you needed it. It got you here. Your competence, your standards, your refusal to let things slip — that's why your business exists at all. But the same wiring that built it is now the bottleneck preventing it from growing past you. You can't scale because you can't trust. You can't trust because you can't let go. And you can't let go because deep down, you don't believe anyone will catch what falls.\n\nHere's what no one's told you: control is the most expensive form of safety. It feels like protection. It's actually exhaustion dressed up as leadership. Real safety — the kind that lets a business grow beyond you — comes from building systems and trust, not gripping tighter. Until you face this, every team you build will become another extension of you, and you'll burn out trying to be everywhere at once.",
    light: "Decisive. Strategic. Reliable under pressure. The person everyone trusts to handle the hard thing.",
    shadow: "Micromanaging. Bottlenecking. Making your team feel like extensions of your nervous system instead of people.",
    cost: "You'll build a business that depends entirely on you, then resent everyone for not stepping up — even though you never let them.",
    awakening: "Real power isn't holding everything. It's building something that runs without you. Until you let go of small things, you can't be trusted with bigger ones.",
    practice: ["Pick ONE thing you control unnecessarily this week. Hand it over completely. No checking.", "When the urge to take it back rises, sit with the discomfort instead of acting on it.", "Ask your team: 'where am I in your way?' Then actually believe their answer.", "Notice the difference between standards (good) and control (fear in disguise)."],
    truth: "The grip you think is keeping it together is actually what's breaking it apart.",
    secretGift: "You see what could go wrong before others do. That's intuition, not paranoia. The work is learning to use it without choking the people around you.",
  },
  lone: {
    title: "The Lone Wolf",
    archetype: "THE ISLAND",
    emoji: "🐺",
    color: "#3B82F6",
    bg: "#03081a",
    accent: "#93C5FD",
    tagline: "You confused independence with strength. Now your isolation is the wound, not the armor.",
    description: "Somewhere along the line, you learned that needing people was dangerous. Maybe people you needed weren't there. Maybe asking for help got you punished or shamed. Maybe you watched someone close to you get hurt by depending on others. So you made a quiet decision: I'll do it myself. I won't need anyone. That way I can't be let down.\n\nThis pattern got you remarkably far. You're capable. Self-sufficient. People comment on how 'strong' you are, how 'put-together,' how 'you can handle anything.' What they don't see is the loneliness underneath — the way you carry everything alone because you don't believe anyone is coming. You'd rather burn out than ask for help. You'd rather quietly resent your team for not seeing what you need than tell them.\n\nThe Lone Wolf shadow ends businesses prematurely. Not in dramatic collapse — in slow exhaustion. You'll wake up one day and realize you've built something successful AND completely depleted yourself doing it. The cost of being unable to lean on people, ask for help, or let your team carry weight is the slow erosion of your capacity to keep going. Real leadership isn't doing it all alone. It's becoming someone people want to follow — which requires letting them.",
    light: "Self-reliant. Resourceful. Doesn't need external validation to keep going. A force of nature.",
    shadow: "Emotionally isolated. Burns out silently. Can't ask for help even when drowning. Distant from team.",
    cost: "You'll build a business that nobody can help you carry — then collapse alone wondering why no one helped.",
    awakening: "Strength isn't doing it alone. It's being grounded enough to receive support without your identity collapsing.",
    practice: ["Tell ONE person something you're struggling with this week. Don't soften it.", "Ask for help with something small you'd normally just do yourself.", "Notice when you're isolating as a stress response, and reach out instead.", "Build a peer group of other leaders. Loneliness at the top is optional."],
    truth: "You weren't built to do it alone. You learned to. Those are different things.",
    secretGift: "Your self-sufficiency is real and valuable. The work is learning when to use it — and when to let yourself be held.",
  },
  perfectionist: {
    title: "The Perfectionist",
    archetype: "THE NEVER-ENOUGH",
    emoji: "✦",
    color: "#0EA5E9",
    bg: "#03101a",
    accent: "#7DD3FC",
    tagline: "You're trying to perform your way out of a wound that can't be perfected away.",
    description: "Underneath your standards is a quieter, more painful truth: you don't believe you're enough as you are. So you've built an entire identity around being the person who's never less than excellent. Every output, every decision, every product gets filtered through 'is this good enough yet?' — and the answer, somehow, is always no.\n\nThis usually traces back to early experiences where love or approval was tied to performance. Maybe a parent celebrated your achievements but went distant when you struggled. Maybe you were 'the smart one' or 'the responsible one' and learned to fear losing that identity. So you became the person who doesn't make mistakes. Who has it together. Who delivers. And along the way, you forgot that you were ever allowed to just BE — not just produce.\n\nThe Perfectionist shadow makes you a high performer with a constantly empty tank. Every win evaporates within hours. Every mistake is catastrophic. You can't enjoy success because the bar moves the moment you reach it. The deepest version of this work isn't lowering your standards — it's healing the part of you that believes you're only worth what you produce. Until then, no level of success will feel like enough, because you're not actually trying to succeed. You're trying to finally be good enough. And no external achievement can give you that.",
    light: "Excellence. Refinement. Attention to detail others miss. Builds genuinely premium things.",
    shadow: "Paralyzed by 'not yet ready.' Crushes self over small mistakes. Worth feels conditional on performance.",
    cost: "You'll spend your life chasing achievement to feel worthy, never realizing you're not actually allowed to receive it.",
    awakening: "You're already enough. You always were. The work isn't proving it — it's letting yourself feel it.",
    practice: ["Ship something at 80% this week and watch the world not punish you.", "Celebrate one win without immediately moving the goalpost. Sit in it.", "Track when you're using 'high standards' as cover for fear of judgment.", "Practice saying 'this is good' without 'but it could be better.'"],
    truth: "You're not behind. You're not failing. You're just measuring yourself against an impossible standard you set when you were too young to know better.",
    secretGift: "Your standards are a gift to your work. The work is learning to give yourself that same gift — to be loved for who you are, not just what you produce.",
  },
  pleaser: {
    title: "The Pleaser",
    archetype: "THE SHAPESHIFTER",
    emoji: "❀",
    color: "#EC4899",
    bg: "#1a0314",
    accent: "#F9A8D4",
    tagline: "You learned to read everyone else so well that you lost yourself in the process.",
    description: "You learned, very young, that other people's emotions were dangerous and your job was to manage them. Maybe a parent's mood determined the temperature of the house. Maybe love came when you were good and disappeared when you weren't. Maybe you watched someone get hurt and decided: my job is to make sure that doesn't happen here. So you became hyper-attuned. You read the room before walking into it. You shape-shifted to whatever each relationship required.\n\nThis wiring made you exceptionally good at people. You're warm. Perceptive. Easy to be around. Clients love you. Employees love you. But underneath it is a quiet, devastating truth: you don't actually know what YOU want. You've been so busy reading others, adjusting to others, keeping others happy, that you've lost contact with your own preferences, opinions, edges, and 'no's.\n\nThe Pleaser shadow makes you the most exhausted leader on this list — because you're not just running a business, you're managing everyone's feelings about your business. Every decision gets weighted by 'how will this land with each person?' You overcommit. You underprice. You take on what you should turn away. And the resentment slowly builds, because somewhere inside you knows: I keep abandoning myself for people who didn't ask me to. The leadership work isn't getting better at people. You're already great at people. The work is reclaiming the version of you that exists separately from how others perceive you.",
    light: "Warm. Perceptive. Builds psychologically safe teams. Genuinely cares.",
    shadow: "Loses self in others. Can't say no. Resents what they didn't refuse. Conflict-avoidant.",
    cost: "You'll build a business everyone loves but nobody respects — including you. And quietly, you'll resent every client and employee for what you let happen.",
    awakening: "You don't have to be liked to be loved. The right people will respect your no more than your yes.",
    practice: ["Say 'no' to ONE thing this week without giving an explanation or apology.", "Notice when you're shape-shifting and pause. Who are you when nobody needs anything?", "Disappoint someone small on purpose, just to remember you survive it.", "Practice having a strong opinion someone might not like."],
    truth: "Your worth doesn't depend on everyone's approval. You're allowed to take up space, even when others wish you'd take less.",
    secretGift: "Your warmth is real and rare. The work is learning that you can keep that warmth AND have edges. They're not opposites.",
  },
  avoider: {
    title: "The Avoider",
    archetype: "THE GHOST",
    emoji: "▽",
    color: "#A78BFA",
    bg: "#0d0019",
    accent: "#DDD6FE",
    tagline: "You think you're keeping the peace. You're actually feeding the chaos.",
    description: "You learned early that confrontation was unsafe. Maybe you grew up watching people fight in destructive ways and decided you'd never do that. Maybe addressing problems directly got you punished, dismissed, or hurt. Maybe nobody in your family modeled how to face things head-on, so you learned the only safe move was disappearing — going quiet, getting busy, becoming unavailable until the moment passed.\n\nThis worked when you were small and had no power. As an adult leader, it's slowly destroying everything you're trying to build. You don't address the underperforming team member, so they keep underperforming. You don't have the hard conversation with your business partner, so resentment compounds for years. You don't say what you actually think in the meeting, so the team makes a decision you privately disagreed with. Each avoidance feels like keeping the peace. Cumulatively, they're making the chaos worse.\n\nThe Avoider shadow is the most subtle on this list — because from the outside, you look calm, agreeable, easy to work with. But the things you don't address don't disappear. They metastasize. Small problems become explosions. Employees who should have been fired six months ago become legal liabilities. Partners who should have been confronted become enemies. The brutal truth: every problem you avoid is a problem you're choosing to make worse later. Avoidance feels like absence of action. It's actually one of the most consequential actions a leader can take.",
    light: "Calm. Steady. Doesn't escalate unnecessarily. Hard to ruffle.",
    shadow: "Lets problems metastasize. Loses respect by going quiet. Builds resentment instead of resolution.",
    cost: "You'll watch your business slowly rot from problems you could have addressed early — then blame circumstances for what your avoidance created.",
    awakening: "You can't lead what you won't look at directly. Avoidance is a decision with compound interest.",
    practice: ["Identify the conversation you've been avoiding longest. Have it this week.", "Notice when you're 'getting busy' as a way to dodge something. Stop and look at what you're avoiding.", "Practice saying the uncomfortable thing in low-stakes situations to build the muscle.", "Track every problem you address vs. avoid. The pattern will be brutal and clarifying."],
    truth: "The thing you're avoiding is already happening. Your avoidance just lets it happen without your input.",
    secretGift: "Your steadiness is real. The work is learning that real steadiness isn't avoiding storms — it's being the one who stays grounded inside them.",
  },
};

export default function LeadershipShadowTest() {
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
    <div style={{ minHeight: "100vh", background: result ? result.bg : "#0a0a0f", fontFamily: "'EB Garamond', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 18px", transition: "background 1.2s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .opt { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.82); padding: 22px 26px; cursor: pointer; text-align: left; font-family: 'EB Garamond', serif; font-size: 18px; line-height: 1.5; transition: all 0.3s; width: 100%; margin-bottom: 12px; font-weight: 500; font-style: italic; }
        .opt:hover { border-color: rgba(255,255,255,0.45); color: #fff; background: rgba(255,255,255,0.04); }
        .opt.sel { border-color: #fff; color: #fff; background: rgba(255,255,255,0.06); }
        .nxt { background: #fff; color: #000; border: none; padding: 18px 48px; font-family: 'Cinzel', serif; font-size: 12px; font-weight: 600; letter-spacing: 0.35em; cursor: pointer; margin-top: 28px; opacity: 0.25; transition: all 0.25s; text-transform: uppercase; }
        .nxt.act { opacity: 1; }
        .nxt.act:hover { transform: translateY(-2px); }
        .start-btn { background: #fff; color: #000; border: none; padding: 22px 60px; font-family: 'Cinzel', serif; font-size: 13px; font-weight: 600; letter-spacing: 0.4em; cursor: pointer; margin-top: 40px; text-transform: uppercase; transition: all 0.4s; }
        .start-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(255,255,255,0.1); }
        .rst { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); padding: 16px 32px; font-family: 'Cinzel', serif; font-size: 11px; cursor: pointer; margin-top: 36px; text-transform: uppercase; letter-spacing: 0.25em; }
        .rst:hover { border-color: rgba(255,255,255,0.7); color: #fff; }
        .fade { opacity: 0; transform: translateY(14px); }
        .fade-in { opacity: 1; transform: translateY(0); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .ornate { font-family: 'Cinzel', serif; }
      `}</style>

      {!started ? (
        <div className="fade-in" style={{ width: "100%", maxWidth: 640, textAlign: "center" }}>
          <p className="ornate" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 28, fontWeight: 600 }}>◆ THE SHADOW ASSESSMENT ◆</p>
          <h1 className="ornate" style={{ fontSize: "clamp(36px, 7.5vw, 64px)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.1, letterSpacing: "0.02em", marginBottom: 28, textTransform: "uppercase" }}>
            What's Your<br /><em style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, color: "#A78BFA", textTransform: "none", fontSize: "1.15em" }}>Hidden</em><br />Leadership<br />Shadow?
          </h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: "clamp(18px, 3.2vw, 22px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, maxWidth: 500, margin: "0 auto 16px", fontWeight: 500 }}>
            Every leader has a shadow — a survival strategy that became a personality, then quietly became a ceiling.
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(16px, 2.8vw, 19px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 500, margin: "0 auto", fontWeight: 400 }}>
            This is the deepest of the five tests. 12 questions. 5 archetypes. By the end, you'll see the exact pattern that's been silently running your leadership — and the work required to break free.
          </p>
          <button className="start-btn" onClick={() => setStarted(true)}>BEGIN</button>
          <p className="ornate" style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em", marginTop: 24, textTransform: "uppercase" }}>⏱ 5 MIN · GO SLOWLY · BE HONEST</p>
        </div>
      ) : !result ? (
        <div className={animating ? "fade" : "fade-in"} style={{ width: "100%", maxWidth: 640 }}>
          <div style={{ marginBottom: 48 }}>
            <div className="ornate" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 12, fontWeight: 600, letterSpacing: "0.2em" }}>
              <span>{String(current + 1).padStart(2, "0")} · {String(questions.length).padStart(2, "0")}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)" }}>
              <div style={{ height: 1, width: `${progress}%`, background: "#fff", transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>
          </div>
          <h2 className="ornate" style={{ fontSize: "clamp(22px, 4.5vw, 30px)", fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.3, letterSpacing: "0.01em", textTransform: "uppercase" }}>{q.text}</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, color: "rgba(255,255,255,0.55)", marginBottom: 32, fontStyle: "italic", fontWeight: 500 }}>{q.subtext}</p>
          <div>
            {q.options.map((opt, i) => (
              <button key={i} className={`opt${selected === opt ? " sel" : ""}`} onClick={() => setSelected(opt)}>{opt.text}</button>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={`nxt${selected ? " act" : ""}`} onClick={handleNext} disabled={!selected}>{current + 1 === questions.length ? "REVEAL" : "CONTINUE"}</button>
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{ width: "100%", maxWidth: 720, textAlign: "center" }}>
          <p className="ornate" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>◆ YOUR SHADOW ◆</p>
          <div style={{ fontSize: 56, marginBottom: 16, color: result.color }}>{result.emoji}</div>
          <p className="ornate" style={{ fontSize: 12, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>{result.archetype}</p>
          <h1 className="ornate" style={{ fontSize: "clamp(48px, 11vw, 88px)", fontWeight: 700, color: result.color, margin: "0 0 28px", lineHeight: 0.95, letterSpacing: "0.02em", textTransform: "uppercase" }}>{result.title}</h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(255,255,255,0.88)", marginBottom: 44, fontWeight: 500, lineHeight: 1.4, maxWidth: 580, margin: "0 auto 44px" }}>"{result.tagline}"</p>

          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.1)", padding: 36, marginBottom: 18, textAlign: "left" }}>
            <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 22, fontWeight: 700 }}>▸ THE PATTERN</p>
            {result.description.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.88)", marginTop: i === 0 ? 0 : 18, marginBottom: 0, lineHeight: 1.7, fontWeight: 400 }}>{p}</p>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginBottom: 18 }}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.1)", padding: 28, textAlign: "left" }}>
              <p className="ornate" style={{ fontSize: 10, color: result.accent, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>◔ THE LIGHT</p>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: "rgba(255,255,255,0.88)", margin: 0, lineHeight: 1.55, fontStyle: "italic", fontWeight: 500 }}>{result.light}</p>
            </div>
            <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", padding: 28, textAlign: "left" }}>
              <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>◕ THE SHADOW</p>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: "rgba(255,255,255,0.88)", margin: 0, lineHeight: 1.55, fontStyle: "italic", fontWeight: 500 }}>{result.shadow}</p>
            </div>
          </div>

          <div style={{ background: "rgba(0,0,0,0.5)", border: "1px solid " + result.color + "50", padding: 32, marginBottom: 18, textAlign: "left" }}>
            <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>▸ THE COST</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(17px, 3.2vw, 21px)", color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6, fontWeight: 500, fontStyle: "italic" }}>{result.cost}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.1)", padding: 32, marginBottom: 18, textAlign: "left" }}>
            <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>▸ THE AWAKENING</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(17px, 3.2vw, 21px)", color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{result.awakening}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.1)", padding: 32, marginBottom: 18, textAlign: "left" }}>
            <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 22, fontWeight: 700 }}>▸ THE PRACTICE</p>
            {result.practice.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 16, fontFamily: "'EB Garamond', serif", fontSize: 17, color: "rgba(255,255,255,0.88)", lineHeight: 1.55, fontWeight: 500 }}>
                <span className="ornate" style={{ color: result.color, fontSize: 14, fontWeight: 700, minWidth: 30, letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</span>{p}
              </div>
            ))}
          </div>

          <div style={{ background: result.color + "10", border: `2px solid ${result.color}`, padding: 36, marginBottom: 18 }}>
            <p className="ornate" style={{ fontSize: 10, color: result.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 18, fontWeight: 700 }}>▸ THE TRUTH</p>
            <p className="ornate" style={{ fontSize: "clamp(20px, 4vw, 28px)", color: "#fff", margin: 0, lineHeight: 1.4, fontWeight: 600, letterSpacing: "0.01em", textTransform: "uppercase" }}>"{result.truth}"</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px dashed rgba(255,255,255,0.2)", padding: 28, marginBottom: 18, textAlign: "left" }}>
            <p className="ornate" style={{ fontSize: 10, color: result.accent, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>◇ THE SECRET GIFT</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.65, fontStyle: "italic", fontWeight: 500 }}>{result.secretGift}</p>
          </div>

          <button className="rst" onClick={restart}>↺ Retake</button>
        </div>
      )}
    </div>
  );
}
