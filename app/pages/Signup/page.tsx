// pages/Signup.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useSignup } from "@/hooks/useAuth";

const Signup = () => {
  const { formData, formState, handleChange, handleSubmit } = useSignup();
  const { isLoading, error } = formState;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      {/* Logo */}
       <div className="w-full max-w-xl mx-auto mb-6">
        <Link href='/'>
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
        {error && (
          <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-6 text-left">
            <h2 className="text-xl font-medium">Sign Up</h2>
          </div>

          <div>
            <Input
              id="organization"
              name="organization"
              placeholder="Organization"
              value={formData.organization || ""}
              onChange={handleChange}
              className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0"
              required
            />
          </div>

          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0"
              required
            />
          </div>

          <div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-teal-500 px-0"
              required
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <label htmlFor="terms" className="text-xs text-gray-600">
              By Signing up, You're agreeing to our{" "}
              <Link href="/terms" className="text-teal-500 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-teal-500 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Continue"}
          </Button>

            <div className="flex items-start">
            <label htmlFor="terms" className="text-xs text-gray-600">
              Already have an account? {" "}
              <Link href="/pages/Login" className="text-teal-500 hover:underline">
                Sign In
              </Link>{" "}
              
            </label>
          </div>

           <div className="relative my-4 flex items-center justify-center">
            <div className="w-16 border-t border-gray-200"></div>
            <span className="mx-4 text-xs text-gray-500">or</span>
            <div className="w-16 border-t border-gray-200"></div>
          </div>

          <Button
            variant="ghost"
            type="button"
            className="w-full flex items-center justify-center gap-2 border-none bg-transparent cursor-pointer"
          >
            <FcGoogle size={18} />
            Sign up with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
