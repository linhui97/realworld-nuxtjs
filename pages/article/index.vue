<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{ article.title }}</h1>

      <article-meta :article="article"/>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body"></div>
    </div>
    <ul class="tag-list">
      <li class="tag-default tag-pill tag-outline" v-for="(item, index) in article.tagList" :key="item + index">
        {{ item }}
      </li>
    </ul>
    <hr />

    <div class="article-actions">
      <article-meta :article="article"/>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

        <article-comments :article="article"/>
        
      </div>

    </div>

  </div>

</div>
</template>

<script>
import { getArticle } from '@/api/articles.js'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta'
import ArticleComments from './components/article-comments'

export default {
  name: 'ArticleIndex',
   async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    article.author.followingDisable = false
    article.favoriteDisable = false
    return {
      article
    }
  },
  components: {
    ArticleMeta,
    ArticleComments
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>