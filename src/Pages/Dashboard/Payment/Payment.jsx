import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChackoutForm from "./ChackoutForm";

export default function Payment() {
  //todo: add publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_Payment);
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} />
      <Elements stripe={stripePromise}>
        <ChackoutForm />
      </Elements>
    </div>
  );
}
