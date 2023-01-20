function Table({ headings, data }) {
    return (
        <table className="w-full">
            <thead className="bg-black text-white text-start ">
                <tr className="">
                    {headings.map((heading) => (
                        <td
                            key={heading + Math.floor(Math.random() * 9999)}
                            className="p-2 text-start"
                        >
                            {heading}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={`${index} - ${Math.floor(Math.random() * 9999)}`}>
                        {Object.values(row).map((value) => (
                            <td
                                key={`${value} ${Math.floor(
                                    Math.random() * 9999
                                )}`}
                                className={`${
                                    index % 2 !== 0
                                        ? "bg-[rgba(0,0,0,0.1)]"
                                        : ""
                                } p-2`}
                            >
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
