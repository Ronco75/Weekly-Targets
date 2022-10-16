import { createContext, useState } from "react";
import data from '../data';
const { v4: uuidv4 } = require('uuid');

const DataContext = createContext();

export const DataProvider = ({children}) =>  {

    //* all the functions and hooks.

  const [targetsData, setTargetsData] = useState(data);
  const [text, setText] = useState('');


  const addTarget = (newTarget) => {
    if (newTarget.text.length === 0) {
      window.alert('Please Add Target!')
    } else {
    setTargetsData([newTarget, ...targetsData])
  }}

  const deleteTarget = (e, id) => {
    e.preventDefault();
    setTargetsData(targetsData.filter((item) => item.id !== id));
  }

  const deleteAfterSevenDays = (date) => {
    console.log(date);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleString();
    
    const newTarget = {
      id: uuidv4(),
      text,
      date,
    }

    addTarget(newTarget);

    setText('');
  }


    return <DataContext.Provider value={{
        //* name of the functions.
        targetsData,
        text,
        setText,
        addTarget,
        deleteTarget,
        handleTextChange,
        handleSubmit,
        deleteAfterSevenDays
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;