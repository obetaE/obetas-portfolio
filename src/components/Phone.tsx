import React from "react";
/**
 * Device frame. `scale` shrinks the whole phone while keeping its layout box
 * in sync, so surrounding content flows around the scaled size.
 */
export const Phone: React.FC<{ children: React.ReactNode; label: string; className?: string; scale?: number }> = ({
  children,
  label,
  className = '',
  scale,
}) => (
  <div
    className={`sw-phone-wrap ${className}`}
    style={scale ? ({ '--sw-scale': scale } as React.CSSProperties) : undefined}
    role="img"
    aria-label={label}
  >
    <div className="sw-phone">
      <div className="sw-screen">{children}</div>
      <div className="sw-island" />
    </div>
  </div>
);