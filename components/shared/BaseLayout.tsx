import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-6">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
