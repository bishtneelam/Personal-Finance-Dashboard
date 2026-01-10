import { Check } from "lucide-react";
import styles from "../styles/Onboarding.module.css";

const STEP_LABELS = ["Info", "Budget", "Allocate"];

export function StepProgress({ currentStep, totalSteps }) {
  return (
    <div className={styles.progressContainer}>
      {/* Step indicators with labels */}
      <div className={styles.progressSteps}>
        {[...Array(totalSteps)].map((_, index) => {
          const stepNum = index + 1;
          const isActive = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;
          
          return (
            <div key={index} className={styles.progressStep}>
              <div 
                className={`${styles.progressDot} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
              >
                {isCompleted ? <Check size={18} strokeWidth={3} /> : stepNum}
              </div>
              <span className={`${styles.progressLabel} ${isActive ? styles.active : ''}`}>
                {STEP_LABELS[index]}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Progress bar segments */}
      <div className={styles.progressBar}>
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`${styles.progressSegment} ${currentStep > index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
