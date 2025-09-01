import BaseLayout from "@/components/shared/BaseLayout";
import { HabitsProvider } from "@/context/HabitsContext";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HabitsProvider>
      <BaseLayout>{children}</BaseLayout>
    </HabitsProvider>
  );
}
