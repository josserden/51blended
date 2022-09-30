import { StatisticItem, StatisticText, StatisticCounter } from "components";
import { StatisticsList, StatisticTitle } from "./Statistics.styled";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";

export const Statistics = ({ title, stats }) => {
  const iconArr = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats &&
          stats.map(({ id, title, total }, index) => (
            <StatisticItem title={title} total={total} icon={iconArr[index]} />
          ))}
      </StatisticsList>
    </>
  );
};
