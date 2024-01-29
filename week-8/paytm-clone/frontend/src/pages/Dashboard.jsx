import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import { Users } from "../components/Users";

function Dashboard() {
  return (
    <>
      <AppBar />
      <div>
        <Balance balance={"100000"} />
        <Users />
      </div>
    </>
  );
}

export default Dashboard;
