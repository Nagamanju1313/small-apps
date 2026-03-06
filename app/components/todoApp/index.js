"use client"
import { useEffect, useRef, useState } from "react";
import TodoHeader from "./todo_header";
import { Container } from "react-bootstrap";
import TodoList from "./todo_list";

const TodoPage = () => {
    const inputRef = useRef(null);

    const [inputData, setInputData] = useState({
        value: "",
        error: false,
        isEdit: false
    });
    const [showEditId, setShowEditId] = useState(null);

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('todo')
        if (data && data.length > 0) {
            setTodoList(JSON.parse(data))
        }
    }, []);

    //onchanging data of main form
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            value: e.target.value
        })
    }

    //submitting the main form data
    const handleClick = () => {
        if (inputData.value == '') {
            setInputData({
                ...inputData,
                error: true
            })
            setTimeout(() => {
                setInputData({
                    ...inputData,
                    error: false
                })
            }, 1000)
            return;
        } else {
            setTodoList(
                [
                    ...todoList,
                    {
                        id: todoList.length + 1,
                        name: inputData.value,
                        isEdit: false,
                        isChecked: false
                    }
                ]
            )
            localStorage.setItem("todo",
                JSON.stringify(
                    [
                        ...todoList,
                        {
                            id: todoList.length + 1,
                            name: inputData.value,
                            isEdit: false,
                            isChecked: false
                        }
                    ]
                )
            )

            setInputData({
                value: "",
                error: false,
                isEdit: false
            })
        }

    }

    //delete list
    const handleDelete = (id) => {
        const deletedList = todoList.filter((item, idx) => {
            return item.id !== id
        })
        setTodoList(
            deletedList
        )
        localStorage.setItem('todo', JSON.stringify(deletedList))
    }

    // selected checked true
    const isCheckedBox = (e, id) => {
        const res = todoList.map((item, idx) => {
            return item.id === id ? { ...item, isChecked: e.target.checked } : { ...item }
        })
        setTodoList(res)
        localStorage.setItem('todo', JSON.stringify([...res]))
    }
    console.log(todoList)

    const handleEdit = (id) => {
        setShowEditId(id)
    }

    return <>
        <Container>
            <TodoHeader
                inputRef={inputRef}
                handleChange={handleChange}
                handleClick={handleClick}
                inputData={inputData.value} />
            {
                inputData.error &&
                <span className="text-red-500 text-center block">Please Add Some Todo Item</span>
            }
            <div className="block w-full">
                <div className="block max-w-100 m-auto">
                    {
                        todoList &&
                        todoList.map((todoItem, todoIdx) => {
                            return <TodoList
                                key={"todoIdx" + todoItem.id}
                                id={todoItem.id}
                                isChecked={todoItem.isChecked}
                                name={todoItem.name}
                                handleDelete={handleDelete}
                                isCheckedBox={isCheckedBox}
                                handleEdit={handleEdit}
                                setTodoList={setTodoList}
                                todoList={todoList}
                                showEditId={showEditId}
                            />
                        })
                    }
                </div>
            </div>


        </Container>

    </>
}
export default TodoPage;