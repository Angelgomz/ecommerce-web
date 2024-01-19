import { Layout } from "../../Components/Layout";
import { Header } from "../../Components/Header";
import { Info } from "../../Components/Info";
import { Products } from "../../Components/Products";
import { Recomendation } from "../../Components/Recomendation";
import { Recipes } from "../../Components/Recipes";
import { Footer } from "../../Components/Footer";
const Home = () => (
    <Layout>
      <Header />
      <Info />
      <Products />
      <Recipes />
      <Recomendation />
      <Footer />
    </Layout>
  );
export default Home;