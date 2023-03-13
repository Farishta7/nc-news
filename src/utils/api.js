import axios from 'axios';

const ncnewsApi = axios.create({baseURL: "https://farishtas-project.onrender.com/api"});

export const getArticles = () => {
    return ncnewsApi
    .get('/articles')
    .then((response) => {
        return response.data.articles;
    })
}