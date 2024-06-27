"use client";
import Confetti from "react-confetti";

import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <Confetti
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "50vh",
          zIndex: 99,
        }}
      />
      <div className="flex flex-col px-4 gap-8 items-center justify-center h-screen bg-[rgb(235,210,120)]">
        <h1 className="lg:text-4xl text-xl font-bold text-green-800 mb-4">Success!</h1>
        <p className="lg:text-2xl text-green-700 text-center">
          Your proposal has been submitted successfully.
        </p>

        <button
          className="bg-[#0B0B0B] px-6 py-4 rounded-xl text-white"
          onClick={handleClick}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
