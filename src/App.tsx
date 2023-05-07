import ListGroup from "./components/ListGroup";

function App() {
    let items = [
        "IIT Bombay",
        "IIT Delhi",
        "IIT Kanpur",
        "IIT Madras",
        "IIT KGP",
        "IIT Roorkie",
        "IIT Guahati",
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <ListGroup
                items={items}
                heading={"List of IITs"}
                onSelectItem={handleSelectItem}
            ></ListGroup>
        </div>
    );
}

export default App;
