import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../../../data/categories';
export const useOnboardingViewModel = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        monthlyBudget: '',
        categories: Object.keys(CATEGORIES).reduce((acc, cat) => {
            acc[cat.id] = { amount: 0 };
            return acc;
        }, {})
    });
    const name = formData.name.trim();
    const email = formData.email.trim();
    const totalBudget = Number(formData.monthlyBudget || 0);
    
    const isStep1Valid =
      name.length >= 3 &&
      email !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isStep2Valid = totalBudget > 0;

    const totalAllocated = Object.values(formData.categories).reduce((sum, c) => sum + Number(c.amount), 0)

    const remainingAmount = totalBudget - totalAllocated;

    const allocationStatus = 
         (remainingAmount === 0) ? 'balanced':
        (remainingAmount > 0) ? 'under':
         'over';


    const isStep3Valid = useMemo(() => {
        return remainingAmount === 0;
    }, [remainingAmount]);

    const isNextDisabled = useMemo(() => {
        if (step === 1) return !isStep1Valid;
        if (step === 2) return !isStep2Valid;
        if (step === 3) return !isStep3Valid;
        return true;
    }, [step, isStep1Valid, isStep2Valid, isStep3Valid]);

    const updateFormData = (updates) => {
        setFormData((prev) => ({ ...prev, ...updates }));
    };
    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        console.log('User Data:', formData);
        alert('Profile Complete! Check console for data.');
        localStorage.setItem("onboardingCompleted", true)
    };

    return {
        step,
        formData,
        isNextDisabled,
        totalAllocated,
        remainingAmount,
        allocationStatus,
        updateFormData,
        handleNext,
        handleBack,
    }
}