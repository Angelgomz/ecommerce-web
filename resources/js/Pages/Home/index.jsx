import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Header } from "../../Components/Header";
const Home = () => {
    const context = useContext(ShoppingCartContext);
           
    return (
        <Layout>
            <Header/>
        </Layout>
    );
};

export default Home;
