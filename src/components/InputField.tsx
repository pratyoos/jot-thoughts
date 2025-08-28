import type { ReactNode } from 'react';
import { Label } from './ui/label';

type InputFieldProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children?: ReactNode; // For optional icons/buttons
};

const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  children,
}: InputFieldProps) => (
  <div className="mb-4 space-y-1">
    <Label htmlFor={name}>{label}</Label>
    <div className="relative">
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {children && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
          {children}
        </div>
      )}
    </div>
  </div>
);

export default InputField;
