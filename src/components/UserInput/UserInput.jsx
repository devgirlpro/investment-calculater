import React, { useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
    const [currentSavings, setCurrentSavings] = useState(1000);
    const [yearlySavings, setYearlySavings] = useState(1200);
    const [expectedInterest, setExpectedInterest] = useState(7);
    const [investmentDuration, setInvestmentDuration] = useState(10);

    const submitHandler = (e) => {
        e.preventDefault();
        props.onCalculate={}
    };

    const resetHandler = () => {
        setCurrentSavings(1000);
        setYearlySavings(1200);
        setExpectedInterest(7);
        setInvestmentDuration(10);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(e) => setCurrentSavings(e.target.value)}
                        type="number"
                        id="current-savings"
                        value={currentSavings}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        onChange={(e) => setYearlySavings(e.target.value)}
                        type="number"
                        id="yearly-contribution"
                        value={yearlySavings}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(e) => setExpectedInterest(e.target.value)}
                        type="number"
                        id="expected-return"
                        value={expectedInterest}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        onChange={(e) => setInvestmentDuration(e.target.value)}
                        type="number"
                        id="duration"
                        value={investmentDuration}
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    onClick={resetHandler}
                    type="reset"
                    className="buttonAlt"
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
