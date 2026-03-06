"use client"
import { useState } from "react";
import Form from "../components/acronym/form";

const AcronymPage = () => {
    const [state, setState] = useState("")
    const [resState, setResState] = useState("")
  return (
    <>
      <Form state={state} setState={setState} resState={resState} setResState={setResState}/>
    </>
  );
};
export default AcronymPage;
