import classNames from 'classnames'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  outlined?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right' // default left
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  outlined = false,
  type = 'button',
  className,
  onClick,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold py-3 sm:py-4 text-base sm:text-lg transition-colors shadow-lg w-full rounded-full disabled:opacity-60 disabled:cursor-not-allowed'

  const variants: Record<string, string> = {
    primary: outlined
      ? 'border border-emerald-700 text-emerald-700 bg-transparent hover:bg-emerald-50'
      : 'bg-emerald-700 hover:bg-emerald-600 text-white shadow-emerald-900/20',
    secondary: outlined
      ? 'border border-gray-500 text-gray-700 bg-transparent hover:bg-gray-50'
      : 'bg-gray-600 hover:bg-gray-500 text-white shadow-gray-900/20'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={classNames(baseStyles, variants[variant], className)}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="flex">{icon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
