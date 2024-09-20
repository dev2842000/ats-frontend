const Button = ({ type, children,style, onClick, disabled }) => {
  
    return (
      <button
        type={type}
        className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${style}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  export default Button;
  