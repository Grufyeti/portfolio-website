import { seoPageMap, seoProfile, seoTopics } from './seoPageData';

function SeoPage({ pageKey }) {
  const page = seoPageMap[pageKey];

  if (!page) {
    return null;
  }

  const relatedTopics = seoTopics.filter((topic) => topic.key !== page.key);

  return (
    <>
      <nav>
        <a className="nav-brand" href="/">
          Martin<span>.</span>Pokorny
        </a>

        <div className="nav-menu seo-nav-menu">
          <ul className="nav-links">
            <li>
              <a href="/">Startseite</a>
            </li>
            <li>
              <a href={seoTopics[0].href}>Leistungen im Fokus</a>
            </li>
            <li>
              <a href={`mailto:${seoProfile.email}`}>Kontakt</a>
            </li>
          </ul>
          <a className="nav-cta" href={`mailto:${seoProfile.email}`}>
            Projekt anfragen
          </a>
        </div>
      </nav>

      <main className="seo-page-main">
        <section className="hero-wrap seo-page-hero">
          <div className="hero-bg" />
          <div className="hero-grid" />

          <div className="section hero-content">
            <span className="label">{page.label}</span>
            <h1>{page.title}</h1>
            <p className="hero-sub seo-hero-sub">{page.intro}</p>

            <div className="hero-btns">
              <a className="btn btn-primary" href={`mailto:${seoProfile.email}`}>
                Anfrage senden
              </a>
              <a className="btn btn-secondary" href="/">
                Zur Startseite
              </a>
            </div>

            <div className="seo-hero-points">
              {page.highlights.map((item) => (
                <div key={item} className="seo-hero-point">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-copy-section">
          <div className="section">
            <div className="seo-content-grid">
              {page.sections.map((section) => (
                <article key={section.title} className="seo-copy-card">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  <div className="seo-bullets">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="seo-bullet">
                        {bullet}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section seo-guidance">
          <div className="inline-cta">
            <div>
              <h3>Direkte Zusammenarbeit ohne Umwege.</h3>
              <p>
                Wenn du eine moderne Website, einen Relaunch oder technische
                Umsetzung mit Hosting und Deployment brauchst, bekommst du einen
                klaren Ablauf statt verteilter Einzelbaustellen.
              </p>
            </div>
            <a className="btn btn-secondary" href={`mailto:${seoProfile.email}`}>
              Kontakt aufnehmen
            </a>
          </div>
        </section>

        <section className="section seo-related">
          <div className="section-header">
            <span className="label">Weitere Themen</span>
            <h2>Verwandte Leistungen und Suchthemen</h2>
            <p>
              Diese Unterseiten sind bewusst miteinander verknuepft, damit
              Besucher und Suchmaschinen die wichtigsten Themen rund um
              Webdesign, Relaunch und technische Umsetzung leichter einordnen
              koennen.
            </p>
          </div>

          <div className="seo-topic-grid">
            {relatedTopics.map((topic) => (
              <article key={topic.key} className="seo-topic-card">
                <span className="seo-topic-label">{topic.label}</span>
                <h3>{topic.title}</h3>
                <p>{topic.teaser}</p>
                <a className="project-link" href={topic.href}>
                  Thema ansehen
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-final seo-page-cta">
          <div className="cta-final-bg" />
          <div className="cta-final-inner">
            <span className="label">Kontakt</span>
            <h2>Bereit fuer eine Website oder technische Loesung, die sauber umgesetzt wird?</h2>
            <p>
              Ich arbeite fuer Kunden in Wiener Neustadt, in Oesterreich und
              remote im DACH-Raum. Wenn du eine professionelle, unkomplizierte
              Zusammenarbeit willst, lass uns kurz sprechen.
            </p>
            <div className="cta-btns">
              <a className="btn btn-primary" href={`mailto:${seoProfile.email}`}>
                E-Mail schreiben
              </a>
              <a className="btn btn-secondary" href={seoProfile.phoneHref}>
                Anrufen
              </a>
            </div>
            <div className="contact-inline">
              <a href={`mailto:${seoProfile.email}`}>{seoProfile.email}</a>
              <a href={seoProfile.phoneHref}>{seoProfile.phone}</a>
              <a href={seoProfile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>{seoProfile.location}</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SeoPage;
