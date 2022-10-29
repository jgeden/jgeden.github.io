import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import {
  mdiCellphone,
  mdiEmail,
  mdiFileDocument,
  mdiGithub,
  mdiLinkedin,
} from "@mdi/js";

import Footer from "../components/Footer";
import TitleBar from "../components/TitleBar";

import headshot from "../images/headshot.jpg";

import berekelyLogo from "../images/berkeley-logo.png";
import mealmeLogo from "../images/mealme-logo.png";
import nasaLogo from "../images/nasa-logo.png";
import nerscLogo from "../images/nersc-logo.png";
import "../styles/main.css";

import text from "../data/text.json";

const anchors = ["home", "about", "experience", "projects"];
const isBrowser = () => typeof window !== "undefined";
const mobileViewWidth = 600;

const Project = (props) => {
  return (
    <div className="slide">
      <div className="m-auto w-4/5 max-w-[760px]">
        <div className="flex flex-row items-center">
          <h3 className="mb-3">{props.title}</h3>
          {props.link && (
            <a href={props.link} target="_blank" rel="noreferrer">
              <Icon
                path={mdiGithub}
                className="ml-3 mb-2 inline w-6 hover:bg-gray-600"
                aria-label="GitHub"
              />
            </a>
          )}
        </div>
        <p className="mb-3">{props.children}</p>
        <p>
          {text.projects.technologies[props.lang]}: {props.technologies}
        </p>
      </div>
    </div>
  );
};

const Head = () => {
  const currentHash =
    isBrowser() && window.location.hash.length > 0
      ? window.location.hash.substring(1)
      : "home";

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto Mono"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      />
      <title>&gt; joshgeden$ ./{currentHash}</title>
    </Helmet>
  );
};

