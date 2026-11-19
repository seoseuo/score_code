'use client';

import { useEffect, useState } from 'react';

const copy = {
  ko: {
    nav: ['소개', '프로젝트', '아카이브', '연락처'],
    intro: '생각을 만들고, 새로운 가능성을 발견합니다.',
    sub: '크리에이티브의 시작부터 완성까지.',
    selected: '선택된 작업',
    project: '프로젝트',
    coming: '준비 중',
    about: '서로 다른 아이디어가 만나\n새로운 이야기가 됩니다.',
    aboutBody: 'score&code는 다양한 생각과 시도를 하나의 경험으로 연결합니다.',
    contact: '함께 새로운 것을 만들어 보세요.',
    top: '맨 위로',
  },
  en: {
    nav: ['About', 'Projects', 'Archive', 'Contact'],
    intro: 'Making ideas, finding new possibilities.',
    sub: 'From the first thought to the finished experience.',
    selected: 'Selected work',
    project: 'Project',
    coming: 'Coming soon',
    about: 'Different ideas come together\nto make a new story.',
    aboutBody: 'score&code connects different ideas and experiments into one experience.',
    contact: 'Let’s make something new together.',
    top: 'Back to top',
  },
};
const targets = ['about', 'projects', 'archive', 'contact'];

export default function Home() {
  const [language, setLanguage] = useState('ko');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <span /><span /><span />
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((item, i) => <a href={`#${targets[i]}`} key={targets[i]}>{item}</a>)}
        </nav>
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)} aria-label="score and code home">S&amp;C</a>
        <div className="languages" aria-label="Language">
          <button className={language === 'ko' ? 'active' : ''} onClick={() => setLanguage('ko')} aria-pressed={language === 'ko'}>KO</button>
          <span>/</span>
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
        </div>
      </header>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'visible' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen ? true : undefined}>
        {t.nav.map((item, i) => <a href={`#${targets[i]}`} key={targets[i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">score&amp;code</h1>
            <p>{t.intro}<br />{t.sub}</p>
          </div>
          <div className="hero-bottom"><span>SC / 001</span><span>Scroll to explore ↓</span></div>
        </section>

        <section id="projects" className="work section-pad">
          <div className="section-heading"><h2>{t.selected}</h2><span>01 — 04</span></div>
          <div className="project-grid">
            {[1, 2, 3, 4].map((number) => (
              <article className="project" key={number}>
                <div className="project-image" aria-label={`${t.project} ${String(number).padStart(2, '0')} — ${t.coming}`}><span>SC / {String(number).padStart(2, '0')}</span></div>
                <div className="project-caption"><h3>{t.project} {String(number).padStart(2, '0')}</h3><span>{t.coming}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-heading"><h2>About</h2><span>SC / 01</span></div>
          <p className="about-statement">{t.about}</p>
          <p className="about-body">{t.aboutBody}</p>
        </section>
        <section id="archive" className="archive section-pad">
          <div className="section-heading"><h2>Archive</h2><span>SC / 02</span></div>
          <div className="archive-content"><span>Ideas, in progress.</span><span>{t.coming} ↗</span></div>
        </section>
      </main>
      <footer id="contact" className="footer section-pad">
        <div className="section-heading"><h2>Contact</h2><a href="#top">{t.top} ↑</a></div>
        <p>{t.contact}</p>
        <div className="footer-bottom"><span>score&amp;code</span><span>© score&amp;code</span></div>
      </footer>
    </>
  );
}
