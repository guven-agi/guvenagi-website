import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Metadata } from "next";
import { initDatabase } from "@/db/db-manager";


initDatabase();

export const metadata: Metadata = {
  title: "Güven Ağı - Anasayfa",
};

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-grow">{children}</main>
    </SidebarProvider>
  );
}
