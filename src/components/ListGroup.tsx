import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // State Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // items = [];
    const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;
    };

    const handleClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        console.log(event.type);
    };

    return (
        <>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
