"use client";
import { FireworksBackground } from "./fireworks";
import { useProps } from "./useProps";
import { View } from "./View";

export default function Home() {
  return (
    <>
      {/* <FireworksBackground /> */}
      <View {...useProps()} />
    </>
  );
}
