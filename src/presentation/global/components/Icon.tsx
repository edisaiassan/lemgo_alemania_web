type IconProps = {
  path?: string;
  h?: string; // clases de Tailwind
  w?: string;  // clases de Tailwind
  iconColor?: string; // clases de Tailwind
};

export const Icon = ({
  path,
  h = "h-6",
  w = "w-6",
  iconColor = "fill-primaryHard",
}: IconProps) => {
  const paths = path ? path.split("/") : [];

  return (
    <svg
      className={`${h} ${w}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map(
        (p, index) =>
          p && (
            <path
              key={index}
              className={`${iconColor} w-full h-full object-contain`}
              d={p}
              fill="currentColor"
            />
          )
      )}
    </svg>
  );
};
