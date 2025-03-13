export type InfoCardProps = {
  infoName: string;
  value: number;
};

export default function InfoCard(props: InfoCardProps) {
  return (
    <div className="flex flex-col justify-center items-center px-2 py-3 bg-purple-400 rounded-lg w-48">
      <div className="text-lg font-bold">{props.infoName}</div>
      <div className="text-xl">{props.value}</div>
    </div>
  );
}
