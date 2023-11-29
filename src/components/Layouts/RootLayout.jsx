import Footer from "@/shared/Footer/Footer";
import { Navbar } from "@/shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
