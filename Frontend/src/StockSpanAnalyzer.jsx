import React, { useState } from "react";
import StockSpanChart from "./StockSpanChart";

function StockSpanAnalyzer() {
    const [prices, setPrices] = useState("");
    const [spans, setSpans] = useState([]);
    const [arr, setArr] = useState([]);

    const handleSubmit = async () => {
        if (!prices) return;
        const priceArray = prices
            .split(",")
            .map((num) => parseInt(num.trim()))
            .filter((num) => !isNaN(num));


            console.log(priceArray);

        setArr(priceArray);

        try {
            const response = await fetch("http://localhost:8080/api/stocks/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(priceArray),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Backend error:", data);
                throw new Error(data.message || "API request failed");
            }

            setSpans(data);
        } catch (error) {
            console.error("Error fetching spans:", error);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >
            <h2>Stock Span Analyzer</h2>

            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter prices comma-separated"
                    value={prices}
                    onChange={(e) => setPrices(e.target.value)}
                    style={{ padding: "8px", width: "300px", marginRight: "10px", borderRadius: "4px" }}
                />
                <button
                    onClick={handleSubmit}
                    style={{ padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
                >
                    Calculate
                </button>
            </div>

            {spans.length > 0 && (
                <div style={{ width: "fit-content", textAlign: "center" }}>
                    <h3>Stock Span Table</h3>
                    <table
                        border="1"
                        cellPadding="8"
                        style={{
                            borderCollapse: "collapse",
                            minWidth: "400px",
                            margin: "0 auto",
                            borderRadius: "4px",
                            overflow: "hidden",
                        }}
                    >
                        <thead style={{ backgroundColor: "#f0f0f0", color: "black" }}>
                            <tr>
                                <th>Day</th>
                                <th>Price</th>
                                <th>Span</th>
                            </tr>
                        </thead>
                        <tbody>
                            {spans.map((span, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{arr[index]}</td> {/* Use parsed array */}
                                    <td>{span}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <StockSpanChart spans={spans} />
                </div>
            )}
        </div>
    );
}

export default StockSpanAnalyzer;
