"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
// import { create_password } from "@/public/assets";
import Link from "next/link";
import { useCreatePassword } from "@/hooks/useAuth";

const CreatePassword = () => {
  const {
    formData,
    formState,
    showPassword,
    showConfirmPassword,
    passwordMatch,
    resetSuccess,
    handleChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSubmit,
  } = useCreatePassword();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      {/* Logo */}
      <div className="w-full max-w-xl mx-auto mb-6">
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

      <div className="w-full max-w-xl mx-auto p-10 bg-white rounded-lg shadow-sm">
        {/* {error && (
          <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-left">Reset Password</h2>
            <p className="text-gray-500 text-sm mt-2 text-left">
              Please enter and confirm your new password.
              <br />
              You will need to login after you reset.
            </p>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm font-medium">
              New Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-red-500 text-xs">Must be 8 characters</p>
          </div>

          <div className="space-y-1">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`${
                  !passwordMatch ? "border-red-500" : ""
                } border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={toggleShowConfirmPassword}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-red-500 text-xs">Passwords do not match</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-500 text-white hover:bg-teal-600"
            disabled={formState.isLoading || !passwordMatch}
          >
            {formState.isLoading ? "Resetting Password..." : "Reset Password"}
          </Button>

          {/* Terms and conditions text */}
          <p className="text-xs text-gray-500 text-left mt-4">
            By Signing up, You'll agree to our{" "}
            <span className="text-teal-500">Terms & Conditions</span> and{" "}
            <span className="text-teal-500">Privacy Policy</span>
          </p>
        </form>

        {/* Success message */}
        {resetSuccess && (
          <div className="mt-4 p-4 bg-teal-50 rounded-md flex items-center justify-between">
            <span className="text-sm text-gray-700 font-medium">
              Password Reset Successfully
            </span>
            <CheckCircle className="text-teal-500" size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePassword;
