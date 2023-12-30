import React from "react";
import Navigation from "./nav";
const Payments = () => {
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* buyers - section start */}
            <div className="container-fluid mt-30">
                <h2 className="titleThree fw-500 primaryColor text-uppercase">Payments List</h2>
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
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Company</td>
                                <td>9090900000</td>
                                <td>john@example.com</td>
                                <td>john@examplesskskk</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Company</td>
                                <td>9090900000</td>
                                <td>john@example.com</td>
                                <td>john@examplesskskk</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Company</td>
                                <td>9090900000</td>
                                <td>john@example.com</td>
                                <td>john@examplesskskk</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Company</td>
                                <td>9090900000</td>
                                <td>john@example.com</td>
                                <td>john@examplesskskk</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* buyers - section end */}
        </>
    )
}
export default Payments;