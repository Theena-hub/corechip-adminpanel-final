import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../services/api";
import Navigation from "./nav";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

const AddProducts = () => {
    const history = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        productName: "",
        productImage: [],
        productDesc: "",
        productSize: "",
        productColor: "",
        imagePreview: [],
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const handleImageChange = (e) => {
        const file = e.target.files;
        if (file) {
            const imagesArray = Array.from(file);
            setState((prevState) => ({
                ...prevState,
                productImage: [...prevState.productImage, ...imagesArray],
                imagePreview: [
                    ...prevState.imagePreview,
                    ...imagesArray.map((image) => URL.createObjectURL(image)),
                ],
            }));
        }

        // if (file) {
        //     setState((prevState) => ({
        //         ...prevState,
        //         productImage: file,
        //         imagePreview: URL.createObjectURL(file),
        //     }));
        // }
    };
    const { productImage } = state

    const handlesubmit = async (e) => {
        console.log(state)

        let urls = []
        await Promise.all(
            productImage.map((image) => {
              const storageRef = ref(storage, `/files/${image.name}`);
              const uploadTask = uploadBytesResumable(storageRef, image);
        
              return new Promise((resolve, reject) => {
                uploadTask.on(
                  'state_changed',
                  (snapshot) => {
                    // Progress function (optional)
                  },
                  (error) => {
                    console.error('Error uploading image: ', error);
                    reject(error);
                  },
                  () => {
                    // Complete function
                    getDownloadURL(uploadTask.snapshot.ref)
                      .then((url) => {
                        console.log('File uploaded successfully:', url);
                        urls.push(url);
                        resolve();
                      })
                      .catch((urlError) => {
                        console.error('Error getting image URL: ', urlError);
                        reject(urlError);
                      });
                  }
                );
              });
            })
          );
          console.log(state)
        // productImage.forEach(async (file) => {
        //     const storageRef = ref(storage, `/files/${file.name}`);
        //     const uploadTask = uploadBytesResumable(storageRef, file);
        //     await uploadTask.on(
        //         'state_changed',
        //         (snapshot) => {
        //         },
        //         (err) => console.log(err),
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //                 console.log('File uploaded successfully:', url);
        //                 urls.push(url)
        //             });
        //         }
        //     );
            
        //     console.log(urls)
        // });
        const result = await addProduct(state, urls)
        console.log(result)
        if (result.status == 'success') {
            setErrorMessage(result.data)
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);
            history('/viewproducts')
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
                        <h1 className="titleThree fw-600 text-uppercase primaryColor">Add Product</h1>
                        <Link className="width-fit-content" to='/viewproducts'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">View Products</h1></Link>
                    </div>
                    {errorMessage && <div className="white text-center bg-danger">
                        {errorMessage}
                    </div>}
                    <form className="form-group">
                        <div className="row row-gap">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Name</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Name' name="productName" onChange={handleChange} />
                                </div>
                                <div className="py-1">
                                    <label htmlFor='productImage'>Product Image</label>
                                    <input
                                        id='productImage'
                                        className="form-control mt-8"
                                        type='file'
                                        multiple
                                        accept='image/*'
                                        onChange={handleImageChange}
                                    />
                                    {/* {imagePreview && (
                                        <div className="image-preview mt-3">
                                            <img style={{ width: '100px', height: '100px' }} src={imagePreview} alt="Product Preview" className="img-preview" />
                                        </div>
                                    )} */}
                                    {state.imagePreview.length > 0 && (state.imagePreview.map((preview, index) => (
                                        <div key={index} className="image-preview mt-3">
                                            <img style={{ width: '100px', height: '100px' }} src={preview} alt={`Product Preview ${index}`} className="img-preview" />
                                        </div>
                                    )))}
                                </div>
                                {/* <div className="py-1">
                                    <label htmlFor=''>Product Size</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Size' name="productSize" onChange={handleChange} />
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Color</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Color' name="productColor" onChange={handleChange} />
                                </div> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Description</label>
                                    <textarea className="form-control mt-8" placeholder="Enter Product Description" rows={3} name="productDesc" onChange={handleChange}></textarea>
                                </div>
                            
                            </div>
                            <input type='button' className="btn bgPrimaryColor m-auto text-uppercase fw-600 width-fit-content px-25 py-10" value='Submit' onClick={handlesubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AddProducts;