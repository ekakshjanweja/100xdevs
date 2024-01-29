import { Link } from "react-router-dom";

function BottomWarning({ label, clickableText, to }) {
  return (
    <div className="flex text-sm justify-center text-center text-slate-900">
      <div className="pr-1">{label}</div>
      <Link className="underline" to={to}>
        {clickableText}
      </Link>
    </div>
  );
}

export default BottomWarning;
