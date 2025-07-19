import React from "react";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Header from "./components/header/Header";

export default function Home() {
  return (
      <>
      <main>
        <Banner />
        <Explore/>
      </main>
    </>
  );
}
