<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture" v-model="userInfo.image"/>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="userInfo.username"/>
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="userInfo.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="userInfo.email"/>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="userInfo.password"/>
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="updateUser">Update Settings</button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logout">Or click here to logout.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getUser, updateUser } from '@/api/user'
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  name: "SettingsIndex",
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  watch: {},
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const { data } = await getUser()
      this.userInfo = data.user
      this.userInfo.password = this.user.password
    },
    logout() {
      Cookie.remove("user");
      this.$store.commit("setUser", null);
      this.$router.push("/");
    },
    async updateUser() {
      const { data } = await updateUser({
        user: {
        bio: this.user.bio,
        email: this.user.email,
        image: this.user.image,
        password: this.user.password,
        username: this.user.username
        }
      })
      let user = data.user
      user.password = this.user.password
      // 保存用户登录状态
      this.$store.commit('setUser', user)
      // 为了防止刷新页面数据丢失，数据持久化
      Cookie.set('user', user)
      this.$router.push({ name: 'profile', params: { username: user.username }})
    }
  },
};
</script>

<style scoped>
</style>