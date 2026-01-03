export function StepActions({ onBack, onNext, showBack, nextLabel = 'Next', disabled=false }) {
  const buttonContainer = {
    display: 'flex',
    gap: '15px',
    marginTop: '30px'
  };

  const button = {
    flex: 1,
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const primaryButton = {
    ...button,
    backgroundColor: nextLabel === 'Complete Setup' ? '#16a34a' : '#2563eb',
    color: 'white'
  };

  const secondaryButton = {
    ...button,
    backgroundColor: '#d1d5db',
    color: '#374151'
  };

  return (
    <div style={buttonContainer}>
      {showBack && (
        <button
          onClick={onBack}
          style={secondaryButton}
          onMouseOver={(e) => e.target.style.backgroundColor = '#9ca3af'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#d1d5db'}
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disabled}
        style={{
          ...primaryButton,
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = nextLabel === 'Complete Setup' ? '#15803d' : '#1d4ed8';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = nextLabel === 'Complete Setup' ? '#16a34a' : '#2563eb';
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}