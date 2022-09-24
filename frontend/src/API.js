import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getItems = async category => {
        let url = '/items';
        if (category) {
            url += '?category=' + category;
        }
        const item = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return item;
    };
    




//////////////
///Reviews
////////////

getReviews=async(item_id)=>{
    let url="/reviews?item_id="+ item_id;
    const reviews=await api
    .get(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        throw new Error(error);
    });
    return reviews;
};

writeReview=async (item_id,name,body,like_count)=>{    
    const savedReview = await api
    .post("/reviews/add/",{
        "name": name,
        "body": body,
        "like_count": like_count,
        "item": item_id
    })
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        throw new Error(error);
    });
    return savedReview;


};

}
