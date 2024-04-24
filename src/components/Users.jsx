import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loaderUsers = useLoaderData()
    const [ users, setUsers] = useState(loaderUsers)

    const handleDelete = id =>{
        // make sure user is confirm
        fetch(`http://localhost:5000/user/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                // remove the user
                const remainingUsers = users.filter(user => user._id !== id)
                console.log(remainingUsers)
                setUsers(remainingUsers)
            }
        })
    }

    return (
        <div>
            <h2>User {loaderUsers.length}</h2>
            <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Last logged In</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
          
               {
                users.map( user =>  <tr key={user._id}>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td>
                        <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                    </td>
                </tr>
                 )
               }
                </tbody>
            </table>
</div>
        </div>
    );
};

export default Users;