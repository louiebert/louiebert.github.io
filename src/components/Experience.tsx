import React from 'react';

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  ctaText?: string;
  ctaUrl?: string;
  className: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  shortDescription,
  longDescription,
  ctaText,
  ctaUrl,
  className,
}) => {
  return (
    <li className="card-li">
      <div className="card transition">
        <h2 className="cardh2 transition">{title}</h2>
        <p className="short transition">{shortDescription}</p>
        <p className={`long transition ${className}`}>{longDescription}</p>
        {ctaText && ctaUrl && (
          <div className={`cta-container transition ${className}`}>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              {ctaText}
            </a>
          </div>
        )}
        <div className={`card_circle transition ${className}`}></div>
      </div>
    </li>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap">
          <h1>Experience</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="sm:w-8/12 sm:mx-auto mx-4">
            <p>
              My experience in the field of Computer Science consists of about
              five years of mostly independent research. Until I arrived at
              Missouri S&T, I found it difficult to acquire a formal education
              in this incredible field, so I have spent a great deal of time
              teaching myself the ins and outs of programming. Some of the
              products this education has enabled me to do include:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap justify-center">
            <ProjectCard
              title="MinerBytes"
              shortDescription="Digital signage system for campus announcements and alerts"
              longDescription="A part-time job I hold on campus working for a branch of my school's IT department. I am the lead front-end developer and graphic designer for their MinerBytes project."
              ctaText="The Project"
              ctaUrl="https://minerbytes.mst.edu/"
              className="minerbytes"
            />
            <ProjectCard
              title="Miner Threat"
              shortDescription="Team website using React.js and Google Firebase"
              longDescription="It was my summer 2016 project to revamp S&T's Ultimate Frisbee team's website. The entire site is built on the React Javascript framework with Google's Firebase as a backend, and I used a Flickr API to import photo albums."
              ctaText="The Site"
              ctaUrl="https://www.minerthreatultimate.com/"
              className="miner_threat"
            />
            <ProjectCard
              title="CARFAX"
              shortDescription="Improving the lives of car dealers"
              longDescription="A summer 2016 internship with CARFAX gave me a plentiful amount of experience developing web apps with Java, Groovy, and React. I worked primarily on the front end, with an analytics dashboard being my most significant product."
              className="carfax"
            />
            <ProjectCard
              title="ChapterBuilder"
              shortDescription="A fantastic Greek recruitment product goes mobile"
              longDescription="Over the course of about five weeks in early 2015, I developed an iOS app for ChapterBuilder to be more available to upwards of a thousand clients."
              ctaText="The Product"
              ctaUrl="https://chapterbuilder.com/"
              className="chapterbuilder"
            />
            <ProjectCard
              title="FRC Scout"
              shortDescription="The renowned iPad app for scouting FIRST Robotics matches"
              longDescription="Three consecutive annual releases of FRC Scout, a renowned app used by the FIRST Robotics community to gather and share information at competitions on iPads, with one of these releases receiving the honor of being featured at Apple's 2014 World Wide Developer Conference."
              className="frc_scout"
            />
            <ProjectCard
              title="Cerner Android App"
              shortDescription="Cerner's first widely available public Android app"
              longDescription="During an internship in the summer of 2015, I built an Android app from scratch into version 1.0. This was to be Cerner's first big Android application and was in the final stages of development when my internship ended. Not sure how much else I'm cleared to disclose."
              className="cerner"
            />
            <ProjectCard
              title="Junior Robotics League"
              shortDescription="Impacted hundreds of young kids' lives through STEM"
              longDescription="For three years in a row, I helped put together the Junior Robotics League by designing a game and an efficient means of scoring the game on iPads for a totally electronic scorekeeping system."
              ctaText="The Impact"
              ctaUrl="http://jrl.teamdriven.us/"
              className="jrl"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Experience };
