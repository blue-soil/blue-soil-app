import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, User, UserPlus, Eye, EyeOff, LogIn } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import Button from '../../components/ui/Button';
import InputField from '../../components/forms/InputField';

const signUpSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { register: registerUser, isLoading, error, isAuthenticated } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    await registerUser(data.name, data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Create an account
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Sign up to start managing your farm with Blue Soil
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md text-sm mb-2">
              {error}
            </div>
          )}

          <InputField
            label="Full Name"
            type="text"
            autoComplete="name"
            leftIcon={<User size={18} />}
            error={errors.name?.message}
            fullWidth
            {...register('name')}
          />

          <InputField
            label="Email Address"
            type="email"
            autoComplete="email"
            leftIcon={<Mail size={18} />}
            error={errors.email?.message}
            fullWidth
            {...register('email')}
          />

          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              leftIcon={<Lock size={18} />}
              error={errors.password?.message}
              fullWidth
              {...register('password')}
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <InputField
              label="Confirm Password"
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              leftIcon={<Lock size={18} />}
              error={errors.confirmPassword?.message}
              fullWidth
              {...register('confirmPassword')}
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
            leftIcon={<UserPlus size={18} />}
            className="bg-black text-white hover:bg-gray-900 focus:ring-2 focus:ring-black"
          >
            Sign Up
          </Button>

          <div className="text-center text-sm mt-4">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;