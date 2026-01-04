import { Routes, Route } from 'react-router-dom';
import AddTransaction from './features/addTransaction/AddTransaction';
import { FinanceDashboard } from './features/dashboard/ui/FinanceDashboard';
import OnboardingPage from './features/onboarding/OnboardingPage';
import TransactionHistory from './features/transactionHistory/TransactionHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FinanceDashboard />}>
        <Route index element={<div>Dashboard Home</div>} />
        <Route path='/add-transaction' element={<AddTransaction />} />
        <Route path='/history' element={<TransactionHistory />} />
        <Route path='edit' element={<OnboardingPage />} />
      </Route>

    </Routes>
  )
}

export default App
