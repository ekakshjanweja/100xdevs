import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
}

function UseIsOnlineHook() {
  const isOnline = useIsOnline();

  return (
    <div>
      <h3>{isOnline ? "You are online" : "Your network might have issues"}</h3>
    </div>
  );
}

export default UseIsOnlineHook;
