import classNames from "classnames";
import React, { InputHTMLAttributes, ReactNode } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

// Root component
interface InputRootProps {
  children: ReactNode;
  className?: string;
}

const Input = ({ children, className }: InputRootProps) => {
  return <div className={`${className}`}>{children}</div>;
};

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

// ✅ Label
const Label = ({ children, htmlFor }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium text-medium-gray whitespace-nowrap"
  >
    {children}
  </label>
);

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = ({ label, ...props }: RadioProps) => (
  <label className="cursor-pointer select-none inline-flex items-center gap-2 relative">
    {/* Hide the actual radio but keep it in the DOM */}
    <input type="radio" {...props} className="sr-only peer" />
    {/* Custom circle */}
    <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-light-gray transition-colors peer-checked:border-custom-green peer-checked:bg-custom-green">
      <span className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></span>
    </span>
    {label && <span className="text-sm text-gray-700">{label}</span>}
  </label>
);

// ✅ Text Field
interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  hasValidation?: boolean;
  errorMessage?: string | string[];
}

const Field = ({
  hasIcon,
  hasValidation = false,
  errorMessage,
  ...props
}: FieldProps) => {
  const invalidInputStyles = classNames({
    "border-red-500": errorMessage,
  });

  return (
    <div className="w-full flex flex-col gap-1">
      <input
        {...props}
        className={`w-full border-2 rounded-xl px-3 py-2 focus:outline-custom-green transition-colors outline-transparent duration-300 border-medium-gray/20 font-medium ${
          hasIcon ? "pl-10" : ""
        } ${invalidInputStyles}`}
      />
      {hasValidation && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

// ✅ Textarea
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasIcon?: boolean;
  hasValidation?: boolean;
  errorMessage?: string;
}

const Textarea = ({
  hasIcon,
  hasValidation = false,
  errorMessage,
  ...props
}: TextareaProps) => {
  const invalidTextAreaStyles = classNames({
    "outline-red-500": errorMessage,
  });

  return (
    <div className="w-full flex flex-col">
      <textarea
        {...props}
        className={`w-full border-2 rounded-xl px-3 py-2 focus:outline-custom-green transition-colors outline-transparent duration-300 border-medium-gray/20 font-medium ${
          hasIcon ? "pl-10" : ""
        } ${invalidTextAreaStyles}`}
      />
      {hasValidation && errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

// ✅ Icon
const Icon = ({ children }: { children: ReactNode }) => (
  <span className="absolute left-3 text-gray-400 flex items-center">
    {children}
  </span>
);

// ✅ Checkbox
type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ checked, ...props }: CheckboxProps) => (
  <label className="cursor-pointer select-none inline-flex items-center">
    {checked ? (
      <IoCheckbox size={40} className="text-green-600" />
    ) : (
      <MdCheckBoxOutlineBlank size={40} className="text-light-gray" />
    )}
    <input type="checkbox" {...props} checked={checked} className="hidden" />
  </label>
);

// Attach subcomponents
Input.Label = Label;
Input.Field = Field;
Input.Textarea = Textarea;
Input.Icon = Icon;
Input.Checkbox = Checkbox;
Input.Radio = Radio;

export default Input;
