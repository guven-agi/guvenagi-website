import { columns, HelpRequestDetails } from "./request-table/columns";
import { PaginatedDataTable } from "@/components/custom/datatable/PaginatedDataTable";

type RequestTableProps = {
  helpRequests: HelpRequestDetails[];
};

export function RequestTable({ helpRequests }: RequestTableProps) {
  return (
    <div className="flex flex-col my-2 p-4 rounded-lg bg-gray-100">
      <div className="text-2xl font-medium pb-4">Yardım Talepleri</div>
      <div className="flex flex-col gap-2">
        <PaginatedDataTable columns={columns} data={helpRequests} />
      </div>
    </div>
  );
}
