import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => stopTimer();
  }, []);
  return (
    <div>
      <p>Hook timer - {timer}</p>
      <button type="button" onClick={() => stopTimer()}></button>
    </div>
  );
};

export default MutableRef;
