import { startTransition, useEffect, useLayoutEffect, useRef, useState } from "react";
import "@theme-toggles/react/css/Expand.css";
import {
  ArrowUpRight,
  Circle,
  Globe,
  Mail,
  Menu,
  Moon,
  Phone,
  Server,
  Sparkles,
  Sun,
  SquareTerminal,
  Workflow,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "@theme-toggles/react";

const navItems = [
  { id: "leistungen", label: "Leistungen" },
  { id: "projekte", label: "Projekte" },
  { id: "ablauf", label: "Ablauf" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
];

const heroFacts = [
  "Wiener Neustadt, Österreich",
  "HTBLuVA Wiener Neustadt, 3. Jahrgang",
  "Webdesign, Hosting, Deployment, Reverse Proxy",
  "martinkopoky@gmail.com",
];

const logoItems = [
  { label: "React", icon: Circle },
  { label: "Vite", icon: Sparkles },
  { label: "Tailwind", icon: Workflow },
  { label: "Framer Motion", icon: Workflow },
  { label: "Reverse Proxy", icon: Globe },
  { label: "Deployment", icon: ArrowUpRight },
  { label: "Hosting", icon: Server },
  { label: "Automation", icon: SquareTerminal },
  { label: "SSL", icon: Circle },
  { label: "Homelab", icon: Globe },
];

const gravityNodes = [
  { size: 10, top: "12%", left: "12%", duration: 7.4, delay: 0.2 },
  { size: 16, top: "24%", right: "10%", duration: 8.6, delay: 0.7 },
  { size: 12, bottom: "28%", left: "8%", duration: 6.8, delay: 1.2 },
  { size: 14, bottom: "16%", right: "14%", duration: 9.1, delay: 0.4 },
  { size: 8, top: "48%", left: "4%", duration: 6.2, delay: 1.4 },
  { size: 18, top: "8%", right: "28%", duration: 10.2, delay: 1.1 },
];

const proofItems = [
  "Professionelle Websites für kleine Unternehmen, Selbstständige und lokale Betriebe",
  "Technische Umsetzung aus einer Hand: Domain, SSL, Hosting, Deployment und Reverse Proxy",
  "Starker Mix aus Frontend, Systemarbeit, Networking und Automation",
];

const serviceCards = [
  {
    title: "Webdesign & Relaunch",
    icon: Globe,
    copy:
      "Moderne Websites mit klarer Struktur, starker Typografie und einem Auftritt, der sofort professionell wirkt.",
  },
  {
    title: "Hosting & Deployment",
    icon: Server,
    copy:
      "Ich übernehme Domain-Anbindung, SSL, Deployment und den technischen Live-Betrieb, damit die Website nicht nur gut aussieht, sondern sauber online ist.",
  },
  {
    title: "Technische Lösungen",
    icon: Workflow,
    copy:
      "Wenn ein Projekt mehr braucht als nur schöne Oberflächen, bringe ich Server, Reverse Proxy, Homelab-Erfahrung und praktische Automation mit.",
  },
];

const projectCards = [
  {
    title: "portfolio-website",
    eyebrow: "JavaScript",
    href: "https://github.com/Grufyeti/portfolio-website",
    description:
      "Meine eigene öffentliche Codebasis für den visuellen Auftritt, Frontend-Architektur und die Weiterentwicklung meiner Portfolio-Präsenz.",
    accent: "from-amber-300/40 via-rose-300/20 to-transparent",
  },
  {
    title: "beammp-server-plugins",
    eyebrow: "Lua",
    href: "https://github.com/Grufyeti/beammp-server-plugins",
    description:
      "Nützliche Commands für BeamMP-Server. Ein gutes Beispiel für praktische Systemarbeit und Scripting in einem realen Server-Kontext.",
    accent: "from-rose-300/35 via-orange-300/15 to-transparent",
  },
  {
    title: "GitHub Profil",
    eyebrow: "Public work",
    href: "https://github.com/Grufyeti",
    description:
      "Öffentliche Projekte und Experimente rund um Frontend, Infrastruktur, Caching, Entwicklungsumgebungen und Automation.",
    accent: "from-orange-300/35 via-amber-300/15 to-transparent",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Klares Erstgespräch",
    copy:
      "Wir klären Ziel, Zielgruppe, Stil, Inhalte und technische Anforderungen, damit die Website nicht nur schön, sondern auch sinnvoll wird.",
  },
  {
    number: "02",
    title: "Design mit Richtung",
    copy:
      "Ich entwickle eine visuelle Linie, die professionell wirkt und sich deutlich von generischen Standardseiten abhebt.",
  },
  {
    number: "03",
    title: "Saubere Umsetzung",
    copy:
      "Das Design wird in ein modernes Frontend überführt und auf Performance, Responsivität und ein klares Nutzererlebnis geprüft.",
  },
  {
    number: "04",
    title: "Go-live ohne Chaos",
    copy:
      "Deployment, Hosting, SSL, Domain und Weiterleitungen werden so umgesetzt, dass der Launch sauber und verlässlich funktioniert.",
  },
];

const faqs = [
  {
    question: "Was kostet eine Website?",
    answer:
      "Das hängt vom Umfang ab. Nach einem kurzen Erstgespräch kann ich den Aufwand realistisch einschätzen und transparent einordnen.",
    meta: "Transparenter Start",
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer:
      "Kleinere Projekte lassen sich oft in wenigen Wochen umsetzen. Umfangreichere Websites mit mehreren Inhaltsbereichen und technischer Integration brauchen entsprechend mehr Zeit.",
    meta: "Realistische Planung",
  },
  {
    question: "Kannst du Hosting und Domain übernehmen?",
    answer:
      "Ja. Auf Wunsch übernehme ich Hosting, Deployment, Domain-Anbindung, SSL, Weiterleitungen und die technische Vorbereitung für einen zuverlässigen Go-live.",
    meta: "Alles aus einer Hand",
  },
  {
    question: "Arbeitest du auch für Kunden in Wiener Neustadt und Umgebung?",
    answer:
      "Ja. Ich arbeite remote, unterstütze aber auch gezielt Kunden aus Wiener Neustadt und Umgebung, wenn eine lokale Zusammenarbeit sinnvoll ist.",
    meta: "Lokal und remote",
  },
];

function FlowingMenu({ activeSection, theme }) {
  const initialIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === activeSection),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const nextIndex = navItems.findIndex((item) => item.id === activeSection);
    if (nextIndex >= 0) {
      setActiveIndex(nextIndex);
    }
  }, [activeSection]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const activeItem = itemRefs.current[activeIndex];

    if (!container || !activeItem) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setBubbleStyle({
      left: itemRect.left - containerRect.left,
      width: itemRect.width,
      opacity: 1,
    });
  }, [activeIndex]);

  const activeLabel = navItems[activeIndex]?.label ?? "Menü";

  return (
    <>
      <div
        ref={containerRef}
        className="relative hidden rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl lg:block"
      >
        <motion.div
          className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-amber-200/80 via-rose-200/80 to-orange-200/80"
          animate={{
            left: bubbleStyle.left,
            width: bubbleStyle.width,
            opacity: bubbleStyle.opacity,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        />
        <div className="relative flex items-center">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              href={`#${item.id}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`relative z-10 rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                activeIndex === index ? "text-stone-950" : "text-stone-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl transition ${
            theme === "light"
              ? "border-stone-300/70 bg-white/80 text-stone-700 hover:bg-white"
              : "border-white/10 bg-white/[0.045] text-stone-200 hover:bg-white/[0.08]"
          }`}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {activeLabel}
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border p-2 shadow-2xl backdrop-blur-xl ${
                theme === "light"
                  ? "border-stone-300/70 bg-white/95"
                  : "border-white/10 bg-zinc-950/95"
              }`}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setMobileMenuOpen(false);
                  }}
                  className={`block rounded-xl px-3 py-2 text-sm transition ${
                    activeIndex === index
                      ? theme === "light"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-white/12 text-amber-200"
                      : theme === "light"
                        ? "text-stone-700 hover:bg-stone-100"
                        : "text-stone-200 hover:bg-white/8"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function ThemeToggle({ theme, onToggle, anchorRef }) {
  const isDark = theme === "dark";

  return (
    <div ref={anchorRef} className="theme-toggle-shell">
      <Expand
        duration={750}
        toggled={isDark}
        toggle={onToggle}
        className="theme-toggle-button text-stone-200"
        aria-label={isDark ? "Zu Hellmodus wechseln" : "Zu Dunkelmodus wechseln"}
        title={isDark ? "Hellmodus" : "Dunkelmodus"}
      />
    </div>
  );
}

function LogoLoop() {
  const loopItems = [...logoItems, ...logoItems];

  return (
    <div className="logo-loop-shell mt-16 overflow-hidden rounded-full border border-white/10 bg-white/[0.035] py-3">
      <div className="logo-loop-track">
        {loopItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="logo-loop-pill">
            {item.icon ? (
              <item.icon className="h-3.5 w-3.5" />
            ) : (
              <Circle className="h-2.5 w-2.5 fill-current stroke-none" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AntigravityField() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {gravityNodes.map((node, index) => (
        <motion.span
          key={`${node.size}-${index}`}
          className="antigravity-node"
          style={{
            width: node.size,
            height: node.size,
            top: node.top,
            right: node.right,
            bottom: node.bottom,
            left: node.left,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, index % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.16, 1],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function LaserFlow({ className = "" }) {
  return (
    <div className={`laser-flow ${className}`}>
      <span className="laser-beam laser-beam-a" />
      <span className="laser-beam laser-beam-b" />
      <span className="laser-beam laser-beam-c" />
    </div>
  );
}

function GradualBlurText({ children, className = "" }) {
  return (
    <div className={`gradual-blur-text ${className}`}>
      <span className="gradual-blur-base">{children}</span>
      <span aria-hidden="true" className="gradual-blur-clone">
        {children}
      </span>
    </div>
  );
}

function SpotlightCard({ children, className = "" }) {
  const [spotlightStyle, setSpotlightStyle] = useState({
    "--spot-x": "50%",
    "--spot-y": "50%",
    "--spot-opacity": 0,
  });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setSpotlightStyle({
      "--spot-x": `${x}%`,
      "--spot-y": `${y}%`,
      "--spot-opacity": 1,
    });
  };

  const handleLeave = () => {
    setSpotlightStyle((current) => ({ ...current, "--spot-opacity": 0 }));
  };

  return (
    <div
      className={`spotlight-card ${className}`}
      style={spotlightStyle}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

function BorderGlow({ children, className = "" }) {
  return <div className={`border-glow-shell ${className}`}>{children}</div>;
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80 sm:tracking-[0.36em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-stone-300 sm:mt-5 sm:leading-8">{copy}</p>
    </div>
  );
}

function ProjectCard({ card, featured = false }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 ${
        featured ? "min-h-[20rem] sm:min-h-[25rem] lg:col-span-2" : "min-h-[18rem] sm:min-h-[22rem]"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)] opacity-60" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/90">{card.eyebrow}</p>
          <h3 className="mt-5 max-w-md text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            {card.title}
          </h3>
        </div>
        <div>
          <p className="max-w-lg text-base leading-7 text-stone-200/90 sm:leading-8">{card.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Projekt ansehen
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="faq-item relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="pointer-events-none absolute inset-y-1 left-1 rounded-[1.6rem] bg-gradient-to-br from-amber-200/90 via-rose-200/85 to-orange-200/85"
        animate={{
          opacity: hovered || isOpen ? 1 : 0.72,
          width: hovered || isOpen ? "34%" : "13rem",
          filter: hovered || isOpen ? "saturate(1.08)" : "saturate(0.92)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="relative m-1 overflow-hidden rounded-[1.7rem] bg-zinc-950/80 backdrop-blur-xl">
        <button
          type="button"
          onClick={onToggle}
          className="relative grid w-full gap-4 px-6 py-6 text-left md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)_auto] md:items-center"
        >
          <div className="relative z-10">
            <p className="faq-meta text-[11px] font-semibold uppercase tracking-[0.3em]">
              {faq.meta}
            </p>
          </div>
          <span className="relative z-10 max-w-3xl text-lg font-semibold text-white md:text-[1.35rem]">
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative z-10 justify-self-end text-2xl leading-none text-amber-200"
          >
            +
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -6 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-4 border-t border-white/8 px-6 pb-6 pt-2 md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]">
                <div className="hidden md:block" />
                <div className="faq-answer-panel max-w-3xl rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-5 text-base leading-8 text-stone-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const [themeWave, setThemeWave] = useState(null);
  const [sparks, setSparks] = useState([]);
  const themeToggleAnchorRef = useRef(null);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const emitSpark = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const sparkId = `${Date.now()}-${Math.random()}`;
    const spark = {
      id: sparkId,
      x,
      y,
      particles: Array.from({ length: 10 }, (_, index) => ({
        angle: (Math.PI * 2 * index) / 10,
        distance: 34 + (index % 3) * 16,
      })),
    };

    setSparks((current) => [...current, spark]);

    const sparkTimeout = window.setTimeout(() => {
      setSparks((current) => current.filter((item) => item.id !== sparkId));
    }, 700);

    timeoutRefs.current.push(sparkTimeout);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    const rect = themeToggleAnchorRef.current?.getBoundingClientRect();
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth - 72;
    const originY = rect ? rect.top + rect.height / 2 : 56;
    const waveId = `${Date.now()}-${nextTheme}`;

    setThemeWave({
      id: waveId,
      x: originX,
      y: originY,
      radius: Math.hypot(window.innerWidth, window.innerHeight),
      theme: nextTheme,
    });

    const switchTimeout = window.setTimeout(() => {
      startTransition(() => {
        setTheme(nextTheme);
      });
    }, 180);

    const clearTimeoutId = window.setTimeout(() => {
      setThemeWave((current) => (current?.id === waveId ? null : current));
    }, 1050);

    timeoutRefs.current.push(switchTimeout, clearTimeoutId);
  };

  return (
    <div className={`site-shell ${theme === "light" ? "theme-light" : "theme-dark"} min-h-screen`}>
      <div className="site-bg pointer-events-none absolute inset-0 -z-20" />
      <div className="site-grid pointer-events-none absolute inset-0 -z-10" />
      <AnimatePresence>
        {themeWave && (
          <motion.div
            key={themeWave.id}
            className={`theme-wave-overlay ${themeWave.theme === "light" ? "theme-wave-light" : "theme-wave-dark"}`}
            style={{
              "--wave-x": `${themeWave.x}px`,
              "--wave-y": `${themeWave.y}px`,
            }}
            initial={{ clipPath: `circle(0px at ${themeWave.x}px ${themeWave.y}px)`, opacity: 1 }}
            animate={{
              clipPath: `circle(${themeWave.radius}px at ${themeWave.x}px ${themeWave.y}px)`,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {sparks.map((spark) => (
          <div key={spark.id} className="click-spark-layer">
            {spark.particles.map((particle, index) => (
              <motion.span
                key={`${spark.id}-${index}`}
                className="click-spark-particle"
                style={{ left: spark.x, top: spark.y }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(particle.angle) * particle.distance,
                  y: Math.sin(particle.angle) * particle.distance,
                  opacity: 0,
                  scale: 0.25,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.58, ease: "easeOut" }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>

      <header className="site-header sticky top-0 z-50">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-10 lg:py-4">
          <a href="#top" className="font-heading text-sm uppercase tracking-[0.2em] text-white sm:text-lg sm:tracking-[0.24em]">
            Martin Pokorny
          </a>
          <div className="flex items-center gap-3">
            <FlowingMenu activeSection={activeSection} theme={theme} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} anchorRef={themeToggleAnchorRef} />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100svh-84px)] max-w-7xl items-center gap-8 px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="hero-badge inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:px-4 sm:text-[11px] sm:tracking-[0.32em]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Webdesign Wiener Neustadt · Hosting · technische Lösungen
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
               className="mt-6 max-w-5xl text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:mt-7 sm:text-7xl sm:leading-[0.88] sm:tracking-[-0.06em] lg:text-[7rem]"
            >
              Professionelle Websites
              <span className="hero-gradient-title block bg-clip-text text-transparent">
                für Unternehmen, Selbstständige und lokale Betriebe.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
               className="mt-6 max-w-3xl text-base leading-7 text-stone-300 sm:mt-8 sm:text-xl sm:leading-8"
            >
              Ich bin Martin Pokorny aus Wiener Neustadt. Ich entwickle moderne Websites mit klarem visuellen
              Anspruch und übernehme auf Wunsch auch Hosting, Deployment, SSL, Weiterleitungen, Reverse Proxy und
              die technische Vorbereitung für einen zuverlässigen Go-live.
            </motion.p>

            <GradualBlurText className="mt-5 max-w-3xl text-xs uppercase tracking-[0.2em] text-stone-400 sm:mt-6 sm:text-sm sm:tracking-[0.28em]">
              Design, Deployment und technische Ruhe statt Baukasten-Look.
            </GradualBlurText>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <a
                href="#kontakt"
                onClick={emitSpark}
                className="hero-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-stone-950 transition sm:w-auto"
              >
                Projekt anfragen
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07] sm:w-auto"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
              {heroFacts.map((fact, index) => (
                <motion.div
                  key={fact}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.28 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-fact rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-stone-300 sm:text-sm"
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[28rem] items-center justify-center sm:min-h-[42rem]">
            <AntigravityField />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-8, -6, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-12 hidden h-56 w-44 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(251,191,36,0.14),rgba(255,255,255,0.04))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/90">Positionierung</p>
              <p className="mt-5 text-2xl font-semibold text-white">Warm, klar, professionell.</p>
              <div className="mt-8 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-2xl bg-amber-200/80" />
                <div className="h-12 rounded-2xl bg-rose-200/70" />
                <div className="h-12 rounded-2xl bg-orange-200/80" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [10, 8, 10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 right-0 hidden h-48 w-56 rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(244,63,94,0.16),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/90">Technik</p>
              <div className="mt-5 space-y-3 text-sm text-stone-200/90">
                <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3">Hosting</div>
                <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3">Deployment</div>
                <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3">Reverse Proxy</div>
              </div>
            </motion.div>

            <BorderGlow className="relative z-10 mx-auto w-full max-w-[36rem] rounded-[2.4rem]">
              <SpotlightCard className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_26%)] opacity-70" />
                <div className="relative grid gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(251,191,36,0.18),rgba(255,255,255,0.04))] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/90">Leistung</p>
                      <p className="mt-4 text-3xl font-semibold leading-tight text-white">
                        Webdesign, Hosting und technische Umsetzung aus einer Hand.
                      </p>
                    </div>
                    <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(244,63,94,0.16),rgba(255,255,255,0.04))] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/90">Fokus</p>
                      <p className="mt-4 text-sm leading-7 text-stone-200/90">
                        Webdesign in Wiener Neustadt für Unternehmen, Selbstständige und lokale Betriebe.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-black/15 p-5">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[1.5rem] bg-white/[0.04] p-4">
                        <p className="text-3xl font-semibold text-white">12</p>
                        <p className="mt-2 text-sm text-stone-400">öffentliche Repositories</p>
                      </div>
                      <div className="rounded-[1.5rem] bg-white/[0.04] p-4">
                        <p className="text-3xl font-semibold text-white">3.</p>
                        <p className="mt-2 text-sm text-stone-400">Jahrgang HTBLuVA</p>
                      </div>
                      <div className="rounded-[1.5rem] bg-white/[0.04] p-4">
                        <p className="text-3xl font-semibold text-white">AT</p>
                        <p className="mt-2 text-sm text-stone-400">Wiener Neustadt</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="col-span-2 rounded-[1.6rem] border border-white/10 bg-amber-200/85 p-4 text-stone-950">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em]">Markenwirkung</p>
                      <p className="mt-3 text-xl font-semibold">Editoriale Wärme</p>
                    </div>
                    <div className="look-chip rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Look</p>
                      <p className="mt-3 text-sm font-semibold">Klar</p>
                    </div>
                    <div className="rounded-[1.6rem] border border-white/10 bg-rose-200/70 p-4 text-stone-950">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em]">Ton</p>
                      <p className="mt-3 text-sm font-semibold">Präzise</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </BorderGlow>
          </div>
        </section>

        <section className="logo-loop-section mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-10">
          <div className="logo-loop-laser-accent pointer-events-none absolute right-10 top-[-8.5rem] z-0 hidden lg:block">
            <LaserFlow className="laser-flow--logo-accent absolute inset-0" />
            <span className="logo-loop-laser-column" />
            <span className="logo-loop-laser-split logo-loop-laser-split-left" />
            <span className="logo-loop-laser-split logo-loop-laser-split-right" />
            <span className="logo-loop-laser-flare" />
          </div>
          <LogoLoop />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-10">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/8 bg-black/10 px-4 py-4 text-sm leading-7 text-stone-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeader
            eyebrow="Leistungen"
            title="Was ich für deine Website übernehmen kann."
            copy="Die Seite soll nicht nur optisch stark sein, sondern auch im Alltag funktionieren. Genau darum kombiniere ich Webdesign mit Hosting, Deployment und technischer Umsetzung."
          />

          <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <BorderGlow key={service.title} className="rounded-[1.9rem]">
                  <SpotlightCard className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 sm:p-7">
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-amber-200">
                        <Icon className="h-5 w-5" />
                      </div>
                       <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">{service.title}</h3>
                       <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">{service.copy}</p>
                    </div>
                  </SpotlightCard>
                </BorderGlow>
              );
            })}
          </div>
        </section>

        <section id="projekte" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeader
            eyebrow="Projekte"
            title="Öffentliche Arbeiten und technische Spuren."
            copy="Deine Portfolio-Seite soll wieder mehr nach echter Arbeit aussehen. Deshalb zeige ich hier nicht nur Links, sondern sichtbare technische Richtung, reale Repositories und nachvollziehbare Schwerpunkte."
          />

          <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-3">
            {projectCards.map((card, index) => (
              <ProjectCard key={card.title} card={card} featured={index === 0} />
            ))}
          </div>
        </section>

        <section id="ablauf" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeader
            eyebrow="Ablauf"
            title="So entsteht aus einer Idee eine professionelle Website."
            copy="Gerade bei kleinen Unternehmen und Selbstständigen ist ein klarer Ablauf wichtig: schnell entscheiden, sauber umsetzen, stressfrei live gehen."
          />

          <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
            {processSteps.map((step) => (
              <BorderGlow key={step.number} className="rounded-[1.9rem]">
                <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-200/85">{step.number}</p>
                   <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                   <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">{step.copy}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeader
            eyebrow="Wichtigste Fragen"
            title="Die wichtigsten Fragen vor einem Projektstart."
            copy="Beim Hover bekommt jede Frage mehr Präsenz, beim Klick öffnet sie sich weich und klar lesbar. So wirkt der Bereich näher an einem starken React-Snippet statt wie ein Standard-Accordion."
          />

          <div className="mt-10 grid gap-4 sm:mt-14">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={(event) => {
                  emitSpark(event);
                  setOpenFaq((current) => (current === index ? -1 : index));
                }}
              />
            ))}
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-18 sm:pt-24 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <BorderGlow className="rounded-[2.2rem]">
              <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-rose-200/85">Kontakt</p>
                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                  Bereit für eine Website, die professionell aussieht und auch professionell live geht?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
                  Wenn du eine moderne Website, einen Relaunch oder technische Hilfe bei Hosting, Deployment und
                  Infrastruktur brauchst, können wir darauf aufsetzen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:martinkopoky@gmail.com"
                    onClick={emitSpark}
                    className="hero-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-stone-950 transition sm:w-auto"
                  >
                    Projekt anfragen
                <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07] sm:w-auto"
                  >
                    {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    {theme === "light" ? "Dunkler ansehen" : "Heller ansehen"}
                  </button>
                </div>
              </div>
            </BorderGlow>

            <div className="grid gap-4">
              <a
                href="mailto:martinkopoky@gmail.com"
                className="group rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/85">E-Mail</p>
                    <p className="mt-3 break-all text-lg font-semibold text-white sm:text-2xl">
                      martinkopoky@gmail.com
                    </p>
                  </div>
                  <Mail className="h-5 w-5 text-stone-300 transition group-hover:text-white" />
                </div>
              </a>

              <a
                href="tel:+436504116441"
                className="group rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200/85">Telefon</p>
                    <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">+43 650 4116441</p>
                  </div>
                  <Phone className="h-5 w-5 text-stone-300 transition group-hover:text-white" />
                </div>
              </a>

              <a
                href="https://github.com/Grufyeti"
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-200/85">GitHub</p>
                    <p className="mt-3 break-all text-lg font-semibold text-white sm:text-2xl">
                      github.com/Grufyeti
                    </p>
                  </div>
                  <SquareTerminal className="h-5 w-5 text-stone-300 transition group-hover:text-white" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-6 text-sm text-stone-500 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>Martin Pokorny · Webdesign, Hosting und technische Lösungen aus Wiener Neustadt</p>
          <div className="flex gap-4">
            <a href="mailto:martinkopoky@gmail.com" className="hover:text-stone-300">
              E-Mail
            </a>
            <a href="https://github.com/Grufyeti" target="_blank" rel="noreferrer" className="hover:text-stone-300">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
