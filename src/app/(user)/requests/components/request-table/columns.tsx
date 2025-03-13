"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDownIcon } from "lucide-react";

export type HelpRequestDetails = {
  id: string;
  subjects: string[];
  city: string;
  createdAt: Date;
};

export const columns: ColumnDef<HelpRequestDetails>[] = [
  {
    accessorKey: "id",
    header: "Talep ID",
  },
  {
    accessorKey: "subjects",
    header: "Talep Konusu",
    cell: (props) => {
      const badges = [];
      const values = props.getValue() as string[];
      for (const value of values) {
        badges.push(
          <Badge key={value} variant="outline">
            {value}
          </Badge>
        );
      }
      return <div className="flex flex-row gap-x-1">{badges}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "city",
    header: "Şehir",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex flex-row justify-start"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() == "asc");
          }}
        >
          <div>Talep Tarihi</div>
          <ArrowUpDownIcon />
        </Button>
      );
    },
    enableSorting: true,
    cell: (props) => {
      return <div>{(props.getValue() as Date).toLocaleDateString("tr")}</div>;
    },
  },
];
