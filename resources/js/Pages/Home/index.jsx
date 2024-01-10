import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
const Home = () => {
    const context = useContext(ShoppingCartContext);
    const renderView = () => {
        let items = context.searchByTitle?.length > 0 ? context.filteredItems: context.items; 
        return (items?.length > 0 ? items?.map((item) => (<Card key={item.id} data={item} /> )): <p> No hay resultados disponibles... </p>);
           
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 m-5">
            <h1 className="font-medium text-xl">Productos:</h1>
            </div>
            <input 
            type="text" 
            placeholder="Busca tu producto saludable"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {renderView()}
            </div>
            <CheckoutSideMenu />
            <ProductDetail />
        </Layout>
    );
};

export default Home;
