import { useEffect, useState } from "react";
import { Fragment } from "react";
import AddCandidate from "./AddCandidate";

export default function Fetch() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');
    const [editUserId, setEditUserId] = useState(null);

    const api = 'https://jsonplaceholder.typicode.com/users';

    const userFetch = async () => {
        await fetch(api)
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        userFetch()
    }, [])

    const sortUsers = (coll) => {
        let copyUsers = users.concat();
        const sortUsers = copyUsers.sort((a, b) => { return a[coll] > b[coll] ? 1 : -1 });
        setUsers(sortUsers)
    }

    const handleSortCompany = () => {
        const sorted = [...users].sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
        );
        setUsers(sorted);
    };

    const handleSortCity = () => {
        const sorted = [...users].sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
        );
        setUsers(sorted);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.email.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.address.city.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.phone.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.website.toLowerCase().includes(value.toLocaleLowerCase()) ||
            user.company.name.toLowerCase().includes(value.toLocaleLowerCase())
    })

    return (<>
        <div>

            <div className="drag">
                <div className="add-manual"><AddCandidate /></div>
            </div>

            <div className="search-input">
                <form >
                    <input className="find-input"
                        type="text"
                        onChange={handleChange}
                        value={value}
                        placeholder='Поиск кандидата...'
                    />
                </form>
            </div>

        </div>
        <div className="scroll">
            <table>

                <thead>
                    <tr>
                        <th onClick={_ => { sortUsers('id') }}>ID</th>
                        <th onClick={_ => { sortUsers('name') }}>Имя</th>
                        <th onClick={handleSortCompany}>Вакансия</th>
                        <th onClick={handleSortCity}>Адрес</th>
                        <th onClick={_ => { sortUsers('email') }}>Email</th>
                        <th onClick={_ => { sortUsers('phone') }}>Телефон</th>
                        <th >Комментарий</th>
                    </tr>
                </thead>

                {users === null ? "Загружаю" : filteredUsers.map((user) => {
                    return (<tbody>
                        <Fragment>
                            {editUserId === user.id ? <EditTableData editFormData={editFormData} handleEdit={handleEdit} /> : <tr>
                                <td onDoubleClick={_ => {

                                    setEditUserId(user.id)
                                }} className="td-id">{user.id}</td>
                                {/* имя */}
                                <td>{user.name}</td>
                                {/* вакансия */}
                                <td>{user.company.name}</td>
                                {/* адрес */}
                                <td>{user.address.city}</td>
                                {/* почта */}
                                <td>{user.email}</td>
                                {/* телефон */}
                                <td>{user.phone}</td>
                                {/* комментарий */}
                                <td>{user.website}</td>
                            </tr>
                            }
                        </Fragment>

                    </tbody>)
                })}
            </table>
        </div>
    </>)
}