import { useMemo, useState } from "react";
import {
  ArrowDownRight, ArrowRight, Award, Bell, BookOpen, CalendarDays, Check, ChevronDown,
  ChevronLeft, ChevronRight, Clock3, Compass, Cpu, Download, ExternalLink, Globe2,
  FlaskConical, GraduationCap, HeartHandshake, Camera, Layers3, Library, Mail,
  MapPin, Menu, Microscope, Mountain, Palette, Play, Quote, School, Search, ShieldCheck,
  Sparkles, Trophy, Users, X, Zap
} from "lucide-react";

export const SCHOOL = {
  name: "Mountain View Senior School",
  tagline: "Excellence. Character. Leadership.",
  location: "Kiambu County, Kenya",
  principal: "Dr. Miriam Wanjiku",
  phone: "+254 7XX XXX XXX",
  email: "admissions@mountainviewsenior.sc.ke",
  primary: "#0B1F3A",
  accent: "#C69B4E",
  neutral: "#6B6459",
  base: "#FAF8F4",
  support: "#2F5D45",
};

const img = {
  hero: "/manus-storage/mountain-view-hero_5078e14d.jpg",
  stem: "/manus-storage/mountain-view-stem_fc5d93fb.jpg",
  social: "/manus-storage/mountain-view-social_d8ae4642.jpg",
  arts: "/manus-storage/mountain-view-arts_9ac8fdbf.jpg",
  campus: "/manus-storage/mountain-view-campus_1834dde8.jpg",
};

type Notify = (message: string) => void;

function Crest({ compact = false }: { compact?: boolean }) {
  return <div className={`flex items-center gap-3 ${compact ? "scale-90 origin-left" : ""}`}>
    <div className="relative grid h-11 w-10 place-items-center bg-[#c69b4e] text-[#0b1f3a]" style={{ clipPath: "polygon(50% 0, 94% 18%, 86% 74%, 50% 100%, 14% 74%, 6% 18%)" }} aria-label="Mountain View crest">
      <Mountain size={20} strokeWidth={2.4} />
      <span className="absolute bottom-2 h-px w-5 bg-[#0b1f3a]" />
    </div>
    <div className="leading-tight">
      <div className="font-display text-[15px] font-semibold tracking-[-.02em] text-[#0b1f3a]">MOUNTAIN VIEW</div>
      <div className="text-[9px] font-bold tracking-[.21em] text-[#927033]">SENIOR SCHOOL</div>
    </div>
  </div>;
}

function ButtonLink({ children, href = "#", variant = "primary", onClick, icon = true }: { children: React.ReactNode; href?: string; variant?: "primary" | "outline" | "text" | "light" | "outlineLight"; onClick?: () => void; icon?: boolean }) {
  const styles = {
    primary: "bg-[#0b1f3a] text-[#faf8f4] hover:bg-[#163258]",
    outline: "border border-[#c69b4e]/70 text-[#0b1f3a] hover:bg-[#c69b4e]/10",
    text: "text-[#0b1f3a] hover:text-[#927033]",
    light: "bg-[#faf8f4] text-[#0b1f3a] hover:bg-white", outlineLight: "border border-[#c69b4e]/80 text-[#dec27f] hover:bg-[#c69b4e]/10",
  }[variant];
  return <a href={href} onClick={onClick} className={`focus-ring inline-flex min-h-11 items-center justify-center gap-3 px-5 py-3 text-[11px] font-bold uppercase tracking-[.13em] transition duration-200 active:scale-[.98] ${styles}`}>
    {children}{icon && <ArrowRight size={15} strokeWidth={1.7} />}
  </a>;
}

function SectionIntro({ eyebrow, title, copy, dark = false, action }: { eyebrow: string; title: React.ReactNode; copy?: string; dark?: boolean; action?: React.ReactNode }) {
  return <div className={`mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between ${dark ? "text-[#faf8f4]" : ""}`}>
    <div className="max-w-2xl">
      <div className={`eyebrow mb-4 ${dark ? "text-[#dec27f]" : ""}`}>{eyebrow}</div>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.04em] md:text-6xl">{title}</h2>
      {copy && <p className={`mt-5 max-w-xl text-[15px] leading-7 ${dark ? "text-white/65" : "text-[#6b6459]"}`}>{copy}</p>}
    </div>
    {action}
  </div>;
}

