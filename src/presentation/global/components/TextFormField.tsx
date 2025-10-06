import React, { ReactNode, ChangeEvent } from "react";

type TextFormFieldStyles = {
  focusBackgroundColor?: string;
  focusBackgroundLabelColor?: string;
  unfocusBackgroundColor?: string;
  unfocusBorderColor?: string;
  focusBorderColor?: string;
  unfocusLabelColor?: string;
  focusLabelColor?: string;
  unFocusIconColor?: string;
  focusIconColor?: string;
  focusLabelColorOutside?: string;
  focusLabelBackgroundOutside?: string;
};

type TextFormFieldProps = {
  labelText: string;
  placeholder?: string;
  name: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textColor?: string;
  textSize?: string;
  rounded?: string;
  type?: string;
  enabled?: boolean;
  regExp?: RegExp;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  autoComplete?: boolean;
  multiline?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  styles?: TextFormFieldStyles;
};

export default function TextFormField({
  labelText,
  placeholder = "",
  name,
  leftIcon,
  rightIcon,
  textColor = "text-black",
  textSize = "text-base",
  rounded = "rounded-3xl",
  type = "text",
  enabled = true,
  regExp,
  value,
  onChange,
  error = false,
  autoComplete = false,
  multiline = false,
  onKeyDown,
  styles = {
    focusBackgroundColor: "focus-within:bg-primaryLite",
    focusBackgroundLabelColor: "peer-focus:bg-primaryLite",
    unfocusBackgroundColor: "bg-gray-100",
    unfocusBorderColor: "border-gray-400",
    focusBorderColor: "focus-within:border-primary",
    unfocusLabelColor: "text-gray-400",
    focusLabelColor: "peer-focus:text-primary",
    unFocusIconColor: "fill-gray-400",
    focusIconColor: "group-focus-within:fill-primary",
    focusLabelColorOutside: "group-focus:text-primary",
    focusLabelBackgroundOutside: "group-focus:bg-primaryLite",
  },
}: TextFormFieldProps) {
  const {
    focusBackgroundColor,
    focusBackgroundLabelColor,
    unfocusBackgroundColor,
    unfocusBorderColor,
    focusBorderColor,
    unfocusLabelColor,
    focusLabelColor,
    unFocusIconColor,
    focusIconColor,
    focusLabelColorOutside,
    focusLabelBackgroundOutside,
  } = error
    ? {
        focusBackgroundColor: "focus-within:bg-red-100",
        focusBackgroundLabelColor: "peer-focus:bg-red-100",
        unfocusBackgroundColor: "bg-red-100",
        unfocusBorderColor: "border-red-400",
        focusBorderColor: "focus-within:border-red-600",
        unfocusLabelColor: "text-red-400",
        focusLabelColor: "peer-focus:text-red-600",
        unFocusIconColor: "bg-red-400",
        focusIconColor: "group-focus-within:bg-red-600",
        focusLabelColorOutside: "group-focus:text-red-600",
        focusLabelBackgroundOutside: "group-focus:bg-red-100",
      }
    : styles;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue === "" || !regExp || regExp.test(newValue)) {
      onChange(e);
    }
  };

  return (
    <div
      className={`w-full ${rounded} flex items-center border-2 transition-colors relative group ${unfocusBorderColor} ${unfocusBackgroundColor} ${focusBorderColor} ${focusBackgroundColor} ${
        !enabled && "opacity-50 pointer-events-none"
      }`}
      tabIndex={0}
    >
      {leftIcon && (
        <div className="flex items-center pl-2">
          {React.isValidElement(leftIcon) &&
          (leftIcon.type?.toString().includes("IconButton") ||
            leftIcon.type?.toString().includes("Icon"))
            ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                iconColor: `${unFocusIconColor} ${focusIconColor}`,
                background: "bg-transparent",
              })
            : leftIcon}
        </div>
      )}

      <div className="relative w-full">
        {multiline ? (
          <textarea
            id={labelText}
            name={name}
            className={`block py-[12px] px-2 w-full ${textColor} ${textSize} bg-transparent border-none 
focus:outline-none focus:ring-0 peer rounded-3xl`}
            aria-describedby="outlined_success_help"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            disabled={!enabled}
            autoComplete={autoComplete ? "on" : "off"}
            style={{ minHeight: "48px" }}
            onKeyDown={onKeyDown}
          />
        ) : (
          <input
            type={type}
            id={labelText}
            name={name}
            className={`block py-[12px] px-2 w-full ${textColor} ${textSize} bg-transparent border-none 
focus:outline-none focus:ring-0 peer rounded-3xl`}
            aria-describedby="outlined_success_help"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            disabled={!enabled}
            autoComplete={autoComplete ? "on" : "off"}
            onKeyDown={onKeyDown}
          />
        )}
        <label
          htmlFor={labelText}
          className={`absolute ${textSize} ${unfocusLabelColor} ${focusLabelColor} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${unfocusBackgroundColor} ${focusBackgroundLabelColor}
${focusLabelColorOutside} ${focusLabelBackgroundOutside} px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all rounded-3xl`}
        >
          {labelText}
        </label>
      </div>

      {rightIcon && (
        <div className="flex items-center pr-2">
          {React.isValidElement(rightIcon) &&
          (rightIcon.type?.toString().includes("IconButton") ||
            rightIcon.type?.toString().includes("Icon"))
            ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                iconColor: `${unFocusIconColor} ${focusIconColor}`,
                background: "bg-transparent",
              })
            : rightIcon}
        </div>
      )}
    </div>
  );
}
