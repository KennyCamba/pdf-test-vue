<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->
<template>
  <div id="app">
    <div style="display: flex; justify-content: space-between;">
      <PDFJSViewer :path="path" :fileName="name"></PDFJSViewer>
    </div>
  </div>
</template>

<script>
import PDFJSViewer from './components/PDFJSViewer.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { PDFJSViewer },
  name: 'App',
  data () {
    return {
      name: 'TeoriaConjuntosProbabilidades.pdf', //change which pdf file loads
      path: 'lib/pdfjs/web/viewer.html' //path of the PDF.js viewer.html
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
