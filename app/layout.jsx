import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ToasterContext from "@components/Toaster";

export const metadata = {
  title: "GoDeliver",
  description: "Order delicious food & Share AI Prompts",
  icons: {
    icon: "/logo.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <ToasterContext/>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
