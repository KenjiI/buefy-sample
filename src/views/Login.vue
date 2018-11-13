<template>
  <div style="height: 100vh; background-color: #eee;">
  <div class="loginForm container">
    <div class="is-size-3" style="padding: 0 15px 15px">Login</div>
    <section style="padding: 16px;">
      <b-field label="Email">
        <b-input type="email"
          value="john@"
          maxlength="30"
          icon-pack="fas"
          icon="envelope">
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input
          value="123"
          type="password"
          maxlength="30"
          icon-pack="fas"
          icon="lock"></b-input>
      </b-field>

      <a class="button is-primary" style="display: flex" @click="this.submit">ログイン</a>
    </section>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  submit(): void {
    this.$store.dispatch('signin');
    this.$router.push('/about');
  }
}
</script>

<style lang="scss" scoped>
.loginForm {
  background-color: #ffffff;
  width: 400px;
  margin: auto;
  position: relative;
  top: 70px;
  border: 1px solid;
  border-radius: .81em;
  padding: 24px;
  border-color: #ddd;
}
</style>

