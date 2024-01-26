import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import SignInComponent  from "../../Components/SignIn";
const SignIn = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <SignInComponent context={context}></SignInComponent>
        </Layout>
    );
};

export default SignIn;
