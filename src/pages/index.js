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
        <p>Technologies: {props.technologies}</p>
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

const Body = () => (
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
                  Hi, I'm Josh
                </h1>
              </div>
              <div>
                <p className="text-md mb-1">cs @ duke | swe @ nasa jpl</p>
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
            <Footer />
          </div>

          {/* about section */}
          <div className="section">
            <div className="m-auto flex w-3/4 max-w-[760px] flex-row items-center justify-center">
              <div>
                <img
                  src={headshot}
                  alt="headshot"
                  className="w-52 rounded-full"
                />
              </div>
              <ul className="ml-8 list-disc pl-2">
                <li className="mb-2">
                  I am a rising senior at Duke pursuing a B.S. in Computer
                  Science and a B.A. in German Studies.
                </li>
                <li className="mb-2">
                  I was born and raised in Greenville, SC and graduated from our
                  state's unique public residential STEM school, SCGSSM.
                </li>
                <li className="mb-2">
                  I love to learn languages! I've taken 3 years of German, a
                  semester of Russian, and am starting Italian courses soon.
                </li>
              </ul>
            </div>
          </div>

          {/* experience section */}
          <div className="section">
            <div className="m-auto flex w-3/4 max-w-[760px] flex-row items-center justify-center">
              <ul className="m-0 list-disc pl-2">
                <li className="mb-3">
                  <p>
                    I created Jupyter extensions to make supercomputing at NERSC
                    more user friendly.
                  </p>
                </li>
                <li className="mb-3">
                  <p>
                    I improved customer support tools at MealMe, a startup
                    building the new search engine for food.
                  </p>
                </li>
                <li className="mb-3">
                  <p>
                    I added new data analysis modules and features to a
                    scientific data pipeline at Berkeley National Lab.
                  </p>
                </li>
                <li className="mb-3">
                  <p>
                    I'm currently developing hardware-software interface tools
                    at NASA JPL to make building spacecraft easier.
                  </p>
                </li>
                <li>
                  <p>
                    View my resume{" "}
                    <a
                      className="text-center text-gray-300 underline"
                      href="https://jgeden.github.io/resume/joshua_geden_resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>{" "}
                    for some more details
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
              technologies="Vue, Tauri, Typescript, Rust, Tailwind CSS, Cypress, Docker"
            >
              I'm currently building a register documentation tool at NASA JPL
              for use in the Europa Clipper and Mars Sample Return missions.
              This project provides web and desktop applications that can
              display design description files as a full documentation site with
              advanced search, bit encoding/decoding, and bit diffing features.
            </Project>
            <Project
              title="GroupDuke"
              link="https://github.com/jgeden/GroupDuke"
              technologies="Typescript, Go, Firebase, Redis"
            >
              I created a full-stack web app to help Duke students find course
              GroupMe chats. I built a reactive, multi-page frontend with
              SvelteKit and used Fiber, an Express-inspired framework for Go, to
              implement automatic email registration, user auth, and firebase
              integration.
            </Project>
            <Project
              title="JupyterHub Entrypoint Service"
              link="https://github.com/NERSC/jupyterhub-entrypoint"
              technologies="Jupyter, Javascript, Python, REST API, Selenium, CI/CD with GitHub Actions"
            >
              I prototyped a full-stack extension service for JupyterHub that
              enables launching Jupyter notebooks in virtual environments or
              containers. This service is currently in use on NERSC's Perlmutter
              supercomputer, the 5th most powerful computer in the world.
            </Project>
            <Project
              title="SimplyFrank"
              link="https://github.com/jgeden/SimplyFrank"
              technologies="C++, Assembly, Compilers, Interpreters"
            >
              SimplyFrank holds a special place in my heart as my first "big"
              computer science project. A partner and I spent a month and a half
              designing and implementing our own programming language called
              SimplyFrank. We wrote a compiler that compiles SimplyFrank into
              SML (Simpletron Machine Language). We also wrote an interpreter
              that was able to execute SML code through C++.
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

  return (
    <>
      {!loading && (
        <>
          <Head />
          <TitleBar />
          <Body />
        </>
      )}
    </>
  );
};

export default IndexPage;
