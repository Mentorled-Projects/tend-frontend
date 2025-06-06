"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "@/hooks/useAuth";

const Login = () => {
  const { formData, formState, handleChange, handleSubmit } = useLogin();
  const { isLoading, error } = formState;

  return (
    <div className="flex flex-col items-center min-h-screen tend-bg-gradient py-8">
      {/* Logo - Outside the card, left-aligned to the container */}
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
      
      <div className="w-full max-w-xl mx-auto p-8 bg-white rounded-lg shadow-sm">
        <div className="mb-8 text-left">
          <h2 className="text-xl font-medium">Sign In</h2>
        </div>

        {error && (
          <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-tend-teal px-0"
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
              className="border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-tend-teal px-0"
              required
            />
          
          </div>

            <div className="flex justify-between">
              <Link
                href="/pages/CreatePassword"
                className="text-tend-teal text-xs hover:underline"
              >
                Create Password
              </Link>
              <Link
                href="/pages/ForgotPassword"
                className="text-tend-teal text-xs hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

          <Button
            type="submit"
            className="w-full bg-tend-teal hover:bg-tend-teal/90 text-white py-6 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

           <div className="flex items-start">
                      <label htmlFor="terms" className="text-xs text-gray-600">
                        Already have an account? {" "}
                        <Link href="/pages/Signup" className="text-teal-500 hover:underline">
                          Sign Up
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
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 border-0 shadow-none cursor-pointer"
          >
            <FcGoogle size={18} />
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;