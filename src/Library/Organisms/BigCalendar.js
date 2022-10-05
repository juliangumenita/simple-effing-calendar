import React, { useState, useEffect, useCallback } from "react";
import { Box, Text } from "simple-effing-primitive-layout";

import BigCalendarEvent from "../Molecules/BigCalendarEvent";
import BigCalendarDay from "../Molecules/BigCalendarDay";
import Parser from "../Modules/Parser";

import Lodash from "lodash";
import Moment from "moment/min/moment-with-locales";

const CalendarConfiguraton = {
  width: "100%",
  height: 500,
  wrapper: {},
  month: 280,
  radius: 5,
  border: "0.5px solid #ECF0F5",
  family: undefined,
  legends: {
    display: true,
  },
  categories: {},
  today: "Today",
};

const BigCalendar = ({
  configuraton = CalendarConfiguraton,
  events = [],
  language = "en",
  date = Moment().format("YYYY-MM-DD"),
}) => {
  Moment.locale(language);

  const [hide, _hide] = useState([]);
  const [update, _update] = useState(true);
  const [error, _error] = useState(false);
  const [size, _size] = useState(false);
  const [calendar, _calendar] = useState(Parser.month(date));
  const _configuraton = { ...CalendarConfiguraton, ...configuraton };

  const resize = () => {
    _update([]);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  useEffect(() => {
    _update([]);
  }, [date]);

  const legends = [];
  for (const [key, value] of Object.entries(_configuraton.categories)) {
    legends.push({
      key,
      ...value,
    });
  }

  const _events = Lodash.filter(
    events,
    (item) => !hide.includes(item.category)
  );

  return (
    <Box width={_configuraton.width}>
      <Box
        width={_configuraton.width}
        border={_configuraton.border}
        {..._configuraton.wrapper}
        radius={_configuraton.radius}
        parse="ox:hidden oy:hidden"
      >
        {calendar.map((week, w) => (
          <Box key={w} css="big-calendar-week" parse="d:flex a:center">
            {week.map((day, d) => (
              <Box key={d} css="big-calendar-day" parse="f:1" height={size}>
                <Box
                  referrer={
                    w === 0 && d === 0
                      ? (ref) =>
                          ref?.offsetWidth ? _size(ref?.offsetWidth) : undefined
                      : undefined
                  }
                  key={w + " - " + d}
                  css="big-calendar-day-content"
                  parse="d:inline-flex a:center j:center pt:100% w:100% p:relative"
                  border={_configuraton.border}
                >
                  <BigCalendarDay
                    size={size}
                    configuraton={configuraton}
                    item={day}
                    week={w}
                    day={d}
                    events={Lodash.filter(
                      _events,
                      (item) => item.date === day?.date
                    )}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {_configuraton?.legends?.display ? (
        <Box parse="d:flex a:center j:flex-end fw:wrap mt:20">
          {legends.map((legend) => (
            <Box
              parse="ml:10 d:inline-flex a:center"
              key={legend.key}
              press={() => {
                if (hide.includes(legend.key)) {
                  _hide(Lodash.without(hide, legend.key));
                } else {
                  _hide([...hide, legend.key]);
                }
              }}
            >
              <Box
                parse="w:15 h:15 br:5 mr:5"
                color={
                  hide.includes(legend.key) ? "#90959E" : legend.background
                }
              />
              <Text
                color="#000000"
                opacity={hide.includes(legend.key) ? 0.5 : 1}
                size={12}
                line={15}
                weight={500}
              >
                {legend.title}
              </Text>
            </Box>
          ))}
        </Box>
      ) : undefined}
    </Box>
  );
};

export default BigCalendar;
