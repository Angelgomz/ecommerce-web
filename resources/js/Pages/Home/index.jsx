import { Layout } from "../../Components/Layout";
import { Header } from "../../Components/Header";
import { Info } from "../../Components/Info";
import { Store } from "../../Components/Store";
import { Footer } from "../../Components/Footer";
const Home = () => {
    return (
        <Layout>
            <Header />
            <Info/>
            <Store />
            <Footer />
        </Layout>
    );
};

export default Home;
