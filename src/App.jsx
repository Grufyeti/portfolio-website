import { useState } from 'react';

const profile = {
  brand: 'Martin Pokorny',
  title: 'Webdesign, Entwicklung, Hosting und technische Lösungen',
  email: 'martinkopoky@gmail.com',
  phone: '+43 650 411 6441',
  github: 'https://github.com/Grufyeti',
  githubHandle: 'Grufyeti',
  location: 'Wiener Neustadt, Niederösterreich, remote & nach Absprache vor Ort',
  responseNote: 'Antwort per Mail, Telefon oder kurzer Abstimmung.',
};

const navigation = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Technik', href: '#technik' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

const heroHighlights = [
  {
    icon: 'WD',
    title: 'Moderne Websites mit klarer Wirkung',
    text: 'Saubere Nutzerführung, hochwertige Gestaltung und ein Auftritt, der Vertrauen aufbaut.',
  },
  {
    icon: 'HD',
    title: 'Hosting, Deployment und Technik inklusive',
    text: 'Domains, SSL, Reverse Proxy und Go-live werden bei Bedarf direkt mitübernommen.',
  },
  {
    icon: 'VC',
    title: 'Direkte Zusammenarbeit',
    text: 'Ein Ansprechpartner, klare Abstimmung und Unterstützung remote oder nach Absprache auch vor Ort.',
  },
  {
    icon: 'TL',
    title: 'Technische Lösungen statt Standarddenken',
    text: 'Von Websites bis Homelab-Unterstützung: pragmatische Hilfe für konkrete Anforderungen.',
  },
];

const heroStats = [
  { value: '1', label: 'Ansprechpartner vom Briefing bis zum Launch' },
  { value: 'Web + Tech', label: 'Website, Hosting und technische Hilfe verzahnt' },
  { value: 'Remote + Vor Ort', label: 'wenn Unterstützung praktisch gebraucht wird' },
];

const services = [
  {
    number: '01',
    tone: 'blue',
    icon: 'W',
    label: 'Webdesign',
    title: 'Webdesign & Entwicklung',
    text: 'Ich entwickle moderne, professionelle Websites, die klar kommunizieren, sauber führen und auf allen Geräten hochwertig wirken.',
    tags: [
      'Unternehmenswebsites',
      'Landingpages',
      'individuelle Webprojekte',
      'responsive Umsetzung',
      'klare Benutzerführung',
      'performanceorientiert',
    ],
  },
  {
    number: '02',
    tone: 'violet',
    icon: 'H',
    label: 'Hosting',
    title: 'Hosting & Deployment',
    text: 'Ich bringe deine Website nicht nur in Form, sondern auch zuverlässig online und kümmere mich um Domain, SSL, Deployment und technische Feinheiten dahinter.',
    tags: [
      'Domain verbinden',
      'SSL einrichten',
      'Server-Setup',
      'Deployment',
      'Reverse Proxy',
      'technische Betreuung',
    ],
  },
  {
    number: '03',
    tone: 'teal',
    icon: 'T',
    label: 'Technical Solutions',
    title: 'Technische Lösungen & Homelab-Hilfe',
    text: 'Wenn Standard nicht reicht, unterstütze ich bei Webtools, Self-Hosting, Homelab-Themen und technischen Setups remote oder bei passenden Projekten auch vor Ort.',
    tags: [
      'Homelab-Beratung',
      'Dashboards',
      'interne Systeme',
      'Reverse Proxy',
      'Self-Hosting',
      'technische Problemlösung',
    ],
  },
];

