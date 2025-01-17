"use client"
import React, { useState, useEffect } from "react";

interface navbarProps {
    totalPages: number;
    currentPage: number;
    changePage: (page: number) => void;
  }
export default function Pagination({totalPages, currentPage, changePage}: navbarProps) {
  console.log("pagination Total pages", totalPages);
  const [buttons, setButtons] = useState<number[]>([]);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  console.log("pagination", totalPages)
  function handleNext() {
    console.log("currentPage", currentPage);
    console.log("totalPages", totalPages);
    if (currentPage === end && end<totalPages && currentPage!= totalPages) {
      currentPage++;
      setStart(start+1);
      setEnd(end+1);
    } else if(currentPage!= totalPages) { 
      currentPage++;
    }
    changePage(currentPage);
  }

  function handlePrev() {
    if (currentPage === start && start>1) {
      currentPage--;
      setStart(start-1);
      setEnd(end-1);
    } else {
      if(currentPage>1)
      currentPage--;
    }
    changePage(currentPage);
  }
  
  
  useEffect(() => {
    10>totalPages? setEnd(totalPages): setEnd(10);// tatal page 4100 en
    const generateButtons = () => {
      setIsLoading(true);
      console.log(isLoading);
      // eslint-disable-next-line prefer-const
      let content: number[] = [];
      for (let i = start; i <= end; i++) {
        if(i>totalPages){ break;}
        content.push(i);
      }
      if (totalPages <= 10) {
        setEnd(totalPages);
      }
      setButtons(content);
      setIsLoading(false);
      //console.log("start",start)
      //console.log("end", end)
      console.log(content)
    };
    
    generateButtons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, totalPages]);

  return (
    totalPages === 0? <div></div>:
    <>
     <div className="flex justify-center items-center w-full py-[3vh]">
      <nav aria-label="Page navigation example">
        <ul className="">
          <button
            className="border-0 rounded-[5px] mr-4 bg-white w-[2vw] shadow-md py-1"
            disabled={currentPage===1}
            onClick={() => {
              handlePrev();
            }}
          >
            {" "}
            <span aria-hidden="true">&laquo;</span>
          </button>
          {buttons.map((item:number, key:number) => (
            <button
              key={key}
              className= {(item === currentPage)? "border-0 rounded-[5px] mr-4 bg-blue-600 text-white w-[2vw] shadow-md py-1": "border-0 rounded-[5px] mr-4 bg-white text-black w-[2vw] shadow-md py-1"}
              onClick={() => changePage(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="border-0 rounded-[5px] mr-4 bg-white w-[2vw] shadow-md py-1"
            disabled={currentPage===totalPages}
            onClick={() => {
              handleNext();
            }}
          >
            {" "}
            <span aria-hidden="true">&raquo;</span>
          </button>
        </ul>
      </nav>
      </div>
    </>
  );
}
