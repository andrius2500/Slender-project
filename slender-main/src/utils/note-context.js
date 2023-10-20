import React, { createContext, useState } from "react";

export const NoteContext = createContext(null);

export const NoteCount = ({ children }) => {
  const [noteCount, setNoteCount] = useState(0);

  return (
    <NoteContext.Provider value={{ noteCount, setNoteCount }}>
      {children}
    </NoteContext.Provider>
  );
};
