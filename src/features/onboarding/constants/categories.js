import { Car, FileText, Heart, Home, ShoppingBag, Utensils, GraduationCap, PiggyBank, MoreHorizontal } from "lucide-react";
import { COLORS } from "../styles/Colors";
export const CATEGORIES = [
    { id: 'rent', name: 'Rent/EMI/Loan', icon: Home, color: COLORS.blue },
    { id: 'needs', name: 'Basic Needs', icon: ShoppingBag, color: COLORS.green },
    { id: 'bills', name: 'Bills', icon: FileText, color: COLORS.yellow },
    { id: 'transport', name: 'Transportation', icon: Car, color: COLORS.purple },
    { id: 'food', name: 'Food & Dining', icon: Utensils, color: COLORS.red },
    { id: 'health', name: "Healthcare", icon: Heart, color: COLORS.pink },
    { id: 'education', name: 'Education', icon: GraduationCap, color: COLORS.indigo},
    { id: 'savings', name: 'Savings & Investment', icon: PiggyBank, color: COLORS.emerald },
    { id: 'misc', name: 'Miscellaneous', icon: MoreHorizontal, color: COLORS.gray }
];