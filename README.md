![Stripe Next.js](https://www.premieroctet.com/_next/image?url=%2Fblog%2Fdecouverte-de-stripe%2Fillu.png&w=1920&q=75)

---

A very simple component with Next.js and Stripe to integrate a credit card payment system on your website

## Installation

First, clone this repository

```bash
git clone https://github.com/lucasmartinelle/StripeNextComponent
```

Next, you need to install the project with the following commands

```bash
npm install
npm run build
```

All you need to operate this component are your platform access keys. Create an account, retrieve your access keys and write them as follows in an `.env.local` file in the project root

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your public key>
STRIPE_SECRET_KEY=<your secret key>
```

Finally, to launch the project, simply run the following command

```bash
npm run start
```

Enjoy :)
