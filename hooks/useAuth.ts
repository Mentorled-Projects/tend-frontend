"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  SignupFormData, 
  LoginFormData, 
  CreatePasswordFormData, 
  ForgotPasswordFormData,
  VerificationFormData,
  FormState
} from "@/types";

export const useSignup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    organization: "",
    email: "",
    password: "",
  });
  
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    error: null
  });
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isLoading: true, error: null });

    try {
      // API call logic
      console.log("Submitting:", formData);

      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      
      router.push("/pages/Verification");
    } catch (error) {
      console.error("Signup error:", error);
      setFormState({ 
        ...formState, 
        error: error instanceof Error ? error.message : "An error occurred during signup"
      });
    } finally {
      setFormState({ ...formState, isLoading: false });
    }
  };

  return {
    formData,
    formState,
    handleChange,
    handleSubmit
  };
};

export const useLogin = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    error: null
  });
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isLoading: true, error: null });

    try {
      // API call logic
      console.log("Logging in with:", formData);

      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      
      router.push("/Dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setFormState({ 
        ...formState, 
        error: error instanceof Error ? error.message : "An error occurred during login"
      });
    } finally {
      setFormState({ ...formState, isLoading: false });
    }
  };

  return {
    formData,
    formState,
    handleChange,
    handleSubmit
  };
};

export const useCreatePassword = () => {
  const [formData, setFormData] = useState<CreatePasswordFormData>({
    password: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);
  
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    error: null
  });
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Check if passwords match
    if (name === "confirmPassword" || (name === "password" && formData.confirmPassword)) {
      const match = name === "confirmPassword" 
        ? value === formData.password 
        : formData.confirmPassword === value;
      setPasswordMatch(match);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    
    setFormState({ ...formState, isLoading: true, error: null });
    
    try {
      // API call logic
      console.log("Creating password:", formData);
      
     
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    
      setResetSuccess(true);
      
     
      setTimeout(() => {
        router.push("/pages/Login");
      }, 2000);
    } catch (error) {
      console.error("Password creation error:", error);
      setFormState({ 
        ...formState, 
        error: error instanceof Error ? error.message : "An error occurred while creating the password"
      });
    } finally {
      setFormState({ ...formState, isLoading: false });
    }
  };

  return {
    formData,
    formState,
    showPassword,
    showConfirmPassword,
    passwordMatch,
    resetSuccess,
    handleChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSubmit
  };
};

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSubmitted: false,
    error: null
  });
  
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isLoading: true, error: null });
    
    try {
      // API call logic
      console.log("Requesting password reset for:", email);
      
   
      await new Promise(resolve => setTimeout(resolve, 1000));
      
     
      setFormState({ isLoading: false, isSubmitted: true, error: null });
      
      
      setTimeout(() => {
        router.push("/Verification");
      }, 3000);
    } catch (error) {
      console.error("Password reset error:", error);
      setFormState({ 
        isLoading: false, 
        isSubmitted: false, 
        error: error instanceof Error ? error.message : "An error occurred during password reset"
      });
    }
  };

  return {
    email,
    formState,
    handleEmailChange,
    handleSubmit
  };
};

export const useVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
   
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setCode(digits);

    
      inputRefs.current[5]?.focus();
    }
  };

  const resendCode = async () => {
    
    setTimer(60);

   
    console.log("Resending verification code");

 
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if code is complete
    if (code.some((digit) => !digit)) {
      return;
    }

    setIsLoading(true);

    try {
      // API call to verify the code
      console.log("Verifying code:", code.join(""));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show verification success message
      setVerified(true);

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/pages/Login");
      }, 3000);
    } catch (error) {
      console.error("Verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    code,
    isLoading,
    timer,
    verified,
    inputRefs,
    setCode,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    resendCode,
    handleSubmit
  };
};