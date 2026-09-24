import type { Metadata } from "next";
import { LeadsDashboard } from "@/components/admin/LeadsDashboard";

export const metadata: Metadata = {
  title: "Cadastros | YE Community",
  robots: { index: false, follow: false },
};

export default function LeadsAdminPage() {
  return <LeadsDashboard />;
}
