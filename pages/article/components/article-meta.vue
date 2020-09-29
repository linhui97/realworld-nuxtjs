<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile', 
        params: {
          username: article.author.username
        }
      }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
            name: 'profile', 
            params: {
              username: article.author.username
            }
          }"
      >{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <span v-if="article.author.username === user.username">
      <nuxt-link
        class="btn btn-outline-secondary btn-sm"
        :to="{
          name: 'editor', 
          query: {
            slug: article.slug
          }
        }"
      >
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>
      <button class="btn btn-outline-danger btn-sm" :disabled="loading" @click="deleteArticles">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </span>
    <span v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{active: article.author.following}"
        @click="onFollow(article)"
        :disabled="article.author.followingDisable"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{active: article.favorited}"
        @click="onFavorite(article)"
        :disabled="article.favoriteDisable"
      >
        <i class="ion-heart"></i>
        &nbsp;
        {{ article.favorited ? 'Unfavorite' : 'Favorite' }} Article
        <span
          class="counter"
        >({{ article.favoritesCount }})</span>
      </button>
    </span>
  </div>
</template>

<script>
import { followUser, unfollowUser } from "@/api/profile.js";
import { addFavorite, deleteFavorite, deleteArticles } from "@/api/articles.js";
import { mapState } from 'vuex'

export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  methods: {
    // 点赞
    async onFavorite(article) {
      console.log(article);
      article.favoriteDisable = true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisable = false;
    },
    // 关注用户
    async onFollow(article) {
      console.log(article.author);
      article.author.followingDisable = true;
      if (article.author.following) {
        // 取消关注用户
        await unfollowUser(article.author.username);
        article.author.following = false;
      } else {
        // 关注用户
        await followUser(article.author.username);
        article.author.following = true;
      }
      article.author.followingDisable = false;
    },
    // 删除文章
    async deleteArticles() {
      if (!this.loading) {
        this.loading = true
        await deleteArticles(this.article.slug)
        this.loading = false
        this.$router.push({ name: 'profile', params: { username: this.user.username }})
      }
    }
  },
};
</script>

<style scoped>
</style>