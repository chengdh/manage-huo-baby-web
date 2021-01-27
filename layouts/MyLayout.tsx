import React, { useState } from "react";

export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>      
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>

      {children}
    </>
  )
}