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
    <section
      id="about"
      className="bg-gradient-to-b flex justify-center p-8 from-about-gradient-from to-about-gradient-to text-center sm:text-left"
    >
      <div className="flex max-w-4xl sm:flex-row sm:justify-between justify-center flex-col items-center gap-8 ">
        <div
          className="sm:order-2 shrink-0 sm:size-48 size-32 relative rounded-full bg-center bg-cover"
          style={{ backgroundImage: "url('../images/profile-pic.jpg')" }}
        />
        <div className=" w-full" id="about-text">
          <h1>About Louie</h1>
          <p>
            My name is Louie Bertoncin, and I am a senior majoring in Computer
            Science at the Missouri University of Science and Technology in
            Rolla, Missouri. I love developing with exciting new technologies
            and tackling difficult tasks. Some of my hobbies include playing
            Ultimate, making new friends, and reading. I'm normally involved in
            some sort of programming project, likely throwing myself into
            something I've never tried before. I live life in search of new
            challenges in order to improve myself and keep boredom at bay.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
