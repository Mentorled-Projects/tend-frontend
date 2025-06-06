"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useState } from "react";
import { useForgotPassword } from "@/hooks/useAuth";
import Link from "next/link";

const ForgotPassword = () => {
  const { email, formState, handleEmailChange, handleSubmit } =
    useForgotPassword();
  const { isLoading, isSubmitted, error } = formState;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-xl mx-auto mb-6">
        {/* Logo */}
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
      </div>

      {/* Card Container */}
      <div className="w-full max-w-xl mx-auto p-10 bg-white rounded-lg shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-medium">Forgot Password</h2>
          <p className="text-gray-500 text-sm mt-1">
            No worries! Enter your email address below and we will send you a
            code to reset password.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {isSubmitted ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">
              Password reset link sent! Please check your email inbox and follow
              the instructions.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-500 text-white hover:bg-teal-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>

             <div className="flex items-start space-x-2 pt-2">
            <label htmlFor="terms" className="text-xs text-gray-600">
              By Signing up, You're agreeing to our{" "}
              <Link href="/terms" className="text-teal-500 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-teal-500 hover:underline">
                Privacy Policy. 
              </Link>
              <span> Go back to <Link href="/pages/Login" className="text-teal-500 hover:underline">
                Login. 
              </Link></span>
              
            </label>
          </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
