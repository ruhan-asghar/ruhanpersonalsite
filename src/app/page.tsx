export default function Home() {
  return (
    <>
      {/* Loader */}
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader">
        <div className="mxd-loader__top">
          <span>Ruhan Asghar</span>
        </div>
        <div className="mxd-loader__images">
          <img src="/images/gravity-01.webp" alt="Loader" />
          <img src="/images/gravity-02.webp" alt="Loader" />
          <img src="/images/gravity-03.webp" alt="Loader" />
          <img src="/images/gravity-04.webp" alt="Loader" />
          <img src="/images/gravity-05.webp" alt="Loader" />
          <img src="/images/gravity-06.webp" alt="Loader" />
          <img src="/images/gravity-01.webp" alt="Loader" />
        </div>
        <div className="mxd-loader__bottom">
          <div className="mxd-loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>

      {/* Menu Hamburger */}
      <div className="mxd-menu__contain loading-fade">
        <div className="mxd-menu__toggle">
          <a href="#0" className="mxd-menu__hamburger" aria-label="Menu">
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mxd-menu">
        <div className="mxd-menu__backdrop"></div>
        <div className="mxd-menu__overlay">
          <div className="mxd-menu__content" data-lenis-prevent>
            <div className="mxd-menu__logo">
              <a href="/" className="menu-logo">
                <div className="mxd-logo__text">
                  <span className="mxd-scramble">Ruhan</span>
                  <span className="mxd-scramble">Asghar</span>
                </div>
              </a>
            </div>

            <div className="mxd-menu__nav">
              <ul id="main-menu" className="main-menu">
                <li className="main-menu__item">
                  <a className="main-menu__link" href="/">
                    <span className="menu-link__text mxd-scramble">Home</span>
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="#works">
                    <span className="menu-link__text mxd-scramble">Projects</span>
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="#expertise">
                    <span className="menu-link__text mxd-scramble">Expertise</span>
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="#resume">
                    <span className="menu-link__text mxd-scramble">Resume</span>
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                    <span className="menu-link__text mxd-scramble">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mxd-menu__info">
              <div className="mxd-menu__contacts">
                <div className="menu-contacts__item">
                  <p className="menu-contacts__caption">Email</p>
                  <p>
                    <a href="https://calendly.com/ruhan-asghar/ruhan-builds">ruhan.asghar@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="mxd-menu__socials">
                <ul className="mxd-socials-line">
                  <li>
                    <a className="mxd-socials-line__link" href="https://github.com/ruhan-asghar" target="_blank">
                      <span className="mxd-scramble">Github</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://www.linkedin.com/in/ruhan-asghar/" target="_blank">
                      <span className="mxd-scramble">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://www.facebook.com/ruhan.asghar.3/" target="_blank">
                      <span className="mxd-scramble">Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="header" className="mxd-header loading-fade">
        <div className="mxd-header__logo">
          <a href="/" className="mxd-logo" aria-label="Ruhan Asghar">
            <div className="mxd-logo__text">
              <span className="mxd-scramble">Ruhan</span>
              <span className="mxd-scramble">Asghar</span>
            </div>
          </a>
        </div>
        <div className="mxd-header__controls">
          <a className="btn btn-default btn-default-small slide-right-up" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
            <span className="btn-caption mxd-scramble">Book a Call</span>
            <i className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
              </svg>
            </i>
          </a>
          <button id="color-switcher" className="btn mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
        </div>
      </header>

      {/* Page Content */}
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Blur Effect */}
        <div className="blur-container">
          <div className="blur-layer blur-1"></div>
          <div className="blur-layer blur-2"></div>
          <div className="blur-layer blur-3"></div>
          <div className="blur-layer blur-4"></div>
          <div className="blur-layer blur-5"></div>
          <div className="blur-layer blur-6"></div>
          <div className="blur-layer blur-7"></div>
          <div className="blur-layer blur-8"></div>
        </div>

        {/* ==================== HERO SECTION ==================== */}
        <div className="mxd-section mxd-hero-section pinned-section mxd-hero-fullheight-desktop loading-wrap">
          <div className="pinned-section__inner">
            <div className="mxd-hero-10">
              <div className="mxd-hero-10__wrap">
                {/* top group */}
                <div className="mxd-hero-10__top">
                  <div className="mxd-hero-10__headline mxd-grid-item">
                    <div className="hero-10-headline__wrap">
                      <h1>
                        <a className="hero-10-headline__content active-cursor-accent" data-cursor-text="Book a Call" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
                          <span className="loading-chars">Ruhan</span>
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
                {/* center group */}
                <div className="mxd-hero-10__center">
                  <div className="mxd-hero-10__divider"></div>
                  <div className="mxd-hero-10__data-wrap mxd-grid-item">
                    <div className="mxd-hero__mark loading-fade">
                      <span className="mark-icon"></span>
                      <span className="mark-text">Building what others only prototype</span>
                    </div>
                    <div className="mxd-hero-10__descr">
                      <p className="t-bold loading-split">I am Ruhan Asghar. <span>I ship production AI systems — zero fluff, zero vaporware. From drone swarms to SaaS platforms, if it doesn&apos;t run in prod, it doesn&apos;t count.</span></p>
                    </div>
                  </div>
                  <div className="mxd-hero-10__media mxd-grid-item loading-fade">
                    <img className="mxd-hero-10__image" src="/images/hero-video-poster.webp" alt="AI Technology Visualization" />
                    <div className="mxd-hero-10__video-btn">
                      <a className="btn btn-default-icon-small btn-default-permanent slide-right" href="#works">
                        <span className="btn-caption mxd-scramble">See Work</span>
                        <i className="btn-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                          </svg>
                        </i>
                      </a>
                    </div>
                    <div className="mxd-hero-10__video-info">
                      <div className="hero-10-video__name">
                        <a href="#works">Featured</a>
                      </div>
                      <div className="hero-10-video__tags">
                        <span className="tag tag-s tag-medium mxd-scramble">AI</span>
                        <span className="tag tag-s tag-medium mxd-scramble">Engineering</span>
                        <span className="tag tag-s tag-medium mxd-scramble">Product</span>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-hero-10__divider divider-bottom"></div>
                </div>
                {/* bottom group */}
                <div className="mxd-hero-10__bottom">
                  <div className="mxd-hero-10__dataline">
                    <div className="mxd-hero-10__socials mxd-grid-item">
                      <ul className="mxd-socials-line column">
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://github.com/ruhan-asghar" target="_blank">
                            <span className="mxd-scramble">Github</span>
                          </a>
                        </li>
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://www.linkedin.com/in/ruhan-asghar/" target="_blank">
                            <span className="mxd-scramble">LinkedIn</span>
                          </a>
                        </li>
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://www.facebook.com/ruhan.asghar.3/" target="_blank">
                            <span className="mxd-scramble">Facebook</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mxd-hero-10__controls mxd-grid-item loading-fade">
                      <a className="btn btn-line-icon btn-line-icon-small btn-line-default slide-down" href="#works">
                        <span className="btn-caption mxd-scramble">Scroll to explore</span>
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z" />
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pinned-section__trigger"></div>
          </div>
        </div>

        {/* Parallax Divider */}
        <div className="mxd-section blur-section">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-divider">
              <div className="mxd-divider__image parallax-img" style={{ backgroundImage: 'url(/images/divider-01.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '25vh' }}>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PROJECTS GRID ==================== */}
        <div id="works" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-default">
          <div className="pinned-section__inner">
            <div className="mxd-container grid-l-container">
              {/* Section Title */}
              <div className="mxd-block">
                <div className="mxd-section-title pre-grid">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item">
                        <div className="mxd-section-title__data top-number">
                          <div className="mxd-section-title__number anim-uni-in-up">
                            <span className="title-number mxd-scramble">W/01</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-1 mxd-grid-item"></div>
                      <div className="col-12 col-xl-7 mxd-grid-item">
                        <div className="mxd-section-title__title">
                          <a className="active-cursor-accent" data-cursor-text="All Works" href="#works">
                            <h2 className="mxd-split-lines">Featured case<br />studies</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="mxd-block">
                <div className="mxd-projects-grid">
                  <div className="container-fluid p-0">
                    {/* Row 1: Drone Swarm (small) + ScoreKick (large) */}
                    <div className="row g-0 mxd-projects-grid__gallery">
                      <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-2 mxd-project-item-s">
                        <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="View" href="#0">
                          <img className="mxd-img-anim__main" src="/images/project-drone-swarm.webp" alt="Drone Swarm Surveillance" />
                          <div className="mxd-cover mxd-cover-06"></div>
                        </a>
                        <div className="mxd-project-item__caption">
                          <div className="mxd-project-item__name">
                            <a className="project-name-s" href="#0">Drone Swarm Surveillance</a>
                          </div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-s tag-medium mxd-scramble">Defense</span>
                            <span className="tag tag-s tag-medium mxd-scramble">AI</span>
                            <span className="tag tag-s tag-medium mxd-scramble">IoT</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-1 mxd-project-divider"></div>
                      <div className="col-12 col-md-6 col-xl-7 mxd-project-item animate-card-2">
                        <a className="mxd-project-item__media active-cursor-permanent" data-cursor-text="View" href="#0">
                          <img src="/images/project-scorekick.webp" alt="ScoreKick FinTech Platform" />
                          <div className="mxd-cover mxd-cover-06"></div>
                        </a>
                        <div className="mxd-project-item__caption">
                          <div className="mxd-project-item__name">
                            <a className="project-name-s" href="#0">ScoreKick</a>
                          </div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-s tag-medium mxd-scramble">FinTech</span>
                            <span className="tag tag-s tag-medium mxd-scramble">Lead Scoring</span>
                            <span className="tag tag-s tag-medium mxd-scramble">SaaS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Row 2: Feedbird (large) + WWF Forest (small) */}
                    <div className="row g-0 mxd-projects-grid__gallery">
                      <div className="col-12 col-md-6 col-xl-7 mxd-project-item animate-card-2">
                        <a className="mxd-project-item__media active-cursor-permanent" data-cursor-text="View" href="#0">
                          <img src="/images/project-feedbird.webp" alt="Feedbird.io Content Platform" />
                          <div className="mxd-cover mxd-cover-03"></div>
                        </a>
                        <div className="mxd-project-item__caption">
                          <div className="mxd-project-item__name">
                            <a className="project-name-s" href="#0">Feedbird.io</a>
                          </div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-s tag-medium mxd-scramble">SaaS</span>
                            <span className="tag tag-s tag-medium mxd-scramble">Content AI</span>
                            <span className="tag tag-s tag-medium mxd-scramble">Automation</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-1 mxd-project-divider"></div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-2 mxd-project-item-s">
                        <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="View" href="#0">
                          <img className="mxd-img-anim__main" src="/images/project-wwf-forest.webp" alt="WWF Forest Monitoring" />
                          <div className="mxd-cover mxd-cover-03"></div>
                        </a>
                        <div className="mxd-project-item__caption">
                          <div className="mxd-project-item__name">
                            <a className="project-name-s" href="#0">WWF Forest Monitoring</a>
                          </div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-s tag-medium mxd-scramble">Computer Vision</span>
                            <span className="tag tag-s tag-medium mxd-scramble">Mobile</span>
                            <span className="tag tag-s tag-medium mxd-scramble">Field AI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pinned-section__trigger"></div>
          </div>
        </div>

        {/* Parallax Divider */}
        <div className="mxd-section blur-section">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-divider">
              <div className="mxd-divider__image parallax-img" style={{ backgroundImage: 'url(/images/divider-02.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '25vh' }}>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== STATISTICS SECTION ==================== */}
        <div className="mxd-section blur-section padding-top-number padding-bottom-tag-m">
          <div className="pinned-section__inner">
            <div className="mxd-container grid-l-container">
              <div className="mxd-block">
                <div className="mxd-section-title">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-3 col-xxl-4 mxd-grid-item">
                        <div className="mxd-section-title__data top-number">
                          <div className="mxd-section-title__number pre-manifest anim-uni-in-up">
                            <span className="title-number mxd-scramble">A/02</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-1 mxd-grid-item"></div>
                      <div className="col-12 col-xl-8 col-xxl-7 mxd-grid-item">
                        {/* Manifest */}
                        <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                          <a className="manifest manifest-s mxd-split-lines active-cursor-accent" data-cursor-text="About me" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                            I build AI systems that survive contact with reality.
                            <span> From military-grade drone swarms to FinTech platforms processing real money — every system ships with a written delivery guarantee.</span>
                          </a>
                        </div>

                        {/* Statistics Lines */}
                        <div className="mxd-stats-lines manifest-title">
                          <div className="mxd-stats-lines__item">
                            <div className="mxd-stats-lines__divider divider-top"></div>
                            <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                              <div className="mxd-stats-lines__number">
                                <p id="stats-counter-1">23+</p>
                              </div>
                              <div className="mxd-stats-lines__caption">
                                <p>Production systems shipped</p>
                              </div>
                            </div>
                          </div>
                          <div className="mxd-stats-lines__item">
                            <div className="mxd-stats-lines__divider divider-top"></div>
                            <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                              <div className="mxd-stats-lines__number">
                                <p id="stats-counter-2">4</p>
                              </div>
                              <div className="mxd-stats-lines__caption">
                                <p>Industries served across continents</p>
                              </div>
                            </div>
                          </div>
                          <div className="mxd-stats-lines__item">
                            <div className="mxd-stats-lines__divider divider-top"></div>
                            <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                              <div className="mxd-stats-lines__number">
                                <p id="stats-counter-3">10+</p>
                              </div>
                              <div className="mxd-stats-lines__caption">
                                <p>Years of engineering experience</p>
                              </div>
                            </div>
                          </div>
                          <div className="mxd-stats-lines__item">
                            <div className="mxd-stats-lines__divider divider-top"></div>
                            <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                              <div className="mxd-stats-lines__number">
                                <p id="stats-counter-4">3</p>
                              </div>
                              <div className="mxd-stats-lines__caption">
                                <p>Countries — Lahore, Dubai, Riyadh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pinned-section__trigger"></div>
          </div>
        </div>

        {/* CTA - After Stats */}
        <div className="mxd-section blur-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block" style={{ textAlign: 'center' }}>
              <a className="btn btn-default slide-right-up" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
                <span className="btn-caption mxd-scramble">Let&apos;s Build Together</span>
                <i className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== STICKY IMAGE CAROUSEL ==================== */}
        <div className="mxd-section">
          <div className="mxd-dv-sticky-img">
            <div className="mxd-dv-sticky-img__sticky">
              <div className="mxd-dv-sticky-img__progress"></div>
              <div className="mxd-dv-sticky-img__images">
                <div className="images__list">
                  <div className="images__listitem">
                    <div className="images__overflow">
                      <div className="mxd-cover mxd-cover-06"></div>
                      <img className="images__img" src="/images/sticky-strategy.webp" alt="Strategy" />
                    </div>
                  </div>
                  <div className="images__listitem">
                    <div className="images__overflow">
                      <div className="mxd-cover mxd-cover-06"></div>
                      <img className="images__img" src="/images/sticky-engineering.webp" alt="Engineering" />
                    </div>
                  </div>
                  <div className="images__listitem">
                    <div className="images__overflow">
                      <div className="mxd-cover mxd-cover-06"></div>
                      <img className="images__img" src="/images/sticky-delivery.webp" alt="Delivery" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-dv-sticky-img__content">
                <p className="mxd-dv-sticky-img__number">
                  <span className="number__current">01</span>
                  &nbsp;/&nbsp;
                  <span className="number__total">03</span>
                </p>
                <div className="mxd-dv-sticky-img__titlewrap">
                  <div className="mxd-dv-sticky-img__titlelist">
                    <div className="mxd-dv-sticky-img__titleitem">
                      <h2 className="permanent">Strategy</h2>
                    </div>
                    <div className="mxd-dv-sticky-img__titleitem">
                      <h2 className="permanent">Engineering</h2>
                    </div>
                    <div className="mxd-dv-sticky-img__titleitem">
                      <h2 className="permanent">Delivery</h2>
                    </div>
                  </div>
                </div>
                <div className="mxd-dv-sticky-img__btnholder">
                  <a className="btn btn-line btn-line-permanent" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                    <span className="btn-caption mxd-scramble">Process</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== EXPERTISE SECTION ==================== */}
        <div id="expertise" className="mxd-section blur-section padding-top-number padding-bottom-default">
          <div className="mxd-container grid-l-container">
            {/* Section Title */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-3 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <div className="mxd-section-title__number anim-uni-in-up">
                          <span className="title-number mxd-scramble">E/03</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-1 mxd-grid-item"></div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <h2 className="mxd-split-lines">My expertise</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capabilities List */}
            <div className="mxd-block">
              <div className="mxd-cpb-list mxd-perspective-list">
                {/* AI & Machine Learning */}
                <div className="mxd-cpb-list__item mxd-perspective-list__item">
                  <div className="mxd-cpb-list__divider top"></div>
                  <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                          <div className="mxd-cpb-list__number">
                            <span className="meta-tag">[01]</span>
                          </div>
                          <p className="mxd-cpb-list__name">AI & Machine Learning</p>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                          <img src="/images/expertise-ai.webp" alt="AI and Machine Learning" />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                          <div className="mxd-cpb-list__descr mxd-grid-item">
                            <p className="t-large t-bold">Production AI that works in the field, not just <span>in a Jupyter notebook.</span></p>
                          </div>
                          <div className="mxd-cpb-list__tags">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">Computer Vision</span>
                                  <span className="meta-tag mxd-scramble">Deep Learning</span>
                                </div>
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">LangChain</span>
                                  <span className="meta-tag mxd-scramble">TensorFlow</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-cpb-list__divider bottom"></div>
                </div>

                {/* Full-Stack Engineering */}
                <div className="mxd-cpb-list__item mxd-perspective-list__item">
                  <div className="mxd-cpb-list__divider top"></div>
                  <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                          <div className="mxd-cpb-list__number">
                            <span className="meta-tag">[02]</span>
                          </div>
                          <p className="mxd-cpb-list__name">Full-Stack Engineering</p>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                          <img src="/images/expertise-fullstack.webp" alt="Full-Stack Engineering" />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                          <div className="mxd-cpb-list__descr mxd-grid-item">
                            <p className="t-large t-bold">End-to-end systems built for scale — <span>from pixel to database to deploy.</span></p>
                          </div>
                          <div className="mxd-cpb-list__tags">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">Next.js</span>
                                  <span className="meta-tag mxd-scramble">Python</span>
                                  <span className="meta-tag mxd-scramble">Django</span>
                                </div>
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">PostgreSQL</span>
                                  <span className="meta-tag mxd-scramble">REST APIs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-cpb-list__divider bottom"></div>
                </div>

                {/* Product & SaaS */}
                <div className="mxd-cpb-list__item mxd-perspective-list__item">
                  <div className="mxd-cpb-list__divider top"></div>
                  <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                          <div className="mxd-cpb-list__number">
                            <span className="meta-tag">[03]</span>
                          </div>
                          <p className="mxd-cpb-list__name">Product & SaaS</p>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                          <img src="/images/expertise-product.webp" alt="Product and SaaS Building" />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                          <div className="mxd-cpb-list__descr mxd-grid-item">
                            <p className="t-large t-bold">From zero to revenue — <span>concept, build, launch, iterate.</span></p>
                          </div>
                          <div className="mxd-cpb-list__tags">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">ScoreKick</span>
                                  <span className="meta-tag mxd-scramble">Feedbird</span>
                                </div>
                                <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                  <span className="meta-tag mxd-scramble">Slim Simple AI</span>
                                  <span className="meta-tag mxd-scramble">Forwardlens</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-cpb-list__divider bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - After Expertise */}
        <div className="mxd-section blur-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block" style={{ textAlign: 'center' }}>
              <a className="btn btn-line btn-line-default slide-right-up anim-uni-in-up" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
                <span className="btn-caption mxd-scramble">Book a Free Strategy Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Parallax Divider */}
        <div className="mxd-section blur-section">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-divider">
              <div className="mxd-divider__image parallax-img" style={{ backgroundImage: 'url(/images/divider-03.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '25vh' }}>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== RESUME SECTION ==================== */}
        <div id="resume" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-default">
          <div className="pinned-section__inner">
            <div className="mxd-container grid-l-container">
              {/* Section Title */}
              <div className="mxd-block">
                <div className="mxd-section-title">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item">
                        <div className="mxd-section-title__data top-number">
                          <div className="mxd-section-title__number anim-uni-in-up">
                            <span className="title-number mxd-scramble">CV/04</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-8 mxd-grid-item">
                        <div className="mxd-section-title__title pre-caption-extra">
                          <h2 className="mxd-split-lines">My digital<br />journey</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-section-info">
                  <div className="container-fluid p-0">
                    <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                      <div className="col-12 col-xl-4 mxd-grid-item"></div>
                      <div className="col-12 col-xl-8 mxd-grid-item">
                        <div className="mxd-section-info__descr">
                          <p className="t-extra t-bold">
                            <span className="mxd-split-lines">From research labs to boardrooms, from writing models to managing teams across three countries. <span>Every role shaped the engineer and leader I am today.</span></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Subtitle */}
              <div className="mxd-block">
                <div className="mxd-section-subtitle padding-info-top">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item"> </div>
                      <div className="col-12 col-xl-8 mxd-grid-item">
                        <div className="mxd-section-subtitle__tagline">
                          <p className="anim-uni-in-up">
                            <span className="tag tag-m meta-tag">[01] Experience</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Items */}
              <div className="mxd-block">
                <div className="mxd-resume">
                  {/* HybridDot */}
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p>Co-Founder, Director & CTO</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-hybriddot.webp" alt="HybridDot" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p><a href="#0">HybridDot</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p>2024 - now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Diginet Global */}
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p className="anim-uni-in-up">Software Consultant & Advisor</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-diginet.webp" alt="Diginet Global" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p className="anim-uni-in-up"><a href="#0">Diginet Global</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p className="anim-uni-in-up">2023 - 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* XiSYS */}
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p className="anim-uni-in-up">Team Lead & Project Manager</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-xisys.webp" alt="XiSYS" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p className="anim-uni-in-up"><a href="#0">XiSYS</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p className="anim-uni-in-up">2021 - 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* LUMS */}
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p className="anim-uni-in-up">Senior AI Developer</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-lums.webp" alt="LUMS" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p className="anim-uni-in-up"><a href="#0">LUMS</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p className="anim-uni-in-up">2019 - 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Subtitle */}
              <div className="mxd-block">
                <div className="mxd-section-subtitle padding-default">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item"> </div>
                      <div className="col-12 col-xl-8 mxd-grid-item">
                        <div className="mxd-section-subtitle__tagline anim-uni-in-up">
                          <p className="anim-uni-in-up">
                            <span className="tag tag-m meta-tag">[02] Education</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Items */}
              <div className="mxd-block">
                <div className="mxd-resume">
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p className="anim-uni-in-up">MS, Computer Science</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-lums.webp" alt="LUMS" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p className="anim-uni-in-up"><a href="#0">LUMS</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p className="anim-uni-in-up">2018 - 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-resume__item">
                    <div className="container-fluid px-0 mxd-resume__inner">
                      <div className="row g-0">
                        <div className="col-12 col-xl-4 mxd-grid-item">
                          <div className="mxd-resume__title">
                            <p className="anim-uni-in-up">BS, Computer Science</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__image">
                            <img src="/images/resume-fast-nu.webp" alt="FAST NUCES" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item">
                          <div className="mxd-resume__link">
                            <p className="anim-uni-in-up"><a href="#0">NUCES (FAST)</a></p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item">
                          <div className="mxd-resume__date">
                            <p className="anim-uni-in-up">2012 - 2016</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toolbox Subtitle */}
              <div className="mxd-block">
                <div className="mxd-section-subtitle padding-default pre-grid-mobile">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item"></div>
                      <div className="col-12 col-xl-8 mxd-grid-item">
                        <div className="mxd-section-subtitle__tagline anim-uni-in-up">
                          <p className="anim-uni-in-up">
                            <span className="tag tag-m meta-tag">[03] Everyday&apos;s toolbox</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toolbox Grid */}
              <div className="mxd-block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item"></div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-toolbox">
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-python-color.svg" alt="Python" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>Python</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-typescript-color.svg" alt="TypeScript" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>TypeScript</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-tensorflow-color.svg" alt="TensorFlow" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>TensorFlow</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-nextjs-color.svg" alt="Next.js" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>Next.js</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-react-color.svg" alt="React" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>React</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-toolbox">
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-aws-color.svg" alt="AWS" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>AWS</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-openai-color.svg" alt="OpenAI" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>OpenAI</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-claude-color.svg" alt="Claude" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>Claude</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-postgresql-color.svg" alt="PostgreSQL" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>PostgreSQL</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                        <div className="mxd-toolbox__item">
                          <div className="mxd-toolbox__divider divider-top anim-uni-clip-in"></div>
                          <div className="mxd-toolbox__icon anim-uni-slide-down">
                            <img src="/img/tech/icon-cpp-color.svg" alt="C++" />
                          </div>
                          <div className="mxd-toolbox__name anim-uni-slide-down"><p>C++</p></div>
                          <div className="mxd-toolbox__divider divider-bottom anim-uni-clip-in"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pinned-section__trigger"></div>
          </div>
        </div>

        {/* CTA - After Resume */}
        <div className="mxd-section blur-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block" style={{ textAlign: 'center' }}>
              <div className="anim-uni-in-up" style={{ marginBottom: '2rem' }}>
                <p className="t-extra t-bold mxd-split-lines">Ready to ship something real?</p>
              </div>
              <a className="btn btn-default slide-right-up anim-uni-in-up" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
                <span className="btn-caption mxd-scramble">Schedule a Call</span>
                <i className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== CTA WITH MATTER.JS ==================== */}
        <div className="mxd-section blur-section">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-block">
              <div className="mxd-promo mxd-gravity-section accent">
                <div className="mxd-promo__wrap">
                  <div className="mxd-promo__objects object-container">
                    <div className="object object-image">
                      <img src="/images/gravity-01.webp" alt="AI Technology" />
                    </div>
                    <div className="object object-type"><p>AI</p></div>
                    <div className="object object-image">
                      <img src="/images/gravity-02.webp" alt="Drone Technology" />
                    </div>
                    <div className="object object-type"><p>SaaS</p></div>
                    <div className="object object-image">
                      <img src="/images/gravity-03.webp" alt="Data Visualization" />
                    </div>
                    <div className="object object-type"><p>Drones</p></div>
                    <div className="object object-image">
                      <img src="/images/gravity-04.webp" alt="Mobile App" />
                    </div>
                    <div className="object object-type"><p>FinTech</p></div>
                    <div className="object object-image">
                      <img src="/images/gravity-05.webp" alt="Global Network" />
                    </div>
                    <div className="object object-type"><p>Vision</p></div>
                    <div className="object object-image">
                      <img src="/images/gravity-06.webp" alt="Computer Vision" />
                    </div>
                    <div className="object object-type"><p>Apps</p></div>
                  </div>
                  <div className="mxd-promo__content">
                    <div className="mxd-promo__btngroup anim-uni-in-up">
                      <a className="btn btn-line btn-line-permanent" href="https://calendly.com/ruhan-asghar/ruhan-builds" target="_blank">
                        <span className="btn-caption mxd-scramble">Book a Call</span>
                      </a>
                    </div>
                    <div className="mxd-promo__caption">
                      <a className="active-cursor-permanent" data-cursor-text="Contact Me" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                        <h2 className="mxd-split-lines permanent">Let&apos;s talk about your project</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer id="mxd-footer" className="mxd-footer blur-section">
        <div className="mxd-container grid-l-container">
          {/* Footer Navigation */}
          <div className="mxd-block">
            <div className="mxd-footer__footer-blocks mxd-grid-item">
              <div className="footer-blocks__nav-v01">
                <ul className="footer-nav-v01">
                  <li className="footer-nav-v01__item">
                    <a className="anim-uni-slide-down" href="/">
                      <span className="mxd-scramble mxd-slide-down">Home</span>
                    </a>
                  </li>
                  <li className="footer-nav-v01__item">
                    <a className="anim-uni-slide-down" href="#works">
                      <span className="mxd-scramble mxd-slide-down">Projects</span>
                    </a>
                  </li>
                  <li className="footer-nav-v01__item">
                    <a className="anim-uni-slide-down" href="#expertise">
                      <span className="mxd-scramble mxd-slide-down">Expertise</span>
                    </a>
                  </li>
                  <li className="footer-nav-v01__item">
                    <a className="anim-uni-slide-down" href="#resume">
                      <span className="mxd-scramble mxd-slide-down">Resume</span>
                    </a>
                  </li>
                  <li className="footer-nav-v01__item">
                    <a className="anim-uni-slide-down" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                      <span className="mxd-scramble mxd-slide-down">Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mxd-block">
            <div className="mxd-footer__footer-blocks">
              <div className="footer-blocks__column mxd-grid-item justify-start">
                <div className="footer-blocks__data justify-start">
                  <p className="footer-data">
                    <a className="anim-uni-slide-down" href="https://calendly.com/ruhan-asghar/ruhan-builds">
                      <span className="mxd-scramble">ruhan.asghar@gmail.com</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-blocks__column mxd-grid-item justify-end">
                <div className="footer-blocks__data justify-end">
                  <p className="footer-data anim-uni-slide-down">
                    <span className="mxd-slide-down">&copy;2026</span>
                  </p>
                  <p className="footer-data anim-uni-slide-down">
                    <span className="mxd-slide-down">Ruhan Asghar. All rights reserved</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Big Text */}
          <div className="mxd-block">
            <div className="mxd-footer__fw-mark mxd-grid-item">
              <div className="fw-mark__wrap">
                <div className="fw-mark__content">
                  <span className="anim-uni-chars">Ruhan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mxd-block">
            <div className="mxd-footer__footer-blocks bottom-blocks">
              <div className="footer-blocks__column mxd-grid-item justify-start">
                <div className="footer-blocks__socials">
                  <ul className="mxd-socials-line anim-uni-fade-in">
                    <li>
                      <a className="mxd-socials-line__link" href="https://github.com/ruhan-asghar" target="_blank">
                        <span className="mxd-scramble">Github</span>
                      </a>
                    </li>
                    <li>
                      <a className="mxd-socials-line__link" href="https://www.linkedin.com/in/ruhan-asghar/" target="_blank">
                        <span className="mxd-scramble">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a className="mxd-socials-line__link" href="https://www.facebook.com/ruhan.asghar.3/" target="_blank">
                        <span className="mxd-scramble">Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-blocks__column mxd-grid-item justify-end">
                <div className="footer-blocks__controls anim-uni-fade-in">
                  <a id="to-top" className="btn btn-line-icon btn-line-default slide-up" href="#">
                    <span className="btn-caption mxd-scramble">Back to Top</span>
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                        <path d="M0,7.2h3.6v3.6H0V7.2z M10.8,3.6V0H7.2v3.6H3.6v3.6h3.6V18h3.6V7.2h3.6V3.6H10.8z M14.4,7.2v3.6H18V7.2H14.4z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
