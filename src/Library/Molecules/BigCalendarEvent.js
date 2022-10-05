import React, { useState, useEffect } from "react";
import { Box, Text } from "simple-effing-primitive-layout";
import Moment from "moment/min/moment-with-locales";

const TimelineEvent = ({
  item = {},
  configuraton = {},
  background = "#90959E",
  color = "#FFFFFF",
  day = 0,
  week = 0,
  small = false,
  overwrite = false,
}) => {
  const [display, _display] = useState(false);
  const _background =
    configuraton?.categories[item.category]?.background || background;
  const _color = configuraton?.categories[item.category]?.color || color;

  return (
    <div
      onMouseEnter={() => _display(true)}
      onMouseLeave={() => _display(false)}
    >
      <Box
        layer={2}
        parse="d:inline-flex br:999 ox:visible oy:visible p:relative"
        style={{
          flexShrink: 0,
          cursor: "pointer",
        }}
        width={small ? 5 : 15}
        height={small ? 5 : 15}
        left={small ? 2 : 5}
        top={small ? 2 : 5}
        color={_background}
      >
        <Box
          color={_background}
          parse="br:10 a:center pa:12.55 p:absolute"
          display={display && !overwrite ? "inline-flex" : "none"}
          style={{
            top: [0, 1].includes(week) ? "calc(100% + 5px)" : "unset",
            left: ![5, 6].includes(day) ? "calc(100% + 5px)" : "unset",
            bottom: ![0, 1].includes(week) ? "calc(100% + 5px)" : "unset",
            right: [5, 6].includes(day) ? "calc(100% + 5px)" : "unset",
          }}
        >
          <Box>
            <Text
              color={_color}
              display="block"
              bottom={5}
              line={12.5}
              size={12.5}
              style={{ whiteSpace: "nowrap" }}
              weight="600"
            >
              {item.title}
            </Text>
            <Text
              color={_color}
              display="block"
              bottom={0}
              line={12.5}
              size={11}
              opacity={0.5}
              style={{ whiteSpace: "nowrap" }}
            >
              {item?.description
                ? item.description + " | " + Moment(item?.date).format("D MMMM")
                : Moment(item?.date).format("D MMMM")}
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TimelineEvent;
