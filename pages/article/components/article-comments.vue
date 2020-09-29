<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="commentBody"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="article.author.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="addComment"
        :disabled="isDisplay">Post Comment</button>
      </div>
    </form>

    <div class="card" v-for="(comment, index) in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          class="comment-author"
          :to="{
            name: 'profile', 
              params: {
                username: comment.author.username
              }
          }"
        >
          <img class="comment-author-img" :src="comment.author.image" />
        </nuxt-link>&nbsp;
        <nuxt-link
          :to="{
            name: 'profile', 
              params: {
                username: comment.author.username
              }
          }"
          class="comment-author"
        >{{ comment.author.username }}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date }}</span>
        <span class="mod-options" v-if="comment.author.username === user.username">
          <i class="ion-trash-a" @click="deleteComment(comment, index)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  getComments,
  addComment,
  deleteComment
} from "@/api/articles.js";
import { mapState } from 'vuex'

export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [], // 评论列表
      comment: {}, // 添加的评论
      commentBody: "", // 添加的评论内容
      isDisplay: false
    };
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const { data } = await getComments(this.article.slug);
      this.comments = data.comments;
    },
    // 添加评论
    async addComment() {
      let d = {
        slug: this.article.slug,
        data: {
          comment: {
            body: this.commentBody,
          }
        },
      };
      if (!this.isDisplay) {
        this.isDisplay = true
        const { data } = await addComment(d);
        this.comment = data.comment
        this.comments.unshift(this.comment)
        this.commentBody = null
        this.isDisplay = false
      }
    },
    // 删除自己写的评论
    async deleteComment(comment, index) {
      let d = {
        slug: this.article.slug,
        id: comment.id
      }
      await deleteComment(d)
      this.comments.splice(index, 1)
    }
  },
};
</script>

<style scoped>
</style>