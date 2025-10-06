import React from "react";

export const IconButtonType = {
  main: "main",
  simple: "simple",
} as const;

type IconButtonTypeKeys = keyof typeof IconButtonType;
type IconButtonVariant = (typeof IconButtonType)[IconButtonTypeKeys];

type IconButtonProps = {
  onPress?: () => void;
  icon?: React.ReactNode;
  h?: string; // Tailwind height class
  w?: string; // Tailwind width class
  iconColor?: string; // Tailwind fill class
  shadow?: boolean;
  gradientColors?: string[];
  locations?: number[];
  type?: IconButtonVariant;
};

export default function IconButton({
  onPress,
  icon,
  h,
  w,
  iconColor,
  shadow = false,
  gradientColors,
  type = IconButtonType.main,
}: IconButtonProps) {
  // colores de gradiente según tipo
  const gradientColorsValue =
    gradientColors && gradientColors.length > 0
      ? gradientColors
      : type === IconButtonType.main
        ? ["from-cyan-200", "via-primary", "to-cyan-700"]
        : ["from-transparent", "to-transparent"];

  // color del ícono según tipo
  const iconColorValue =
    iconColor ?? (type === IconButtonType.main ? "fill-white" : "fill-surface");

  const cloneWithWhiteIconColor = (child: React.ReactNode) => {
    return React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, {
        iconColor: iconColorValue,
        h: h,
        w: w,
      })
      : child;
  };

  return (
    <button
      type="button"
      onClick={onPress}
      className={`relative aspect-square p-2 rounded-full overflow-hidden transition-all duration-400 ease-in-out hover:scale-[95%] active:scale-[90%] ${shadow ? "shadow-lg" : ""
        }`}
    >
      {/* Gradiente */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-b ${gradientColorsValue.join(
          " "
        )}`}
      />

      {/* Icono */}
      {icon && <div className="relative flex items-center justify-center">
        {cloneWithWhiteIconColor(icon)}
      </div>}
    </button>
  );
}
