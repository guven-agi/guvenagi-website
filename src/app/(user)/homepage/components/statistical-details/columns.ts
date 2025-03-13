"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type HelpRequestStatistics = {
    id: string;
    subject: string;
    helpRequestCount: number;
    completedRequestsCount: number;
}

export const columns: ColumnDef<HelpRequestStatistics>[] = [
    {
        accessorKey: "subject",
        header: "Konu",
    },
    {
        accessorKey: "helpRequestCount",
        header: "Yardım Isteği",
    },
    {
        accessorKey: "completedRequestsCount",
        header: "Yardım Edilen",
    },
]