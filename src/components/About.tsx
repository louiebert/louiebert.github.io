import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    const updateProfilePicHeight = () => {
      const aboutText = document.getElementById('about-text');
      const picContainerLg = document.getElementById('pic-container-lg');

      if (aboutText && picContainerLg) {
        picContainerLg.style.height = `${aboutText.offsetHeight}px`;
      }
    };

    // Set initial height
    updateProfilePicHeight();

    // Update on window resize
    const handleResize = () => {
      updateProfilePicHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="anchor" id="about"></div>
      <section className="section_title about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <div id="pic-container-sm">
              <div id="profile-pic"></div>
            </div>
            <div className="sm:w-7/12 w-full" id="about-text">
              <h1>About Louie</h1>
              <p>
                My name is Louie Bertoncin, and I am a senior majoring in Computer Science at the Missouri University of Science and Technology
                in Rolla, Missouri. I love developing with exciting new technologies and tackling difficult tasks.
                Some of my hobbies include playing Ultimate, making new friends, and reading. I'm normally involved
                in some sort of programming project, likely throwing myself into something I've never tried before.
                I live life in search of new challenges in order to improve myself and keep boredom at bay.
              </p>
            </div>
            <div className="sm:w-5/12 w-full" id="pic-container-lg">
              <div id="profile-pic"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { About };