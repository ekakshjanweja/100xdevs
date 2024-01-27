import { useRecoilValue } from "recoil";
import totalNotificationSelector from "../atoms/TotalNotificationSelector";
import notificationsAtom from "../atoms/NotificationsAtom";

function Buttons() {
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <div>
        <h2>Total Notification Count: {totalNotificationCount}</h2>
      </div>
      <div>
        <button style={{ margin: 20 }}>Home</button>
        <button style={{ margin: 20 }}>
          My Network -
          {notificationCount.networks >= 100
            ? "99+"
            : notificationCount.networks}
        </button>
        <button style={{ margin: 20 }}>Jobs - {notificationCount.jobs}</button>
        <button style={{ margin: 20 }}>
          Messaging - {notificationCount.messaging}
        </button>
        <button style={{ margin: 20 }}>
          Notifications - {notificationCount.notifications}
        </button>
        <button style={{ margin: 20 }}>Me </button>
      </div>
    </>
  );
}

export default Buttons;
