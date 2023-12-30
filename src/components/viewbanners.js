import React, { useEffect, useState } from "react";
import Navigation from "./nav";
import { Link } from "react-router-dom";
import image from "../assets/img/productSecOneImgOne.svg";
import { deleteBanner, getbanner } from "../services/api";

const ViewBanners = () => {
    const [data, setData] = useState([])
    const [deleteStatus, setdeleteStatus] = useState(false)

    const handleDelete = async (id) => {
        const deleteData = await deleteBanner(id)
        console.log("deleteData", id)
        setdeleteStatus(!deleteStatus)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getbanner();
                setData(response.data);
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [deleteStatus])
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* view products - start */}
            <div className="container-fluid viewProductSec mt-30">
                <div className="d-flex justify-content-between">
                    <h1 className="mb-4 titleThree text-uppercase">View Banners</h1>
                    <Link className="width-fit-content" to='/addbanners'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">Add Banners</h1></Link>
                </div>
                <div className="row mx-3 row-gap">
                {data?.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="card b-none p-15 bgColor-F4FCFA dropShadow">
                            <img className="img-fluid bannerImage m-auto" src={item.bannerImage} alt="bannerImage" />
                            <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">{item.bannerTitle}</h1>                            
                            <p className="fw-400 descriptionTwo black">{item.bannerDesc}</p>
                            <div className="d-flex justify-content-between">
                                <p>{item.bannerButton}</p>
                                <p>{item.bannerUrl}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/editbanners" state={item}><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                <input className="btn btn-danger b-none" type='button' value='Delete' onClick={() => { handleDelete(item.Id) }} />
                            </div>
                        </div>
                    </div>     
                ))}                   
                </div>
                {/* </div> */}
            </div>
            {/* view products - end */}
        </>
    )
}
export default ViewBanners;