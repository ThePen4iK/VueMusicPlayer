<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <!--  <router-view/>-->
  <div class="app">
    <Navbar></Navbar>
    <Header></Header>

    <main class="main">

      <router-view></router-view>

    </main>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/views/Main";
import Footer from "@/components/Footer";

export default {
  components: {
    Footer,
    Main,
    Navbar,
    Header
  }
}
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

aside,
nav,
footer,
header,
section {
  display: block;
}

html,
body {
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

.app {
  display: grid;
  grid-template-areas: "nav head"
                       "nav main"
                       "nav foot";
  width: 100%;
  height: 100vh;
  grid-template-rows: 81px 1fr auto;
  grid-template-columns: 285px 1fr;
}

.main {
  grid-area: main;
  background: #0f1e36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>