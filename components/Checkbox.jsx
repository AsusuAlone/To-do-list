import React, { useState } from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <input
                type="checkbox"
                id="my-checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor="my-checkbox"></label>
        </>
    );
}
export default Checkbox






