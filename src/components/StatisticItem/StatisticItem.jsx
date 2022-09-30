import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from "./StatisticItem.styled";
import { FaBeer } from "react-icons/fa";

import { IconContext } from "react-icons";

export const StatisticItem = ({ title, total, icon }) => {
  const deafaultIcon = icon ?? <FaBeer />;
  return (
    <>
      <StatisticBox>
        <IconContext.Provider value={{ color: "blue", size: 30 }}>
          {deafaultIcon}
        </IconContext.Provider>
        <StatisticCounter>{total}</StatisticCounter>
        <StatisticText>{title}</StatisticText>
      </StatisticBox>
    </>
  );
};
