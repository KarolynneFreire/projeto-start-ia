import React, { useRef, useState } from 'react';

function DraggableComponent({ children }) {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (event) => {
    const newX = position.x + event.movementX;
    const newY = position.y + event.movementY;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      ref={elementRef}
      onMouseDown={(e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', handleDrag);
        });
      }}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
}

export default DraggableComponent;
