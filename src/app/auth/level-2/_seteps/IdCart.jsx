import Image from "next/image";
import Frame from "../../../../assets/image/Frame.png";
import Frame2 from "../../../../assets/image/Group7316.png";
import Apload from "../../../../components/elements/Apload";
import FailIcon from "../../../../components/elements/FailIcon";
import ConfirmedIcon from "../../../../components/elements/ConfirmedIcon";
import { SlArrowRight } from "react-icons/sl";
export default function UploadIdCard({ onNext }) {
    const handlePrevStep = () => {
        setSubStep(1);
      };
  const rules = [
    { img: Frame, text: "عکس باید کاملاً واضح و بدون پوشیدگی باشد.", icon: <ConfirmedIcon /> },
    { img: Frame2, text: "کارت نباید تار یا برش‌خورده باشد.", icon: <FailIcon /> },
    { img: Frame, text: "کارت نباید کج یا ناقص باشد.", icon: <FailIcon /> },
  ];

  return (
    <div className="w-full max-w-sm p-6 flex flex-col gap-6">
      <h2 className="text-center text-lg font-semibold">ثبت کارت شناسایی</h2>
      <p className="text-sm text-gray-500 font-normal">
        مطابق الگوی زیر یک عکس واضح و خوانا از کارت شناسایی خود بارگذاری کنید.
      </p>

      <ul className="text-sm text-gray-300 space-y-4">
  {rules.map((item, i) => (
    <li key={i} className="flex items-center gap-3">
      {/* آیکون اول */}
      <div className="w-5 h-5 flex-shrink-0">{item.icon}</div>

      {/* تصویر */}
      <div className="w-20 h-20 flex-shrink-0">
        <Image
          src={item.img}
          alt="id rule"
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>

      {/* متن */}
      <span>{item.text}</span>
    </li>
  ))}
</ul>


      <div className="border-2 border-dashed border-gray-500 rounded-xl gap-3 flex flex-col items-center justify-center py-8">
        <Apload />
        <span className="text-gray-400 ">عکس خود را اینجا آپلود کنید</span>
      </div>

      <p className="text-xs text-gray-500 text-center">
        حجم عکس باید کمتر از ۲ مگابایت و با فرمت JPEG یا PNG باشد.
      </p>

      <button
        onClick={onNext}
        className="bg-blue-400 text-white rounded-xl py-3 font-semibold mt-2"
      >
        تأیید و ادامه
      </button>

      <div className="w-full flex flex-row gap-1 justify-start items-center">
          <SlArrowRight />
            <button
              onClick={handlePrevStep}
              className="text-xs font-semibold text-sky-400"
            >
              مرحله قبل
            </button>
          </div>
    </div>
  );
}
