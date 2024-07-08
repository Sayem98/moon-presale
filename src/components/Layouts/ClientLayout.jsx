import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ClientLayout;
