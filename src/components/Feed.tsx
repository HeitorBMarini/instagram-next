"use client";

import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Sugestion from "./Sugestion";

export default function Feed() {
  return (
    <div
      className="grid grid-cols-1
    md:max-w-6xl mx-auto
     md:grid-cols-2 "
    >
      <section className="md:cols-span-2">
        <Stories />

        <Posts />
      </section>

      <section
        className="md:col-span -1 hidden
    md:inline-grid"
      >
        <div className="fixed w-[380px]">
          <MiniProfile />

          <Sugestion/>
        </div>
      </section>
    </div>
  );
}
