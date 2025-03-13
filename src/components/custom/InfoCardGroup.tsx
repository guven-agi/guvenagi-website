import { useMemo } from "react";
import InfoCard from "./InfoCard";

type PropTypes = {
  header: string;
  infoData: Record<string, number>;
};

export default function InfoCardGroup(props: PropTypes) {
  const cardComponents = useMemo(() => {
    const cards: React.ReactElement[] = [];
    for (const title in props.infoData) {
      const data = props.infoData[title];
      cards.push(<InfoCard key={title} infoName={title} value={data} />);
    }
    return cards;
  }, [props.infoData]);
  return (
    <div>
      <div className="text-lg font-normal">{props.header}</div>
      <div className="flex flex-row flex-wrap gap-2 justify-start flex-grow">
        {cardComponents}
      </div>
    </div>
  );
}
