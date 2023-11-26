import Image from "next/image";
import { FireworksBackground } from "./fireworks";

type Props = {
  age: number;
  elapsedTime: string;
};

export const View = ({ age, elapsedTime }: Props) => {
  return (
    <div>
      <FireworksBackground />
      <div className="pt-[50px] text-xl text-white font-bold z-10">
        <div className="flex justify-center">
          藤井ハヤトくんお誕生日おめでとう！
        </div>
        <div className="flex justify-center">君が生まれてから</div>
        <div className="flex justify-center">{elapsedTime}</div>
        <div className="flex justify-center">経ったよ！</div>
        <div className="flex justify-center">
          <Image
            src="/hayato.jpg"
            alt="藤井ハヤトくん"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
