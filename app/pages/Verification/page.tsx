"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useVerification } from "@/hooks/useAuth"; // Import the hook

const Verification = () => {
  const {
    code,
    isLoading,
    timer,
    verified,
    inputRefs,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    resendCode,
    handleSubmit
  } = useVerification(); // Use the hook

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-xl mx-auto mb-6">
        {/* logo */}
        <Link href="/">
          <div className="w-48 h-20 relative">
            <Image
              src="/logo.png" // Make sure to add your logo to public folder
              alt="Tend Wellness Tracker"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Verification Card */}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-lg font-medium mb-2">Verification</h2>
          <p className="text-sm text-gray-500 mb-6">
            A code has been sent to your email for verification.
          </p>

          {verified ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-teal-500 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">
                Your Email has been Verified Successfully
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    ref={(el: HTMLInputElement | null) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    className="w-full h-12 text-center bg-teal-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    value={code[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                  />
                ))}
              </div>

              <div className="text-left">
                <p className="text-xs text-teal-500">
                  {timer > 0 ? (
                    <>
                      Resend code in{" "}
                      <span className="text-black">{timer}s</span>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={resendCode}
                      className="text-teal-500 hover:underline cursor-pointer"
                    >
                      Resend code
                    </button>
                  )}
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-500 text-white hover:bg-teal-600"
                disabled={isLoading || code.some((digit) => !digit)}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>

              <div className="flex items-start space-x-2 pt-2">
                {/* <Checkbox id="terms" className="mt-1" /> */}
                <label htmlFor="terms" className="text-xs text-gray-600">
                  By Signing up, You're agreeing to our{" "}
                  <Link href="/terms" className="text-teal-500 hover:underline">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-teal-500 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;