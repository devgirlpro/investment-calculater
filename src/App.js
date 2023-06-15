import React, { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userInput) => {
        console.log("calculate");
        setUserInput(userInput);
    };

    const yearlyData = [];

    if (userInput) {
        let currentSavings = +userInput.currentSavings;
        const yearlyContribution = +userInput.yearlyContribution;
        const expectedReturn = +userInput.expectedReturn / 100;
        const duration = +userInput.duration;

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    return (
        <div>
            <Header />

            <UserInput onCalculate={calculateHandler} />

            {!userInput && <p>No Investment Calculated yet.</p>}
            {userInput && <ResultsTable data={yearlyData}  initialInvestment={userInput.currentSavings}/>}
        </div>
    );
}

export default App;
