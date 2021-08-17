<template>
    <div class="todoItem" ng-repeat="todo in todos">
    <span class="todo" contenteditable="true">todo </span>
    <button>
        <span class="">o</span>
    </button>
    <button>
        <span>x</span>
    </button>
    </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
 
  }
}
</script>

<style scoped>

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
span:focus {
    /* outline-color: transparent; */
}
button {
   background: transparent;
   border:none;
  color:#7f8c8d;
  cursor: pointer;
}
.todoItem {
  padding: 20px;
  border-top:2px solid rgb(200,200,200);
  border-top-style:dashed;
  color:#7f8c8d;
  transition:all 1s;
}

.todoItem button {
  position: relative;
  background: rgba(0,0,0,0);
  border: 0;
  float: right;
  display:inline-block;
  color:transparent;
  transition:all .5s;
}

.todoItem:hover button {
  color:#7f8c8d;
}
.done {
  text-decoration:line-through;
}
</style>
