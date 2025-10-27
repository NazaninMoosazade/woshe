import AdminPanelLayout from "@/components/modules/p-admin/AdminPanelLayout";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
