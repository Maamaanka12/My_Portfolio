import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { siGithub } from 'simple-icons';
import heroImage from '../assets/hero/hero.jpg';
import {
  heroContent,
  personalInfo,
  socialLinks,
} from '../data/portfolioData';

const typewriterTitles = heroContent.rotatingTitles;

const mailIconPath =
  'M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11zm2.2.5l6.8 5.1 6.8-5.1H5.2zm14.3 2.1l-6.9 5.2a1 1 0 01-1.2 0L4.5 9.1v8.4h15V9.1z';

const heroSocials = [
  { label: 'GitHub', href: socialLinks.github, icon: siGithub },
  {
    label: 'Email',
    href: personalInfo.email ? `mailto:${personalInfo.email}` : null,
    icon: { path: mailIconPath },
  },
].filter((social) => social.href);

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeAvailable, setResumeAvailable] = useState(null);

  /* -------------------------------------------------------
     AOS INIT
     Initializes scroll animations for the whole site.
  ------------------------------------------------------- */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      disable: false,
    });
  }, []);

  /* -------------------------------------------------------
     RESUME MODAL
  ------------------------------------------------------- */
  useEffect(() => {
    if (!resumeOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setResumeOpen(false);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    window.addEventListener(
      'keydown',
      closeOnEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        closeOnEscape
      );
    };
  }, [resumeOpen]);

  /* -------------------------------------------------------
     CHECK RESUME FILE
  ------------------------------------------------------- */
  useEffect(() => {
    if (!resumeOpen) return undefined;

    let cancelled = false;

    fetch(heroContent.ctaResume.href, {
      method: 'HEAD',
    })
      .then((response) => {
        const contentType =
          response.headers.get('content-type') || '';

        if (!cancelled) {
          setResumeAvailable(
            response.ok &&
              contentType.includes('application/pdf')
          );
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResumeAvailable(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [resumeOpen]);

  /* -------------------------------------------------------
     TYPEWRITER
  ------------------------------------------------------- */
  useEffect(() => {
    let titleIndex = 0;
    let characterIndex = 0;
    let phase = 'typing';
    let timerId;

    const tick = () => {
      const currentTitle =
        typewriterTitles[titleIndex];

      if (phase === 'typing') {
        characterIndex += 1;

        setTypedTitle(
          currentTitle.slice(
            0,
            characterIndex
          )
        );

        if (
          characterIndex ===
          currentTitle.length
        ) {
          phase = 'pause';
        }

        timerId = window.setTimeout(
          tick,
          phase === 'pause' ? 1800 : 70
        );

        return;
      }

      if (phase === 'pause') {
        phase = 'deleting';

        timerId = window.setTimeout(
          tick,
          45
        );

        return;
      }

      if (phase === 'deleting') {
        characterIndex -= 1;

        setTypedTitle(
          currentTitle.slice(
            0,
            characterIndex
          )
        );

        if (characterIndex === 0) {
          phase = 'gap';
        }

        timerId = window.setTimeout(
          tick,
          phase === 'gap' ? 300 : 45
        );

        return;
      }

      titleIndex =
        (titleIndex + 1) %
        typewriterTitles.length;

      characterIndex = 0;
      phase = 'typing';

      timerId = window.setTimeout(
        tick,
        300
      );
    };

    timerId = window.setTimeout(
      tick,
      70
    );

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  return (
    <section
      className="
        hero-surface
        relative
        grid
        min-h-[720px]
        w-full
        overflow-hidden
        bg-[#f6f5f2]
        px-5
        pb-16
        pt-28
        sm:px-8
        md:min-h-[760px]
        md:px-12
        md:pb-24
        md:pt-36
        lg:grid-cols-[0.9fr_1.1fr]
        lg:items-center
        lg:gap-14
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-12rem]
          top-16
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-amber-700/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-10rem]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-slate-400/10
          blur-3xl
        "
      />

      {/* =====================================================
          TV VIDEO
      ===================================================== */}
      <div
        className="
          hero-reel-frame
          relative
          z-10
          order-2
          mx-auto
          mt-8
          w-full
          max-w-[1000px]
          transition-transform
          duration-700
          ease-out
          hover:-translate-y-1
          lg:col-start-2
          lg:row-start-1
          lg:mt-0
        "
      >

        {/* TV OUTER BODY */}
        <div
          className="
            relative
            mx-auto
            rounded-[2.2rem]
            border
            border-slate-800/80
            bg-[#151922]
            p-3
            shadow-[0_35px_90px_rgba(15,23,42,0.28)]
            transition-all
            duration-700
            hover:shadow-[0_45px_110px_rgba(15,23,42,0.34)]
            sm:p-4
            md:rounded-[2.6rem]
            md:p-5
          "
        >

          {/* TV TOP HIGHLIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-10
              top-1
              h-px
              bg-white/20
            "
          />

          {/* TV BRAND / DECORATION */}
          <div
            className="
              pointer-events-none
              absolute
              left-7
              top-5
              flex
              items-center
              gap-2
              md:left-9
              md:top-7
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-400
                shadow-[0_0_12px_rgba(251,191,36,0.7)]
              "
            />

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-white/40
                sm:text-[8px]
              "
            >
              {personalInfo.brandName}
            </span>
          </div>

          {/* TV POWER LED */}
          <div
            className="
              pointer-events-none
              absolute
              right-7
              top-5
              flex
              items-center
              gap-1.5
              md:right-9
              md:top-7
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-400
                shadow-[0_0_10px_rgba(251,191,36,0.75)]
              "
            />

            <span
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              ON
            </span>
          </div>

          {/* TV SCREEN BEZEL */}
          <div
            className="
              relative
              mt-5
              overflow-hidden
              rounded-[1.55rem]
              border
              border-black/60
              bg-black
              p-1.5
              shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_45px_rgba(0,0,0,0.9)]
              sm:mt-6
              sm:p-2
              md:rounded-[1.8rem]
            "
          >

            {/* INNER SCREEN */}
            <div
              className="
                hero-reel-screen
                relative
                overflow-hidden
                rounded-[1.2rem]
                border
                border-white/10
                bg-slate-950
                shadow-[inset_0_0_35px_rgba(0,0,0,0.8)]
                sm:rounded-[1.4rem]
              "
            >

              {/* SCREEN GLASS */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-br
                  from-white/[0.10]
                  via-transparent
                  to-black/20
                "
              />

              {/* SUBTLE SCREEN VIGNETTE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  shadow-[inset_0_0_45px_rgba(0,0,0,0.55)]
                "
              />

              {/* SCREEN IMAGE */}
              <img
                src={heroImage}
                alt={`${personalInfo.name} — portrait`}
                className="
                  relative
                  z-0
                  block
                  aspect-[4/3]
                  w-full
                  object-contain
                  bg-black
                  brightness-[0.92]
                  saturate-[0.94]
                  transition-transform
                  duration-700
                "
              />

              {/* SCREEN REFLECTION */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  z-30
                  h-1/3
                  bg-gradient-to-b
                  from-white/[0.06]
                  to-transparent
                "
              />

            </div>
          </div>

          {/* TV SPEAKER AREA */}
          <div
            className="
              mx-auto
              mt-3
              flex
              items-center
              justify-center
              gap-1
              opacity-60
              sm:mt-4
            "
            aria-hidden="true"
          >
            {Array.from({ length: 13 }).map(
              (_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-white/20
                  "
                />
              )
            )}
          </div>

          {/* TV CONTROL LINE */}
          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              sm:mt-3
            "
            aria-hidden="true"
          >
            <span
              className="
                h-1
                w-8
                rounded-full
                bg-white/10
              "
            />

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-amber-400/60
              "
            />

            <span
              className="
                h-1
                w-8
                rounded-full
                bg-white/10
              "
            />
          </div>

        </div>

        {/* TV FEET */}
        <div
          className="
            pointer-events-none
            relative
            mx-auto
            flex
            w-[78%]
            items-start
            justify-between
            px-4
          "
          aria-hidden="true"
        >
          <div
            className="
              h-5
              w-20
              -rotate-[12deg]
              rounded-b-xl
              bg-[#11151d]
              shadow-[0_10px_18px_rgba(15,23,42,0.18)]
              sm:h-6
              sm:w-24
            "
          />

          <div
            className="
              h-5
              w-20
              rotate-[12deg]
              rounded-b-xl
              bg-[#11151d]
              shadow-[0_10px_18px_rgba(15,23,42,0.18)]
              sm:h-6
              sm:w-24
            "
          />
        </div>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-20
          order-1
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-start
          justify-center
          text-left
          lg:col-start-1
          lg:row-start-1
        "
      >

        <div
          className="
            flex
            w-full
            max-w-2xl
            flex-col
            items-start
            text-left
          "
        >

          {/* MAIN HEADING */}
          <h1
            data-aos="fade-up"
            className="
              max-w-3xl
              text-4xl
              font-black
              leading-[0.98]
              tracking-[-0.045em]
              text-slate-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {heroContent.greeting},{' '}

            <br />

            <span
              className="
                relative
                block
                min-h-[1.2em]
                w-full
                max-w-[22ch]
              "
            >
              <span
                className="
                  hero-title-cycle
                  block
                  text-slate-900
                "
              >
                {typedTitle}

                <span
                  className="hero-typewriter-caret"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          {/* SUBHEADING */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              mb-8
              mt-6
              max-w-xl
              text-base
              font-medium
              leading-[1.8]
              text-slate-600
              md:text-lg
            "
          >
            {heroContent.subtitle}
          </p>

          {/* CTA BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="
              flex
              w-full
              flex-row
              flex-wrap
              items-center
              gap-3
            "
          >

            {/* PRIMARY */}
            <a
              href={heroContent.ctaPrimary.href}
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-slate-900
                px-6
                text-sm
                font-bold
                text-white
                shadow-[0_12px_28px_rgba(15,23,42,0.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-amber-700
                hover:shadow-[0_16px_32px_rgba(180,83,9,0.20)]
                sm:w-[170px]
              "
            >
              {heroContent.ctaPrimary.text}

              <svg
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </a>

            {/* SECONDARY */}
            <a
              href={heroContent.ctaSecondary.href}
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white/80
                px-6
                text-sm
                font-bold
                text-slate-800
                shadow-sm
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-900
                hover:bg-white
                hover:shadow-md
                sm:w-[170px]
              "
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* RESUME */}
            <a
              href={heroContent.ctaResume.href}
              onClick={(event) => {
                event.preventDefault();
                setResumeAvailable(null);
                setResumeOpen(true);
              }}
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-300
                bg-transparent
                px-6
                text-sm
                font-bold
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-700
                hover:bg-white
                hover:text-amber-700
                sm:w-[170px]
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>

              {heroContent.ctaResume.text}
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-3
              sm:justify-start
            "
            aria-label="Social links"
          >
            {heroSocials.map(
              ({ label, href, icon }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={
                    href && href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    href && href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={label}
                  aria-disabled={!href}
                  tabIndex={
                    href ? 0 : -1
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    text-slate-700
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:border-amber-700
                    hover:text-amber-700
                    hover:shadow-md
                  "
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              )
            )}
          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          pointer-events-none
          md:block
        "
      >
        <div className="animate-bounce">
          <svg
            className="
              h-6
              w-6
              text-slate-900/70
            "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* =====================================================
          RESUME MODAL
      ===================================================== */}
      {resumeOpen && (
        <div
          className="
            resume-viewer-backdrop
            fixed
            inset-0
            z-[100]
          "
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setResumeOpen(false);
            }
          }}
        >
          <div
            className="
              resume-viewer
              relative
            "
            role="dialog"
            aria-modal="true"
            aria-label="Resume viewer"
          >

            {/* MODAL TOOLBAR */}
            <div className="resume-viewer-toolbar">

              <span className="resume-viewer-title">
                {personalInfo.brandName} / RESUME
              </span>

              <div className="resume-viewer-actions">

                <a
                  href={
                    resumeAvailable
                      ? heroContent.ctaResume.href
                      : undefined
                  }
                  download={
                    resumeAvailable || undefined
                  }
                  className={`
                    resume-viewer-action
                    ${
                      resumeAvailable === false
                        ? 'resume-viewer-action-disabled'
                        : ''
                    }
                  `}
                >
                  Download
                </a>

                <a
                  href={
                    resumeAvailable
                      ? heroContent.ctaResume.href
                      : undefined
                  }
                  target={
                    resumeAvailable
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    resumeAvailable
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={`
                    resume-viewer-action
                    ${
                      resumeAvailable === false
                        ? 'resume-viewer-action-disabled'
                        : ''
                    }
                  `}
                >
                  New tab
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setResumeOpen(false)
                  }
                  className="
                    resume-viewer-close
                  "
                  aria-label="Close resume viewer"
                >
                  &#10005;
                </button>

              </div>
            </div>

            {/* DOCUMENT */}
            <div
              className="
                resume-viewer-document
              "
            >

              {resumeAvailable === true ? (
                <iframe
                  title={`${personalInfo.name} resume`}
                  src={
                    heroContent.ctaResume.href
                  }
                />
              ) : resumeAvailable === false ? (
                <div
                  className="
                    resume-viewer-unavailable
                  "
                >
                  <strong>
                    Resume PDF not available yet.
                  </strong>

                  <span>
                    Add the existing CV file at{' '}
                    <code>
                      {personalInfo.resumeUrl}
                    </code>{' '}
                    to enable the preview.
                  </span>
                </div>
              ) : (
                <div
                  className="
                    resume-viewer-loading
                  "
                >
                  Checking resume file...
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
