function InputBoxComponent({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm font-semibold text-left py-2">{label}</div>

      <input
        onChange={onChange}
        className="text-left w-full py-1 border-slate-200 border-2 p-2 rounded-lg"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBoxComponent;
