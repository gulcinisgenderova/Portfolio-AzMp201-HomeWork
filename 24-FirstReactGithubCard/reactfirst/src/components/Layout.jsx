import Header from "./Header";
import Center from "./Center";

import Card from "./Card";

import Footer from "./Footer";

import "./style.css";

const Layout = () => {
  return (
    <div className="layouts">
      <Header />
      <Card />
      <Center />

      <Footer />
    </div>
  );
};

export default Layout;
