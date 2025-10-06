import * as React from "react";

export const MainButtonType = {
  main: "main",
  text: "text",
  glass: "glass",
} as const;

type MainButtonTypeKey = keyof typeof MainButtonType;
type MainButtonTypeValue = (typeof MainButtonType)[MainButtonTypeKey];

type MainButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  showShadow?: boolean;
  foregroundColor?: string;
  gradientColors?: string[]; // Tailwind gradient classes
  className?: string;
  type?: MainButtonTypeValue;
  isMaxW?: boolean;
  isChildrenCenter?: boolean;
  isFab?: boolean;
  style?: React.CSSProperties;
};

export default function MainButton({
  onClick,
  children,
  leftChild,
  rightChild,
  showShadow = false,
  foregroundColor,
  gradientColors,
  className = "",
  type = MainButtonType.main,
  isMaxW = false,
  isChildrenCenter = true,
  isFab = false,
  style,
}: MainButtonProps) {
  // Colores de gradiente según el tipo (Tailwind)
  const gradientColorsValue =
    gradientColors && gradientColors.length > 0
      ? gradientColors
      : type === MainButtonType.main
      ? ["from-primaryLite", "via-primary", "to-primaryHard"]
      : type === MainButtonType.glass
      ? ["from-cyan-200/60", "via-primary/60", "to-cyan-700/60"]
      : ["from-transparent", "to-transparent"];

  const foregroundColorValue =
    foregroundColor ?? (type === MainButtonType.text ? "text-primaryHard" : "text-white");

  const cloneWithWhiteIconColor = (child: React.ReactNode) => {
    return React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, {
          iconColor: foregroundColorValue,
        })
      : child;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative ${isFab ? 'p-4' : 'p-2'} flex flex-row items-center justify-center gap-2 rounded-full overflow-hidden transition-all duration-400 ease-in-out hover:scale-[95%] active:scale-[90%] ${showShadow ? "shadow-lg" : ""} ${className}`}
      style={{ ...style }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-b ${gradientColorsValue.join(
          " "
        )}`}
      />

      {/* Left child */}
      {leftChild && (
        <div className="relative flex items-center justify-center">
          {cloneWithWhiteIconColor(leftChild)}
        </div>
      )}

      {/* Label */}
      <span
        className={`relative px-2 ${isChildrenCenter ? "text-center" : "text-start"} ${
          isMaxW ? "flex-1" : ""
        } ${foregroundColorValue}`}
      >
        {children}
      </span>

      {/* Right child */}
      {rightChild && (
        <div className="relative flex items-center justify-center">
          {cloneWithWhiteIconColor(rightChild)}
        </div>
      )}
    </button>
  );
}
