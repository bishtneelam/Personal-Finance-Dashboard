import styles from "./styles/Onboarding.module.css";
import { StepProgress } from "./ui/StepProgressBar";
import { StepBasicInfo } from "./ui/StepBasicInfo";
import { StepMonthlyBudget } from "./ui/StepMonthlyBudget";
import { StepCategoryAllocation } from "./ui/StepCategoryAllocation";
import { StepActions } from "./ui/StepActions";
import { useOnboardingViewModel } from "./hooks/useOnboardingViewController";
import { User } from "lucide-react";

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

  const isFirstTimeUser = !localStorage.getItem("onboardingCompleted");
  const mode = isFirstTimeUser ? "onboarding" : "edit";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <User size={48} color={"#fff"} />
          </div>
        </div>
        <h1 className={styles.header}>
          {mode === "onboarding" ? "Complete Your Profile" : "Edit Profile"}
        </h1>
        { mode === "edit" && <p className={styles.helperText} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Update your personal information and budget settings
        </p>}

        {mode === "onboarding" && (
          <>
            <p className={styles.stepText}>Step {step} of 3</p>
            <StepProgress currentStep={step} totalSteps={3} />
          </>
        )}

        {/* CONTENT */}
        {mode === "onboarding" ? (
          <>
            {step === 1 && (
              <StepBasicInfo formData={formData} onUpdate={updateFormData} />
            )}

            {step === 2 && (
              <StepMonthlyBudget
                formData={formData}
                onUpdate={updateFormData}
              />
            )}

            {step === 3 && (
              <StepCategoryAllocation
                formData={formData}
                onUpdate={updateFormData}
                totalAllocated={totalAllocated}
                remainingAmount={remainingAmount}
                allocationStatus={allocationStatus}
              />
            )}
          </>
        ) : (
          <>
            {/* EDIT MODE → ALL SECTIONS */}
            <StepBasicInfo
              formData={formData}
              onUpdate={updateFormData}
              mode={mode}
            />
            <StepMonthlyBudget
              formData={formData}
              onUpdate={updateFormData}
              mode={mode}
            />
            <StepCategoryAllocation
              formData={formData}
              onUpdate={updateFormData}
              totalAllocated={totalAllocated}
              remainingAmount={remainingAmount}
              allocationStatus={allocationStatus}
              mode={mode}
            />
          </>
        )}

        {/* ACTIONS */}
        {mode === "onboarding" ? (
          <StepActions
            onBack={handleBack}
            onNext={handleNext}
            showBack={step > 1}
            nextLabel={step === 3 ? "Complete Setup" : "Next"}
            disabled={isNextDisabled}
          />
        ) : (
          <StepActions
            showBack
            backLabel={"Reset Changes"}
            onNext={() => console.log("Save profile")}
            nextLabel="Save Changes"
            disabled={isNextDisabled}
            flexValue={0}
            primaryButtonStyle={{flex: ".3"}}
            secondaryButtonStyle={{flex: ".3"}}
            containerStyle={{justifyContent: "flex-end"}}
          />
        )}
      </div>
    </div>
  );
}
