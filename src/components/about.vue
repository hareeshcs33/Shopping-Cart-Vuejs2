<template>
  <div class="home">
    <h1>about</h1>
    <div class="d-flex">
      <breadcrumb class="row justify-content-center m-4" :crumbs="crumbs" @crumbSelected="crumbSelected" />
    </div>
    <div class="mx-5">
      <tabs-nav :tabs="['Home','settings','Profile']" :selected="selected" @selected="tabSetSelected">
        <tab :isSelected="selected === 'Home'">
          <p>home tab</p>
        </tab>
        <tab :isSelected="selected === 'settings'">
          <p>settings tab</p>
        </tab>
        <tab :isSelected="selected === 'Profile'">
          <p>Profile tab</p>
        </tab>
      </tabs-nav>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../modules/breadcrumb/components/breadcrumb.vue';
import TabsNav from '../modules/tabs/components/tabs-nav.vue';
import Tab from '../modules/tabs/components/tab.vue';

export default {
  data(){
    return {
      crumbs: ["userList", "user", "userInfo"],
      selected: "Home"
    }
  },
  components: {
    Breadcrumb,
    TabsNav,
    Tab
  },
  methods: {
    crumbSelected(crumb){
      console.log(crumb);
    },
    tabSetSelected(tab){
      this.selected = tab;
    }
  }
}
</script>