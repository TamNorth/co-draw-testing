import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(50, 0, 100, 100);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
