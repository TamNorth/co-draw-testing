import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const context = canvas.getContext("2d");

    const draw = (event) => {
      const rect = canvas.getBoundingClientRect();
      console.log(rect);
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      context.beginPath();
      context.arc(x, y, 10, 0, 2 * Math.PI);
      context.fillStyle = "green";
      context.fill();
    };

    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