const benefits = [
  {
    title: 'Nicht nur schön, sondern funktional',
    text: 'Du bekommst nicht nur ein ansprechendes Layout, sondern eine Website, die verständlich führt, professionell wirkt und im Alltag wirklich funktioniert.',
  },
  {
    title: 'Design, Entwicklung und Technik aus einer Hand',
    text: 'Webseite, Hosting, Deployment und technische Umsetzung greifen sauber ineinander. Das spart Abstimmung und verhindert Reibungsverluste.',
  },
  {
    title: 'Direkte Kommunikation',
    text: 'Kurze Wege, klare Rückmeldungen und Entscheidungen ohne unnötige Schleifen machen die Zusammenarbeit effizient und angenehm.',
  },
  {
    title: 'Pragmatisch und strukturiert',
    text: 'Jedes Projekt bekommt einen klaren Rahmen, nachvollziehbare Prioritäten und einen Ablauf, der für beide Seiten planbar bleibt.',
  },
  {
    title: 'Praxisnahes Technikverständnis',
    text: 'Durch Hosting-, Reverse-Proxy- und Homelab-Praxis kann ich technische Themen verständlich begleiten und zuverlässig umsetzen.',
  },
  {
    title: 'Fokus auf echte Ergebnisse',
    text: 'Ziel ist nicht maximale Komplexität, sondern eine saubere Lösung, die Vertrauen schafft, Anfragen erleichtert und stabil live geht.',
  },
];

const processSteps = [
  {
    step: '01',
    badge: 'Start',
    title: 'Erstgespräch & Anfrage',
    text: 'Wir klären Ziel, Zielgruppe, Umfang und Prioritäten. So entsteht schnell eine realistische Richtung für dein Projekt.',
  },
  {
    step: '02',
    badge: 'Planung',
    title: 'Konzept & Planung',
    text: 'Struktur, Inhalte, Nutzerführung und technische Anforderungen werden sauber aufgesetzt, bevor die Umsetzung startet.',
  },
  {
    step: '03',
    badge: 'Umsetzung',
    title: 'Design & Entwicklung',
    text: 'Das Design wird hochwertig ausgearbeitet und direkt responsive entwickelt, statt nur lose gestaltet zu werden.',
  },
  {
    step: '04',
    badge: 'Launch',
    title: 'Go-live & Deployment',
    text: 'Domain, Hosting, SSL, Formulare und alle technischen Details werden getestet, eingerichtet und zuverlässig live geschaltet.',
  },
  {
    step: '05',
    badge: 'Weiterführung',
    title: 'Betreuung & Optimierung',
    text: 'Nach dem Go-live können Inhalte erweitert, Prozesse verfeinert oder Technik, Hosting und Homelab-nahe Themen weiter betreut werden.',
  },
];

const projects = [
  {
    tone: 'blue',
    symbol: 'HL',
    category: 'Dashboard · Homelab',
    title: 'Homelab Dashboard',
    text: 'Ein eigenes Dashboard für Services, Status und schnellen Zugriff auf selbst gehostete Dienste im Homelab-Umfeld.',
    result: 'Ergebnis: mehr Übersicht, schnellere Zugriffe und eine sauberere technische Oberfläche im Alltag.',
    tech: ['Dashboard UI', 'Self-Hosting', 'Docker', 'Reverse Proxy', 'Homelab'],
    url: 'https://github.com/Grufyeti',
    urlLabel: 'Mehr auf GitHub',
  },
  {
    tone: 'violet',
    symbol: 'EL',
    category: 'Website · Maintenance & Weiterentwicklung',
    title: 'euroleg.sk',
    text: 'Ich betreue und pflege euroleg.sk, setze Änderungen um und halte die Website technisch am Laufen.',
    result: 'Ergebnis: verlässliche laufende Betreuung einer produktiven Website inklusive technischer Anpassungen.',
    tech: ['HTML', 'CSS', 'JavaScript', 'IIS', 'Wartung'],
    url: 'https://euroleg.sk',
    urlLabel: 'Website ansehen',
  },
  {
    tone: 'teal',
    symbol: 'AA',
    category: 'Website · Umsetzung & Betreuung',
    title: 'Avonautomobile.at',
    text: 'Website umgesetzt und technisch betreut, inklusive Anpassungen, Hosting-naher Themen und laufender Pflege.',
    result: 'Ergebnis: professioneller Auftritt, direkte Betreuung und schnelle technische Umsetzung ohne Agentur-Umweg.',
    tech: ['Webdesign', 'Deployment', 'SSL', 'Reverse Proxy', 'Wartung'],
    url: 'https://avonautomobile.at',
    urlLabel: 'Website ansehen',
  },
];

