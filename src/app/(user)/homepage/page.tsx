import Dashboard, { DashboardData } from "./components/Dashboard";
import { StatisticalDetails } from "./components/StatisticalDetails";
import ProjectNotifier from "./components/ProjectNotifier";
import { HelpRequestStatistics } from "./components/statistical-details/columns";

export default async function Homepage() {
  const allData: DashboardData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Genel: {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
        Bugün: {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
        "Bu Ay": {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
      });
    }, 50);
  });

  const NGOData: DashboardData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Genel: {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
        Bugün: {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
        "Bu Ay": {
          "Yardım Talepleri": 1312,
          "Yardım Edilen": 2292,
          "Yardım Bekleyen": 121,
        },
      });
    }, 50);
  });

  const statisticalData: HelpRequestStatistics[] = [
    {
      id: "123213901",
      subject: "Taciz",
      completedRequestsCount: 21,
      helpRequestCount: 241,
    },
    {
      id: "987654321",
      subject: "Şiddet",
      completedRequestsCount: 35,
      helpRequestCount: 412,
    },
    {
      id: "456789012",
      subject: "Ekonomik Destek",
      completedRequestsCount: 12,
      helpRequestCount: 87,
    },
    {
      id: "678901234",
      subject: "Hukuki Destek",
      completedRequestsCount: 28,
      helpRequestCount: 155,
    },
    {
      id: "345678901",
      subject: "Barınma",
      completedRequestsCount: 17,
      helpRequestCount: 93,
    },
    {
      id: "234567890",
      subject: "Psikolojik Destek",
      completedRequestsCount: 50,
      helpRequestCount: 319,
    },
    {
      id: "789012345",
      subject: "Eğitim",
      completedRequestsCount: 8,
      helpRequestCount: 47,
    },
  ];

  return (
    <div className="mx-2 my-4 min-h-screen flex flex-col">
      <ProjectNotifier />
      <div className="flex md:flex-row flex-col gap-4 justify-center items-start">
        <Dashboard title="Genel Veriler" infoData={allData} />
        <Dashboard title="STK Verileri" infoData={NGOData} />
      </div>
      <StatisticalDetails basedOnSubjectData={statisticalData} />
    </div>
  );
}
