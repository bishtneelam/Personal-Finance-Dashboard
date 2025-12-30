import React, { useState } from 'react';
export const useAddTransactionController = () => {
    const [transactionType, setTransactionType] = useState("");
    return {
        transactionType,
        setTransactionType
    }
}
