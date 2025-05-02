
import { useState } from "react";


export default function Contador() {
    const [count, setCount ]= useState(0);
    return (
        <div className="contador">
            <button className="boton-like" onClick ={() => setCount(count + 1)}>Like</button>
            <p className="texto-likes">{count} likes</p>
        </div>
    );
}