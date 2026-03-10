import Header from "./Header";
import Footer from "./Footer";
import CartPanel from "./CartPanel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <CartPanel />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
