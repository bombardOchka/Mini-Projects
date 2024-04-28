import React, { useState, useEffect } from 'react';
import "./UsersTable.scss";
import { UsersTableRow } from '../../components/UsersTableRow/UsersTableRow.jsx'
import { setList, addItem, delItem } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'




export const UsersTable = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();
    const { list } = useSelector(state => state.usersList)




    useEffect(() => {
        dispatch(setList())
    }, [])








    const onSubmit = (e) => {
        e.preventDefault();


        dispatch(addItem({
            name: `${name} ${surname}`,
            phone: phone,
            id: `${name} ${surname}`
        }))
    }

    const onInputNameChange = (e) => {
        setName(e.target.value)
    }

    const onInputSurnameChange = (e) => {
        setSurname(e.target.value)
    }

    const onInputPhoneChange = (e) => {
        setPhone(e.target.value)
    }


    const onDeleteClick = (postID) => {
        dispatch(delItem(postID))
    }


    const toggleFormVisibile = () => {
        setShowForm(!showForm)
    }


    return (
        <div className='container'>

            <table>
                <tbody>
                    {list.map((elem) => (
                        <UsersTableRow name={elem.name.split(' ')[0]} surname={elem.name.split(' ')[1]} tel={elem.phone} key={elem.id} deleteFunction={() => onDeleteClick(elem.id)} />
                    ))}
                </tbody>
            </table>

            <button onClick={toggleFormVisibile}>Add user</button>

            {
                showForm && (
                    <form action="" className='form-container'>
                        <input name='name' placeholder='name' onChange={onInputNameChange} />
                        <input name='surname' placeholder='surname' onChange={onInputSurnameChange} />
                        <input name='phone' placeholder='phone number' onChange={onInputPhoneChange} />

                        <button onClick={onSubmit}>Save</button>
                        <button onClick={toggleFormVisibile}>Close</button>
                    </form>
                )
            }


        </div>

    )
}

