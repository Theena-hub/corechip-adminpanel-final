import axios from 'axios';
// const MASTER_URL = 'http://localhost:1234';
const MASTER_URL = 'https://us-central1-corechipadminbackend.cloudfunctions.net/api';
                    

export const login = async (username, password) => {
    console.log(username, password)
    try {
        const response = await axios.post(`${MASTER_URL}/admin_login`, { username, password });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const contactUs = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/getContactUs`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getUser = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/getUser`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addProduct = async (body,url) => {
    let data;
    if(body.id){
        console.log(url)
        data = {
           productId:body.id, productName: body.productName, description: body.description, size: body.size,color: body.color, productImage: url.length==0?body.productImage:url
        }
    }else{
        console.log("url",url)
        data = {
            productName: body.productName, description: body.productDesc, size: body.productSize, color: body.productColor, productImage:url
        }
    }
    console.log("first",body)
    try {
        const response = await axios.post(`${MASTER_URL}/product/add_product`, data);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getProduct = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/product/get_product`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deleteProduct = async (id) => {
    try {
        const response = await axios.post(`${MASTER_URL}/product/delete_ProductbyId`, { productId: id });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addBanner = async (body,url) => {
    console.log(url)
    let data;
    if(body.Id){
        data={
            bannerId:body.Id,bannerTitle:body.bannerTitle, bannerButton:body.bannerButton, bannerUrl:body.bannerUrl,bannerDesc:body.bannerDesc,bannerImage:url?url:body.bannerImage
       }
    }else{
         data={
             bannerTitle:body.bannerTitle, bannerButton:body.bannerButton, bannerUrl:body.bannerUrl,bannerDesc:body.bannerDesc,bannerImage:url
        }
    }
    console.log(body)
    try {
        const response = await axios.post(`${MASTER_URL}/banner/add_banner`, data);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getbanner = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/banner/get_banner`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deleteBanner = async (id) => {
    try {
        const response = await axios.post(`${MASTER_URL}/banner/delete_banner`, { bannerId: id });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const addPrice = async (body) => {

    try {
        const response = await axios.post(`${MASTER_URL}/price/add_price`, body);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getPrice = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/price/get_price_list`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deletePrice = async (id) => {
    try {
        const response = await axios.post(`${MASTER_URL}/price/delete_price`, { id: id });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};