import React, { useEffect, useState } from "react";
import { contactUs } from "../services/api";
import Navigation from "./nav";

const ContactUs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await contactUs();
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
            {/* contact section - start */}
            <div className="container-fluid mt-30">
                <h2 className="titleThree fw-500 primaryColor text-uppercase">Contact List</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.company}</td>
                                    <td>{item.mobileNo}</td>
                                    <td>{item.email}</td>
                                    <td>{item.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* contact section - end */}
        </>
    )
}
export default ContactUs;