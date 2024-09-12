// WidgetManagerContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create context
const WidgetManagerContext = createContext();

// Custom hook for using widget manager
export const useWidgetManager = () => useContext(WidgetManagerContext);

// WidgetManager provider component
export const WidgetManagerProvider = ({ children }) => {
  const [activeWidget, setActiveWidget] = useState('learningOptions');

  const switchWidget = (widgetName) => {
    setActiveWidget(widgetName);
  };

  return (
    <WidgetManagerContext.Provider value={{ activeWidget, switchWidget }}>
      {children}
    </WidgetManagerContext.Provider>
  );
};
