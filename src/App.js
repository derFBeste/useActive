import "./styles.css";
import useActive from "./useActive";

export default function App() {
  const { isActive, lastActiveTimeStamp } = useActive({
    inactiveThreshold: 5000
  });

  return (
    <div className="App">
      <h1>{isActive ? "user active" : "user inactive"}</h1>
      <h2>{lastActiveTimeStamp}</h2>
      <h2>active: {String(isActive)}</h2>
    </div>
  );
}
