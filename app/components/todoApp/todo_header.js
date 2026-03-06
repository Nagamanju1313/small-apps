"use client";
const TodoHeader =({handleChange, handleClick, inputData, inputRef})=>{
    return <div className="flex gap-2 p-8 items-center justify-center">
        <input type="text" className="border border-gray-300 p-2 color-black-500 focus:text-black"
            value={inputData} onChange={handleChange}
            ref={inputRef}
        />
        <button className="text-white bg-sky-500 p-2 hover:bg-sky-800 cursor-pointer" 
        onClick={handleClick}>Add Todo</button>
    </div>
}
export default TodoHeader;