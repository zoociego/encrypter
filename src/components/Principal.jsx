import { useState } from "react"
import  Encrypter  from "../functions/Encrypter";

const Principal = () => {

    const [encrypt, setEncrypt] = useState("No value yet");

    const handleChange = (event) => {
            setEncrypt(event.target.value)
        };

    let encrypted = Encrypter(encrypt)

    return (
        <div>
            <input 
                type="text" 
                id="encrypt"
                name="encrypt"
                onChange={handleChange}
            />
            <input type="text" id="decrypted"/>
            <button>Click me</button>
            <button>Decrypt</button>
            <button >Copy</button>
            <p>{encrypted}</p>
        </div>
    );
};

export default Principal;