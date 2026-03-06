"use client";

import { useState } from "react";

const TodoList = ({ showEditId, id, isChecked, name, handleDelete, isCheckedBox, handleEdit, todoList, setTodoList
}) => {
    const [data, setData] = useState(name)
    const dataChange = (e, id) => {
        setData(e.target.value)
    }

    const update = (id) => {
        let list = todoList.map((item) => {
            return item.id === id ? { ...item, name: data } : { ...item }
        })
        setTodoList([...list])
        handleEdit(null)
    }

    return <><div className="flex gap-10 items-center">
        <span>{id ?? ""}</span>
        <input type="checkbox" onChange={(e) => { isCheckedBox(e, id) }} value={isChecked} checked={isChecked}/>
        <p className="m-0">{name ?? ""}</p>
        <i>{isChecked ? "done" : "pending"}</i>
        {
            showEditId === id ? <button onClick={() => handleEdit(null)}>Close</button> :
                <button onClick={() => { handleEdit(id) }}>Edit</button>}
        <button onClick={() => { handleDelete(id) }}>Delete</button>
    </div>
        {
            showEditId === id &&
            <div className="">
                <input type="text" className="border-amber-700 border-2 my-5 p-2" placeholder="" onChange={(e) => { dataChange(e, id) }} value={data} />
                <button className="bg-sky-600 text-white p-2 border-2 border-sky-600" onClick={() => update(id)}>Submit</button>
            </div>
        }

    </>
}
export default TodoList;