import axios from "axios";

const API_URL = import.meta.env.REACT_APP_API_ENDPOINT;

export const getNews = async () => {
    try{
        const response = await axios.get(API_URL + 'news/getAllNews');
        if(response.status === 200){
            return response.data;
        }
        
    }catch(err){
        throw new Error(err)
    }
    
};

export const getOneNews = async (id) => {
    try{
        const response = await axios.get(API_URL + 'news/getOneNews/' + id);
        if(response.status === 200) {
            return response.data;
        }
        
    }catch(err){
        throw new Error(err)
    }
    
}

export const addNews = async (data) => {
     try{
        await axios.post(API_URL + 'news/', data)
     }catch(err){
        throw new Error(err)
     }
}

export const updateNews = async (data) => {
    try{
        await axios.put(API_URL + 'news/', data)
    }catch(err){
        throw new Error(err)
    }
}

