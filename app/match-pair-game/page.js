"use client";
import { useEffect, useReducer, useState } from "react";
import { matchPairReducer } from "../components/matchPairGame/reducer";

const MatchPairGame = () => {
    const INITIAL_STATE = {
        emojis: ['❤️', '🍀', '🌎', '🍎', '⚽️', '🚗', '⛵️', '💎'],
        visitedArr: [],
        moves: 0
    };

    const [state, dispatch] = useReducer(matchPairReducer, INITIAL_STATE);
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [refreshShuffleFlag, setRefreshShuffleFlag] = useState(false);
    const [prevIconId, setPrevIconId] = useState(null);
    const [score, setScore] = useState(0);
    const [shuffleArr, setShuffleArr] = useState([]);
    const [resultState, setResultState] = useState({ id: null, answer: "" })

    useEffect(() => {
        setSelectedIcons([])
    }, [refreshFlag]);

    useEffect(() => {
        let arr = [...state.emojis, ...state.emojis];
        for (let i = 0; i < arr.length; i++) {
            let temp = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[temp]] = [arr[temp], arr[i]]
        }
        setShuffleArr(arr)
    }, [refreshShuffleFlag])

    const handleSubmit = (icon, index) => {
        if (state?.moves >= 20 && score <= 5) {
            // Runner
            setResultState({ id: 0, answer: "Sorry You Lose the game!! Please Try Again" })
            return;
        };
        if (state?.moves >= 20 && score > 5) {
            // Winner
            setResultState({ id: 1, answer: "Congratulations You Won the game!!" });
            return;
        };
        if (score === 8) {
            setResultState({ id: 1, answer: "Congratulations You Won the game!!" });
            return;
        }

        if (state.moves < 20) {
            dispatch({ type: "INCREASEMOVE", count: .5 })
        }

        if (selectedIcons.length === 1) {
            setSelectedIcons(
                [
                    ...selectedIcons,
                    index
                ]
            )
            setTimeout(() => {
                setRefreshFlag(!refreshFlag)
                setPrevIconId(0)
            }, 500)
        } else if (selectedIcons.length === 0) {
            setSelectedIcons([index])
            setPrevIconId(index)
        }

        if (shuffleArr[prevIconId] === shuffleArr[index] && prevIconId !== index) {
            setScore(score + 1)
            dispatch({ type: "DISABLE", visitedIconIds: [index, prevIconId] })
        }
    }


    const resetGame = () => {
        setRefreshShuffleFlag(true);
        setRefreshFlag(true);
        setPrevIconId(null);
        setScore(0)
        setResultState({ id: null, answer: "" })
        dispatch({ type: "RESET", obj: INITIAL_STATE })
        setSelectedIcons([])
    }

    return <div className="">
        <h3 className="text-center" style={{ marginTop: 30 }}>Match Pair Game (Moves Limit 20)</h3>

        <div className="flex flex-wrap max-w-[400px] mx-auto my-10 justify-between">
            {
                state.emojis &&
                shuffleArr.map((icon, index) => {
                    return <div className="w-[23%] p-2 h-[100px] rounded-[10px]" key={"icon" + index}>

                        <button className={`w-full h-full block rounded-[10px] overflow-hidden p-2 relative ${state?.visitedArr?.includes(index) ? "cursor-not-allowed opacity-10" : "cursor-pointer"} ?" `}
                            disabled={state?.visitedArr?.includes(index) ? true : false}
                            onClick={() => handleSubmit(icon, index)}
                        >
                            {
                                selectedIcons.length >= 1 &&
                                    selectedIcons?.includes(index) ? "" :
                                    <div className="overlay bg-gray-400 absolute top-0 right-0 left-0 bottom-0  rounded-[10px]"></div>
                            }
                            {icon}
                        </button>
                    </div>
                })
            }

        </div>
        <div className="flex flex-wrap max-w-[400px] mx-auto my-10 justify-between">
            <p>Score: {score}</p>
            <p>Moves: {Math.floor(state.moves)}</p>
        </div>
        <div className="text-center">
            {
                resultState.id === 0
                    ?
                    <p className="text-red-500">{resultState.answer}</p>
                    :
                    <p className="text-green-500">{resultState.answer}</p>
            }
            {
                resultState.id !== null &&
                <button
                    onClick={resetGame}
                    className="border-2 px-2 block text-center mx-auto">Reset Game</button>
            }
            <br />
        </div>
    </div>
}
export default MatchPairGame;