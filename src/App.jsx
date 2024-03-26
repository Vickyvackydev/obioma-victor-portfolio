import Header from "./component/Header/Header";
import CSS from "./styles/app.module.scss";
import Hero from "./component/hero/hero";
import Experties from "./component/Experties/experties";
import Work from "./component/Work/work";
import Portfolio from "./component/portfolio/portfolio";
import Footer from "./component/Footer/footer";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${CSS.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
