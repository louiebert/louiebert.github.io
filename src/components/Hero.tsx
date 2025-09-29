import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="h-screen flex items-center justify-center mb-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('images/billboard-lg.jpg')",
        letterSpacing: '4px',
      }}
    >
      <h1
        className="text-white text-center font-thin text-[98px] text-shadow-md animate-zoom-in-down"
        id="titleName"
      >
        Louie Bertoncin
      </h1>
    </div>
  );
};

export { Hero };
