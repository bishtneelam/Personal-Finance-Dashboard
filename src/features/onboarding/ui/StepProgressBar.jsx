export function StepProgress({ currentStep, totalSteps }) {
  const progressBar = {
    display: 'flex',
    gap: '10px',
    marginBottom: '40px'
  };

  const progressItem = {
    flex: 1,
    height: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={progressBar}>
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          style={{
            ...progressItem,
            backgroundColor: currentStep > index ? '#2563eb' : '#e5e7eb'
          }}
        />
      ))}
    </div>
  );
}