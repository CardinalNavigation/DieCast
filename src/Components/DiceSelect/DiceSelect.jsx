import { useState } from "react"

//Here we will start with just once dice at a time.
//One button press. One Result
function DiceSelect() {

    const [diceValue, setDiceValue] = useState(null)

    console.log(diceValue)

    const diceRoll = (dice) => {
        let roll = Math.floor(Math.random() * dice) + 1
        setDiceValue(roll)
    }

    return (
        <>
            <p>{diceValue}</p>
            <button onClick={() => diceRoll(4)}>d4</button>
            <button onClick={() => diceRoll(6)}>d6</button>
            <button onClick={() => diceRoll(8)}>d8</button>
            <button onClick={() => diceRoll(10)}>d10</button>
            <button onClick={() => diceRoll(12)}>d12</button>
            <button onClick={() => diceRoll(20)}>d20</button>
        </>
    )
}

export default DiceSelect