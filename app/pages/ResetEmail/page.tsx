"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResetEmail = () => {
  // This could be dynamically generated or passed as a prop in a real implementation
//   const verificationCode = "231234";
  
  return (
    <div className="flex min-h-screen bg-gray-50 justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-md shadow-sm overflow-hidden">
        {/* Header with Logo */}
        <div className="p-6 pb-4">
          <Image 
            src="/assets/logo.png" 
            alt="Tend Logo" 
            width={100} 
            height={32}
            priority
          />
        </div>
        
        {/* Main Content */}
        <div className="px-6 pb-6">
          <h1 className="text-lg font-semibold mb-4">TEND: Verification Code</h1>
          
          <p className="mb-2">Hi Favor</p>
          {/* <p className="text-2xl font-bold mb-6">{verificationCode}</p> */}
          
          <p className="text-sm text-gray-700 mb-2">
            A password rest was requested for your account. To set a new password, Click 
            <Link href="/pages/ResetPassword" className="text-teal-500 hover:underline">
             Here
            </Link>
          </p>
          <p className="text-sm text-gray-700 mb-6">
            Link expires within the next 5 minutes {" "}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            If you didn't expect this email, feel free to ignore it.
          </p>
          
          <p className="text-sm mb-1">With care,</p>
          <p className="text-sm font-semibold mb-8">TEND</p>
          
          {/* Feedback/Help Section */}
          <div className="bg-teal-500 text-white p-4 rounded-md">
            <p className="text-sm mb-2">
              Need help? <Link href="/support" className="underline">Contact our support team</Link> or no longer interested in our newsletters?
              <Link href="/unsubscribe" className="underline"> Unsubscribe</Link>. Want to give us feedback? Let us know what you think on our{" "}
              <Link href="/feedback" className="underline">feedback form</Link>.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <Link href="https://facebook.com/tend" aria-label="Facebook">
                <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-teal-500 text-xs">f</span>
                </div>
              </Link>
              <Link href="https://twitter.com/tend" aria-label="Twitter">
                <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-teal-500 text-xs">t</span>
                </div>
              </Link>
              <Link href="https://instagram.com/tend" aria-label="Instagram">
                <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-teal-500 text-xs">i</span>
                </div>
              </Link>
              <Link href="https://linkedin.com/company/tend" aria-label="LinkedIn">
                <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-teal-500 text-xs">in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetEmail;