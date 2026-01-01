import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

export const SUMMARYDATA = [
  {
    id: 'balance',
    title: 'Current Balance',
    amount: 20250,
    type: 'balance'
  },
  {
    id: 'credit',
    title: 'Total Credit',
    amount: 55000,
    type: 'credit',
    icon: ArrowUpCircle
  },
  {
    id: 'debit',
    title: 'Total Debit',
    amount: 34750,
    type: 'debit',
    icon: ArrowDownCircle
  }
];
