import React, { useState } from 'react';
export const useAddTransactionController = () => {
    const [transactionType, setTransactionType] = useState("credit");
    const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const [showToast, setShowToast] = useState(false);
    const [transaction, setTransaction] = useState({
        amount: "",
        date: new Date().toLocaleDateString("en-CA", {
            timeZone: "Asia/Kolkata",
        }),
        description: "",
    })
    const isAmountValid = transaction.amount && Number(transaction.amount) > 0;
    const isDateValid = !!transaction.date;
    const isDescriptionValid = transaction.description.trim().length > 0;
    const isCategoryValid = transactionType === "credit" || !!selectedCategory;

    const isFormValid = isAmountValid && isDateValid && isDescriptionValid && isCategoryValid;

    const updateTransaction = (key, value) => {
        setTransaction(prev => ({
            ...prev,
            [key]: value
        }))
    }
    const onOpen = () => setCategoryModalOpen(true);
    const onClose = () => setCategoryModalOpen(false);

    const handleSubmit = () => {
        setShowToast(true);
        setTimeout(()=>{
            setShowToast(false);
        },3000)
    };
    return {
        transactionType,
        isCategoryModalOpen,
        transaction,
        selectedCategory,
        isFormValid,
        showToast,
        setSelectedCategory,
        setTransactionType,
        updateTransaction,
        onOpen,
        onClose,
        handleSubmit,
    }
}
