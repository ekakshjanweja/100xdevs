function Button({ label, onClick }) {
  return (
    <button
      type="button"
      className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 w-full dark:bg-slate-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-slate-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
