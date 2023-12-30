import React, { useEffect, useState } from "react";
import { getUser } from "../services/api";
import Navigation from "./nav";
const Users = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getUser();
                setData(response.data);
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* buyers - section start */}
            <div className="container-fluid mt-30">
                <h2 className="titleThree fw-500 primaryColor text-uppercase">Users List</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobileNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* buyers - section end */}
        </>
    )
}
export default Users;