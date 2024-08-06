import React, { useEffect, useRef } from 'react';

const VantaBirds = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;
    if (vantaRef.current) {
      const VANTA = window.VANTA;
      effect = VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0
      });
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1 // Ensure the Vanta effect is in the background
      }}
    >
      {/* Your content can be placed here, or you can leave this div empty */}
    </div>
  );
};

export default VantaBirds;
