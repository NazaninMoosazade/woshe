import AdminPanelLayout from "@/components/modules/p-user/AdminPanelLayout";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
