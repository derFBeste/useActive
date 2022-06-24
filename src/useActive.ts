import { useEffect, useState } from "react";
import useInterval from "./useInterval";

const fiveMinInMS = 300000;

export default function useActive({
  events = ["mousemove"],
  inactiveThreshold = fiveMinInMS
}): { isActive: boolean; lastActiveTimeStamp: number } {
  const [lastActiveTimeStamp, setlastActiveTimeStamp] = useState(null);
  const [isActive, setIsActive] = useState(true);

  function stampUserActiveTime() {
    setlastActiveTimeStamp(Date.now());
    setIsActive(true);
  }

  useEffect(() => {
    window.addEventListener("mousemove", stampUserActiveTime);

    return () => {
      window.removeEventListener("mousemove", stampUserActiveTime);
    };
  }, []);

  useInterval(() => {
    if (Date.now() - lastActiveTimeStamp > inactiveThreshold) {
      setIsActive(false);
    }
  }, inactiveThreshold);

  return {
    isActive,
    lastActiveTimeStamp
  };
}
