"use client";
import { useEffect, useState } from "react";

export const useProps = () => {
  const [age, setAge] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  function calculateElapsedTime(startDate: Date): string {
    const now = new Date();
    let delta = now.getTime() - startDate.getTime(); // 経過時間をミリ秒で計算

    // 各単位に変換
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    delta -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(delta / (1000 * 60 * 60));
    delta -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(delta / (1000 * 60));
    delta -= minutes * 1000 * 60;
    const seconds = Math.floor(delta / 1000);

    return `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
  }

  // 基準となる日時（例：2001年12月26日）

  // 経過時間を更新する
  useEffect(() => {
    const startDate = new Date(2001, 11, 26);
    const interval = setInterval(() => {
      setElapsedTime(calculateElapsedTime(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ハヤトくんの今年の年齢を計算する
  //   useEffect(() => {
  //     const HayatoBD = new Date(2001, 11, 26);
  //     const today = new Date();
  //     const age = today.getFullYear() - HayatoBD.getFullYear();
  //     setAge(age);
  //   }, []);

  return { age, elapsedTime };
};
