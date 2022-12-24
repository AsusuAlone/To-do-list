import { Formik } from "formik";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import * as yup from "yup";
import Button from "./Button";
import FormField from "./FormField";

const AddList = () => {
    const [lists, setLists] = useState([])
    const [listName, setListName] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    const initialValues = {
        description: ""
    };
    const validationSchema = yup.object().shape({
        description: yup.string().max(50).label("description")
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setLists([...lists, listName])
        setListName('')
    }

    return (
        <>
            {modal && (
                <div className="w-screen h-screen inset-0 fixed">
                    <div className="bg-white w-full h-full inset-0 p-0">
                        <strong><header className="ml-2 mb-3 mt-2">Add a list</header></strong>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    label="Description"
                                    name="description"
                                    placeholder="Enter the name of the list"
                                    type="text"
                                    value={listName}
                                    className="ml-2"
                                    onChange={(e) => setListName(e.target.value)}
                                />
                                <div className="col-6 text-end mt-10">
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
            <ul className="flex gap-2">
                {lists.map((list) => (
                    <li key={list} className="first:border-2 border-r border-t rounded-t-lg">
                        {list}
                    </li>
                ))}
                <li className="border-2 border-r border-t rounded-t-lg">
                    <Button
                        onClick={toggleModal}
                    >
                        <strong><BiPlus className="object-center" /></strong>
                    </Button>
                </li>
            </ul>
        </>
    )
}
export default AddList