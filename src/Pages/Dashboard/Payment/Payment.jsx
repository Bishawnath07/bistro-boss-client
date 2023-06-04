import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum , item) => sum + item.price , 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading='please procced' heading='Payment'></SectionTitle>
            <h3>payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;