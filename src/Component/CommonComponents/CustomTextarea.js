import React from 'react';

const CustomTextarea = ({ className, required, value, onChange }) => {
    return (
        <textarea
            className={`border rounded-md p-2 resize-none w-full h-[200px] ${className}`} // Full width and specific height
            required={required}
            value={value}
            onChange={onChange}
            rows={4}
        />
    );
};

export default CustomTextarea;
