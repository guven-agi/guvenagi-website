import InfoCard from "@/components/custom/InfoCard";
import InfoCardGroup from "@/components/custom/InfoCardGroup";
import { useMemo } from "react";

export type DashboardData = Record<string, number | Record<string, number>>;

type DashboardProps = {
  title: string;
  infoData: DashboardData;
};

export default function Dashboard(props: DashboardProps) {
  const cardComponents = useMemo(() => {
    const cards: React.ReactElement[] = [];
    for (const title in props.infoData) {
      const data = props.infoData[title];
      if (typeof data === "number") {
        cards.push(<InfoCard key={title} infoName={title} value={data} />);
      } else {
        cards.push(
          <InfoCardGroup key={title} header={title} infoData={data} />
        );
      }
    }
    return cards;
  }, [props.infoData]);

  return (
    <div className="flex flex-col gap-4 py-4 px-2 bg-gray-100 rounded-2xl shadow">
      <div>
        <span className="text-2xl font-medium">{props.title}</span>
      </div>
      <div className="flex flex-row flex-wrap gap-2 justify-around flex-grow">
        {cardComponents}
      </div>
    </div>
  );
}
