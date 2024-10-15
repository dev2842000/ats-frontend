import Link from 'next/link';
import React from 'react';

const CustomLink = ({
  prefetch = true,
  href,
  style = "",
  variant = "primary", // default variant
  size = "medium", // default size
  children,
}) => {
  // Define default styles for variants and sizes
  const variantStyles = {
    primary: "text-blue-500 hover:text-blue-700",
    secondary: "text-gray-500 hover:text-gray-700",
    danger: "text-red-500 hover:text-red-700",
  };

  const sizeStyles = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-md",
    large: "py-3 px-6 text-lg",
  };

  return (
    <Link href={href} prefetch={prefetch} locale={false} legacyBehavior>
      <a className={`font-bold rounded focus:outline-none focus:shadow-outline ${variantStyles[variant]} ${sizeStyles[size]} ${style}`}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