const Body = (props) => (
  <ReactFullpage
    scrollingSpeed={1000}
    anchors={anchors}
    controlArrows={false}
    continuousVertical={true}
    slidesNavigation={true}
    onLeave={(origin, destination, direction) => {
      document.title = "> joshgeden$ ./" + anchors[destination.index];
    }}
    render={({ state, fullpageApi }) => {
      if (fullpageApi && isBrowser() && window.innerWidth > mobileViewWidth) {
        fullpageApi.setAllowScrolling(false);
      }

      return (
        <ReactFullpage.Wrapper>
          {/* home section */}
          <div className="section">
            <div className="text-center">
              <div className="mb-3">
                <h1 className="font-['Inter'] text-5xl font-bold">
                  {text.home.greeting[props.lang]}
                </h1>
              </div>
              <div>
                <p className="text-md mb-1">{text.home.summary[props.lang]}</p>
              </div>
              <div className="flex flex-row justify-center text-center">
                <a href="tel:18643733991" title="Phone">
                  <Icon
                    path={mdiCellphone}
                    className="icon"
                    aria-label="Phone"
                  />
                </a>
                <a href="mailto:joshgeden10@gmail.com" title="Email">
                  <Icon path={mdiEmail} className="icon" aria-label="email" />
                </a>
                <a
                  href="https://github.com/jgeden"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <Icon path={mdiGithub} className="icon" aria-label="GitHub" />
                </a>
                <a
                  href="https://linkedin.com/in/joshua-geden"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Icon
                    path={mdiLinkedin}
                    className="icon"
                    aria-label="LinkedIn"
                  />
                </a>
                <a
                  href="https://jgeden.github.io/resume/joshua_geden_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  title="Resume"
                >
                  <Icon
                    path={mdiFileDocument}
                    className="icon"
                    aria-label="Resume"
                  />
                </a>
              </div>
            </div>
            <Footer lang={props.lang} />
          </div>

          {/* about section */}
          <div className="section">
            <div className="m-auto flex h-screen w-[90%] max-w-[760px] flex-row items-center justify-center">
              <div>
                <img
                  src={headshot}
                  alt="headshot"
                  className="w-52 rounded-full"
                />
              </div>
              <ul className="ml-8 list-disc pl-2">
                <li className="mb-2">{text.about.uni[props.lang]}</li>
                <li className="mb-2">{text.about.hs[props.lang]}</li>
                <li className="mb-2">{text.about.fun_fact[props.lang]}</li>
              </ul>
            </div>
          </div>

          {/* experience section */}
          <div className="section">
            <div className="m-auto flex h-screen w-[85%] max-w-[760px] flex-col items-center justify-center space-y-6 md:w-[75%] md:flex-row md:space-x-2">
              <ul className="m-0 list-disc pl-2">
                <li className="mb-3">
                  <p>{text.experience.nersc[props.lang]}</p>
                </li>
                <li className="mb-3">
                  <p>{text.experience.mealme[props.lang]}</p>
                </li>
                <li className="mb-3">
                  <p>{text.experience.berkeley[props.lang]}</p>
                </li>
                <li className="mb-3">
                  <p>{text.experience.jpl[props.lang]}</p>
                </li>
                <li>
                  <p>
                    {text.experience.resume[props.lang].split("<a>")[0]}
                    <a
                      className="text-center text-gray-300 underline"
                      href="https://jgeden.github.io/resume/joshua_geden_resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text.experience.resume[props.lang].split("<a>")[1]}
                    </a>
                    {text.experience.resume[props.lang].split("<a>")[2]}
                  </p>
                </li>
              </ul>
              {/* Logos */}
              <div className="m-0 flex flex-row space-x-4 md:flex-col md:space-x-0">
                <a
                  href="https://www.nersc.gov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={nerscLogo}
                    alt="NERSC Logo"
                    aria-label="NERSC Logo"
                    className="about-img"
                  />
                </a>
                <a href="https://mealme.ai" target="_blank" rel="noreferrer">
                  <img
                    src={mealmeLogo}
                    alt="MealMe Logo"
                    aria-label="MealMe Logo"
                    className="about-img"
                  />
                </a>
                <a href="https://www.lbl.gov/" target="_blank" rel="noreferrer">
                  <img
                    src={berekelyLogo}
                    alt="Berkeley Lab Logo"
                    aria-label="Berkeley Lab Logo"
                    className="about-img"
                  />
                </a>
                <a
                  href="https://europa.nasa.gov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={nasaLogo}
                    alt="Berkeley Lab Logo"
                    aria-label="NASA JPL Logo"
                    className="about-img"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* projects section */}
          <div className="section">
            <Project
              title="regvue"
              link="https://jgeden.github.io/regvue-final-report/regvue-final-report.html"
              technologies="Vue, Tauri, Typescript, Rust, Tailwind CSS, Cypress, Docker"
              lang={props.lang}
            >
              {text.projects.regvue[props.lang]}
            </Project>
            <Project
              title="GroupDuke"
              link="https://github.com/jgeden/GroupDuke"
              technologies="Typescript, Go, Firebase, Redis"
              lang={props.lang}
            >
              {text.projects.group_duke[props.lang]}
            </Project>
            <Project
              title="JupyterHub Entrypoint Service"
              link="https://github.com/NERSC/jupyterhub-entrypoint"
              technologies="Jupyter, Javascript, Python, REST API, Selenium, CI/CD with GitHub Actions"
              lang={props.lang}
            >
              {text.projects.entrypoint[props.lang]}
            </Project>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 100);

  const langs = ["en", "de"];
  const [lang, setLang] = useState(langs[0]);

  const changeLanguage = () => {
    setLang(langs[(langs.indexOf(lang) + 1) % langs.length]);
  };

  return (
    <>
      {!loading && (
        <>
          <Head lang={lang} />
          <TitleBar lang={lang} changeLanguage={changeLanguage} />
          <Body lang={lang} />
        </>
      )}
    </>
  );
};

export default IndexPage;
