# Delivery app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

DeliveryApp is a web application that allows users to order food from various restaurants and have it delivered to their doorstep. The app provides a convenient and user-friendly interface for browsing restaurants, selecting dishes, and placing orders. It aims to streamline the food delivery process and enhance the overall user experience.

#### Key Features
 - Restaurant Selection: Users can explore a wide range of restaurants available on the platform.

 - Order Placement: Users can add selected items to their cart and proceed to place an order.

 - User Accounts: Users can create accounts, save their delivery addresses, and manage their preferences. They can also view their order history and easily reorder previous meals.

## Live demo
Check the live demo here 👉️ https://deliveryapp-swart.vercel.app/

## Technologies Used
- NextJs 13.4
- Next-Auth
- MongoDB
- Tailwind CSS

### Getting Started

To get started with the project, first clone this repository to your local machine:
```bash
  git clone https://github.com/medvol/deliveryapp.git
```

 Next, navigate to the project directory and install the necessary dependencies using npm:
 ```bash
  cd deliveryapp
  npm install
```

Create a .env file in the project directory and set the following environment variables:
 ```bash
GOOGLE_ID = 
GOOGLE_CLIENT_SECRET=
MONGODB_URI = 
NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_URL_INTERNAL =http://localhost:3000
NEXTAUTH_SECRET = 
```
Finally, start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
You should now be able to access the deliveryapp application at http://localhost:3000/.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
