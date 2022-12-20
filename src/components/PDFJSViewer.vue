<template>
  <div style="display: flex; justify-content: space-between;">
    <iframe :src="getFilePath + bookmark" style="width: 100%; height: 100%;" ></iframe>
    <button @click="navigate">
      Navigate
    </button>
  </div>
</template>

<script>
export default {
  name: "PDFJSViewer",
  props: {
    fileName: String,
    path: String,
  },
  data() {
    return {
      bookmark: '',
    };
  },
  methods: {
    navigate: function () {
      if(this.bookmark.length == 0) {
        this.bookmark = "#%5B%7B%22num%22%3A326%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C769.445%2C0.9949%5D";
      } else {
        this.bookmark = '';
      }
    }
  },
  computed: {
    getFilePath() {
      if(this.fileName!==''){
          return this.path +'?file=' + this.fileName
      }
      return this.path     },
  },
};
</script>
<style scoped>
div {
  width: 50%;
  height: 79vh;
  min-width: 400px;
}
</style>
