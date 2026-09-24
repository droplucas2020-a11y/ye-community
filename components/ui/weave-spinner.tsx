import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type WeaveSpinnerProps = {
  className?: string;
  color?: string;
  size?: number;
};

export function WeaveSpinner({
  className,
  color = "#ffaa00",
  size = 160,
}: WeaveSpinnerProps) {
  const style = {
    "--weave-color": color,
    "--weave-size": `${size}px`,
  } as CSSProperties;

  return (
    <div
      className={cn("weave-spinner-wrapper", className)}
      style={style}
      role="status"
      aria-label="Carregando a experiência"
    >
      <style>{`
        .weave-spinner-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .weave-spinner-container {
          position: relative;
          width: var(--weave-size);
          height: var(--weave-size);
          transform-style: preserve-3d;
          perspective: 1200px;
        }

        .weave-spinner-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: var(--weave-color);
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px var(--weave-color), 0 0 40px color-mix(in srgb, var(--weave-color) 60%, transparent);
          animation: weave-node-pulse 1.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }

        .weave-spinner-thread {
          position: absolute;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--weave-color) 80%, transparent), transparent);
          box-shadow: 0 0 10px color-mix(in srgb, var(--weave-color) 50%, transparent);
          transform-origin: center;
        }

        .weave-spinner-t1 {
          top: 30%;
          left: 0;
          width: 100%;
          height: 2px;
          animation: weave-thread-one 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .weave-spinner-t2 {
          top: 0;
          left: 70%;
          width: 2px;
          height: 100%;
          animation: weave-thread-two 2.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }

        .weave-spinner-t3 {
          bottom: 30%;
          left: 0;
          width: 100%;
          height: 2px;
          animation: weave-thread-three 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }

        .weave-spinner-t4 {
          top: 0;
          left: 30%;
          width: 2px;
          height: 100%;
          animation: weave-thread-four 2.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
        }

        @keyframes weave-node-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.4); }
        }

        @keyframes weave-thread-one {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateZ(0deg); opacity: .8; }
          50% { transform: translateY(40px) rotateX(60deg) rotateZ(20deg); opacity: 1; }
        }

        @keyframes weave-thread-two {
          0%, 100% { transform: translateX(0) rotateY(0deg) rotateZ(0deg); opacity: .8; }
          50% { transform: translateX(-40px) rotateY(60deg) rotateZ(-20deg); opacity: 1; }
        }

        @keyframes weave-thread-three {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateZ(0deg); opacity: .8; }
          50% { transform: translateY(-40px) rotateX(-60deg) rotateZ(15deg); opacity: 1; }
        }

        @keyframes weave-thread-four {
          0%, 100% { transform: translateX(0) rotateY(0deg) rotateZ(0deg); opacity: .8; }
          50% { transform: translateX(40px) rotateY(-60deg) rotateZ(-15deg); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .weave-spinner-node,
          .weave-spinner-thread { animation-duration: 8s; }
        }
      `}</style>

      <div className="weave-spinner-container" aria-hidden="true">
        <div className="weave-spinner-thread weave-spinner-t1" />
        <div className="weave-spinner-thread weave-spinner-t2" />
        <div className="weave-spinner-thread weave-spinner-t3" />
        <div className="weave-spinner-thread weave-spinner-t4" />
        <div className="weave-spinner-node" />
      </div>
      <span className="sr-only">Carregando a experiência</span>
    </div>
  );
}

