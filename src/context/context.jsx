import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props)=>{
    const [input, setInput] = useState(" ");
    const [recentPromt, setRecentPrompt] = useState(" ");
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");   

    const onSent = async(prompt) =>{
        setResultData(" ");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await runChat(input);
        setResultData(response);
        setLoading(false);
        setInput(" ");
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;