import moment from "moment";

const dateParser = (date) => {
  const today = moment();
  const yesterday = moment().subtract(1, "day");
  if (moment(date).isSame(today, "day")) {
    return moment().format("hh:mm a");
  }

  if (moment(date).isSame(yesterday, "day")) {
    return "Yesterday";
  }

  return moment(date).format("MMM DD");
};

export default dateParser;