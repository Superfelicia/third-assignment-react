import React from 'react';
import Button from './Button.js';
import Dropdown from './Dropdown.js';
import { useState, useEffect, useRef } from 'react';

const sampleData = new Array(4).fill('item name');

function ButtonDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const listenToOutsideClick = e => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", listenToOutsideClick)

        return () => {
            document.removeEventListener("mousedown", listenToOutsideClick)
        }
    }, [open])

    return (
        <div ref={ref}>
            <Button onClick={() => setOpen(open => !open)} />
            {open && <Dropdown data={sampleData} />}
        </div>
    );
}

// dropdown can open and close,
// need to add an eventlistener if onClick outside.


export default ButtonDropdown;