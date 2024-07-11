import { useState } from "react"
import Result from "../Result/Result"
import History from "../History/History"

//DiceSelect is the Buttons at the bottom of the screen
//Buttons are clicked here, state is captured and passed as a singular dice value.
// To Do: Create a toggle that allows users to roll multiple dice at once
// To Do: Toggle should also allow users to roll different dice kinds

function DiceSelect() {

    const [diceValue, setDiceValue] = useState(null)

    const diceRoll = (dice) => {
        let roll = Math.floor(Math.random() * dice) + 1
        setDiceValue(roll)
    }

    return (
        <div>
            <Result result={diceValue} />
            <button onClick={() => diceRoll(4)}>d4</button>
            <button onClick={() => diceRoll(6)}>d6</button>
            <button onClick={() => diceRoll(8)}>d8</button>
            <button onClick={() => diceRoll(10)}>d10</button>
            <button onClick={() => diceRoll(12)}>d12</button>
            <button onClick={() => diceRoll(20)}>d20</button>
            <button onClick={() => diceRoll(100)}>d100</button>
        </div>
    )
}

export default DiceSelect