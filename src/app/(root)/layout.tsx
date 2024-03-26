import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
