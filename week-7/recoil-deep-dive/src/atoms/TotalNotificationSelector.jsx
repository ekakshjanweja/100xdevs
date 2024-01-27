import { selector } from "recoil";
import notificationsAtom from "./NotificationsAtom";

const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});

export default totalNotificationSelector;
