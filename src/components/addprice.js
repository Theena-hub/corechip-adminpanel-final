import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addPrice } from "../services/api";
import Navigation from "./nav";

const AddPrice = () => {
    const history = useNavigate();
    const location = useLocation()
    const id = location.state;
    const [errorMessage, setErrorMessage] = useState('');

    const [state, setState] = useState({
        priceId:id, priceColor:'', priceSize:'', priceAmount:"",priceDiscount:''
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const handlesubmit = async (e) => {
        console.log(state)

        const result = await addPrice(state)
        console.log(result)
        if (result.status == 'success') {
            setErrorMessage(result.data)
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);
            history('/viewprice')
        } else {
            setErrorMessage(result.data)
        }

    }

    return (
        <>
            <Navigation />
            <div className="container-fluid mt-30 addProductSec">
                <div className="card bgWhite-F0F6F5 p-20 b-none dropShadow mx-20">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="titleThree fw-600 text-uppercase primaryColor">Add Product Price, Discount, Size and Color</h1>
                        <Link className="width-fit-content" to='/viewprice'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">View Products</h1></Link>
                    </div>
                    <form className="form-group">
                        <div className="row row-gap">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Id</label>
                                    <input className="form-control mt-8" type='text' defaultValue={id} placeholder='Enter Product Id' name="priceId" disabled/>
                                </div>
                                <div className="py-1">
                                <label htmlFor=''>Product Size</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Size' name="priceSize" onChange={handleChange} />
                                </div>
                                <div className="py-1">
                                <label htmlFor=''>Product Color</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Name' name="priceColor" onChange={handleChange} />
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Price</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Price' name="priceAmount" onChange={handleChange}/>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Discount</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Discount' name="priceDiscount" onChange={handleChange}/>
                                </div>
                            </div>
                            <input type='button' className="btn bgPrimaryColor m-auto text-uppercase fw-600 width-fit-content px-25 py-10" value='Submit' onClick={handlesubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AddPrice;