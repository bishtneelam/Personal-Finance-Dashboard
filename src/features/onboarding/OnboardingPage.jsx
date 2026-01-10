import { useNavigate } from "react-router-dom";
import styles from "./styles/Onboarding.module.css";
import { StepProgress } from "./ui/StepProgressBar";
import { StepBasicInfo } from "./ui/StepBasicInfo";
import { StepMonthlyBudget } from "./ui/StepMonthlyBudget";
import { StepCategoryAllocation } from "./ui/StepCategoryAllocation";
import { StepActions } from "./ui/StepActions";
import { useOnboardingViewModel } from "./hooks/useOnboardingViewController";
import { User, Wallet, PieChart, Settings } from "lucide-react";

// Step-specific icons and titles
const STEP_CONFIG = {
  1: { icon: User, title: "Let's get to know you" },
  2: { icon: Wallet, title: "Set your budget" },
  3: { icon: PieChart, title: "Allocate your funds" },
};

export default function OnboardingPage() {
  const navigate = useNavigate();
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

  // Get current step config
  const currentConfig = STEP_CONFIG[step] || { icon: Settings, title: "Setup" };
  const StepIcon = mode === "edit" ? Settings : currentConfig.icon;

  return (
    <div className={`${styles.container} ${mode === "edit" ? styles.editMode : ""}`}>
      <div className={`${styles.card} ${mode === "edit" ? styles.cardEditMode : ""}`}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <StepIcon size={36} color={"#fff"} strokeWidth={2} />
          </div>
        </div>
        <h1 className={styles.header}>
          {mode === "onboarding" ? currentConfig.title : "Edit Profile"}
        </h1>
        { mode === "edit" && <p className={styles.helperText} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Update your personal information and budget settings
        </p>}

        {mode === "onboarding" && (
          <StepProgress currentStep={step} totalSteps={3} />
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
            onNext={() => handleNext(navigate)}
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
