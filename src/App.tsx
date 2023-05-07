import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <div>
            {alertVisible && (
                <Alert
                    onClose={() => {
                        setAlertVisible(false);
                    }}
                >
                    <ListGroup
                        items={[
                            "Bombay",
                            "Delhi",
                            "Kanpur",
                            "Madras",
                            "Kharagpur",
                            "Roorkie",
                            "Guwahati",
                        ]}
                        heading="List of good IITs"
                        onSelectItem={(item) => {
                            console.log(item);
                        }}
                    ></ListGroup>
                </Alert>
            )}
            <Button
                onClick={() => {
                    setAlertVisible(true);
                }}
            >
                Click to see List of IITs
            </Button>
        </div>
    );
}

export default App;
