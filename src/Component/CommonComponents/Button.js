const Button = ({
  type = "button",
  children,
  style = "",
  onClick,
  disabled = false,
  variant = "primary", // default variant
  size = "medium", // default size
}) => {
  
  // Define default styles for variants and sizes
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  const sizeStyles = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-md",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      type={type}
      className={`font-bold rounded focus:outline-none focus:shadow-outline ${variantStyles[variant]} ${sizeStyles[size]} ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
