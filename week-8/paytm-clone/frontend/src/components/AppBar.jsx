function AppBar({}) {
  return (
    <div className="shadow h-14 flex justify-between rounded-lg">
      <div className="flex flex-col justify-center h-full ml-4 text-lg font-semibold">
        Payments App
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello, User
        </div>
        <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center mt-3 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
