import React from 'react'

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  leftIcon?: React.ReactNode
  error?: string
  fullWidth?: boolean
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, leftIcon, error, fullWidth, className, ...rest }, ref) => {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <div className="mt-1 relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            {...rest}
            ref={ref}
            className={[
              'block w-full sm:text-sm rounded-md border py-2',
              leftIcon ? 'pl-10' : 'pl-3',
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500',
              className,
            ].join(' ')}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'
export default InputField
