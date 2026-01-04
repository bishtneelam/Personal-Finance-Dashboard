import AddTransaction from './features/addTransaction/AddTransaction';
import { FinanceDashboard } from './features/dashboard/ui/FinanceDashboard';
import OnboardingPage from './features/onboarding/OnboardingPage';
import TransactionHistory from './features/transactionHistory/TransactionHistory';

function App() {
  return(
    <div>
      {/* <OnboardingPage/> */}
      {/* <AddTransaction /> */}
      {/* <TransactionHistory /> */}
      <FinanceDashboard/>
    </div>
  )
}

export default App
