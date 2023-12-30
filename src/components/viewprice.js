import React, { useEffect, useState } from "react";
import Navigation from "./nav";
import { Link } from "react-router-dom";
import { deletePrice, deleteProduct, getPrice, getProduct } from "../services/api";



const ViewPrice = () => {
    const [data, setData] = useState([])
    const [deleteStatus, setdeleteStatus] = useState(false)

    const handleDelete = async (id) => {
        const deleteData = await deletePrice(id)
        console.log("deleteData", id)
        setdeleteStatus(!deleteStatus)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getPrice();
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
                    <h1 className="mb-4 titleThree text-uppercase">View Price</h1>                    
                </div>
                <div className="row mx-3 row-gap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Price ID</th>
                                <th scope="col">Color</th>
                                <th scope="col">Size</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.priceId}</td>
                                    <td>{item.priceColor}</td>
                                    <td>{item.priceSize}</td>
                                    <td>{item.priceAmount}</td>
                                    <td>{item.priceDiscount}</td>
                                    <td>
                                        <Link to="/editprice" state={item}>
                                            <button className="btn btn-success">Edit</button>
                                        </Link>&nbsp;
                                        <button className="btn btn-danger" onClick={() => handleDelete(item.Id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* {data?.map((item, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className="card b-none p-15 bgColor-F4FCFA dropShadow">                                
                                <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">{item.priceId}<span className="black">{item.priceColor}</span></h1>
                                <p className="d-flex justify-content-between fw-500 titleFour"><span>{item.priceSize}</span><span>{item.priceAmount}</span><span>{item.priceDiscount}</span></p>                                
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/editprice" state={item} ><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                    <input className="btn btn-danger b-none" type='button' value='Delete' onClick={() => { handleDelete(item.id) }} />
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
                {/* <div className="row mx-3 row-gap">
                    <div className="col-lg-4 col-md-6">
                        <div className="card p-10 b-none bgColor-F4FCFA dropShadow">
                            <div className="d-flex align-items-center" style={{ height: '100%' }} >
                                <div style={{ width: '20%' }}>
                                    <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgOne)}>
                                        <img src={productSecOneImgOne} alt='corechip' />
                                    </div>
                                    <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgTwo)}>
                                        <img src={productSecOneImgTwo} alt='corechip' />
                                    </div>
                                    <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgThree)}>
                                        <img src={productSecOneImgThree} alt='corechip' />
                                    </div>
                                    <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgFour)}>
                                        <img src={productSecOneImgFour} alt='corechip' />
                                    </div>
                                </div>
                                <div style={{ width: '80%',margin:'0 10px' }}>
                                    <img className="productImg img-fluid" src={selectedImage} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">productName<span className="black">color</span></h1>
                            <p className="d-flex justify-content-between fw-500 titleFour"><span>size</span><span>price</span><span>discountPrice</span></p>
                            <p className="fw-400 descriptionTwo black">description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/editproducts"><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                <input className="btn btn-danger b-none" type='button' value='Delete' />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* </div> */}
            </div>
            {/* view products - end */}
        </>
    )
}
export default ViewPrice;