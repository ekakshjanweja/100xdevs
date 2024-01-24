import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ margin: 20 }}
      >
        Landing
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        style={{ margin: 20 }}
      >
        Dashboard
      </button>
    </>
  );
}

export default Navbar;
