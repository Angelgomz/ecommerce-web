import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const [productToShow, setProductToShow] = useState({});
    const [isCheckoutSideMenu, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    const [order, setOrder] = useState([]);
    return (
        <ShoppingCartContext.Provider
            value={{
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
