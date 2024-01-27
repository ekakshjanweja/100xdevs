import { selector } from "recoil";
import networkAtom from "./NetworkAtom";
import jobsAtom from "./JobsAtom";
import messagingAtom from "./MessagingAtom";
import notificationsAtom from "./NotificationsAtom";

const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobCount = get(jobsAtom);
    const messagingCount = get(messagingAtom);
    const notificationCount = get(notificationsAtom);
    return networkCount + jobCount + messagingCount + notificationCount;
  },
});

export default totalNotificationSelector;
