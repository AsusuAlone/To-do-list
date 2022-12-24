import { Formik } from "formik";
import { useState } from "react";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormField from "./FormField";

const AddTask = () => {
    const [modal, setModal] = useState(false)
    const [items, setItems] = useState([])
    const [todoItem, setTodoItem] = useState([])

    const toggleModal = () => {
        setModal(!modal)
    }

    const initialValues = {
        name: ""
    };

    const validationSchema = yup.object().shape({
        name: yup.string().max(50).label("name")
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([
            {
                id: uuidv4(),
                name: todoItem,
                done: false
            },
            ...items,
            todoItem
        ])
        setTodoItem('')
    }

    return (
        <>
            {modal && (
                <div className="w-screen h-screen inset-0 fixed ">
                    <div className="bg-white w-full h-full inset-0 p-0">
                        <strong><header> Add a task </header></strong>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    label="Name"
                                    name="name"
                                    placeholder="Enter the name of the task"
                                    className="ml-2"
                                    value={todoItem}
                                    onChange={(e) => setTodoItem(e.target.value)}
                                />
                                <div className="col-6 text-end mt-10 gap-4">
                                    <Button className='bg-transparent active text-black mr-2 mb-2' type="submit">
                                        <strong>Add</strong>
                                    </Button>
                                    <Button className='bg-blue-600 active text-white mr-2 mb-2' onClick={toggleModal}>
                                        <strong>Close</strong>
                                    </Button>
                                </div>
                            </form>
                        </Formik>
                    </div>
                </div>
            )}
            <ul className="flex gap-3 border 2 border-r border-t">
                <li>
                    <Button
                        onClick={toggleModal}
                    >
                        <strong><BiPlus /></strong>
                    </Button>
                </li>
                <li>
                    <Button>
                        <BiTrash />
                    </Button>
                </li>
                <li>
                    <Button>
                        <BiEdit />
                    </Button>
                </li>
            </ul>
            <ul className="border-2 border-r border-t">
                {items.map(({ id, name }) => (
                    <li key={id} className="flex border-2">
                        <Checkbox /> {name}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default AddTask 