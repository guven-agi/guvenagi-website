import { Input } from "@/components/ui/input";
import { RequestTable } from "./components/RequestTable";
import { HelpRequestDetails } from "./components/request-table/columns";

export default function RequestsPage() {
  const helpRequests: HelpRequestDetails[] = [
    {
      id: "21431241",
      city: "İzmir",
      createdAt: new Date("2025-01-01T10:15:30Z"),
      subjects: ["Taciz", "Hukuki Destek", "Çocuk"],
    },
    {
      id: "98765432",
      city: "İstanbul",
      createdAt: new Date("2024-12-20T14:45:00Z"),
      subjects: ["Şiddet", "Psikolojik Destek"],
    },
    {
      id: "45678901",
      city: "Ankara",
      createdAt: new Date("2025-01-05T09:30:00Z"),
      subjects: ["Ekonomik Destek", "Barınma"],
    },
    {
      id: "67890123",
      city: "Bursa",
      createdAt: new Date("2025-01-10T16:00:00Z"),
      subjects: ["Eğitim", "Psikolojik Destek"],
    },
    {
      id: "34567890",
      city: "Antalya",
      createdAt: new Date("2024-12-15T08:00:00Z"),
      subjects: ["Hukuki Destek", "Çocuk"],
    },
    {
      id: "23456789",
      city: "Adana",
      createdAt: new Date("2025-01-12T12:45:00Z"),
      subjects: ["Taciz", "Psikolojik Destek", "Şiddet"],
    },
    {
      id: "78901234",
      city: "Gaziantep",
      createdAt: new Date("2025-01-13T18:30:00Z"),
      subjects: ["Barınma", "Ekonomik Destek"],
    },
    {
      id: "21431241",
      city: "İzmir",
      createdAt: new Date("2025-01-01T10:15:30Z"),
      subjects: ["Taciz", "Hukuki Destek", "Çocuk"],
    },
    {
      id: "98765432",
      city: "İstanbul",
      createdAt: new Date("2024-12-20T14:45:00Z"),
      subjects: ["Şiddet", "Psikolojik Destek"],
    },
    {
      id: "45678901",
      city: "Ankara",
      createdAt: new Date("2025-01-05T09:30:00Z"),
      subjects: ["Ekonomik Destek", "Barınma"],
    },
    {
      id: "67890123",
      city: "Bursa",
      createdAt: new Date("2025-01-10T16:00:00Z"),
      subjects: ["Eğitim", "Psikolojik Destek"],
    },
    {
      id: "34567890",
      city: "Antalya",
      createdAt: new Date("2024-12-15T08:00:00Z"),
      subjects: ["Hukuki Destek", "Çocuk"],
    },
    {
      id: "23456789",
      city: "Adana",
      createdAt: new Date("2025-01-12T12:45:00Z"),
      subjects: ["Taciz", "Psikolojik Destek", "Şiddet"],
    },
    {
      id: "78901234",
      city: "Gaziantep",
      createdAt: new Date("2025-01-13T18:30:00Z"),
      subjects: ["Barınma", "Ekonomik Destek"],
    },
    {
      id: "11223344",
      city: "Konya",
      createdAt: new Date("2024-12-30T11:05:00Z"),
      subjects: ["Taciz", "Hukuki Destek"],
    },
    {
      id: "55667788",
      city: "Kayseri",
      createdAt: new Date("2024-11-28T17:20:00Z"),
      subjects: ["Şiddet", "Çocuk", "Psikolojik Destek"],
    },
    {
      id: "22334455",
      city: "Mersin",
      createdAt: new Date("2024-12-22T14:00:00Z"),
      subjects: ["Barınma", "Eğitim", "Hukuki Destek"],
    },
    {
      id: "99887766",
      city: "Trabzon",
      createdAt: new Date("2025-01-03T10:50:00Z"),
      subjects: ["Ekonomik Destek", "Psikolojik Destek"],
    },
    {
      id: "66778899",
      city: "Samsun",
      createdAt: new Date("2025-01-09T13:40:00Z"),
      subjects: ["Taciz", "Eğitim", "Şiddet"],
    },
    {
      id: "33445566",
      city: "Eskişehir",
      createdAt: new Date("2024-12-25T15:25:00Z"),
      subjects: ["Çocuk", "Psikolojik Destek"],
    },
    {
      id: "99889988",
      city: "Denizli",
      createdAt: new Date("2024-11-18T09:30:00Z"),
      subjects: ["Hukuki Destek", "Barınma"],
    },
    {
      id: "77665544",
      city: "Kocaeli",
      createdAt: new Date("2025-01-07T12:00:00Z"),
      subjects: ["Taciz", "Şiddet"],
    },
    {
      id: "22335577",
      city: "Manisa",
      createdAt: new Date("2025-01-04T16:25:00Z"),
      subjects: ["Ekonomik Destek", "Hukuki Destek", "Çocuk"],
    },
    {
      id: "44556633",
      city: "Zonguldak",
      createdAt: new Date("2024-12-18T19:10:00Z"),
      subjects: ["Eğitim", "Barınma"],
    },
  ];

  return (
    <div className="mx-2 my-4 min-h-screen flex flex-col">
      <div className="bg-slate-200 p-2">
        <Input
          type="text"
          placeholder="Ara"
          className="bg-slate-300 dark:bg-white"
        />
      </div>
      <RequestTable helpRequests={helpRequests} />
    </div>
  );
}
