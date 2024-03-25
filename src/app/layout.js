'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { appStore } from "@/Store/appStore";
import { Provider } from "react-redux";

import LayoutWrapper from "./LayoutWrapper/LayoutWrapper";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
        </Provider>
        </body>
    </html>
  );
}