const hostingPoints = [
  'Hosting, Deployment und Domain-Anbindung aus einer Hand',
  'SSL, Weiterleitungen und technische Einrichtung sauber vorbereitet',
  'Server-Setup und Reverse Proxy dort, wo es für das Projekt sinnvoll ist',
  'Zuverlässiger Go-live statt halbfertiger Übergabe',
  'Unterstützung bei Homelab- und Self-Hosting-Themen per Call oder vor Ort',
];

const hostingCards = [
  {
    icon: 'DNS',
    title: 'Domain & DNS',
    text: 'Verbindung, Weiterleitungen und saubere technische Zuordnung.',
  },
  {
    icon: 'SSL',
    title: 'SSL & Sicherheit',
    text: 'HTTPS, Zertifikate und ein professionell abgesicherter Launch.',
  },
  {
    icon: 'DEP',
    title: 'Deployment',
    text: 'Bereitstellung mit einem klaren Setup statt manueller Einzelaktionen.',
  },
  {
    icon: 'LAB',
    title: 'Homelab & Betrieb',
    text: 'Reverse Proxy, Self-Hosting und praktische technische Unterstützung für laufende Systeme.',
  },
];

const audiences = [
  {
    icon: 'KM',
    title: 'Kleine Unternehmen',
    text: 'Für Betriebe, die online professionell auftreten und Leistungen verständlich, modern und vertrauenswürdig präsentieren wollen.',
  },
  {
    icon: 'SD',
    title: 'Selbstständige',
    text: 'Für Dienstleister und Personenmarken, die eine professionelle Website statt eines improvisierten Auftritts brauchen.',
  },
  {
    icon: 'LB',
    title: 'Lokale Betriebe',
    text: 'Für Handwerk, Beratung oder Service-Angebote, die lokal Vertrauen aufbauen und Anfragen vereinfachen möchten.',
  },
  {
    icon: 'RL',
    title: 'Relaunch-Projekte',
    text: 'Für bestehende Websites, die optisch, inhaltlich oder technisch nicht mehr dem Anspruch des Unternehmens entsprechen.',
  },
  {
    icon: 'IT',
    title: 'Kunden mit Technikbedarf',
    text: 'Für Projekte, bei denen Hosting, Deployment, Domains, SSL, Reverse Proxy oder Homelab-nahe Unterstützung bewusst mit abgegeben werden sollen.',
  },
  {
    icon: 'OS',
    title: 'Vor-Ort- oder Remote-Hilfe',
    text: 'Für Kunden, die technische Unterstützung per Call oder bei passenden Themen direkt vor Ort benötigen.',
  },
];

