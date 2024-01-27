import { useRecoilState, useRecoilValue } from "recoil";
import networkAtom from "../atoms/NetworkAtom";
import jobsAtom from "../atoms/JobsAtom";
import messagingAtom from "../atoms/MessagingAtom";
import notificationsAtom from "../atoms/NotificationsAtom";
import totalNotificationSelector from "../atoms/TotalNotificationSelector";
import { useEffect } from "react";
import axios from "axios";

function Buttons() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const [jobCount, setJobCount] = useRecoilState(jobsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data.network);
      setJobCount(res.data.jobs);
      setMessagingCount(res.data.messaging);
      setNotificationCount(res.data.notifications);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Total Notification Count: {totalNotificationCount}</h2>
      </div>
      <div>
        <button style={{ margin: 20 }}>Home</button>
        <button style={{ margin: 20 }}>
          My Network - {networkCount >= 100 ? "99+" : networkCount}
        </button>
        <button style={{ margin: 20 }}>
          Jobs - {jobCount >= 100 ? "99+" : jobCount}
        </button>
        <button style={{ margin: 20 }}>
          Messaging - {messagingCount >= 100 ? "99+" : messagingCount}
        </button>
        <button style={{ margin: 20 }}>
          Notifications - {notificationCount >= 100 ? "99+" : notificationCount}
        </button>
        <button style={{ margin: 20 }}>Me </button>
      </div>
    </>
  );
}

export default Buttons;
