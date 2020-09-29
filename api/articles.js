import request from '@/utils/request'
// 添加文章
export const addArticles = data => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}
// 修改文章
export const updateArticles = ({slug, data}) => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data
    })
}
// 删除文章
export const deleteArticles = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`
    })
}
// 获取单篇文章
export const getArticlesBySlug = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}
// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}
// 获取用户关注的文章列表
export const getYourFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}
// 点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}
// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}
// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}
// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}
// 添加文章评论
export const addComment = ({slug, data}) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}
// 删除自己的评论
export const deleteComment = ({slug, id}) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`
    })
}