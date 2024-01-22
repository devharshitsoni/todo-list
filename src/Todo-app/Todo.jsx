import React, { useState, useEffect } from "react";
import Textfield from "../Components/Textfield/TextField";
import Button from "../Components/Buttons/Button";
import Heading from "../Components/Heading/Heading";
import Paragraph from "../Components/Paragraph/Paragraph";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(() => {

    const storedData = JSON.parse(localStorage.getItem("todos")) || [];
    return storedData;
  });

  const inputField = (e) => {
    setInput(e.target.value);
  };

  const addData = () => {
    if (input.trim() !== "") {
      setData((prevData) => [...prevData, input]);
      setInput("");
    }
  };

  const removeData = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  useEffect(() => {
    // Save data to local storage whenever 'data' changes
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="flex flex-row justify-center w-[100%] h-[100vh] bg-slate-800">
        <div className="border-[3px] shadow-2xl rounded-lg shadow-[#9360FF] border-[#9360FF] mb-[100px] mt-12 p-[12px] w-[500px] h-[500px]">
          <Heading
            headingName="Todo List"
            className="text-[34px] text-center text-white font-mono"
          />
          <Textfield
            className="font-mono outline-none border-none hover:outline-none focus:outline-none rounded-md focus:ring-2 focus:ring-sky-600 w-full h-5 px-3 py-5 mt-5"
            placeholder="Write Data"
            type="text"
            handleChange={inputField}
            value={input}
          />
          <Button buttonName="Submit" buttonClick={addData} />
          <div className="flex  flex-row mt-3 justify-center items-center border-[4px] shadow-[#9360FF] border-[#9360FF]">
            {data.length > 0 ? (
              <ul className="w-[400px] mt-[10px]  shadow-[#9360FF] marker:text-sky-400">
                {data.map((item, index) => (
                  <div className="text-center flex flex-row justify-between m-4" key={index}>
                    <li className="font-mono text-white">{item}</li>
                    <div className="flex flex-row">
                      <MdDeleteForever
                        onClick={() => removeData(index)}
                        className="mx-2 text-red-600"
                      />
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <Paragraph
                paragraphText="No Data Found"
                className="font-mono text-white"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
