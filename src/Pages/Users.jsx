import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../Store/userSlice'
import { GrFormView } from "react-icons/gr";
export default function Users() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users)

    const [search, setSearch] = useState("")
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Users</h2>

            <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full max-w-md"
            />
            {loading && <p className="text-blue-500">Loading users</p>}


            {error && <p className="text-red-500">Error: {error}</p>}


            {/* Table */}
            {!loading && !error && (
                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Sr.No</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Username</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">City</th>
                            <th className="p-3">Compony</th>
                            <th className="p-3 ">Website</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.username}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.address.city}</td>
                                <td className="p-3">{user.company.name}</td>
                                <td className="p-3 ">{user.website}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => setSelectedUser(user)}
                                        className=" text-2xl text-center px-2"
                                    >
                                        <GrFormView />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal */}
            {selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] md:w-[500px] rounded-lg p-6 relative">
                        <button
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
                            onClick={() => setSelectedUser(null)}
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">User Details</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Name:</strong> {selectedUser.name}</p>
                            <p><strong>Username:</strong> {selectedUser.username}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Phone:</strong> {selectedUser.phone}</p>
                            <p><strong>Website:</strong> {selectedUser.website}</p>
                            <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city} ({selectedUser.address.zipcode})</p>
                            <p><strong>Zipcode</strong> {selectedUser.address.zipcode}</p>
                            <p><strong>Company:</strong> {selectedUser.company.name}</p>
                            <p><strong>CatchPhrase:</strong> {selectedUser.company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
