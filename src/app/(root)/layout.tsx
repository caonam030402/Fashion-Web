import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