function Header({ onNotify }: { onNotify: Notify }) {
  const [open, setOpen] = useState(false);
  const items = [["About", "#about"], ["Academics", "#pathways"], ["Gallery", "#gallery"]];
  const go = (_href: string) => { setOpen(false); };
  return <>
    <header className="sticky top-0 z-40 border-b border-[#0b1f3a]/10 bg-[#faf8f4]/95 backdrop-blur-xl">
      <div className="container flex h-[74px] items-center justify-between gap-6">
        <a href="#top" aria-label="Mountain View Senior School home"><Crest /></a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {items.map(([label, href]) => <a key={label} href={href} onClick={() => go(href)} className="focus-ring text-[11px] font-semibold text-[#6b6459] transition hover:text-[#0b1f3a]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/portal" className="focus-ring inline-flex h-11 items-center border border-[#0b1f3a]/20 px-4 text-[10px] font-bold uppercase tracking-[.12em] text-[#0b1f3a] transition hover:border-[#c69b4e]">Portal login</a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button className="focus-ring grid h-10 w-10 place-items-center border border-[#0b1f3a]/20" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-50 bg-[#0b1f3a]/45 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
      <aside className="ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-[#faf8f4] p-7 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between"><Crest compact /><button className="focus-ring grid h-10 w-10 place-items-center border border-[#0b1f3a]/15" onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} /></button></div>
        <nav className="mt-14 flex flex-col gap-5" aria-label="Mobile navigation">
          {items.map(([label, href], index) => <a key={label} href={href} onClick={() => go(href)} className="flex items-center justify-between border-b border-[#0b1f3a]/10 pb-4 font-display text-2xl text-[#0b1f3a]"><span>{label}</span><span className="text-xs text-[#c69b4e]">0{index + 1}</span></a>)}
        </nav>
        <div className="mt-auto space-y-3"><a href="/portal" onClick={() => onNotify("Portal login opens in a new view.")} className="focus-ring flex h-12 items-center justify-center bg-[#0b1f3a] text-[10px] font-bold uppercase tracking-[.13em] text-white">Portal login</a></div>
      </aside>
    </div>}
  </>;
}

function Hero() {
  return <section id="top" className="relative min-h-[690px] overflow-hidden bg-[#0b1f3a] text-[#faf8f4]">
    <img src={img.hero} alt="Learners walking across the Mountain View campus" className="absolute inset-0 h-full w-full object-cover opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#07152a] via-[#0b1f3a]/78 to-[#0b1f3a]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a] via-transparent to-[#0b1f3a]/20" />
    <div className="container relative flex min-h-[690px] flex-col justify-end pb-14 pt-20 md:pb-20">
      <div className="max-w-3xl animate-in">
        <div className="mb-6 flex items-center gap-3 text-[#dec27f]"><span className="h-px w-10 bg-[#c69b4e]" /><span className="text-[10px] font-bold uppercase tracking-[.22em]">Kiambu County · Est. 2001</span></div>
        <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[.9] tracking-[-.065em]">Where potential<br />becomes purpose.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-white/72 md:text-lg">Mountain View prepares young people to think boldly, lead with character, and build meaningful futures shaped by the possibilities of Kenya and the world.</p>
        <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="#about" variant="light">Explore our school</ButtonLink></div>
      </div>
      <div className="mt-16 grid max-w-4xl grid-cols-2 border-t border-white/25 pt-5 text-white md:grid-cols-4">
        {[['1,200+', 'learners'], ['65+', 'educators'], ['25+', 'years of excellence'], ['3', 'senior school pathways']].map(([num, label]) => <div key={label} className="border-r border-white/15 py-2 last:border-0 md:px-5 first:pl-0"><div className="font-display text-3xl text-[#dec27f] md:text-4xl">{num}</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-white/55">{label}</div></div>)}
      </div>
    </div>
    <a href="#about" className="focus-ring absolute bottom-6 right-6 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/70 transition hover:text-white md:flex"><span>Scroll to explore</span><ArrowDownRight size={15} /></a>
  </section>;
}

function QuickActions({ onNotify }: { onNotify: Notify }) {
  const actions = [
    { icon: BookOpen, title: "Academics", text: "Explore the three pathways.", href: "#pathways" },
    { icon: CalendarDays, title: "School calendar", text: "Term dates and key moments.", href: "#news" },
    { icon: Layers3, title: "Fees & requirements", text: "Plan with confidence.", href: "/resources" },
    { icon: Users, title: "Parent portal", text: "Stay close to their journey.", href: "/portal" },
    { icon: Zap, title: "Student portal", text: "Your learning, in motion.", href: "/portal" },
  ];
  return <section className="relative z-10 -mt-7"><div className="container"><div className="grid border border-[#0b1f3a]/10 bg-[#faf8f4] shadow-[0_18px_45px_rgba(11,31,58,.08)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
    {actions.map(({ icon: Icon, title, text, href }) => <a key={title} href={href} onClick={() => onNotify(`${title} is ready to explore.`)} className="focus-ring group border-b border-[#0b1f3a]/10 p-5 transition hover:bg-white sm:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 xl:border-r xl:last:border-r-0">
      <Icon size={21} strokeWidth={1.4} className="mb-7 text-[#c69b4e] transition group-hover:scale-110" /><div className="text-sm font-bold text-[#0b1f3a]">{title}</div><div className="mt-1 text-xs leading-5 text-[#6b6459]">{text}</div>
    </a>)}
  </div></div></section>;
}

function PrincipalWelcome({ onNotify }: { onNotify: Notify }) {
  return <section id="about" className="paper-grid bg-[#f2eee7] py-24 md:py-32"><div className="container"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20">
    <div className="relative mx-auto w-full max-w-md"><div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-[#c69b4e]" /><div className="absolute -bottom-5 -right-5 h-32 w-32 border-b border-r border-[#c69b4e]" /><div className="relative aspect-[4/5] overflow-hidden bg-[#d6cdc0]"><img src={img.social} alt="Mountain View learners in a seminar discussion" className="h-full w-full object-cover grayscale-[12%]" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b1f3a] to-transparent p-6 pt-24 text-[#faf8f4]"><div className="font-display text-2xl">Dr. Miriam Wanjiku</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-[#dec27f]">Principal, Mountain View Senior School</div></div></div></div>
    <div><div className="eyebrow mb-4">A word from our principal</div><h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.04em] md:text-6xl">Education should give<br /><span className="text-[#927033]">a young person range.</span></h2><div className="mt-8 space-y-5 text-[15px] leading-7 text-[#6b6459]"><p>At Mountain View, we hold a simple belief: a learner's future should never be narrowed before they have had the chance to discover their own capacity.</p><p>Our Senior School experience is built for the landscape our learners are entering — one shaped by Kenya's Competency-Based Education, by technology, by enterprise, and by the enduring need for empathy and excellent judgement.</p><p>We ask our learners to work hard, to make things, to serve others, and to leave each room a little more curious than they found it.</p></div><button onClick={() => onNotify("The principal's full message is coming soon.")} className="focus-ring mt-8 inline-flex items-center gap-3 border-b border-[#c69b4e] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#0b1f3a]">Read the principal's message <ArrowRight size={15} /></button></div>
  </div></div></section>;
}

const pillars = [
  { no: "01", icon: Award, title: "Academic excellence", copy: "Deep subject knowledge paired with the confidence to question, connect and apply." },
  { no: "02", icon: ShieldCheck, title: "Character & leadership", copy: "The daily practice of integrity, responsibility and the courage to take the lead." },
  { no: "03", icon: Cpu, title: "Innovation & technology", copy: "A maker mindset, digital fluency and the space to turn an idea into a useful thing." },
  { no: "04", icon: HeartHandshake, title: "Talent & wellbeing", copy: "A wide definition of success — with room for sport, art, friendship, faith and rest." },
];

function Pillars() {
  return <section className="bg-[#faf8f4] py-24 md:py-32"><div className="container"><SectionIntro eyebrow="Why Mountain View" title={<>A school with <span className="text-[#927033]">range</span>.</>} copy="The habits that shape how our learners think, work and show up for one another." /><div className="grid gap-0 border-y border-[#0b1f3a]/15 md:grid-cols-2 xl:grid-cols-4">{pillars.map(({ no, icon: Icon, title, copy }) => <article key={no} className="group border-b border-[#0b1f3a]/15 p-7 last:border-0 md:border-r md:p-9 md:nth-[2n]:border-r-0 xl:border-b-0 xl:nth-[2n]:border-r xl:last:border-r-0"><div className="flex items-start justify-between"><span className="font-display text-3xl text-[#c69b4e]">{no}</span><Icon size={24} strokeWidth={1.25} className="text-[#0b1f3a]/55 transition group-hover:text-[#c69b4e]" /></div><h3 className="mt-12 font-display text-2xl font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6b6459]">{copy}</p></article>)}</div></div></section>;
}

const pathways = [
  { title: "STEM", label: "Think in systems", image: img.stem, icon: FlaskConical, copy: "Mathematics, Sciences, Computer Science and Technical Studies for learners who enjoy finding how things work — and making them work better.", subjects: "Mathematics · Biology · Physics · Computer Science" },
  { title: "Social Sciences", label: "Understand people", image: img.social, icon: Compass, copy: "Business, Humanities, Languages and Social Sciences for learners who read the room, ask why and want to shape communities.", subjects: "Business Studies · History · Geography · Languages" },
  { title: "Arts & Sports", label: "Make your mark", image: img.arts, icon: Palette, copy: "Performing Arts, Visual Arts, Sports and creative disciplines for learners who find their clearest voice through movement and making.", subjects: "Music · Theatre · Visual Arts · Sports" },
];

function Pathways({ onNotify }: { onNotify: Notify }) {
  return <section id="pathways" className="bg-[#0b1f3a] py-24 text-[#faf8f4] md:py-32"><div className="container"><SectionIntro dark eyebrow="Senior School · Grades 10—12" title={<>Find your <span className="text-[#dec27f]">path.</span></>} copy="Three pathways. A hundred ways to become more yourself. Our guidance team helps every learner choose with clarity, not pressure." action={<a href="/academics" className="focus-ring inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#dec27f]">Compare pathways <ArrowRight size={15} /></a>} /><div className="grid gap-4 lg:grid-cols-3">{pathways.map(({ title, label, image, icon: Icon, copy, subjects }, i) => <article key={title} className="group relative min-h-[540px] overflow-hidden bg-[#183254]"> <img src={image} alt={`${title} pathway at Mountain View`} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-[#061428] via-[#0b1f3a]/65 to-transparent" /><div className="relative flex min-h-[540px] flex-col justify-end p-7 md:p-9"><div className="mb-auto flex items-start justify-between"><span className="grid h-11 w-11 place-items-center border border-white/35 bg-[#0b1f3a]/25"><Icon size={20} strokeWidth={1.4} /></span><span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#dec27f]">0{i + 1}</span></div><div className="eyebrow mb-3 text-[#dec27f]">{label}</div><h3 className="font-display text-4xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-white/72">{copy}</p><div className="mt-5 border-t border-white/20 pt-4 text-[10px] font-bold uppercase tracking-[.11em] text-white/55">{subjects}</div><button onClick={() => onNotify(`${title} pathway details are ready for your enquiry.`)} className="focus-ring mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#dec27f]">Explore pathway <ArrowRight size={15} /></button></div></article>)}</div></div></section>;
}

const life = [
  { title: "Boarding life", copy: "A warm, structured home base for learners from across Kenya.", tone: "bg-[#e8dfd0]", icon: School },
  { title: "Sports", copy: "Compete, collaborate and find your edge — on field and off it.", tone: "bg-[#dfe8e0]", icon: Trophy },
  { title: "Clubs & societies", copy: "Forty ways to get curious beyond the timetable.", tone: "bg-[#eee1dd]", icon: Sparkles },
  { title: "Student leadership", copy: "A learner voice in the decisions that shape our days.", tone: "bg-[#dfe5ed]", icon: Users },
  { title: "Arts & culture", copy: "Stories, rhythm, performance and visual expression.", tone: "bg-[#e8e2d4]", icon: Palette },
  { title: "Community service", copy: "Learning becomes meaningful when it moves outward.", tone: "bg-[#e0e8df]", icon: HeartHandshake },
];
function LifeSection() {
  return <section id="life" className="bg-[#f2eee7] py-24 md:py-32"><div className="container"><SectionIntro eyebrow="Life at Mountain View" title={<>More than a timetable.</>} copy="The spaces between lessons matter too. This is where belonging, confidence and the stories learners carry with them are made." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{life.map(({ title, copy, tone, icon: Icon }) => <article key={title} className={`${tone} lift group min-h-[230px] border border-transparent p-7`}><Icon size={24} strokeWidth={1.3} className="text-[#0b1f3a]/70" /><div className="mt-20 flex items-end justify-between gap-4"><div><h3 className="font-display text-2xl font-semibold text-[#0b1f3a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b6459]">{copy}</p></div><ArrowUpRight size={19} className="shrink-0 text-[#927033]" /></div></article>)}</div></div></section>;
}

function ArrowUpRight({ size = 18, className = "" }: { size?: number; className?: string }) { return <ArrowRight size={size} className={`rotate-[-45deg] ${className}`} />; }

const facilities = ["Science laboratories", "ICT & innovation hub", "Modern library", "Sports complex", "Dining hall", "Boarding houses", "Performing arts centre", "Medical centre"];
function CampusSection({ onNotify }: { onNotify: Notify }) {
  return <section id="campus" className="bg-[#faf8f4] py-24 md:py-32"><div className="container"><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20"><div><div className="eyebrow mb-4">Campus & facilities</div><h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.04em] md:text-6xl">Designed for <span className="text-[#927033]">discovery.</span></h2><p className="mt-6 max-w-md text-[15px] leading-7 text-[#6b6459]">A campus that gets out of the way of good learning: light-filled, well-equipped and close to the landscape that makes Kiambu feel like home.</p><button onClick={() => onNotify("Campus tours are available by appointment.")} className="focus-ring mt-8 inline-flex items-center gap-3 border-b border-[#c69b4e] pb-2 text-[11px] font-bold uppercase tracking-[.14em]">Explore our campus <ArrowRight size={15} /></button></div><div className="relative"><div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#c69b4e]" /><img src={img.campus} alt="Mountain View campus courtyard" className="relative aspect-[4/3] w-full object-cover" /><div className="absolute bottom-0 left-0 flex w-full items-end justify-between bg-gradient-to-t from-[#0b1f3a] to-transparent p-6 pt-24 text-white"><span className="font-display text-2xl">A place to look up.</span><MapPin size={19} className="text-[#dec27f]" /></div></div></div><div className="mt-16 grid grid-cols-2 border-y border-[#0b1f3a]/15 md:grid-cols-4">{facilities.map((facility, i) => <div key={facility} className="flex items-center gap-3 border-b border-[#0b1f3a]/10 p-5 text-sm text-[#6b6459] md:nth-[4n-1]:border-r md:nth-[4n-2]:border-r md:nth-[4n-3]:border-r md:border-b-0 md:last:border-0"><span className="font-display text-lg text-[#c69b4e]">{String(i + 1).padStart(2, "0")}</span>{facility}</div>)}</div></div></section>;
}

function Achievements() {
  return <section className="grain bg-[#c69b4e] py-20 text-[#0b1f3a] md:py-24"><div className="container"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><div className="eyebrow text-[#0b1f3a]/65">Our track record</div><h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">Good things<br />take practice.</h2></div><p className="max-w-xl text-[15px] leading-7 text-[#0b1f3a]/72">Prototype indicators for a school that keeps its ambitions high and its focus on the learner in front of it.</p></div><div className="mt-12 grid gap-8 border-t border-[#0b1f3a]/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">{[["98%", "university / tertiary progression"], ["25+", "years of excellence"], ["40+", "clubs & activities"], ["15+", "regional / national awards"]].map(([num, label]) => <div key={label}><div className="font-display text-5xl font-semibold tracking-[-.05em] md:text-6xl">{num}</div><div className="mt-3 max-w-[170px] text-[10px] font-bold uppercase leading-4 tracking-[.12em] text-[#0b1f3a]/65">{label}</div></div>)}</div></div></section>;
}

const news = [
  { category: "Academics", date: "18 Sep 2026", title: "Learners turn a water question into a working prototype", copy: "From a local challenge to an engineering response — inside the new Grade 10 design sprint.", image: img.stem },
  { category: "Student life", date: "06 Sep 2026", title: "The quiet confidence of taking the stage", copy: "A rehearsal-room portrait of the learners building this year's original production.", image: img.arts },
  { category: "Community", date: "28 Aug 2026", title: "A Saturday in Githunguri: learning that travels both ways", copy: "Why our community partnership work begins with listening, not a lesson plan.", image: img.campus },
];
function NewsEvents({ onNotify }: { onNotify: Notify }) {
  const events = [["24", "Sep", "Senior School Open Day"], ["02", "Oct", "Inter-house Athletics"], ["17", "Oct", "Grade 9 Pathways Evening"], ["31", "Oct", "Founders' Lecture"]];
  return <section id="news" className="bg-[#f2eee7] py-24 md:py-32"><div className="container"><SectionIntro eyebrow="News & events" title={<>Life at <span className="text-[#927033]">Mountain View.</span></>} action={<a href="/news" className="focus-ring inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.14em]">View all stories <ArrowRight size={15} /></a>} /><div className="grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-start"><div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">{news.map(({ category, date, title, copy, image }, i) => <article key={title} className={`group grid gap-5 border-b border-[#0b1f3a]/15 pb-5 md:grid-cols-1 lg:grid-cols-[.8fr_1.2fr] ${i === 0 ? "lg:grid-cols-[1fr_1fr]" : ""}`}><div className="relative aspect-[16/10] overflow-hidden bg-[#d8d0c2]"><img src={image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#faf8f4] px-2 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#0b1f3a]">{category}</span></div><div className="flex flex-col justify-center"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-[#927033]">{date}</div><h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b6459]">{copy}</p><button onClick={() => onNotify("Article reading view is coming soon.")} className="focus-ring mt-5 flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[.14em]">Read article <ArrowRight size={14} /></button></div></article>)}</div><aside className="border border-[#0b1f3a]/15 bg-[#faf8f4] p-6 md:p-8 lg:sticky lg:top-28"><div className="flex items-center justify-between border-b border-[#0b1f3a]/15 pb-5"><div><div className="eyebrow">On the calendar</div><h3 className="mt-2 font-display text-3xl font-semibold">Coming up</h3></div><CalendarDays size={23} className="text-[#c69b4e]" /></div><div className="divide-y divide-[#0b1f3a]/10">{events.map(([day, month, title]) => <a key={title} href="#contact" className="focus-ring flex items-center gap-5 py-5"><div className="w-12 shrink-0 text-center"><div className="font-display text-3xl leading-none">{day}</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#927033]">{month}</div></div><div className="text-sm font-semibold text-[#0b1f3a]">{title}</div><ArrowRight size={15} className="ml-auto text-[#927033]" /></a>)}</div><a href="/calendar" className="focus-ring mt-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.14em]">View all events <ArrowRight size={15} /></a></aside></div></div></section>;
}

const galleryItems = [
  { cat: "Academics", title: "The work of becoming", image: img.stem }, { cat: "Student Life", title: "Between the bells", image: img.social }, { cat: "Campus", title: "Room to think", image: img.campus }, { cat: "Events", title: "A night of rhythm", image: img.arts }, { cat: "Sports", title: "Find your edge", image: img.hero }, { cat: "Student Life", title: "The view from here", image: img.social },
];
function Gallery({ onNotify }: { onNotify: Notify }) {
  const [filter, setFilter] = useState("All"); const [lightbox, setLightbox] = useState<number | null>(null);
  const filters = ["All", "Academics", "Sports", "Campus", "Events", "Student Life"];
  const visible = filter === "All" ? galleryItems : galleryItems.filter(item => item.cat === filter);
  return <section id="gallery" className="bg-[#faf8f4] py-24 md:py-32"><div className="container"><SectionIntro eyebrow="A glimpse inside" title={<>The view from <span className="text-[#927033]">here.</span></>} /><div className="mb-9 flex flex-wrap gap-2">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`focus-ring border px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition ${filter === item ? "border-[#0b1f3a] bg-[#0b1f3a] text-[#faf8f4]" : "border-[#0b1f3a]/15 text-[#6b6459] hover:border-[#c69b4e]"}`}>{item}</button>)}</div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{visible.map((item, i) => <button key={`${item.title}-${i}`} onClick={() => setLightbox(galleryItems.indexOf(item))} className={`focus-ring group relative overflow-hidden bg-[#d8d0c2] text-left ${i === 0 ? "row-span-2 aspect-[.82]" : "aspect-[1.18]"}`}><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/75 to-transparent opacity-0 transition group-hover:opacity-100" /><div className="absolute bottom-0 left-0 p-5 text-white opacity-0 transition group-hover:opacity-100"><div className="text-[9px] font-bold uppercase tracking-[.14em] text-[#dec27f]">{item.cat}</div><div className="mt-1 font-display text-xl">{item.title}</div></div></button>)}</div></div>{lightbox !== null && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#07152a]/90 p-4" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={() => setLightbox(null)}><button className="focus-ring absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/30 text-white" onClick={() => setLightbox(null)} aria-label="Close gallery"><X size={20} /></button><button className="focus-ring absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 text-white" onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length); }} aria-label="Previous image"><ChevronLeft /></button><figure className="max-h-[86vh] max-w-5xl" onClick={e => e.stopPropagation()}><img src={galleryItems[lightbox].image} alt={galleryItems[lightbox].title} className="max-h-[78vh] w-auto object-contain" /><figcaption className="mt-3 text-center text-sm text-white/80">{galleryItems[lightbox].title} · {galleryItems[lightbox].cat}</figcaption></figure><button className="focus-ring absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 text-white" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryItems.length); }} aria-label="Next image"><ChevronRight /></button></div>}
  </section>;
}

const testimonials = [
  ["Parent", "Linet Mwangi", "What I value most is that the school sees the whole learner. The academic ambition is real, but so is the care."],
  ["Grade 11 learner", "Amani K.", "I came for the science labs. I stayed because there is always someone willing to ask, ‘What do you think?’"],
  ["Alumna · Class of 2019", "Njeri Wambui", "Mountain View gave me the courage to enter a room without already knowing the answer. That has travelled with me."],
];
function Testimonials() {
  return <section className="bg-[#f2eee7] py-24 md:py-32"><div className="container"><SectionIntro eyebrow="In their words" title={<>A place that <span className="text-[#927033]">stays with you.</span></>} /><div className="grid gap-4 lg:grid-cols-3">{testimonials.map(([role, name, quote]) => <figure key={name} className="border border-[#0b1f3a]/12 bg-[#faf8f4] p-7 md:p-9"><Quote size={28} strokeWidth={1.3} className="text-[#c69b4e]" /><blockquote className="mt-12 font-display text-2xl leading-[1.18]">“{quote}”</blockquote><figcaption className="mt-8 border-t border-[#0b1f3a]/12 pt-5"><div className="text-sm font-bold">{name}</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-[#927033]">{role}</div></figcaption></figure>)}</div></div></section>;
}

function Contact({ onNotify }: { onNotify: Notify }) {
  return <section id="contact" className="paper-grid bg-[#faf8f4] py-24 md:py-32"><div className="container"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><div className="eyebrow mb-4">Location & contact</div><h2 className="font-display text-5xl font-semibold leading-[.98] tracking-[-.05em] md:text-7xl">Come<br /><span className="text-[#927033]">visit us.</span></h2><p className="mt-7 max-w-sm text-[15px] leading-7 text-[#6b6459]">A good school visit should leave you with more questions — and a clearer sense of whether this is the right place to ask them.</p><div className="mt-9 space-y-5 text-sm"><div className="flex items-start gap-4"><MapPin size={18} className="mt-0.5 text-[#c69b4e]" /><span>Mountain View Senior School<br />{SCHOOL.location}</span></div><div className="flex items-center gap-4"><Clock3 size={18} className="text-[#c69b4e]" /><span>Mon—Fri · 8:00 AM—5:00 PM</span></div><div className="flex items-center gap-4"><Mail size={18} className="text-[#c69b4e]" /><a href={`mailto:${SCHOOL.email}`} className="focus-ring underline underline-offset-4">{SCHOOL.email}</a></div></div><button onClick={() => onNotify("Visit planning is available through the admissions team.")} className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-[#c69b4e] pb-2 text-[11px] font-bold uppercase tracking-[.14em]">Plan your visit <ArrowRight size={15} /></button></div><div className="relative min-h-[360px] overflow-hidden border border-[#0b1f3a]/12 bg-[#e3dfd4] p-6 md:min-h-[470px]"><div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(11,31,58,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,.15) 1px, transparent 1px)", backgroundSize: "44px 44px" }} /><div className="absolute left-[42%] top-[36%] h-32 w-44 -rotate-12 border-2 border-[#2f5d45]/55 bg-[#2f5d45]/10" /><div className="absolute left-[42%] top-[36%] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#c69b4e] text-[#0b1f3a] shadow-xl"><MapPin size={22} fill="currentColor" /></div><div className="absolute bottom-6 left-6 bg-[#0b1f3a] px-5 py-4 text-white"><div className="text-[9px] font-bold uppercase tracking-[.15em] text-[#dec27f]">Find us in Kiambu</div><div className="mt-1 font-display text-xl">At the foot of the hills.</div></div></div></div></div></section>;
}

function Footer({ onNotify }: { onNotify: Notify }) {
  const cols = [["School", "About", "Principal's message", "Leadership", "Careers", "Alumni"], ["Academics", "Senior School", "STEM", "Social Sciences", "Arts & Sports", "Departments"], ["Resources", "Calendar", "News", "Downloads", "School policies", "Contact"]];
  return <footer className="bg-[#07152a] pt-16 text-[#faf8f4] md:pt-20"><div className="container"><div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-[1.3fr_2fr] lg:grid-cols-[1.4fr_2.6fr]"><div><div className="brightness-0 invert"><Crest /></div><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">A Senior School for young people who are ready to think widely, live fully and lead with purpose.</p><div className="mt-7 flex items-center gap-3"><a href="#contact" className="focus-ring grid h-9 w-9 place-items-center border border-white/15 text-white/65 transition hover:border-[#c69b4e] hover:text-[#c69b4e]" aria-label="Facebook"><Globe2 size={15} /></a><a href="#contact" className="focus-ring grid h-9 w-9 place-items-center border border-white/15 text-white/65 transition hover:border-[#c69b4e] hover:text-[#c69b4e]" aria-label="Instagram"><Camera size={15} /></a><a href="#contact" className="focus-ring grid h-9 w-9 place-items-center border border-white/15 text-white/65 transition hover:border-[#c69b4e] hover:text-[#c69b4e]" aria-label="Youtube"><Play size={15} /></a><a href="#contact" className="focus-ring grid h-9 w-9 place-items-center border border-white/15 text-white/65 transition hover:border-[#c69b4e] hover:text-[#c69b4e]" aria-label="X"><X size={15} /></a></div></div><div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">{cols.map(([heading, ...links]) => <div key={heading}><div className="mb-4 text-[10px] font-bold uppercase tracking-[.16em] text-[#dec27f]">{heading}</div><div className="space-y-3">{links.map(link => <a key={link} href={link === "Contact" ? "#contact" : "#top"} onClick={() => link !== "Apply" && link !== "Contact" && onNotify(`${link} is coming soon.`)} className="focus-ring block text-sm text-white/55 transition hover:text-white">{link}</a>)}</div></div>)}</div></div><div className="flex flex-col justify-between gap-3 py-6 text-[10px] font-bold uppercase tracking-[.12em] text-white/40 md:flex-row"><span>© 2026 {SCHOOL.name}</span><span>{SCHOOL.tagline}</span><span>{SCHOOL.location}</span></div></div></footer>;
}

export default function Home() {
  const [notice, setNotice] = useState("");
  const notify = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(""), 2600); };
  return <div className="min-h-screen overflow-x-hidden bg-[#faf8f4] text-[#0b1f3a]">
    <Header onNotify={notify} />
    <main><Hero /><QuickActions onNotify={notify} /><PrincipalWelcome onNotify={notify} /><Pillars /><Pathways onNotify={notify} /><Achievements /><Gallery onNotify={notify} /><Testimonials /><Contact onNotify={notify} /></main>
    <Footer onNotify={notify} />
    {notice && <div className="fixed bottom-5 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 bg-[#0b1f3a] px-5 py-3 text-sm text-white shadow-2xl" role="status"><Bell size={15} className="text-[#dec27f]" />{notice}</div>}
  </div>;
}

export function InternalPage({ kind }: { kind: string }) {
  const [notice, setNotice] = useState(""); const notify = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(""), 2400); };
  const content: Record<string, { eyebrow: string; title: React.ReactNode; copy: string; image?: string; cards: [string, string][] }> = {
    academics: { eyebrow: "Academics · Grades 10—12", title: <>Choose a path. <span className="text-[#927033]">Go deep.</span></>, copy: "A Senior School curriculum grounded in Kenya's CBE framework, with room for specialisation, experimentation and a life beyond exams.", cards: pathways.map(p => [p.title, p.copy]) },
    calendar: { eyebrow: "The school year", title: <>Make room for <span className="text-[#927033]">what matters.</span></>, copy: "Term dates, sports days, parent meetings and the moments that make a year feel like a year.", cards: [["Term 1", "January—April 2027 · Opening day, pathways induction, mid-term learning conference."], ["Term 2", "May—August 2027 · Sports season, arts showcase, Grade 12 focus fortnight."], ["Term 3", "September—November 2027 · Examinations, Founders' Lecture, closing community day."], ["Open days", "24 September 2026 · 17 October 2026 · Visits by appointment throughout the year."]] },
    resources: { eyebrow: "Fees & resources", title: <>Everything in <span className="text-[#927033]">one place.</span></>, copy: "Clear, practical information for families planning the next chapter.", cards: [["Fees structure", "A downloadable-style overview of tuition, boarding and activity costs. Prototype content."], ["Admissions requirements", "Learner report, birth certificate, passport photo, completed enquiry and assessment."], ["Uniform requirements", "Navy blazer, cream shirt, house tie, tailored trousers or skirt, sports kit and everyday shoes."], ["Prospectus & policies", "Download the school prospectus, parent handbook and key school policies." ]] },
    portal: { eyebrow: "Portal login", title: <>Welcome <span className="text-[#927033]">back.</span></>, copy: "A calm home base for learners, parents and staff to stay connected to the day-to-day.", cards: [["Parent portal", "Attendance, academic progress, fees balance, timetable, calendar, announcements and messages."], ["Student portal", "Today's timetable, assignments, results, learning resources, clubs and events."], ["Staff portal", "A secure space for colleagues to coordinate teaching, learner support and community life."], ["Mock authentication", "This prototype shows the experience only — no real account or payment data is connected."]] },
  };
  const page = content[kind] ?? content.academics;
  return <div className="min-h-screen bg-[#faf8f4] text-[#0b1f3a]"><Header onNotify={notify} /><main><section className="bg-[#0b1f3a] py-24 text-[#faf8f4] md:py-32"><div className="container"><div className="max-w-3xl"><div className="eyebrow text-[#dec27f]">{page.eyebrow}</div><h1 className="mt-5 font-display text-6xl font-semibold leading-[.95] tracking-[-.06em] md:text-8xl">{page.title}</h1><p className="mt-7 max-w-xl text-lg leading-7 text-white/65">{page.copy}</p><a href="/" className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-[#c69b4e] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#dec27f]">Back to home <ArrowRight size={15} /></a></div></div></section>{page.image && <section className="container -mt-10"><img src={page.image} alt="Mountain View campus" className="relative aspect-[2/1] w-full object-cover" /></section>}<section className="container py-24 md:py-32"><div className="grid gap-4 md:grid-cols-2">{page.cards.map(([title, copy], i) => <article key={title} className="lift border border-[#0b1f3a]/12 bg-white p-7 md:p-10"><div className="flex items-start justify-between"><span className="font-display text-3xl text-[#c69b4e]">{String(i + 1).padStart(2, "0")}</span><ArrowUpRight size={18} className="text-[#927033]" /></div><h2 className="mt-12 font-display text-3xl font-semibold">{title}</h2><p className="mt-3 max-w-md text-sm leading-6 text-[#6b6459]">{copy}</p><button onClick={() => notify(`${title} details are available on request.`)} className="focus-ring mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em]">Learn more <ArrowRight size={14} /></button></article>)}</div></section></main><Footer onNotify={notify} />{notice && <div className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 bg-[#0b1f3a] px-5 py-3 text-sm text-white shadow-2xl" role="status">{notice}</div>}</div>;
}
