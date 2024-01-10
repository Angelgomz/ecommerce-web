import { createContext, useState, useEffect } from "react";
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [isCheckoutSideMenu, setIsCheckoutSideMenuOpen] = useState(false);
    const [searchByTitle, setSearchByTitle] = useState(null);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) =>item.title.toLowerCase().includes(searchByTitle));
    };
    useEffect(() => {
        if (searchByTitle)
            setFilteredItems(filteredItemsByTitle(items,searchByTitle));
    }, [items, searchByTitle]);

    return (
        <ShoppingCartContext.Provider
            value={{
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                order,
                setOrder,
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
