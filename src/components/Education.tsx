import React from 'react';

const TechBadge: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

const Education: React.FC = () => {
  const techBadges = [
    { src: "images/react_badge.png", alt: "React" },
    { src: "images/java_badge.png", alt: "Java" },
    { src: "images/sass_badge.png", alt: "Sass" },
    { src: "images/swift_badge.png", alt: "Swift" },
    { src: "images/objective_c_badge.png", alt: "Objective-C" },
    { src: "images/c++_badge.png", alt: "C++" },
    { src: "images/python_badge.png", alt: "Python" },
    { src: "images/sql_badge.png", alt: "SQL" },
    { src: "images/html_css_badge.png", alt: "HTML/CSS" }
  ];

  return (
    <>
      <div className="anchor" id="education"></div>
      <section className="section_title education">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <h1>Education</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="sm:w-8/12 sm:mx-auto mx-4">
              <p>
                I first started learning how to program through FIRST Robotics while attending Lee's Summit High School. My senior year there,
                I participated in Cerner's school work program for two hours of every school day, working in conjunction
                with a team of professional engineers. I then moved on to the Missouri University of Science and
                Technology, where I am currently studying. I am majoring in Computer Science (junior), have taken
                several classes including Databases, Algorithms, Data Structures, and a handful of C++ based classes.
                I consider myself confidently fluent in React.js, Java, Groovy, Sass, Swift, Objective-C, C++, Python,
                SQL, and HTML/CSS.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <ul className="flex flex-wrap justify-center gap-4">
              {techBadges.map((badge, index) => (
                <TechBadge key={index} src={badge.src} alt={badge.alt} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export { Education };