import { useState } from 'react';

function App() {
    const [expr, setExpr] = useState("sin(x)");
    const [x, setX] = useState(1);
    const [result, setResult] = useState(null);

    const handleEvaluate = async () => {
        const url = `http://localhost:8000/evaluate?expr=${encodeURIComponent(expr)}&x=${x}`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        setResult(data.result ?? data.error);
    };

    return (
        <div style={{ padding: 20 }}>
        <h1>数式評価ミニアプリ</h1>
        <input value={expr} onChange={(e) => setExpr(e.target.value)} />
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        <button onClick={handleEvaluate}>計算</button>
        <p>結果: {result !== null ? result : "まだ計算していません"}</p>
        </div>
    );
}

export default App;