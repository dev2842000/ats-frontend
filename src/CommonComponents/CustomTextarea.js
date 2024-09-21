import React from 'react';

const CustomTextarea = ({ className, required, value, onChange }) => {
    return (
        <textarea
            className={`border rounded-md p-2 resize-none ${className}`}
            required={required}
            value={value}
            onChange={onChange}
            rows={4} // You can adjust the number of rows as needed
        />
    );
};

export default CustomTextarea;
