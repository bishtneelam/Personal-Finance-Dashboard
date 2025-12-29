import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../constants/categories';
export const useOnboardingViewModel = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        monthlyBudget: '',
        categories: CATEGORIES.reduce((acc, cat) => {
            acc[cat.id] = { amount: 0 };
            return acc;
        }, {})
    });
    const isStep1Valid = useMemo(() => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
    }, [formData.name, formData.email]);

    const isStep2Valid = useMemo(() => {
        const budget = Number(formData.monthlyBudget);
        return budget > 0;
    }, [formData.monthlyBudget]);

    const totalAllocated = useMemo(() => {
        return Object.values(formData.categories).reduce((sum, c) => sum + Number(c.amount), 0)
    }, [formData.categories])

    const totalBudget = Number(formData.monthlyBudget || 0);

    const remainingAmount = useMemo(() => {
        return totalBudget - totalAllocated;
    }, [totalBudget, totalAllocated]);

    const allocationStatus = useMemo(() => {
        if (remainingAmount === 0) return 'balanced';
        if (remainingAmount > 0) return 'under';
        return 'over';
    }, [remainingAmount]);

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