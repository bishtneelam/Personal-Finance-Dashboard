import { useMemo } from "react";
import { CATEGORIES } from "../../../data/categories";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const CREDIT_COLOR = "#10b981";
const DEBIT_COLOR = "#ef4444";
const LOCALE = "en-IN";

function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";

  return date.toLocaleDateString(LOCALE, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function buildTransactionUI(tx) {
  const isCredit = tx.type === "credit";
  const category = CATEGORIES[tx.category] ?? null;

  const icon = category
    ? category.icon
    : isCredit
    ? ArrowUpCircle
    : ArrowDownCircle;

  const iconColor = category
    ? category.color
    : isCredit
    ? CREDIT_COLOR
    : DEBIT_COLOR;

  return {
    id: tx.id,
    icon,
    iconColor,
    description: tx.description,
    categoryName: category?.name ?? null,
    amountText: `${isCredit ? "+" : "-"}₹${tx.amount.toLocaleString(LOCALE)}`,
    amountColor: isCredit ? CREDIT_COLOR : DEBIT_COLOR,
  };
}

export function useTransactionHistory({
  transactions,
  searchQuery,
  filterType,
  selectedCategories,
}) {
  const groupedData = useMemo(() => {
    let result = [...transactions];

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((tx) =>
        tx.description.toLowerCase().includes(query)
      );
    }

    // filterType
    if (filterType !== "all") {
      result = result.filter((tx) => tx.type === filterType);
    }

    // Category
    if (selectedCategories.length) {
      result = result.filter(
        (tx) => tx.category && selectedCategories.includes(tx.category)
      );
    }

    //sort transactions latest

    result.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // grouped + formatted display data
    const groupedByDate = result.reduce((acc, tx) => {
      if (!acc[tx.date]) {
        acc[tx.date] = {
          dateKey: tx.date,
          displayDate: formatDate(tx.date),
          transactions: [],
        };
      }
      acc[tx.date].transactions.push(buildTransactionUI(tx));
      return acc;
    }, {});

    //convert objects -> array
    return Object.values(groupedByDate);
  }, [transactions, searchQuery, filterType, selectedCategories]);

  return {
    groupedData,
  };
}
