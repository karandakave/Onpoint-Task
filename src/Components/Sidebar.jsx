import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function SidebarWithNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed z-40 md:static md:translate-x-0 transform top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between md:justify-center mb-6">
                    <h1 className="text-2xl font-bold">Task</h1>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                        <CiMenuBurger className='w-6 h-6' />
                    </button>
                </div>
                <nav className="space-y-4">
                    <Link to="/" className=" hover:text-gray-300 flex"><span className='pr-3 pt-1'> <MdDashboard /></span>Dashboard</Link>
                    <Link to="/users" className=" hover:text-gray-300 flex "><span className='pr-3 pt-1'> <FaUser /> </span>Users</Link>
                    <Link to="/Posts" className=" hover:text-gray-300 flex "><span className='pr-3 pt-1'> <HiOutlinePlusCircle />
                    </span>Posts</Link>
                </nav>
            </div>


            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:ml-64">
                    <button onClick={() => setSidebarOpen(true)} className="md:hidden ">
                        <CiMenuBurger className="w-6 h-6 text-gray-800" />
                    </button>
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                </header>

                {/* Page Content */}

            </div>
        </div>
    )
}
