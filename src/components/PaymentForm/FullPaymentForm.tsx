"use client";

import { useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, {useRef, useState} from "react";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import UserForm from "@/components/PaymentForm/UserForm";


const FullPaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [section, setSection] = useState("user");

	const prenom = useRef("");
	const nom = useRef("");
	const email = useRef("");

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(section == "user") {
			setSection("payment");
		} else if(section == "payment") {
			const cardNumber = elements?.getElement("cardNumber");

			try {
				if (!stripe || !cardNumber) {
					return null;
				}
				const {data} = await axios.post("/api/create-payment-intent", {
					data: { amount: 1, name: nom.current, firstname: prenom.current, email: email.current },
				});
				const clientSecret = data;

				await stripe?.confirmCardPayment(clientSecret, {
					payment_method: {card: cardNumber},
				});

				console.log("paiement réussi");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<form onSubmit={onSubmit} className={"m-auto mt-10 bg-white rounded-xl shadow-2xl p-12 w-1/3"}>
			<h1 className={"text-3xl font-bold mb-1"}>Paiement de votre commande</h1>

			<h3 className={"text-md mb-3"}>Lorem ipsum - <b>1€</b></h3>

			<div className={"flex justify-between"}>
				<button
					type={"button"}
					className={"w-1/2 text-center border-2 border-teal-600 py-2 border-e-0 " +
						((section == 'user') ? " text-white bg-teal-600" : "border-opacity-50")}
					onClick={() => setSection("user")}>
					Informations utilisateur
				</button>
				<button
					type={"button"}
					className={"w-1/2 text-center border-2 border-teal-600 py-2 border-s-0 " +
						((section == 'payment') ? " text-white bg-teal-600" : "border-opacity-50")}
					onClick={() => setSection("payment")}>
					Informations de paiement
				</button>
			</div>
			<br />
			{
				section == "user" && <UserForm nom={nom} prenom={prenom} email={email} />
			}
			{
				section == "payment" && <PaymentForm />
			}
		</form>
	);
}

export default FullPaymentForm;