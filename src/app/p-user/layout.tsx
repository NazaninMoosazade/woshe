import UserPanelLayout from "@/components/modules/p-user/UserPanelLayout";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <UserPanelLayout>{children}</UserPanelLayout>;
}
