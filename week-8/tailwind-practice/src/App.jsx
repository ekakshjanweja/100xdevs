import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 p-4">
        <RevenueCard
          title={"Next Payout"}
          amount={"92,310.20"}
          orderCount={23}
          nextPaymentDate={"Today, 4:00 PM"}
        />
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,310.20"}
          orderCount={13}
          nextPaymentDate={null}
        />
        <RevenueCard
          title={"Amount Processed"}
          amount={"23,92,312.19"}
          orderCount={null}
          nextPaymentDate={null}
        />
      </div>
    </>
  );
}

export default App;
