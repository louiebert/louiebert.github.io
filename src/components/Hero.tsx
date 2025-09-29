import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="h-screen pt-[15%] pb-[25%] mb-0 bg-cover bg-center" style={{backgroundImage: "url('images/billboard-lg.jpg')", letterSpacing: '4px'}}>
      <h1 className="name animated zoomInDown" id="titleName">Louie Bertoncin</h1>
    </div>
  );
};

export { Hero };