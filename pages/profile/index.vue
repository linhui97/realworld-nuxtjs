<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">
        <!-- 用户 -->
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <p>
            {{ profile.bio }}
          </p>
          <nuxt-link  v-if="profile.username === user.username" class="btn btn-sm btn-outline-secondary action-btn" :to="{ path: '/settings' }">
            <i class="ion-gear-a"></i> Edit Profile Settings
          </nuxt-link>
          <button v-else class="btn btn-sm btn-outline-secondary action-btn"
            :class="{active: profile.following}"
             @click="onFollow(profile)"
             :disabled="profile.followingDisable">
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }} 
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <!-- 标签 -->
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link class="nav-link"
                :class="{active: tab === 'my_articles'}"
                exact
                :to="{
                  name: 'profile',
                  params: {
                    username: $route.params.username
                  },
                  query: {
                    tab: 'my_articles'
                  }
                }">My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" 
                :class="{active: tab === 'favorited_articles'}"
                exact
                :to="{
                  name: 'profile',
                  params: {
                    username: $route.params.username
                  },
                  query: {
                    tab: 'favorited_articles'
                  }
                }">Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>
        <template v-if="articles.length > 0">
          <!-- 文章列表 -->
          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile', 
                params: {
                  username: article.author.username
                  }
                }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  name: 'profile', 
                  params: {
                    username: article.author.username
                    }
                  }">
                {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" 
                :class="{active: article.favorited}" 
                @click="onFavorite(article)"
                :disabled="article.favoriteDisable">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
              name: 'article', 
              params: {
                slug: article.slug
                }
              }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline" v-for="(item, index) in article.tagList" :key="item + index">
                  {{ item }}
                </li>
              </ul>
            </nuxt-link>
          </div>
          <!-- 分页 -->
          <nav>
            <ul class="pagination">
              <li class="page-item" 
                :class="{active: item === page}"
                v-for="item in totalPage" 
                :key="item">
                <nuxt-link class="page-link" 
                  :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab: tab
                    }
                  }">
                  {{ item }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </template>
        <template v-else>
          <div class="article-preview">No articles are here... yet.</div>
        </template>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { 
  getArticles, 
  addFavorite,
  deleteFavorite
} 
from '@/api/articles.js'
import { 
  getProfile,
  followUser,
  unfollowUser
} from '@/api/profile.js'
import { mapState } from 'vuex'

export default {
  middleware: 'authenticated',
  name: 'ProfileIndex',
  async asyncData ({query, params}) {
    console.log(query, params)
    const page = Number.parseInt(query.page || 1)
    const limit = 10
    const tab = query.tab || 'my_articles'
    const req = {
      limit,
      offset: (page - 1) * limit,
    }
    if (tab === 'my_articles') {
      req.author = params.username
    } else {
      req.favorited = params.username
    }
    const [ articleRes, profileRes ] = await Promise.all([
      // 获取文章列表
      getArticles(req),
      // 获取标签列表
      getProfile(params.username)
    ])
    const { articles, articlesCount } = articleRes.data
    const { profile } = profileRes.data
    articles.forEach(item => {
      item.favoriteDisable = false
    })
    profile.followingDisable = false
    return {
      profile,
      articles,  // 文章列表
      articlesCount, // 文章总数
      limit, // 每页大小
      page, // 页码
      tab, // 选项卡
    }
  },
  watchQuery: ['page', 'tab'],
  data() {
    return {
    };
  },
  computed:{
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  watch:{
  },
  methods: {
    async onFavorite(article) {
      console.log(article)
      article.favoriteDisable = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisable = false
    },
    async onFollow(profile) {
      console.log(profile)
      profile.followingDisable = true
      if (profile.following) {
        // 取消关注用户
        await unfollowUser(profile.username)
        profile.following = false
      } else {
        // 关注用户
        await followUser(profile.username)
        profile.following = true
      }
      profile.followingDisable = false
    }
  },
};
</script>

<style scoped>

</style>