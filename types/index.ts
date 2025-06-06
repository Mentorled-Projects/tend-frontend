export interface SignupFormData {
  organization: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface CreatePasswordFormData {
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export interface VerificationFormData {
  code: string[];
}

// Common form states
export interface FormState {
  isLoading: boolean;
  isSubmitted?: boolean;
  error?: string | null;
}