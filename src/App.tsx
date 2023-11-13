import { useState } from "react";
import "./App.css";
import { Button, Input, Label } from "../dist/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>hi there</Button>
      <Input></Input>
      <Label> sample lable</Label>
    </>
  );
}

export default App;
