import { createContext, useState, useEffect } from "react";
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    // my acount 
    const [account,setAccount] = useState(localStorage.getItem('account') ? localStorage.getItem('account') : [])
    //sing in - sign out 
    const [signOut,setSignOut] = useState(); 
    // items for sale.
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    // items in ecommerce cart.
    const [cartProducts, setCartProducts] = useState([]);
    const [count, setCount] = useState(0);
    // orders for user.
    const [order, setOrder] = useState([]);
    // info detail item / product detail open/close.
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const [productToShow, setProductToShow] = useState({});
    //search products.
    const [searchByTitle, setSearchByTitle] = useState(null);
    // info cart order checkout side menu open/close.
    const [isCheckoutSideMenu, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) =>
            item.title.toLowerCase().includes(searchByTitle)
        );
    };
    useEffect(() => {
        if (searchByTitle)
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
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
                account,
                setAccount,
                signOut,
                setSignOut, 
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