const faqItems = [
  {
    question: 'Was kostet eine Website?',
    answer:
      'Das hängt vom Umfang ab. Eine fokussierte Landingpage ist anders zu kalkulieren als ein kompletter Relaunch mit mehreren Unterseiten, technischer Einrichtung und individuellen Funktionen. Nach einem kurzen Erstgespräch kann ich den Aufwand realistisch einschätzen und transparent einordnen.',
  },
  {
    question: 'Wie lange dauert ein Projekt?',
    answer:
      'Kleinere Projekte lassen sich oft in wenigen Wochen umsetzen. Umfangreichere Websites mit mehreren Inhaltsbereichen, Abstimmung und technischer Integration brauchen entsprechend mehr Zeit. Entscheidend ist, dass Ablauf, Prioritäten und Meilensteine von Anfang an klar sind.',
  },
  {
    question: 'Kannst du Hosting und Domain übernehmen?',
    answer:
      'Ja. Auf Wunsch übernehme ich Hosting, Deployment, Domain-Anbindung, SSL, Weiterleitungen und die technische Vorbereitung für einen zuverlässigen Go-live.',
  },
  {
    question: 'Kannst du eine bestehende Website modernisieren?',
    answer:
      'Ja. Viele Projekte starten nicht bei null, sondern mit einem Relaunch. Dabei können Design, Struktur, Inhalte und technische Basis gezielt modernisiert werden, ohne alles unnötig kompliziert zu machen.',
  },
  {
    question: 'Arbeitest du auch an kleineren Projekten?',
    answer:
      'Ja, wenn Ziel und Nutzen klar sind. Nicht jedes Projekt braucht eine große Lösung. Oft ist eine schlanke, sauber umgesetzte Seite oder ein kleines Tool genau der richtige Schritt.',
  },
  {
    question: 'Ist Wartung nach dem Launch möglich?',
    answer:
      'Ja. Ich kann nach dem Go-live bei technischen Anpassungen, kleineren Erweiterungen, Wartung oder allgemeinen Rückfragen unterstützen.',
  },
  {
    question: 'Kannst du auch individuelle technische Funktionen umsetzen?',
    answer:
      'Ja. Dazu gehören zum Beispiel Formulare mit Logik, kleine Dashboards, interne Tools, API-Anbindungen oder pragmatische Weblösungen für wiederkehrende Abläufe.',
  },
  {
    question: 'Hilfst du auch bei Homelab-, Self-Hosting- oder Netzwerk-Themen?',
    answer:
      'Ja. Ich unterstütze bei kleineren Homelab- und Self-Hosting-Setups, Reverse Proxy, Diensten, Dashboards und allgemeinen technischen Fragen. Das kann remote per Call oder bei passenden Projekten auch vor Ort stattfinden.',
  },
  {
    question: 'Arbeitest du auch für Kunden in Wiener Neustadt und Umgebung?',
    answer:
      'Ja. Ich arbeite remote, unterstütze aber auch gezielt Kunden aus Wiener Neustadt und Umgebung, wenn eine lokale Zusammenarbeit sinnvoll ist. Gerade für kleinere Unternehmen, Selbstständige und Betriebe ist das oft praktisch.',
  },
  {
    question: 'Müssen Texte und Inhalte schon komplett fertig sein?',
    answer:
      'Nein. Eine gute Website entsteht oft gemeinsam aus Struktur, Prioritäten und klarer Nutzenkommunikation. Bestehende Inhalte können überarbeitet, verdichtet und in eine bessere Form gebracht werden.',
  },
];

