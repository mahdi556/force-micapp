"use client";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import { ToggleProvider } from "@/context/ToggleContext";
// import SideBar from "@/components/sidebar/SideBare";
import Head from "next/head";
import Footer from "@/components/Footer";
import { StatusBar, Style } from "@capacitor/status-bar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
const SideBar = dynamic(() => import("@/components/sidebar/SideBare"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  

  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body
        style={{
          paddingTop: 65,
        }}
      >
        <ToggleProvider>
          <Header />
          <div
            className="
          // d-flex justify-content-start  
          position-relative
           "
          >
            <SideBar />
            {children}
          </div>
          <Footer />
        </ToggleProvider>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      />
    </html>
  );
}
