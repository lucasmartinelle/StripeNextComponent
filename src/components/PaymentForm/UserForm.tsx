import React, {MutableRefObject} from "react";
import {CardCvcElement, CardExpiryElement} from "@stripe/react-stripe-js";

const UserForm = (
	{
		nom,
		prenom,
		email
	} : {
		nom: MutableRefObject<string>,
		prenom: MutableRefObject<string>,
		email: MutableRefObject<string>
	}
) => {
	return (
		<>
			<div className={"flex mb-4"}>
				<div className={"w-1/2 pe-2"}>
					<span>Prénom</span><br />
					<input
						className={"w-full px-4 py-3 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"}
						name={"firstname"}
						type={"text"}
						placeholder={"Marc"}
						onChange={(event) => prenom.current = event.target.value} />
				</div>
				<div className={"w-1/2 ps-2"}>
					<span>Nom</span><br />
					<input
						className={"w-full px-4 py-3 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"}
						name={"lastname"}
						type={"text"}
						placeholder={"Dubois"}
						onChange={(event) => nom.current = event.target.value}  />
				</div>
			</div>
			<span>Email</span><br />
			<input
				className={"w-full px-4 py-3 border border-gray-600 rounded-xl !bg-white autofill:!bg-white"}
				name={"email"}
				type={"email"}
				placeholder={"marc.dubois@gmail.com"}
				onChange={(event) => email.current = event.target.value} />
			<div className={"text-center"}>
				<button type="submit" className={"bg-teal-600 px-6 py-2 rounded-2xl text-lime-50 mt-5"}>Suivant</button>
			</div>
		</>
	)
}

export default UserForm;