<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="article.title"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="article.description"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  v-model="article.body"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="tag"
                  @keyup.enter="onEnter"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list" v-if="article.tagList.length > 0">
                  <span class="tag-default tag-pill" v-for="(item, index) in article.tagList" :key="item + index">
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{item}}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" @click="addArticles" :disabled="loading" type="button">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  addArticles,
  getArticlesBySlug,
  updateArticles
} from "@/api/articles.js";

export default {
  middleware: "authenticated",
  name: "EditorIndex",
  data() {
    return {
      tag: "",
      article: {
        title: "", // 标题
        description: "",
        body: "",
        tagList: [],
      },
      loading: false,
      slug: '',
    };
  },
  computed: {},
  watch: {},
  mounted() {
    if (this.$route.query.slug) {
      this.slug = this.$route.query.slug
      this.initData()
    }
  },
  methods: {
    async initData() {
      const { data } = await getArticlesBySlug(this.slug)
      this.article = data.article
    },
    onEnter() {
      this.article.tagList.push(this.tag)
      this.tag = null
    },
    deleteTag(index) {
      this.article.tagList.splice(index, 1)
    },
    async addArticles() {
      let article = {}
      if (!this.loading) {
        this.loading = true
        const {data} = this.slug ? await updateArticles({
          slug: this.slug,
          data: { 
            article: {
              title: this.article.title, 
              description: this.article.description,
              body: this.article.body,
              tagList: this.article.tagList,
            } 
          }
        }) : await addArticles({ article: this.article })
        article = data.article
        this.loading = false
        this.$router.push({ name: 'article', params: { slug: article.slug }})
      }
    }
  },
};
</script>

<style scoped>
</style>