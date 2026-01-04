import { useState } from "react";

export function useFinanceDashboardController() {
    const [activeView, setActiveView] = useState("dashboard");

    return {
        activeView,
        setActiveView,
    }
}