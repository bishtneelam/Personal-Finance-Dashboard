import {
  Car,
  FileText,
  Heart,
  Home,
  ShoppingBag,
  Utensils,
  GraduationCap,
  PiggyBank,
  MoreHorizontal,
  Zap,
  Film,
  ShoppingCart,
  Plane,
  Shield,
  Repeat,
  Scissors,
  Gift,
  Landmark,
  Sparkles,
  Droplets,
  Palette,
} from "lucide-react";
import { COLORS } from "../features/onboarding/styles/Colors";
export const CATEGORIES = {
  rent: { name: "Rent/EMI/Loan", icon: Home, color: COLORS.blue },
  needs: {
    name: "Basic Needs",
    icon: ShoppingBag,
    color: COLORS.green,
  },
  bills: { name: "Bills", icon: FileText, color: COLORS.yellow },
  transport: {
    name: "Transportation",
    icon: Car,
    color: COLORS.purple,
  },
  food: {
    name: "Food & Dining",
    icon: Utensils,
    color: COLORS.red,
  },
  health: { name: "Healthcare", icon: Heart, color: COLORS.pink },
  education: {
    name: "Education",
    icon: GraduationCap,
    color: COLORS.indigo,
  },
  savings: {
    name: "Future Fund",
    icon: PiggyBank,
    color: COLORS.emerald,
  },
  misc: {
    name: "Miscellaneous",
    icon: MoreHorizontal,
    color: COLORS.gray,
  },
  utilities: {
    name: "Utilities",
    icon: Zap,
    color: COLORS.orange,
  },
  entertainment: {
    name: "Entertainment",
    icon: Film,
    color: COLORS.violet,
  },
  shopping: {
    name: "Shopping",
    icon: ShoppingCart,
    color: COLORS.teal,
  },
  travel: {
    name: "Travel",
    icon: Plane,
    color: COLORS.cyan,
  },
  insurance: {
    name: "Insurance",
    icon: Shield,
    color: COLORS.sky,
  },
  subscriptions: {
    name: "Subscriptions",
    icon: Repeat,
    color: COLORS.fuchsia,
  },
  personalCare: {
    name: "Personal Care",
    icon: Palette,
    color: COLORS.rose,
  },
  gifts: {
    name: "Gifts & Donations",
    icon: Gift,
    color: COLORS.amber,
  },
  taxes: {
    name: "Taxes",
    icon: Landmark,
    color: COLORS.slate,
  },


};
