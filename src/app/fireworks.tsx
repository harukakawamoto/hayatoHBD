// FireworksBackground コンポーネントの定義
import React, { useEffect } from "react";
import { Fireworks } from "fireworks-js";

export const FireworksBackground = () => {
  useEffect(() => {
    const options = {
      // 花火のオプション
      speed: 3,
      acceleration: 1.05,
    };

    const fireworks = new Fireworks(document.body, options);
    fireworks.start();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: -500,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
    />
  );
};
