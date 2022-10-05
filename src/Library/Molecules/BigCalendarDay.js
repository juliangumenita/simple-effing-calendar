import React, { useState, useEffect } from "react";
import { Box, Text } from "simple-effing-primitive-layout";

import BigCalendarEvent from "./BigCalendarEvent";

const BigCalendarDay = ({
  day,
  item,
  week,
  events = [],
  configuraton = {},
  size,
}) => {
  const [display, _display] = useState(false);
  return (
    <div
      onMouseEnter={() => _display(true)}
      onMouseLeave={() => _display(false)}
    >
      <Box parse="w:100% h:100% p:absolute t:0 l:0 pa:5">
        {item ? (
          <Text
            size={12}
            weight="600"
            css="big-calendar-day-label"
            color="#D9DDE2"
          >
            {item.day}
          </Text>
        ) : undefined}
        <Box parse="w:100% h:100% j:flex-end a:flex-end fw:wrap p:absolute t:0 l:0 pa:5 d:flex">
          {events.map((event, i) => (
            <BigCalendarEvent
              size={size}
              small={size <= 75}
              overwrite={size <= 75 && display}
              day={day}
              week={week}
              key={i}
              item={event}
              configuraton={configuraton}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default BigCalendarDay;
