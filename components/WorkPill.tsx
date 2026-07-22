interface WorkPillProps {
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
  readonly onClick?: () => void;
}

const buttonReset: React.CSSProperties = {
  background: "none",
  border: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  cursor: "inherit",
  display: "inline",
};

export default function WorkPill({ children, href, onMouseEnter, onMouseLeave, onClick }: WorkPillProps) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="work-pill" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span className="work-pill-inner">{children}</span>
      </a>
    );
  }
  if (onMouseEnter ?? onMouseLeave ?? onClick) {
    return (
      <button
        type="button"
        className="work-pill"
        style={buttonReset}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        onClick={onClick}
      >
        <span className="work-pill-inner">{children}</span>
      </button>
    );
  }
  return (
    <span className="work-pill">
      <span className="work-pill-inner">{children}</span>
    </span>
  );
}
