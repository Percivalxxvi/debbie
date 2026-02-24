import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useChoiceStore } from "../Store";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const { user_id } = useLocation().state;
  const { setChoiceTrue } = useChoiceStore();

  const data = {
    id: user_id,
    otp: otp,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/verify_otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res2 = await res.json();

      if (res2.message === "OTP verified successfully") {
        localStorage.setItem("user_id", res2.id);
        alert("OTP verified successfully. Welcome!");
        setChoiceTrue();
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2c311] p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Verify OTP
        </h2>

        <p className="text-center text-black mb-4">
          Enter the code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            maxLength={6}
            required
            onChange={(e) => setOtp(e.target.value)}
            className="w-full text-center text-2xl tracking-widest p-3 rounded-lg border border-black text-black focus:ring-2 focus:ring-[#f2c311]"
            placeholder="------"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg font-semibold transition
              ${
                loading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#f2c311] text-black hover:bg-black hover:text-white cursor-pointer"
              }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* <p className="text-xs text-center text-gray-500 mt-3">
          Dashboard & user setup coming soon
        </p> */}

        <p className="text-center text-black mt-4">
          Didn’t receive code?{" "}
          <button
            type="button"
            disabled
            className="font-semibold underline text-gray-400 cursor-not-allowed"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpPage;
