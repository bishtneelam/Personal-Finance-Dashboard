import React, { useState } from 'react';
export const useAddTransactionController = () => {
    const [transactionType, setTransactionType] = useState("credit");
    const [selectedCategory, setSelectedCategory] = useState();
    return {
        transactionType,
        selectedCategory,
        setTransactionType,
        setSelectedCategory,
    }
}
