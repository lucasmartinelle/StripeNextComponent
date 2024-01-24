import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	typescript: true
});

export async function POST(req: NextRequest) {
	const { data } = await req.json();
	const { amount, name, firstname, email } = data;

	const fullname = firstname + ' ' + name;

	let customer_id;

	// on commence par chercher le client
	try {
		const customers = await stripe.customers.search({
			query: `name:'${fullname}' AND email:'${email}'`
		});

		if(customers.data.length == 0){
			const customer = await stripe.customers.create({
				name: fullname,
				email: email,
			});
			customer_id = customer.id
		} else {
			customer_id = customers.data[0].id
		}
	} catch (error: any) {
		return new NextResponse(error, {
			status: 400,
		});
	}

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Number(amount) * 100,
			currency: "EUR",
			customer: customer_id,
			receipt_email: email
		});

		return new NextResponse(paymentIntent.client_secret, { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 400,
		});
	}
}