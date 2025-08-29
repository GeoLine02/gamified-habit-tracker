import BaseLayout from "@/components/shared/BaseLayout";
import { HabitsProvider } from "@/context/HabitsContext";

export default function HomeLayout({
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
