import Moment from "moment";

class Parser {
  static month(date) {
    let currentMonthAndYear = Moment(date).format("YYYY-MM-");
    let totalDaysInMonth = Moment(date).daysInMonth();
    let startOfMonth = Moment(date).startOf("month");
    let endOfMonth = Moment(date).endOf("month");

    let data = [];

    if (startOfMonth.isoWeekday() > 1) {
      for (var i = 0; i < startOfMonth.isoWeekday() - 1; i++) {
        data.push(null);
      }
    }

    for (var i = 0; i < totalDaysInMonth; i++) {
      data.push({
        day: i + 1,
        date: Moment(currentMonthAndYear + (i + 1), "YYYY-MM-D").format(
          "YYYY-MM-DD"
        ),
      });
    }

    if (endOfMonth.isoWeekday() < 7) {
      for (var i = 0; i < 7 - endOfMonth.isoWeekday(); i++) {
        data.push(null);
      }
    }

    return Array.from({ length: 6 }, () => data.splice(0, 7));
  }
}

export default Parser;
