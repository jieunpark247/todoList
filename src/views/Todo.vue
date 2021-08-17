<template>
    <div class="contents">
        <div class="header">
            <form action="">
                <button type="submit">
                    <span class="entypo-list-add"></span>
                </button>
            <input type="text" ng-model="todoFld" placeholder="Add todo here!"/>
            </form>         
        </div>
        <TodoItem></TodoItem>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'

export default {
  name: 'Todo',
  props: {
 
  },
  components: {
      TodoItem,
  }
}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
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
.header {
  padding:20px;
  background: #ececec;
}
input {
  background: transparent;
  border:none;
  font-size:20px;
  font-family: 'Nova Mono', cursive;
  color:#95a5a6;
  width: 300px;
}

input:focus {
    /* outline-color: transparent; */
}
span:focus {
    /* outline-color: transparent; */
}

button {
   background: transparent;
   border:none;
  color:#7f8c8d;
  cursor: pointer;
}
button {
   background: transparent;
   border:none;
  color:#7f8c8d;
  cursor: pointer;
}

</style>
