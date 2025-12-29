import styles from './styles/Onboarding.module.css';  // ← Must use 'from'
import { StepProgress } from './ui/StepProgressBar';
import { StepBasicInfo } from './ui/StepBasicInfo';
import { StepMonthlyBudget } from './ui/StepMonthlyBudget';
import { StepCategoryAllocation } from './ui/StepCategoryAllocation';
import { StepActions } from './ui/StepActions';
import { useOnboardingViewModel } from './hooks/useOnboardingViewController';

export default function OnboardingPage() {
  const { 
    step,
    formData,
    isNextDisabled,
    totalAllocated,
    remainingAmount,
    allocationStatus,
    updateFormData,
    handleNext,
    handleBack,
  } = useOnboardingViewModel();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        
        <h1 className={styles.header}>Complete Your Profile</h1>
        <p className={styles.stepText}>Step {step} of 3</p>
        
        {/* Progress Bar */}
        <StepProgress currentStep={step} totalSteps={3} />

        {/* Step Content */}
        {step === 1 && (
          <StepBasicInfo formData={formData} onUpdate={updateFormData} />
        )}
        
        {step === 2 && (
          <StepMonthlyBudget formData={formData} onUpdate={updateFormData} />
        )}
        
        {step === 3 && (
          <StepCategoryAllocation 
            formData={formData} 
            onUpdate={updateFormData} 
            totalAllocated={totalAllocated}
            remainingAmount={remainingAmount}
            allocationStatus={allocationStatus} />
        )}

        {/* Action Buttons */}
        <StepActions
          onBack={handleBack}
          onNext={handleNext}
          showBack={step > 1}
          nextLabel={step === 3 ? 'Complete Setup' : 'Next'}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
}