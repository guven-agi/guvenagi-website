import { DataTable } from "@/components/custom/datatable/DataTable";
import { columns, HelpRequestStatistics } from "./statistical-details/columns";

type StatisticalDetailsProps = {
  basedOnSubjectData: HelpRequestStatistics[];
};

export function StatisticalDetails({
  basedOnSubjectData,
}: StatisticalDetailsProps) {
  return (
    <div className="flex flex-col my-2 p-4 rounded-lg bg-gray-100">
      <div className="text-2xl font-medium pb-4">Detaylar</div>
      <div className="flex flex-col gap-2">
        <DataTable columns={columns} data={basedOnSubjectData} />
      </div>
    </div>
  );
}
