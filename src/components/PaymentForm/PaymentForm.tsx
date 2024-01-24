import {CardCvcElement, CardExpiryElement, CardNumberElement} from "@stripe/react-stripe-js";
import React from "react";

const PaymentForm = () => {
	return (
		<>
			<span>Numéro de carte</span>
			<CardNumberElement options={{showIcon: true}} className={"p-4 mb-5 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"} />
			<div className={"flex mt-2"}>
				<div className={"w-1/2 pe-2"}>
					<span>Date d&apos;expiration</span>
					<CardExpiryElement className={"p-4 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"} />
				</div>
				<div className={"w-1/2 ps-2"}>
					<span>CVV</span>
					<CardCvcElement className={"p-4 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"} />
				</div>
			</div>
			<div className={"text-center"}>
				<button type="submit" className={"bg-teal-600 px-6 py-2 rounded-2xl text-lime-50 mt-5"}>Valider</button>
			</div>
		</>
	)
}

export default PaymentForm