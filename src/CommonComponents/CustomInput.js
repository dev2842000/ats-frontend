// Components/CustomInput.js
const CustomInput = ({ label, id, type, value, onChange, placeholder, required = false, style }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={style}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
