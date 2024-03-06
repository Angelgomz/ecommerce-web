import { createContext, useState, useEffect } from "react";
import AxiosInstance from "../Components/AxiosInstance";
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    // my acount
    const [account, setAccount] = useState(
        localStorage.getItem("account")
            ? JSON.parse(localStorage.getItem("account"))
            : []
    );
    //role
    const [isAdmin, setIsAdmin] = useState(
        localStorage.getItem("isAdmin")
            ? JSON.parse(localStorage.getItem("isAdmin"))
            : []
    );
    // token.
    const [plainTextToken, setPlainTextToken] = useState(
        localStorage.getItem("plainTextToken")
            ? JSON.parse(localStorage.getItem("plainTextToken"))
            : []
    );
    //sing in - sign out
    const [signOut, setSignOut] = useState();
    // items for sale.
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    // items in ecommerce cart.
    const [cartProducts, setCartProducts] = useState([]);
    const [count, setCount] = useState(0);
    //order checkout
    const [checkout, setCheckout] = useState(
        localStorage.getItem("checkout")
            ? JSON.parse(localStorage.getItem("checkout"))
            : []
    );
    // orders for user.
    const [order, setOrder] = useState(
        localStorage.getItem("orders")
            ? JSON.parse(localStorage.getItem("orders"))
            : []
    );
    //communes
    const [communes, setCommunes] = useState([]);
    // info detail item / product detail open/close.
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const [productToShow, setProductToShow] = useState({});
    //search products.
    const [searchByTitle, setSearchByTitle] = useState(null);
    // info cart order checkout side menu open/close.
    const [isCheckoutSideMenu, setIsCheckoutSideMenuOpen] = useState(false);
    //modal
    const [modal, setIsOpenModal] = useState(false);
    //alerts
    const [showAlert, setShowAlert] = useState(false);
    const [textAlert, setTextAlert] = useState(false);
    const [colorAlert, setColorAlert] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    const filteredItemsByTitle = (items, searchByTitle) => {
        if (searchByTitle)
            return items?.filter((item) =>
                item.title.toLowerCase().includes(searchByTitle.toLowerCase())
            );
    };
    useEffect(() => {
        if (searchByTitle)
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }, [items, searchByTitle]);
    useEffect(() => {
        AxiosInstance.get("api/communes").then((response) => {
            setCommunes(response.data);
        });
    }, []);
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
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                account,
                setAccount,
                modal,
                setIsOpenModal,
                plainTextToken,
                setPlainTextToken,
                communes,
                setCommunes,
                signOut,
                setSignOut,
                isAdmin,
                setIsAdmin,
                checkout,
                setCheckout,
                showAlert,
                setShowAlert,
                textAlert,
                setTextAlert,
                colorAlert,
                setColorAlert,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
