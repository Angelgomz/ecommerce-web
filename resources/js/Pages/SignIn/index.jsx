import { useContext,useState} from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import FormSignIn  from "../../Components/FormSignIn";
const SignIn = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <FormSignIn context={context}></FormSignIn>
        </Layout>
    );
};

export default SignIn;
