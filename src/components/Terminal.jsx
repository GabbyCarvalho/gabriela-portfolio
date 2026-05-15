import { useEffect, useRef } from "react";
import "./Terminal.css";

export default function Terminal() {
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const l4 = useRef(null);
  const l5 = useRef(null);
  const bar = useRef(null);
  const pct = useRef(null);

  useEffect(() => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const show = (ref) => ref.current?.classList.add("visible");

    async function animate() {
      await delay(400);
      show(l1);
      await delay(500);
      show(l2);
      await delay(500);
      show(l3);
      await delay(500);
      show(l4);

      for (let i = 0; i <= 10; i++) {
        if (bar.current) bar.current.textContent = "█".repeat(i) + "░".repeat(10 - i);
        if (pct.current) pct.current.textContent = i * 10 + "%";
        await delay(120);
      }

      await delay(300);
      show(l5);
    }

    animate();
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
        <span className="terminal-title">gabby@portfolio ~ </span>
      </div>
      <div className="terminal-body">
        <div className="line" ref={l1}>
          <span className="prompt">&gt; </span>
          <span className="value-name">Gabby Carvalho</span>
        </div>
        <div className="line" ref={l2}>
          <span className="prompt">&gt; </span>
          <span className="value-role">Frontend Developer</span>
        </div>
        <div className="line" ref={l3}>
          <span className="prompt">&gt; </span>
          <span className="value-stack">React · JavaScript · CSS</span>
        </div>
        <div className="line" ref={l4}>
          <span className="prompt">&gt; </span>
          Loading creativity...{" "}
          <span className="bar-fill" ref={bar}>░░░░░░░░░░</span>{" "}
          <span ref={pct}>0%</span>
        </div>
        <div className="line" ref={l5}>
          <span className="prompt">&gt; </span>
          <span className="value-status">Ready to build something beautiful ✓</span>
        </div>
        <div className="line visible">
          <span className="prompt">&gt; </span>
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