function SectionHeader({ label, title, text }) {
  return (
    <div className="section-header">
      <span className="label">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;
  const year = new Date().getFullYear();
  const [brandFirst = profile.brand, brandLast = ''] = profile.brand.split(' ');
  const brandInitials = profile.brand
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <nav>
        <a className="nav-brand" href="#top" onClick={() => setMenuOpen(false)}>
          {brandFirst}
          <span>.</span>
          {brandLast}
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navigation umschalten"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="nav-cta"
            href={`mailto:${profile.email}`}
            onClick={() => setMenuOpen(false)}
          >
            Projekt anfragen
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="hero-wrap hero">
          <div className="hero-bg" />
          <div className="hero-grid" />

          <div className="section hero-content">
            <span className="label">Freelancer für Webdesign, Hosting & Technik</span>
            <h1>
              Moderne Websites mit <span className="grad">klarer Wirkung</span> und
              technischer Umsetzung aus einer Hand.
            </h1>
            <p className="hero-sub">
              Ich entwickle professionelle Websites für kleine Unternehmen,
              Selbstständige und lokale Betriebe in Wiener Neustadt,
              Niederösterreich und im DACH-Raum und unterstütze zusätzlich bei
              Hosting, Deployment, Domains, SSL, Homelab-Themen und
              individuellen technischen Lösungen im Hintergrund.
            </p>

            <div className="hero-btns">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Projekt anfragen
              </a>
              <a
                className="btn btn-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ansehen
              </a>
              <a className="btn btn-secondary" href="#projekte">
                Projekte ansehen
              </a>
            </div>

            <div className="hero-stats">
              {heroStats.map((item) => (
                <div key={item.label} className="stat-item">
                  <div className="stat-num">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-full trust-strip">
          <div className="trust-inner">
            {heroHighlights.map((item) => (
              <article key={item.title} className="trust-item">
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <div className="trust-title">{item.title}</div>
                  <div className="trust-desc">{item.text}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="leistungen">
          <SectionHeader
            label="Leistungen"
            title="Webdesign, Entwicklung und technische Unterstützung mit Business-Fokus"
            text="Ich verbinde Gestaltung, Entwicklung und Infrastruktur so, dass am Ende nicht nur eine schöne Oberfläche entsteht, sondern eine professionelle Website oder technische Lösung, die zuverlässig funktioniert und sauber online geht."
          />

          <div className="services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${service.tone === 'violet' ? 'purple' : ''}`}
              >
                <div className="service-num">{service.number}</div>
                <span className={`service-icon tone-${service.tone}`}>{service.icon}</span>
                <span className="service-mini-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="inline-cta">
            <div>
              <h3>Keine schöne Hülle ohne saubere Umsetzung dahinter.</h3>
              <p>
                Wenn du eine moderne Website willst, aber die technische
                Einrichtung, Hosting-Themen oder Homelab-nahe Unterstützung
                nicht an mehreren Stellen koordinieren möchtest, ist ein
                integrierter Ansatz meist die bessere Lösung.
              </p>
            </div>
            <a className="btn btn-secondary" href="#technik">
              Technik ansehen
            </a>
          </div>
        </section>

        <div className="section-divider" />

        <section id="warum-ich">
          <SectionHeader
            label="Warum ich"
            title="Eine Zusammenarbeit, die hochwertig wirkt und in der Praxis funktioniert"
            text="Aus Kundensicht zählt nicht nur das Design, sondern ob ein Projekt strukturiert umgesetzt wird, technisch sauber läuft und ohne Reibung online geht."
          />

          <div className="why-grid">
            {benefits.map((item, index) => (
              <article key={item.title} className="why-item">
                <div className="why-num">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="ablauf">
          <SectionHeader
            label="Projektablauf"
            title="Klarer Prozess statt chaotischer Einzelbaustellen"
            text="Der Ablauf ist bewusst einfach gehalten: nachvollziehbar, professionell und kundenfreundlich. So bleibt das Projekt planbar und Entscheidungen werden nicht unnötig kompliziert."
          />

          <div className="process-steps">
            {processSteps.map((item) => (
              <article key={item.step} className="process-step">
                <div className="step-num">{item.step}</div>
                <div className="step-content">
                  <span className="step-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="projekte">
          <SectionHeader
            label="Ausgewählte Projekte"
            title="Reale Projekte aus Website-Betreuung, Umsetzung und technischer Praxis"
            text="Hier siehst du konkrete Arbeiten aus meinem Alltag: laufend betreute Websites, eigene technische Projekte und weitere Codebeispiele auf GitHub."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`project-thumb ${project.tone}`}>
                  <span>{project.symbol}</span>
                </div>
                <div className="project-body">
                  <div className="project-cat">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="project-result">{project.result}</div>
                  <div className="project-tech">
                    {project.tech.map((entry) => (
                      <span key={entry} className="tag">
                        {entry}
                      </span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.urlLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-note">
            <p>
              Weitere Projekte, Experimente und technische Arbeiten findest du
              auf meinem GitHub-Profil.
            </p>
            <a
              className="btn btn-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub-Profil öffnen
            </a>
          </div>
        </section>

        <section className="section-full hosting-wrap" id="technik">
          <div className="section-inner hosting-grid">
            <div className="hosting-left">
              <span className="label">Technik, Hosting & Deployment</span>
              <h2>
                Ich liefere keine halbfertige Website-Datei, sondern eine
                funktionierende Gesamtlösung.
              </h2>
              <p>
                Viele Webdesigner enden beim Layout oder beim Export. Ich
                begleite auf Wunsch auch die technische Seite dahinter:
                Hosting, Deployment, Domain-Anbindung, SSL, Reverse Proxy,
                Server-Einrichtung und ein zuverlässiger Go-live gehören mit ins
                Bild, wenn sie für das Projekt relevant sind.
              </p>

              <div className="hosting-points">
                {hostingPoints.map((point) => (
                  <div key={point} className="hosting-point">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="hosting-right">
              {hostingCards.map((card) => (
                <article key={card.title} className="hosting-card">
                  <div className="hosting-card-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zielgruppen">
          <SectionHeader
            label="Für wen ich arbeite"
            title="Für Unternehmen und Menschen, die eine klare Lösung statt Bastelarbeit wollen"
            text="Die Zusammenarbeit passt besonders gut, wenn du eine moderne Website oder technische Unterstützung willst, aber Gestaltung, Technik und Go-live nicht auf mehrere Dienstleister aufteilen möchtest."
          />

          <div className="audience-grid">
            {audiences.map((item) => (
              <article key={item.title} className="audience-item">
                <span className="audience-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="ueber-mich">
          <div className="about-grid">
            <div className="about-avatar">
              <div className="about-avatar-inner">
                <strong>{brandInitials}</strong>
                <span>{profile.responseNote}</span>
              </div>
            </div>

            <div className="about-right">
              <span className="label">Über mich</span>
              <h2>
                Ich verbinde Design, Entwicklung und technische Infrastruktur zu
                klaren Lösungen.
              </h2>
              <p>
                Ich entwickle moderne Websites für kleine Unternehmen,
                Selbstständige und lokale Betriebe, besonders in Wiener
                Neustadt und Umgebung, die professionell auftreten wollen und
                dafür eine saubere Umsetzung brauchen.
              </p>
              <p>
                Mich interessiert nicht nur, wie eine Website aussieht, sondern
                auch, wie sie technisch betrieben wird, wie sie live geht und
                wie sie im Alltag zuverlässig funktioniert. Deshalb verbinde ich
                Gestaltung, Entwicklung und Infrastruktur zu einer
                pragmatischen, lösungsorientierten Arbeitsweise.
              </p>
              <p>
                Neben Webprojekten unterstütze ich auch bei Homelab-,
                Self-Hosting- und Reverse-Proxy-Themen. Wenn technische Hilfe
                praktisch gebraucht wird, arbeite ich remote per Call oder bei
                passenden Projekten auch direkt vor Ort.
              </p>

              <div className="about-skills">
                <span className="tag">Webdesign</span>
                <span className="tag">Development</span>
                <span className="tag">Hosting</span>
                <span className="tag">Deployment</span>
                <span className="tag">Homelab</span>
                <span className="tag">Technical Solutions</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section id="faq">
          <SectionHeader
            label="FAQ"
            title="Häufige Fragen vor Projektstart"
            text="Die häufigsten Punkte drehen sich um Aufwand, Timing, technische Betreuung und die Frage, wie individuell eine Lösung werden kann."
          />

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article
                  key={item.question}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">{item.answer}</div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cta-final" id="kontakt">
          <div className="cta-final-bg" />
          <div className="cta-final-inner">
            <span className="label">Kontakt</span>
            <h2>
              Bereit für eine Website, die nicht nur gut aussieht, sondern
              zuverlässig funktioniert?
            </h2>
            <p>
              Wenn du eine moderne Website, Unterstützung bei Hosting und
              Deployment oder Hilfe bei Homelab- und Reverse-Proxy-Themen
              brauchst, lass uns kurz sprechen.
            </p>
            <div className="cta-btns">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                E-Mail schreiben
              </a>
              <a className="btn btn-secondary" href={phoneHref}>
                Anrufen
              </a>
            </div>
            <div className="contact-inline">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={phoneHref}>{profile.phone}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub: {profile.githubHandle}
              </a>
              <span>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                {brandFirst}
                <span>.</span>
                {brandLast}
              </div>
              <p className="footer-tagline">
                {profile.title} für professionelle Online-Auftritte mit klarer
                Wirkung, sauberer Umsetzung, verlässlichem Go-live und
                praxisnaher technischer Unterstützung.
              </p>
            </div>

            <div className="footer-col">
              <h5>Navigation</h5>
              <ul className="footer-links">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Kontakt</h5>
              <ul className="footer-links">
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <a href={phoneHref}>{profile.phone}</a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    github.com/{profile.githubHandle}
                  </a>
                </li>
                <li>{profile.location}</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {year} {profile.brand}. Alle Rechte vorbehalten.</span>
            <span>Webdesign, Entwicklung, Hosting und technische Lösungen.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
