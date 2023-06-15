import React, { useState } from "react";
import "./UserInput.css";

const initialUserInput = {
    currentSavings: 1000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
};

const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (e) => {
        e.preventDefault();
        props.onCalculate(userInput)
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        
                        onChange={(e) =>
                            inputChangeHandler("currentSavings", e.target.value)
                        }
                        type="number"
                        id="current-savings"
                        value={userInput.currentSavings}
                      
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                       
                        onChange={(e) =>
                            inputChangeHandler("yearlyContribution", e.target.value)
                        }
                        type="number"
                        id="yearly-contribution"
                        value={userInput.yearlyContribution}
                       
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                       
                        onChange={(e) =>
                            inputChangeHandler(
                                "expectedReturn",
                                e.target.value
                            )
                        }
                        type="number"
                        id="expected-return"
                        value={userInput.expectedReturn}
                        // value={expectedInterest}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        // onChange={(e) => setInvestmentDuration(e.target.value)}
                        onChange={(e) =>
                            inputChangeHandler("duration", e.target.valve)
                        }
                        type="number"
                        id="duration"
                        value={userInput.duration}
                        // value={duration}
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
