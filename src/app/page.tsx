import Header from "@/components/custom/common/Header";
import HelpRequestForm from "@/components/custom/HelpRequestForm";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gradient-to-b from-indigo-500 via-indigo-600 to-purple-700">
      <Header />
      <section className="relative py-12 grow">
        <div className="md:px-24 flex flex-col gap-y-24">
          <h2 className="max-w-4xl text-6xl font-bold text-center text-white drop-shadow-lg md:text-left self-start">
            Türkiye'deki tüm STK'lar için ortak platform
          </h2>
          <h2 className="max-w-4xl text-6xl font-bold text-white drop-shadow-lg text-center md:text-left self-start">
            Sen yardım iste, biz doğru kişilere ulaştıralım
          </h2>
        </div>
      </section>
      <div className="absolute right-24 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <HelpRequestForm />
      </div>
    </div>
  );
}
