import { Event } from "@/types/Event";

export const sortEvents = (events: Event[], sortType: string): Event[] => {
  let sortedEvents = [...events];
  switch (sortType) {
    case "금액순":
      sortedEvents.sort(
        (a, b) => b.income + b.outcome - (a.income + a.outcome)
      );
      break;
    case "최신순":
      sortedEvents.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
    case "지출순":
      sortedEvents.sort((a, b) => b.outcome - a.outcome);
      break;
    case "수입순":
      sortedEvents.sort((a, b) => b.income - a.income);
      break;
    default:
      break;
  }
  return sortedEvents;
};
