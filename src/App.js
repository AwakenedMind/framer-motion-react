import * as React from "react";
import "./styles.css";
import { Animation } from "./components/Animation";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Animation key={count} />
    </div>
  );
}
