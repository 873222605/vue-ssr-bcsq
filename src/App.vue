<template>
  <div id="app">
    <myHead></myHead>
    <router-view/>
	<myFoot></myFoot>
  </div>
</template>

<script>
import myHead from './components/header.vue'
import myFoot from './components/foot.vue'
export default {
  name: 'app',
  components: {
    myHead, myFoot
  }
}
</script>
