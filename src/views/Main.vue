<template>
<div>
  <center><h1>Todo List</h1></center>
  <div class="content">
      <todo></todo>
  </div>
  </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
  name: 'Main',
  props: {
 
  },
  components: {
      Todo,
  }
}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
@import url(https://fonts.googleapis.com/css?family=Bad+Script);
@import url(https://fonts.googleapis.com/css?family=Nova+Mono);

/* zocial */
[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
}

* {
  box-sizing:border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  background: #bdc3c7;
}

h1 {
 color:#7f8c8d;
  font-family: 'Bad Script', cursive;
  margin-bottom:0px;

}
.content {
  width: 400px;
  margin: 0 auto;
  background: #ecf0f1;
  border-top:5px solid #7f8c8d;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, .5);
  font-family: 'Nova Mono', cursive;
  font-size: 18px;
}

</style>
