import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  Code2, 
  Check, 
  ArrowRight, 
  Mail,
  Sparkles,
  Shield,
  Zap,
  Users,
  Layout,
  Settings,
  Clock,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  Boxes,
  Database,
  Container,
  Terminal,
  Braces
} from 'lucide-react';

const Portfolio = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Martin Pokorny
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#leistungen" className="text-slate-300 hover:text-white transition-colors">Leistungen</a>
            <a href="#projekte" className="text-slate-300 hover:text-white transition-colors">Projekte</a>
            <a href="#ablauf" className="text-slate-300 hover:text-white transition-colors">Ablauf</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </div>
          <a 
            href="#kontakt" 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">Webdesign • Entwicklung • Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Moderne Webseiten und{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              technische Lösungen
            </span>
            {' '}für Unternehmen
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ich entwickle professionelle Websites und übernehme die komplette technische Umsetzung – 
            von Design über Entwicklung bis Hosting und Deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#kontakt" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              Projekt starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#leistungen" 
              className="bg-slate-800/50 border border-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all"
            >
              Leistungen ansehen
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>Komplette technische Umsetzung</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>Hosting & Deployment inklusive</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>Direkte Kommunikation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: "Moderne Websites", text: "Mit klarer Wirkung und professionellem Design" },
              { icon: Server, title: "Technik inklusive", text: "Hosting, Deployment und SSL aus einer Hand" },
              { icon: Users, title: "Direkte Zusammenarbeit", text: "Ohne Umwege, klar und strukturiert" },
              { icon: Settings, title: "Individuelle Lösungen", text: "Maßgeschneidert statt Baukasten" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Leistungen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Was ich für dich umsetze
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Von der ersten Idee bis zur fertigen Online-Lösung – alle Schritte aus einer Hand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Webdesign & Entwicklung</h3>
              <p className="text-slate-400 mb-6">
                Ich entwickle moderne, professionelle Websites, die nicht nur gut aussehen, 
                sondern auch perfekt funktionieren und deine Kunden überzeugen.
              </p>
              <ul className="space-y-3">
                {[
                  "Moderne Unternehmenswebsites",
                  "Landingpages mit starker Conversion",
                  "Individuelle Webprojekte",
                  "Vollständig responsive Umsetzung",
                  "Klare Benutzerführung und UX",
                  "Performance-optimierte Entwicklung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Hosting & Deployment</h3>
              <p className="text-slate-400 mb-6">
                Deine Website wird nicht nur entwickelt, sondern vollständig online gebracht – 
                mit professionellem Hosting, SSL-Verschlüsselung und allem, was dazu gehört.
              </p>
              <ul className="space-y-3">
                {[
                  "Website professionell online bringen",
                  "Domain-Anbindung und DNS-Konfiguration",
                  "SSL-Zertifikat einrichten",
                  "Server- und Hosting-Setup",
                  "Reverse Proxy & technische Einrichtung",
                  "Laufende technische Betreuung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Technische Lösungen</h3>
              <p className="text-slate-400 mb-6">
                Individuelle Webanwendungen und technische Tools, die genau auf deine 
                Anforderungen zugeschnitten sind – pragmatisch und zuverlässig umgesetzt.
              </p>
              <ul className="space-y-3">
                {[
                  "Kleine Webtools und Anwendungen",
                  "Dashboards und Verwaltungsoberflächen",
                  "Interne Systeme und Prozesse",
                  "API-Anbindungen und Integrationen",
                  "Automationen und Workflows",
                  "Pragmatische technische Problemlösung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me / Benefits */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Vorteile
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Warum mit mir arbeiten?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Klare Prozesse, moderne Umsetzung und echte Lösungen statt unnötiger Komplexität
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Funktionierende Lösungen, nicht nur schönes Design",
                text: "Du erhältst keine halbfertige Design-Datei, sondern eine vollständig funktionierende Website, die online ist und läuft."
              },
              {
                icon: Server,
                title: "Technik und Umsetzung aus einer Hand",
                text: "Von Design über Entwicklung bis Hosting – du hast einen zentralen Ansprechpartner für alles und musst dich nicht mit verschiedenen Dienstleistern herumschlagen."
              },
              {
                icon: MessageSquare,
                title: "Direkte Kommunikation ohne Umwege",
                text: "Keine langen E-Mail-Ketten mit Account-Managern. Du arbeitest direkt mit mir zusammen – schnell, unkompliziert und klar."
              },
              {
                icon: Shield,
                title: "Strukturierte und pragmatische Projektarbeit",
                text: "Ich arbeite nach klaren Prozessen, halte mich an Absprachen und setze Projekte zuverlässig um – ohne unnötige Verzögerungen."
              },
              {
                icon: Code2,
                title: "Moderne und saubere technische Umsetzung",
                text: "Ich setze auf aktuelle Web-Standards, sauberen Code und nachhaltige Lösungen – keine veralteten Technologien oder unsaubere Quick-Fixes."
              },
              {
                icon: Check,
                title: "Fokus auf echte Ergebnisse",
                text: "Statt überkomplizierter Lösungen erhältst du das, was wirklich funktioniert und was du tatsächlich brauchst – pragmatisch und effektiv."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group"
              >
                <benefit.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="ablauf" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Projektablauf
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              So arbeiten wir zusammen
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ein klarer, strukturierter Ablauf von der ersten Anfrage bis zum erfolgreichen Launch
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                number: "01",
                title: "Erstgespräch",
                text: "Wir besprechen dein Projekt, deine Ziele und Anforderungen. Ich stelle Fragen, um ein klares Bild zu bekommen, und gebe dir eine erste Einschätzung."
              },
              {
                number: "02",
                title: "Konzept & Planung",
                text: "Ich erarbeite ein detailliertes Konzept mit Struktur, Funktionen und technischer Umsetzung. Du erhältst eine transparente Übersicht und ein Angebot."
              },
              {
                number: "03",
                title: "Design & Entwicklung",
                text: "Ich entwickle deine Website mit modernem Design und sauberer Technik. Du bekommst regelmäßige Updates und kannst Feedback geben."
              },
              {
                number: "04",
                title: "Launch & Deployment",
                text: "Deine Website wird vollständig online gebracht – mit Hosting, Domain, SSL und allen technischen Details. Alles läuft reibungslos und professionell."
              },
              {
                number: "05",
                title: "Betreuung & Support",
                text: "Nach dem Launch stehe ich für Anpassungen, technische Fragen oder Erweiterungen zur Verfügung. Du hast einen verlässlichen Ansprechpartner."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all h-full">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.text}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-cyan-400/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projekte" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Projekte
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Einblicke in umgesetzte Projekte – von Unternehmenswebsites bis zu individuellen Weblösungen
            </p>
          </div>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Webdesign</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">Entwicklung</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Hosting</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Moderne Website für Handwerksbetrieb
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ausgangssituation</h4>
                  <p className="text-slate-400 text-sm">
                    Ein regionaler Handwerksbetrieb hatte eine veraltete Website ohne mobile Optimierung. 
                    Kunden fanden schwer Informationen, Kontaktanfragen waren umständlich.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Lösung</h4>
                  <p className="text-slate-400 text-sm">
                    Entwicklung einer modernen, responsiven Website mit klarer Leistungsübersicht, 
                    Referenzgalerie und einfachem Kontaktformular. Vollständiges Hosting und SSL-Setup inklusive.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ergebnis</h4>
                  <p className="text-slate-400 text-sm">
                    Professioneller Online-Auftritt, deutlich mehr Anfragen über die Website, 
                    sehr positive Rückmeldungen von Kunden zur Bedienbarkeit.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500">React</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Tailwind CSS</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Node.js</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Nginx</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Landingpage</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">Marketing</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Deployment</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Landingpage für Personal Trainer
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ausgangssituation</h4>
                  <p className="text-slate-400 text-sm">
                    Ein selbstständiger Personal Trainer benötigte eine professionelle Landingpage zur 
                    Neukundengewinnung mit klarem Fokus auf Conversion und einfacher Buchung.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Lösung</h4>
                  <p className="text-slate-400 text-sm">
                    Umsetzung einer conversion-optimierten Landingpage mit starken Headlines, 
                    Leistungsübersicht, Testimonials und integriertem Buchungsformular. Schnelle Ladezeiten und mobil perfekt.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ergebnis</h4>
                  <p className="text-slate-400 text-sm">
                    Deutlich mehr Buchungsanfragen innerhalb der ersten Wochen, 
                    professioneller Auftritt, der Vertrauen schafft und das Premium-Angebot unterstreicht.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500">Next.js</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Tailwind CSS</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Vercel</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Formspree</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Web-App</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">Dashboard</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Backend</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Internes Anfragenmanagement-Dashboard
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ausgangssituation</h4>
                  <p className="text-slate-400 text-sm">
                    Ein kleines Dienstleistungsunternehmen verwaltete Kundenanfragen in Excel und 
                    E-Mails – zeitaufwändig, unübersichtlich und fehleranfällig.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Lösung</h4>
                  <p className="text-slate-400 text-sm">
                    Entwicklung eines maßgeschneiderten Dashboards zur Verwaltung von Anfragen mit 
                    Statusverfolgung, Benachrichtigungen und einfacher Übersicht. Backend-Anbindung und sicheres Hosting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Ergebnis</h4>
                  <p className="text-slate-400 text-sm">
                    Deutlich effizientere interne Prozesse, keine verlorenen Anfragen mehr, 
                    klare Übersicht für das Team und massive Zeitersparnis im Tagesgeschäft.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500">React</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Node.js</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">PostgreSQL</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Express</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-500">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Hosting Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Komplettlösung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nicht nur Design – die komplette technische Umsetzung
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Viele Webdesigner liefern schöne Designs – aber was dann? 
              <span className="font-semibold text-white"> Ich übernehme die komplette technische Umsetzung</span>, 
              sodass deine Website nicht nur gut aussieht, sondern auch professionell online geht und zuverlässig läuft.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Professionelles Hosting",
                  text: "Ich kümmere mich um sicheres, performantes Hosting auf modernen Servern – egal ob Shared Hosting, VPS oder Cloud-Lösungen."
                },
                {
                  title: "Deployment & Go-Live",
                  text: "Deine Website wird vollständig online gebracht – mit allen technischen Details, die für einen reibungslosen Start notwendig sind."
                },
                {
                  title: "Domain & SSL",
                  text: "Domain-Registrierung, DNS-Konfiguration und SSL-Zertifikate – alles wird sauber eingerichtet und funktioniert einwandfrei."
                },
                {
                  title: "Server-Administration",
                  text: "Reverse Proxies, Webserver-Konfiguration, automatische Backups – ich sorge dafür, dass die Technik im Hintergrund läuft."
                },
                {
                  title: "Updates & Wartung",
                  text: "Nach dem Launch stehe ich für technische Betreuung, Updates und Anpassungen zur Verfügung – du hast einen verlässlichen Partner."
                },
                {
                  title: "Problemlösung",
                  text: "Technische Probleme, Fehlerbehebung oder spontane Anforderungen – ich finde pragmatische Lösungen und setze sie direkt um."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-lg font-semibold text-white mb-2">
                Du erhältst keine halbfertige Datei – sondern eine funktionierende Gesamtlösung.
              </p>
              <p className="text-slate-300">
                Alle technischen Aspekte werden professionell umgesetzt, sodass du dich auf dein Business konzentrieren kannst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Zielgruppen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Für wen ich arbeite
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Meine Lösungen sind ideal für Unternehmen und Selbstständige, 
              die eine professionelle Online-Präsenz mit zuverlässiger technischer Umsetzung benötigen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Kleine Unternehmen",
                text: "Die eine moderne, professionelle Website brauchen, ohne sich um die Technik kümmern zu müssen."
              },
              {
                icon: Sparkles,
                title: "Selbstständige & Dienstleister",
                text: "Die online professionell auftreten und Kunden gewinnen wollen – mit klarem Fokus auf Wirkung."
              },
              {
                icon: Globe,
                title: "Lokale Betriebe",
                text: "Die veraltete Websites modernisieren oder erstmals online gehen möchten – verlässlich umgesetzt."
              },
              {
                icon: Shield,
                title: "Vereine & Organisationen",
                text: "Die eine einfache, wartbare Online-Präsenz benötigen – ohne komplizierte Content-Management-Systeme."
              },
              {
                icon: Code2,
                title: "Unternehmen mit technischen Anforderungen",
                text: "Die spezielle Features, Integrationen oder individuelle Weblösungen umsetzen möchten."
              },
              {
                icon: Zap,
                title: "Kunden, die Wert auf Qualität legen",
                text: "Die eine hochwertige, durchdachte Lösung wollen – statt Baukasten-Websites oder billiger Quick-Fixes."
              }
            ].map((audience, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <audience.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{audience.title}</h3>
                <p className="text-slate-400 text-sm">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-2xl p-8 md:p-12">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-6">
              Über mich
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, ich bin Martin Pokorny – Webentwickler mit Fokus auf technische Lösungen
            </h2>
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Ich entwickle moderne Websites und kümmere mich um die komplette technische Umsetzung dahinter – 
                von der ersten Idee bis zur fertigen Online-Lösung.
              </p>
              <p>
                Mein Fokus liegt nicht nur auf Design, sondern auch auf der zuverlässigen technischen Infrastruktur: 
                Hosting, Deployment, Server-Konfiguration und alles, was dazu gehört, dass eine Website professionell läuft. 
                Ich verbinde kreative Gestaltung mit technischer Kompetenz.
              </p>
              <p>
                Ich arbeite pragmatisch und lösungsorientiert – keine unnötig komplizierten Prozesse, 
                keine übertriebenen Buzzwords, sondern klare Kommunikation und funktionierende Ergebnisse. 
                Meine Kunden schätzen die direkte Zusammenarbeit und die Tatsache, dass sie einen zentralen Ansprechpartner haben.
              </p>
              <p className="font-semibold text-white">
                Egal, ob moderne Unternehmenswebsite, Landingpage oder individuelle Weblösung – 
                ich setze Projekte um, die nicht nur gut aussehen, sondern auch professionell funktionieren.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <h3 className="text-xl font-semibold mb-6 text-center">Technologien & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "React", icon: Braces, color: "from-cyan-400 to-blue-400" },
                  { name: "TypeScript", icon: Code2, color: "from-blue-400 to-indigo-400" },
                  { name: "Node.js", icon: Server, color: "from-green-400 to-emerald-400" },
                  { name: "Python", icon: Terminal, color: "from-yellow-400 to-amber-400" },
                  { name: "Docker", icon: Container, color: "from-blue-400 to-cyan-400" },
                  { name: "PostgreSQL", icon: Database, color: "from-blue-400 to-purple-400" },
                  { name: "Git", icon: Boxes, color: "from-orange-400 to-red-400" },
                  { name: "C++", icon: Code2, color: "from-indigo-400 to-purple-400" }
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-4 hover:border-cyan-500/30 transition-all group text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} bg-opacity-20 mb-3 group-hover:scale-110 transition-transform`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-slate-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              Häufige Fragen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              FAQ
            </h2>
            <p className="text-xl text-slate-400">
              Antworten auf die wichtigsten Fragen zur Zusammenarbeit
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Was kostet eine Website?",
                answer: "Die Kosten hängen vom Umfang des Projekts ab – von einfachen Landingpages bis zu komplexeren Webanwendungen. Nach einem kostenlosen Erstgespräch erhältst du ein transparentes Angebot. Kleine Websites starten typischerweise im mittleren dreistelligen Bereich, größere Projekte können je nach Anforderung variieren."
              },
              {
                question: "Wie lange dauert die Umsetzung eines Projekts?",
                answer: "Eine einfache Website oder Landingpage kann innerhalb von 1-2 Wochen fertig sein. Größere Projekte mit individuellen Funktionen dauern 3-6 Wochen. Die genaue Dauer besprechen wir im Erstgespräch und hängt vom Funktionsumfang und der Komplexität ab."
              },
              {
                question: "Kannst du auch Hosting und Domain übernehmen?",
                answer: "Ja, definitiv. Ich kümmere mich um die komplette technische Umsetzung – von der Domain-Registrierung über Hosting-Setup bis zur SSL-Verschlüsselung. Du erhältst alles aus einer Hand und musst dich nicht mit verschiedenen Anbietern herumschlagen."
              },
              {
                question: "Kannst du eine bestehende Website modernisieren?",
                answer: "Absolut. Ich übernehme gerne die Modernisierung veralteter Websites – egal ob Relaunch mit neuem Design, technische Überarbeitung oder Migration auf eine neue Plattform. Wir schauen uns gemeinsam an, was verbessert werden soll."
              },
              {
                question: "Arbeitest du auch an kleineren Projekten?",
                answer: "Ja, ich arbeite auch gerne an kleineren Projekten wie Landingpages, einfachen Unternehmenswebsites oder kleinen technischen Lösungen. Kein Projekt ist zu klein – Hauptsache, wir können gemeinsam etwas Sinnvolles umsetzen."
              },
              {
                question: "Ist technische Wartung nach dem Launch möglich?",
                answer: "Ja, ich biete auch laufende technische Betreuung an – von kleineren Anpassungen über Updates bis zur vollständigen Wartung. Du kannst mich jederzeit kontaktieren, wenn Fragen oder Änderungswünsche auftauchen."
              },
              {
                question: "Kannst du auch individuelle technische Funktionen umsetzen?",
                answer: "Ja, ich entwickle auch individuelle Lösungen wie kleine Dashboards, API-Anbindungen, Automationen oder interne Tools. Wenn du eine spezielle Anforderung hast, finden wir eine pragmatische technische Lösung."
              },
              {
                question: "Wie läuft die Kommunikation während des Projekts?",
                answer: "Ich arbeite direkt mit dir zusammen – keine langen E-Mail-Ketten mit Account-Managern. Wir kommunizieren per E-Mail, Video-Call oder wie es für dich am besten passt. Du erhältst regelmäßige Updates und kannst jederzeit Feedback geben."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="kontakt" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/50 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für eine Website, die funktioniert?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lass uns aus deiner Idee eine professionelle Online-Lösung machen – 
              mit modernem Design, zuverlässiger Technik und direkter Zusammenarbeit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="mailto:martinkopoky@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                martinkopoky@gmail.com
              </a>
            </div>
            
            <p className="text-slate-400 text-sm">
              Oder schreib mir direkt – ich melde mich innerhalb von 24 Stunden zurück.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                Martin Pokorny
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Webdesign, Entwicklung und technische Lösungen für Unternehmen, 
                die professionell online auftreten wollen.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#leistungen" className="text-slate-400 hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#projekte" className="text-slate-400 hover:text-white transition-colors">Projekte</a></li>
                <li><a href="#ablauf" className="text-slate-400 hover:text-white transition-colors">Ablauf</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Kontakt</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:martinkopoky@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                    martinkopoky@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Grufyeti" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2024 Martin Pokorny. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="https://github.com/Grufyeti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
