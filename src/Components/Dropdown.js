const Dropdown = ({ data = [] }) => (
    <div>
        <ul>
            {data.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);


export default Dropdown;


// det här är själva dropdownen som ska
// wrappa MenuLinks