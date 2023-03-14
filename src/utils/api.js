import axios from 'axios';

const ncnewsApi = axios.create({baseURL: "https://farishtas-project.onrender.com/api"});

export const getArticles = () => {
    return ncnewsApi
    .get('/articles')
    .then((response) => {
        return response.data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return ncnewsApi
    .get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}

export const getComments = (article_id) => {
    return ncnewsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.articleComments;
    })
}