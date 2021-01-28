import React, { useState } from "react";
import { Button } from 'antd';
export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Button onClick={() => setCounter(counter + 1)} type="primary">
        Clicked {counter} Times
    </Button>
      {children}
    </>
  )
}