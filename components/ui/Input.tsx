import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputRootProps {
  children: ReactNode;
}

const Input = ({ children }: InputRootProps) => {
  return <div className="flex flex-col gap-1 w-full">{children}</div>;
};

// ✅ Label
const Label = ({ children }: { children: ReactNode }) => (
  <label className="text-sm font-medium text-gray-700">{children}</label>
);

// ✅ Text Field
interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
}

const Field = ({ hasIcon, ...props }: FieldProps) => (
  <input
    {...props}
    className={`w-full border rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
      hasIcon ? "pl-10" : ""
    }`}
  />
);

// ✅ Icon
const Icon = ({ children }: { children: ReactNode }) => (
  <span className="absolute left-3 text-gray-400 flex items-center">
    {children}
  </span>
);

// ✅ Checkbox
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const Checkbox = ({ label, description, ...props }: CheckboxProps) => (
  <label className="flex items-start gap-2 cursor-pointer select-none">
    <input
      type="checkbox"
      {...props}
      className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
    />
    <span className="flex flex-col">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {description && (
        <span className="text-xs text-gray-500">{description}</span>
      )}
    </span>
  </label>
);

// Attach subcomponents
Input.Label = Label;
Input.Field = Field;
Input.Icon = Icon;
Input.Checkbox = Checkbox;

export default Input;
