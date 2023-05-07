import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
                    <p>Hello World!</p>
                    <hr />
                    <p>
                        My name is <b>Aditya Raj</b>
                    </p>
                </Alert>
            )}
            <Button
                onClick={() => {
                    setAlertVisible(true);
                }}
            >
                Click to see Alert
            </Button>
        </div>
    );
}

export default App;
