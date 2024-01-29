function Balance({ balance }) {
  return (
    <div className="flex pt-4">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">₹ {balance}</div>
    </div>
  );
}

export default Balance;
