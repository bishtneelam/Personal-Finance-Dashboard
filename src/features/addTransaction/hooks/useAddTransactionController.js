import React, { useState } from 'react';
export const useAddTransactionController = () => {
    const [transactionType, setTransactionType] = useState("credit");
    const [selectedCategory, setSelectedCategory] = useState();
    const [transaction, setTransaction] = useState({
        amount: "",
        date: new Date().toISOString().split('T')[0],
        description: "",
    })

    const updateTransaction = (key, value) => {
        setTransaction(prev => ({
                ...prev,
                [key]: value
            }))
    }
    return {
        transactionType,
        selectedCategory,
        transaction,
        setTransactionType,
        setSelectedCategory,
        updateTransaction,
    }
}
