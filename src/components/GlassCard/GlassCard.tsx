import { PropsWithChildren } from "react";
import "./GlassCard.css";

function GlassCard({ children }: PropsWithChildren) {
  return <div className="glass-card">{children}</div>;
}

export default GlassCard;
