interface LabelledInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

export const LabelledInput = ({
  label,
  placeholder,
  type,
}: LabelledInputProps) => {
  return (
    <>
      <div className="mt-2 flex flex-col justify-start items-start gap-2">
        <label className="font-semibold text-xl">{label}</label>
        <input
          type={type || "text"}
          id={label}
          placeholder={placeholder}
          required
          className="p-2 px-2 border border-neutral-400 hover:border-neutral-600 rounded-md"
        />
      </div>
    </>
  );
};
