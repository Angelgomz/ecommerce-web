import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const Alert = ({}) => {
    const context = useContext(ShoppingCartContext);
    return (
        <div
            className={
                context.showAlert
                    ? `${context.colorAlert} border  px-4 py-3 rounded relative`
                    : "hidden"
            }
            role="alert"
        >
            <span className="block sm:inline text-white">
                {context.textAlert}
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <strong>X</strong>
            </span>
        </div>
    );
};
export { Alert };
