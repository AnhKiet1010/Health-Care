import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollToTopBtn from "@/Components/ScrollToTopBtn";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}

export default MainLayout;
