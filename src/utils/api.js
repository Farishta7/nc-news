import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://farishtas-project.onrender.com/api",
});

export const getArticles = () => {
  return ncnewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return ncnewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getComments = (article_id) => {
  return ncnewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.articleComments;
  });
};

export const ArticleUpVote = (article_id) => {
  return ncnewsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.votes;
    });
};

export const ArticleDownVote = (article_id) => {
  return ncnewsApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then((response) => {
      return response.data.votes;
    });
};

export const postComment = (article_id, newComment) => {
  return ncnewsApi
    .post(`/articles/${article_id}/comments`, {
      username: "happyamy2016",
      body: newComment,
    })
    .then((response) => {
      return response.data.comment;
    });
};
