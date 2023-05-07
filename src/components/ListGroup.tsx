function ListGroup() {
    let items = [
        "IIT Bombay",
        "IIT Delhi",
        "IIT Kanpur",
        "IIT Madras",
        "IIT KGP",
        "IIT Roorkie",
        "IIT Guahati",
    ];

    // items = [];
    const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;
    };

    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
