import { useState } from "react";

const questions = [
  {
    text: "It's Sunday night. You have 4 free hours. What sounds most like rest?",
    subtext: "Be honest — not what you think you should pick.",
    options: [
      { text: "Filming content, even if no one's watching yet", traits: { creator: 3, builder: 0, expert: 0, seller: 1, maker: 1 } },
      { text: "Building or organizing something on my computer", traits: { creator: 0, builder: 3, expert: 1, seller: 0, maker: 1 } },
      { text: "Reading or researching deep into a niche topic", traits: { creator: 0, builder: 1, expert: 3, seller: 0, maker: 0 } },
      { text: "Browsing marketplaces, deals, or trends", traits: { creator: 1, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Working with my hands — making something physical", traits: { creator: 0, builder: 0, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "Someone offers you $10K to build them a business in 30 days. What do you build?",
    subtext: "Your gut answer reveals where your real skills live.",
    options: [
      { text: "A personal brand around them with daily content", traits: { creator: 3, builder: 1, expert: 0, seller: 1, maker: 0 } },
      { text: "An automated digital product they can sell on repeat", traits: { creator: 0, builder: 3, expert: 1, seller: 1, maker: 0 } },
      { text: "A premium consulting offer in their area of expertise", traits: { creator: 0, builder: 0, expert: 3, seller: 1, maker: 0 } },
      { text: "Something they can flip, sell, or arbitrage fast", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 1 } },
      { text: "A handcrafted product line with their unique style", traits: { creator: 1, builder: 0, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "What's your relationship with being seen?",
    subtext: "There's no right answer here — only honest ones.",
    options: [
      { text: "I come alive in the spotlight. Energy is currency.", traits: { creator: 3, builder: 0, expert: 0, seller: 2, maker: 0 } },
      { text: "I'd rather build the empire than be the face of it", traits: { creator: 0, builder: 3, expert: 1, seller: 0, maker: 2 } },
      { text: "I want to be respected, not popular", traits: { creator: 0, builder: 1, expert: 3, seller: 1, maker: 1 } },
      { text: "I'll do whatever sells. The spotlight is a tool.", traits: { creator: 1, builder: 1, expert: 0, seller: 3, maker: 0 } },
      { text: "Let the work speak. I prefer the shadows.", traits: { creator: 0, builder: 1, expert: 1, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "Pick the income model that makes you instantly excited:",
    subtext: "First reaction. Don't overthink it.",
    options: [
      { text: "Going viral, building a following, monetizing attention", traits: { creator: 3, builder: 0, expert: 0, seller: 1, maker: 0 } },
      { text: "Building once, selling forever — passive at scale", traits: { creator: 0, builder: 3, expert: 1, seller: 1, maker: 1 } },
      { text: "$5K-20K clients who pay for my brain", traits: { creator: 0, builder: 0, expert: 3, seller: 1, maker: 0 } },
      { text: "Fast-cycle deals — buy low, sell high, repeat", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "True fans who pay premium for what only I make", traits: { creator: 1, builder: 0, expert: 1, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "The thing you'd genuinely do for free, just because you love it:",
    subtext: "This is where your real business is hiding.",
    options: [
      { text: "Making videos, podcasts, or writing online", traits: { creator: 3, builder: 1, expert: 1, seller: 0, maker: 0 } },
      { text: "Building tools, systems, or solving puzzles", traits: { creator: 0, builder: 3, expert: 1, seller: 0, maker: 1 } },
      { text: "Teaching, advising, or breaking down ideas", traits: { creator: 1, builder: 0, expert: 3, seller: 0, maker: 0 } },
      { text: "Hunting for deals, opportunities, undervalued things", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 1 } },
      { text: "Crafting, designing, building things by hand", traits: { creator: 0, builder: 1, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "What kind of pressure makes you most alive?",
    subtext: "We all have a kind of stress that fuels us.",
    options: [
      { text: "Performing — the camera, the stage, the audience", traits: { creator: 3, builder: 0, expert: 1, seller: 1, maker: 0 } },
      { text: "Solving — the broken thing that needs to work", traits: { creator: 0, builder: 3, expert: 2, seller: 0, maker: 1 } },
      { text: "Knowing — being asked the hard question and nailing it", traits: { creator: 0, builder: 0, expert: 3, seller: 0, maker: 0 } },
      { text: "Closing — the deal, the sale, the win", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Creating — the blank canvas, the empty room", traits: { creator: 1, builder: 1, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "Your relationship with patience:",
    subtext: "Different paths require different timelines.",
    options: [
      { text: "I can play a long game if I'm building an audience", traits: { creator: 3, builder: 2, expert: 1, seller: 0, maker: 1 } },
      { text: "I'll grind in silence for years on the right thing", traits: { creator: 0, builder: 3, expert: 2, seller: 0, maker: 2 } },
      { text: "I want to master something before I monetize it", traits: { creator: 0, builder: 1, expert: 3, seller: 0, maker: 1 } },
      { text: "I need momentum and quick wins to stay engaged", traits: { creator: 1, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Time disappears when I'm in the work itself", traits: { creator: 1, builder: 1, expert: 1, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "Pick the deepest fear:",
    subtext: "Whatever you most don't want to admit out loud.",
    options: [
      { text: "Being invisible. Working hard with no one noticing.", traits: { creator: 3, builder: 0, expert: 1, seller: 1, maker: 0 } },
      { text: "Trading time for money for the rest of my life", traits: { creator: 1, builder: 3, expert: 1, seller: 1, maker: 1 } },
      { text: "Being seen as a fraud or not actually expert enough", traits: { creator: 0, builder: 0, expert: 3, seller: 0, maker: 1 } },
      { text: "Missing the wave. Watching others get rich while I wait.", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Doing meaningless work that doesn't reflect me", traits: { creator: 1, builder: 0, expert: 1, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "How do you feel about repetition?",
    subtext: "Some businesses are built on it. Others die from it.",
    options: [
      { text: "Repetition is fine if I'm building presence with each post", traits: { creator: 3, builder: 1, expert: 1, seller: 0, maker: 0 } },
      { text: "I love systems — same input, predictable output", traits: { creator: 0, builder: 3, expert: 1, seller: 1, maker: 1 } },
      { text: "I get bored unless I'm going deeper into mastery", traits: { creator: 0, builder: 0, expert: 3, seller: 0, maker: 1 } },
      { text: "I hate it. I need new opportunities constantly.", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Repetition is a meditation when I'm making something", traits: { creator: 0, builder: 1, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "If you could only have one of these forever, you'd pick:",
    subtext: "Your answer reveals the fuel underneath the work.",
    options: [
      { text: "An audience of 100K who love what I do", traits: { creator: 3, builder: 0, expert: 1, seller: 0, maker: 1 } },
      { text: "$50K/month from products on autopilot", traits: { creator: 0, builder: 3, expert: 1, seller: 1, maker: 0 } },
      { text: "Industry-wide respect as the authority", traits: { creator: 0, builder: 0, expert: 3, seller: 0, maker: 1 } },
      { text: "$500K cash from fast-moving deals this year", traits: { creator: 0, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "A cult-following of people who love my craft", traits: { creator: 1, builder: 0, expert: 1, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "How do you actually want to spend your days?",
    subtext: "The lifestyle question matters more than the income one.",
    options: [
      { text: "Filming, editing, posting, talking to my audience", traits: { creator: 3, builder: 0, expert: 0, seller: 0, maker: 0 } },
      { text: "Heads-down focused work, building things alone", traits: { creator: 0, builder: 3, expert: 1, seller: 0, maker: 2 } },
      { text: "Deep one-on-one calls with high-paying clients", traits: { creator: 0, builder: 0, expert: 3, seller: 1, maker: 0 } },
      { text: "Always-on hustle — calls, deals, opportunities", traits: { creator: 1, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "In a studio, workshop, or kitchen — making", traits: { creator: 0, builder: 0, expert: 0, seller: 0, maker: 3 } },
    ],
  },
  {
    text: "What's the energy you want to put into the world?",
    subtext: "The final question — and the most revealing.",
    options: [
      { text: "Inspiration. I want to make people feel something.", traits: { creator: 3, builder: 0, expert: 1, seller: 0, maker: 1 } },
      { text: "Leverage. I want to give people tools that change their life.", traits: { creator: 0, builder: 3, expert: 1, seller: 0, maker: 0 } },
      { text: "Wisdom. I want to be the person people turn to.", traits: { creator: 0, builder: 0, expert: 3, seller: 0, maker: 0 } },
      { text: "Possibility. I want to show people what's actually achievable.", traits: { creator: 1, builder: 0, expert: 0, seller: 3, maker: 0 } },
      { text: "Beauty. I want to make things that didn't exist before.", traits: { creator: 0, builder: 0, expert: 0, seller: 0, maker: 3 } },
    ],
  },
];

const results = {
  creator: {
    title: "The Creator",
    subtitle: "AUDIENCE IS YOUR EMPIRE",
    emoji: "🎬",
    color: "#FF2E63",
    bg: "#1a0008",
    tagline: "You don't sell products. You sell presence.",
    coreTruth: "You are the product. Your face, your voice, your story — that's the asset. Everything else is downstream of attention.",
    longDescription: "There's a specific kind of person who feels MORE alive when the camera turns on, not less. Most people perform under pressure. You perform AS pressure — you transform watchful eyes into fuel. This isn't ego. It's wiring. You were built to broadcast, and the modern economy has finally caught up to people like you.\n\nBut here's what most Creators get wrong: they think the goal is going viral. It's not. Viral is a side effect. The real game is building a relationship with strangers at scale — convincing thousands of people that you're worth their attention, day after day. Once you have that, you can sell almost anything. Books, courses, products, services — they all flow downstream from one thing: an audience that genuinely cares about what you say.",
    paths: [
      { name: "Personal Brand → Multiple Income Streams", timeline: "12-18 mo", why: "Your face becomes the brand. Audience pays through every channel." },
      { name: "Niche Content Creator (TikTok, YT, IG)", timeline: "6-12 mo", why: "Pick one platform, dominate one topic, monetize via products + sponsors." },
      { name: "Paid Newsletter / Substack", timeline: "12-24 mo", why: "Lower volume, higher trust. 1,000 paid subscribers = $60K/year." },
      { name: "Course Creator With Built-In Audience", timeline: "6 mo from launch", why: "Once you have 10K engaged followers, courses convert at 1-3%." },
    ],
    superpowers: ["Camera presence", "Storytelling", "Persuasion at scale", "Reading audiences"],
    blindspots: "You confuse creation with completion. You'll keep posting and posting and forget to actually build a product to sell. Volume without strategy = exhaustion without income.",
    firstStep: "Pick ONE platform. Post 5x per week for 90 days. Don't even think about monetization until you've posted 90 videos.",
    truth: "The riches aren't in posting more. They're in being unforgettable to a specific kind of person.",
    famousMatches: ["Ali Abdaal", "Alex Hormozi", "Codie Sanchez"],
    income: "$0 → $50K/mo possible (top 1%)",
  },
  builder: {
    title: "The Builder",
    subtitle: "LEVERAGE IS YOUR LANGUAGE",
    emoji: "🛠",
    color: "#00D4FF",
    bg: "#000a1a",
    tagline: "You build the machine that builds the wealth.",
    coreTruth: "You'd rather build something once and let it sell forever than hustle for clients every month. Systems are your art form.",
    longDescription: "Builders are misunderstood. People assume they're just introverts who hate selling — but it's deeper than that. Builders see the world as a system that can be optimized. Where others see chaos, you see leverage. Where others sell their time, you build assets that pay forever.\n\nThis is why digital products, software, and automated businesses are your home turf. You don't need to be the loudest voice in the room. You need a product so well-built that it sells itself while you sleep. The trade-off? You will spend months in obscurity, building things nobody is asking for yet. Most Builders quit here. The ones who don't end up with passive income that compounds for decades.\n\nYour real competition isn't other Builders. It's your own perfectionism — the version of you that wants to keep tweaking the product instead of launching it. Done is more profitable than perfect. Always.",
    paths: [
      { name: "Digital Products (templates, guides, frameworks)", timeline: "3-6 mo", why: "Lowest barrier to entry. Build once, sell forever on Gumroad/Etsy." },
      { name: "Notion / Airtable / Design Templates", timeline: "6-12 mo", why: "Solve a specific workflow problem. Hot category right now." },
      { name: "Micro-SaaS or No-Code Tools", timeline: "12-18 mo", why: "Recurring revenue. Hardest to start, biggest payoff." },
      { name: "Print-on-Demand or Drop Shipping", timeline: "6-12 mo", why: "Physical products with no inventory. Pure systems play." },
    ],
    superpowers: ["Systems thinking", "Patience", "Product intuition", "Independent execution"],
    blindspots: "You can build for years without ever marketing. You'll have a perfect product nobody knows exists. The product is 20% — distribution is 80%.",
    firstStep: "Identify a problem you've personally solved. Build the simplest version of the solution this week. Sell it before you 'finish' it.",
    truth: "The world doesn't reward what you built. It rewards what you sold.",
    famousMatches: ["Pieter Levels", "Marie Poulin", "Sahil Lavingia"],
    income: "$0 → $30K/mo passive within 24 mo",
  },
  expert: {
    title: "The Authority",
    subtitle: "MASTERY IS YOUR MOAT",
    emoji: "🎯",
    color: "#FFB800",
    bg: "#1a1100",
    tagline: "You don't need millions of followers. You need the right hundred.",
    coreTruth: "Your knowledge IS the product. Your intellect, refined over years, can be packaged into offers people pay premium prices for.",
    longDescription: "While Creators chase audiences and Builders chase products, you're playing a different game entirely. You go deep. You build the kind of expertise that takes years to develop and minutes to monetize once you have it.\n\nThe Authority's path is the most lucrative path on this list — and the slowest to start. There's no viral moment. No overnight launch. Just the slow, deliberate accumulation of skill, reputation, and trust. People will pay $5K, $10K, $50K for an hour with someone who genuinely knows what they're talking about. Most people compete on price. You compete on depth — and depth has no ceiling.\n\nThe trap most Authorities fall into is undervaluing themselves. You're surrounded by other experts and you assume your knowledge is common. It isn't. The thing that's obvious to you is invisible to 99% of the world. Your job isn't to learn more — it's to package what you already know in a way that's irresistibly valuable to a specific audience.",
    paths: [
      { name: "Premium 1:1 Coaching or Consulting", timeline: "6-12 mo", why: "High-ticket, low-volume. 5 clients at $2K/mo = $10K/mo." },
      { name: "High-Ticket Courses ($1K-$5K)", timeline: "12-18 mo", why: "Productize your expertise. Scale beyond your hours." },
      { name: "Done-For-You Premium Services", timeline: "3-6 mo", why: "Charge what corporations pay. Skip cheap freelance entirely." },
      { name: "Mastermind or Group Programs", timeline: "12-24 mo", why: "20 people × $500/mo = $10K MRR. Highest leverage version." },
    ],
    superpowers: ["Deep expertise", "Pattern recognition", "Trust at depth", "Premium positioning"],
    blindspots: "You undercharge. Severely. You compare yourself to other experts instead of remembering most of the world has no idea what you know.",
    firstStep: "Identify the ONE thing you know better than 95% of people. Charge 3x what feels comfortable. The pricing IS the marketing.",
    truth: "Premium pricing isn't greedy. It's a signal that you're worth taking seriously.",
    famousMatches: ["Dan Koe", "Justin Welsh", "Naval Ravikant"],
    income: "$5K → $50K/mo within 24 mo",
  },
  seller: {
    title: "The Operator",
    subtitle: "SPEED IS YOUR EDGE",
    emoji: "⚡",
    color: "#00FF88",
    bg: "#001a0d",
    tagline: "You see opportunities other people walk right past.",
    coreTruth: "You don't wait for the perfect plan. You move, you test, you adapt — and while others are still researching, you've already got 10 deals running.",
    longDescription: "The Operator is the entrepreneur Hollywood made movies about. While others are reading books on entrepreneurship, you're already DOING entrepreneurship — buying, selling, flipping, closing. You don't have philosophical debates about 'finding your purpose.' You have invoices.\n\nYour superpower is bias toward action in a world full of people who can't stop researching. But this is also where most Operators self-destruct. You confuse activity with progress. You chase shiny objects. You start 10 things and finish two. Speed without focus just gets you to the wrong destination faster.\n\nThe Operators who build wealth aren't the ones moving the fastest — they're the ones moving fast in ONE direction long enough to compound. Pick a vehicle (e-commerce, real estate, sales-based business, agency) and run 100 reps before you switch. Most of your competition will quit at rep 12.",
    paths: [
      { name: "E-commerce / DTC Brand", timeline: "6-18 mo", why: "Fast-feedback business. Test products, kill losers, scale winners." },
      { name: "High-Commission Sales Roles", timeline: "Immediate", why: "Closer at a SaaS company = $200K/year while building your thing." },
      { name: "Real Estate / Wholesaling / Flipping", timeline: "6-12 mo", why: "Pure deal-flow. Each transaction is a six-figure swing." },
      { name: "Agency or Service Business", timeline: "3-6 mo", why: "Sell services to businesses. Scale by hiring closers like you." },
    ],
    superpowers: ["Bias to action", "Risk tolerance", "Closing", "Pattern recognition in markets"],
    blindspots: "Shiny object syndrome. You'll launch 5 businesses in a year and master none. The Operator who wins picks ONE and runs 100 deals before switching.",
    firstStep: "Pick ONE vehicle. Commit to 100 reps. Track everything obsessively. Reinvest profits to scale what works.",
    truth: "Most people fail because they don't move. You'll fail because you move too much in too many directions.",
    famousMatches: ["Cody Sperber", "Ryan Pineda", "Sara Blakely"],
    income: "$0 → $100K/mo within 36 mo",
  },
  maker: {
    title: "The Artisan",
    subtitle: "CRAFT IS YOUR CURRENCY",
    emoji: "🎨",
    color: "#C77DFF",
    bg: "#0d0019",
    tagline: "You don't need millions of customers — just enough true fans.",
    coreTruth: "What you make couldn't have been made by anyone else. That irreplaceability is the entire business.",
    longDescription: "There's a kind of entrepreneur who can't be replicated by AI, scaled by automation, or copied by Amazon. That's you. The Artisan operates in a fundamentally different economy — one where craft, taste, and originality matter more than volume or speed.\n\nThis is both your gift and your curse. Gift: you can build a small, sustainable, deeply meaningful business that gives you full creative freedom and a loyal audience that pays premium for what only you make. Curse: most business advice is written for the OTHER 4 archetypes, so it'll feel like everyone is telling you to scale, optimize, and grow when those things might actually destroy what makes your work special.\n\nThe path that works for you is the 1,000 True Fans path. You don't need to be discovered by millions. You need 1,000 people who genuinely love what you make and pay you well for it. That's a six-figure business — and it can stay yours forever, on your terms.",
    paths: [
      { name: "Etsy / Shopify Handmade Store", timeline: "6-18 mo", why: "Direct-to-fan model. Premium pricing for unique craft." },
      { name: "Commission-Based Custom Work", timeline: "3-6 mo", why: "Higher prices than retail. Builds your portfolio fast." },
      { name: "Patreon / Subscription Model", timeline: "12-24 mo", why: "True fans paying monthly = creative freedom forever." },
      { name: "Local + Boutique Wholesale", timeline: "6-12 mo", why: "Stock other people's stores while keeping your direct channel." },
    ],
    superpowers: ["Originality", "Taste", "Craft mastery", "Cult-following potential"],
    blindspots: "You undercharge to be 'fair.' You hide your work because it doesn't feel ready. You forget that documenting the process is half the business.",
    firstStep: "Document your process on social media for 30 days straight. Open an Etsy shop. Price for time + materials × 3 minimum.",
    truth: "Your art isn't what you sell. Your art is who you become while making it. People buy that.",
    famousMatches: ["Kate Bingaman-Burt", "Adam J. Kurtz", "Yowie Yowie"],
    income: "$0 → $10K/mo with true-fans model",
  },
};

export default function SideHustleTest() {
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
          Object.entries(ans.traits).forEach(([trait, val]) => {
            totals[trait] = (totals[trait] || 0) + val;
          });
        });
        const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
        const top = sorted[0][0];
        const second = sorted[1][0];
        setResult({ ...results[top], secondary: results[second].title, secondaryColor: results[second].color });
      }
    }, 350);
  }

  function restart() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
    setStarted(false);
  }

  const q = questions[current];

  return (
    <div style={{
      minHeight: "100vh",
      background: result ? result.bg : "#08080a",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 18px",
      transition: "background 1s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800;12..96,900&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .opt { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.78); padding: 18px 22px; border-radius: 6px; cursor: pointer; text-align: left; font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.5; transition: all 0.2s; width: 100%; margin-bottom: 10px; font-weight: 500; display: flex; gap: 14px; align-items: flex-start; }
        .opt:hover { border-color: rgba(255,255,255,0.4); color: #fff; transform: translateX(3px); background: rgba(255,255,255,0.05); }
        .opt.sel { border-color: #fff; color: #fff; background: rgba(255,255,255,0.08); transform: translateX(3px); }
        .opt-letter { color: rgba(255,255,255,0.3); font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600; padding-top: 1px; flex-shrink: 0; }
        .opt.sel .opt-letter { color: #fff; }
        .nxt { background: #fff; color: #000; border: none; padding: 16px 44px; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.2em; cursor: pointer; border-radius: 4px; margin-top: 24px; opacity: 0.25; transition: all 0.2s; text-transform: uppercase; }
        .nxt.act { opacity: 1; }
        .nxt.act:hover { transform: translateY(-2px); }
        .start-btn { background: #fff; color: #000; border: none; padding: 18px 56px; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; letter-spacing: 0.25em; cursor: pointer; border-radius: 4px; margin-top: 32px; text-transform: uppercase; transition: all 0.3s; }
        .start-btn:hover { transform: translateY(-3px); }
        .rst { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.6); padding: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; cursor: pointer; border-radius: 4px; margin-top: 32px; text-transform: uppercase; }
        .rst:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .fade { opacity: 0; transform: translateY(12px); }
        .fade-in { opacity: 1; transform: translateY(0); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {!started ? (
        <div className="fade-in" style={{ width: "100%", maxWidth: 600, textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24, fontWeight: 600 }}>◆ THE FOUNDER'S BLUEPRINT TEST ◆</p>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
            What Business<br />Were You<br /><span style={{ fontStyle: "italic", color: "#FF2E63" }}>Built For?</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 3vw, 19px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto 12px", fontWeight: 400 }}>
            Most people pick the wrong path and quit in 90 days. Not because they're lazy — because they're forcing themselves into someone else's shape.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 2.8vw, 17px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto", fontWeight: 400 }}>
            This 12-question diagnostic reveals which of 5 entrepreneur archetypes matches your wiring — and the exact path your personality is built to win at.
          </p>
          <button className="start-btn" onClick={() => setStarted(true)}>BEGIN THE TEST →</button>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", marginTop: 20, textTransform: "uppercase" }}>⏱ 4 MINUTES · NO EMAIL REQUIRED</p>
        </div>
      ) : !result ? (
        <div className={animating ? "fade" : "fade-in"} style={{ width: "100%", maxWidth: 600 }}>
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10, fontWeight: 500, letterSpacing: "0.05em" }}>
              <span>Q{String(current + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}</span>
              <span>{Math.round(progress)}% COMPLETE</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: 3, width: `${progress}%`, background: "linear-gradient(90deg, #FF2E63, #FFB800)", borderRadius: 2, transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(24px, 5vw, 34px)", fontWeight: 800, color: "#fff", marginBottom: 8, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{q.text}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 28, fontStyle: "italic", fontWeight: 400 }}>{q.subtext}</p>
          <div>
            {q.options.map((opt, i) => (
              <button key={i} className={`opt${selected === opt ? " sel" : ""}`} onClick={() => setSelected(opt)}>
                <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt.text}</span>
              </button>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={`nxt${selected ? " act" : ""}`} onClick={handleNext} disabled={!selected}>
              {current + 1 === questions.length ? "REVEAL MY ARCHETYPE →" : "NEXT QUESTION →"}
            </button>
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{ width: "100%", maxWidth: 680, textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>◆ YOUR ARCHETYPE ◆</p>
          <div style={{ fontSize: 80, marginBottom: 12, lineHeight: 1 }}>{result.emoji}</div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: result.color, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{result.subtitle}</p>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(48px, 11vw, 88px)", fontWeight: 900, color: result.color, margin: "0 0 20px", lineHeight: 0.9, letterSpacing: "-0.05em" }}>{result.title}</h1>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(255,255,255,0.85)", marginBottom: 36, fontWeight: 700, lineHeight: 1.3 }}>"{result.tagline}"</p>

          <div style={{ background: result.color + "10", border: `1px solid ${result.color}40`, borderRadius: 8, padding: 28, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ THE CORE TRUTH</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(18px, 3.5vw, 22px)", color: "#fff", margin: 0, lineHeight: 1.4, fontWeight: 700 }}>{result.coreTruth}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 28, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>▸ WHO YOU ARE</p>
            {result.longDescription.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 2.8vw, 16px)", color: "rgba(255,255,255,0.85)", marginTop: i === 0 ? 0 : 14, marginBottom: 0, lineHeight: 1.7, fontWeight: 400 }}>{p}</p>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 28, marginBottom: 16, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>▸ YOUR BEST-FIT BUSINESS PATHS</p>
            {result.paths.map((p, i) => (
              <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < result.paths.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 12 }}>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(15px, 3vw, 17px)", color: "#fff", margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{p.name}</h3>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, padding: "3px 8px", border: `1px solid ${result.color}50`, borderRadius: 12, whiteSpace: "nowrap", fontWeight: 500 }}>{p.timeline}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.5, fontWeight: 400 }}>{p.why}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 24, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ YOUR SUPERPOWERS</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {result.superpowers.map((s, i) => (
                <span key={i} style={{ background: result.color + "15", color: result.color, padding: "6px 14px", borderRadius: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 24, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ YOUR BLINDSPOT</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{result.blindspots}</p>
          </div>

          <div style={{ background: result.color + "12", border: `2px solid ${result.color}`, borderRadius: 8, padding: 30, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: result.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ YOUR FIRST MOVE</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(17px, 3.5vw, 20px)", color: "#fff", margin: 0, lineHeight: 1.5, fontWeight: 700 }}>{result.firstStep}</p>
          </div>

          <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: 30, marginBottom: 14 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>▸ THE HARD TRUTH</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontStyle: "italic", fontSize: "clamp(20px, 4vw, 26px)", color: "#fff", margin: 0, lineHeight: 1.4, fontWeight: 700 }}>"{result.truth}"</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 18, textAlign: "left" }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: result.color, letterSpacing: "0.2em", marginBottom: 10, fontWeight: 600, textTransform: "uppercase" }}>FAMOUS MATCHES</p>
              {result.famousMatches.map((m, i) => (<p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)", margin: "0 0 4px", fontWeight: 500 }}>{m}</p>))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 18, textAlign: "left" }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: result.color, letterSpacing: "0.2em", marginBottom: 10, fontWeight: 600, textTransform: "uppercase" }}>INCOME RUNWAY</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{result.income}</p>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.15)", borderRadius: 8, padding: 20, marginBottom: 14, textAlign: "left" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>YOUR SECONDARY ARCHETYPE</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 18, color: result.secondaryColor, margin: 0, fontWeight: 700 }}>{result.secondary}</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6, marginBottom: 0, lineHeight: 1.5 }}>The strongest founders blend their primary with traits from a secondary archetype.</p>
          </div>

          <button className="rst" onClick={restart}>↺ RETAKE TEST</button>
        </div>
      )}
    </div>
  );
}
