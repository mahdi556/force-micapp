"use client";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import { ToggleProvider } from "@/context/ToggleContext";
import Splash from "@/components/main/Splash";
import Head from "next/head";
import Footer from "@/components/Footer";
import { StatusBar, Style } from "@capacitor/status-bar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import "sweetalert2/src/sweetalert2.scss";
// import { ScreenOrientation } from "@capacitor/sc";
const SideBar = dynamic(() => import("@/components/sidebar/SideBare"), {
  ssr: false,
});
import { App as CapacitorApp } from "@capacitor/app";
import axios from "axios";
import { AuthProvider } from "@/context/AuthContext";
import LoadingModal from "@/components/LoadingModal";

export default function RootLayout({ children }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  const [statusBarColor, setStatusBarColor] = useState("#11999e");
  const [appLoaded, setAppLoaded] = useState(true);
  // const screenOrientation = new ScreenOrientation();
  // screenOrientation.lock("portrait");
  useEffect(() => {
    //  window.screen.orientation.lock('portrait');
    // setTimeout(() => {
    //   setAppLoaded(true);
    // }, 6000);
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        // The user is on the root page, so exit the app.
        CapacitorApp.exitApp();
      } else {
        // There are more pages to go back to, so go back one page.
        window.history.back();
      }
    });
    CapacitorApp.addListener("onAppOpen", () => {
      if (Capacitor.isNativePlatform()) {
        StatusBar.setBackgroundColor("#ffffff");
      }
    });
  }, []);
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body
        style={{
          paddingTop: 80,
        }}
      >
        <AuthProvider>
          <ToggleProvider>
            {appLoaded ? (
              <>
                <Header />
                <LoadingModal />
                <div
                  style={{
                    zIndex: 100,
                  }}
                >
                  <SideBar />
                  {children}
                </div>
                <Footer />
              </>
            ) : (
              <Splash />
            )}
          </ToggleProvider>
        </AuthProvider>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      />
    </html>
  );
}
