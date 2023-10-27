import React, { createContext, useState } from "react";

export const NoteContext = createContext(null);

export const NoteCount = ({ children }) => {
  const [noteStatus, setNoteCount] = useState({
    count: 0,
    position: {
      basement: false,
      campsite: false,
      cave: false,
    },
  });

  return (
    <NoteContext.Provider value={{ noteStatus, setNoteCount }}>
      {children}
    </NoteContext.Provider>
  );
};
