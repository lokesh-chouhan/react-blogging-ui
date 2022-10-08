const API_URL = "https://dummy.restapiexample.com/api/v1";

const fetchData = () => {
}

export const fetchBloglist = () => {
    return fetch(`${API_URL}/employees`).then(res => res.json()).then(res => res.data);

}

export const fetchPost = (id) => {
    return fetch(`${API_URL}/employee/${id}`).then(res => res.json()).then(res => res.data);
    
}