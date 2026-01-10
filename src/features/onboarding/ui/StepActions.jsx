import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export function StepActions({
  onBack,
  onNext,
  showBack,
  nextLabel = "Next",
  disabled = false,
  backLabel,
  flexValue,
  containerStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
}) {
  const isComplete = nextLabel === "Complete Setup";

  const containerStyles = {
    display: "flex",
    gap: "12px",
    marginTop: "2rem",
    position: "sticky",
    bottom: 0,
    background: "white",
    paddingTop: "1rem",
    ...containerStyle,
  };

  const baseButton = {
    flex: flexValue ?? 1,
    padding: "14px 24px",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const primaryStyles = {
    ...baseButton,
    background: isComplete 
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "white",
    boxShadow: disabled 
      ? "none" 
      : "0 4px 15px -3px rgba(16, 185, 129, 0.4)",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    transform: "translateY(0)",
    ...primaryButtonStyle,
  };

  const secondaryStyles = {
    ...baseButton,
    background: "#f1f5f9",
    color: "#475569",
    border: "2px solid #e2e8f0",
    ...secondaryButtonStyle,
  };

  const handlePrimaryHover = (e, isHover) => {
    if (disabled) return;
    e.target.style.transform = isHover ? "translateY(-2px)" : "translateY(0)";
    e.target.style.boxShadow = isHover 
      ? "0 8px 20px -3px rgba(16, 185, 129, 0.5)"
      : "0 4px 15px -3px rgba(16, 185, 129, 0.4)";
  };

  const handleSecondaryHover = (e, isHover) => {
    e.target.style.background = isHover ? "#e2e8f0" : "#f1f5f9";
    e.target.style.transform = isHover ? "translateY(-1px)" : "translateY(0)";
  };

  return (
    <div style={containerStyles}>
      {showBack && (
        <button
          onClick={onBack}
          style={secondaryStyles}
          onMouseOver={(e) => handleSecondaryHover(e, true)}
          onMouseOut={(e) => handleSecondaryHover(e, false)}
        >
          <ArrowLeft size={18} />
          {backLabel || "Back"}
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disabled}
        style={primaryStyles}
        onMouseOver={(e) => handlePrimaryHover(e, true)}
        onMouseOut={(e) => handlePrimaryHover(e, false)}
      >
        {nextLabel}
        {isComplete ? <Check size={18} /> : <ArrowRight size={18} />}
      </button>
    </div>
  );
}
