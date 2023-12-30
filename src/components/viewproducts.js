import React, { useEffect, useState } from "react";
import Navigation from "./nav";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct } from "../services/api";
import productSecOneImgOne from '../assets/img/productSecOneImgOne.svg';
import productSecOneImgTwo from '../assets/img/logo2.svg';
import productSecOneImgThree from '../assets/img/logoEmb.svg';
import productSecOneImgFour from '../assets/img/logo.svg';


const ViewProducts = () => {
    const [data, setData] = useState([])
    const [deleteStatus, setdeleteStatus] = useState(false)

    const handleDelete = async (id) => {
        const deleteData = await deleteProduct(id)
        console.log("deleteData", id)
        setdeleteStatus(!deleteStatus)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getProduct();
                setData(response.data);
                const image=response.data.map((item,index)=> item.productImage[0])
                console.log(image)
                setSelectedImage(image)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [deleteStatus])

    const [selectedImage, setSelectedImage] = useState();
    const handleThumbnailClick = (productId,image) => {
        console.log(productId,image)
        setSelectedImage((prevSelectedImages) => ({
            ...prevSelectedImages,
            [productId]: image,
          }));
    };
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* view products - start */}
            <div className="container-fluid viewProductSec mt-30">
                <div className="d-flex justify-content-between">
                    <h1 className="mb-4 titleThree text-uppercase">View Products</h1>
                    <Link className="width-fit-content" to='/addproducts'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">Add Products</h1></Link>
                </div>
                {/* <div className="row mx-3 row-gap">
                    {data?.map((item, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className="card b-none p-15 bgColor-F4FCFA dropShadow">
                                <img className="productImage m-auto" src={item.productImage} alt={item.productName} />
                                <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">{item.productName}<span className="black">{item.color}</span></h1>
                                <p className="d-flex justify-content-between fw-500 titleFour"><span>{item.size}</span><span>{item.price}</span><span>{item.discountPrice}</span></p>
                                <p className="fw-400 descriptionTwo black">{item.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/editproducts" state={item} ><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                    <input className="btn btn-danger b-none" type='button' value='Delete' onClick={() => { handleDelete(item.id) }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="row mx-3 row-gap">
                    {data?.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card p-10 b-none bgColor-F4FCFA dropShadow">
                                <div className="d-flex align-items-center" style={{ height: '100%' }} >
                                    <div style={{ width: '20%' }}>
                                        {item.productImage?.map((item, indexImg) =>
                                            <div className="img-list" key={indexImg} onClick={() => handleThumbnailClick(index,item) }>
                                                <img src={item}  alt='corechip' />
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ width: '80%', margin: '0 10px' }}>
                                        <img className="productImg img-fluid" src={selectedImage[index]} alt='corechip' />
                                    </div>
                                </div>
                                <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">{item.productName}</h1>
                                <p className="d-flex justify-content-between fw-500 titleFour">
                                {/* <span>price</span><span>discountPrice</span> */}
                                </p>
                                <p className="fw-400 descriptionTwo black">{item.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/editproducts" state={item}><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                    <Link to="/addprice" state={item.id}><input className="btn btn-warning b-none" type='button' value='Add Price' /></Link>
                                    <input className="btn btn-danger b-none" type='button' value='Delete' onClick={() => { handleDelete(item.id) }}/>
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
export default ViewProducts;