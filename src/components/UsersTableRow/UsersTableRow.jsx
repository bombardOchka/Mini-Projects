import React from 'react';
import "./UsersTableRow.scss";

export const UsersTableRow = ({ name, surname, tel, deleteFunction }) => {

        return (
                <tr>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{tel}</td>
                        <td><button onClick={deleteFunction}>delete</button></td>
                </tr>
        );
}


