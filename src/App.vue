<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <PDFJSViewer :path="path" :fileName="name" :bookmark="bookmark"></PDFJSViewer>
      <pdf-navigator @navigate="onNavigate"></pdf-navigator>
    </v-main>
  </v-app>
</template>

<script>
import PDFJSViewer from './components/PDFJSViewer.vue';
import PdfNavigator from './components/PdfNavigator.vue';

export default {
  name: 'App',

  components: {
    PDFJSViewer,
    PdfNavigator
},

data () {
    return {
      name: 'TeoriaConjuntosProbabilidades.pdf', //change which pdf file loads
      path: 'lib/pdfjs/web/viewer.html', //path of the PDF.js viewer.html
      bookmark: ''
    }
  },
  methods: {
    onNavigate(ref) {
      this.bookmark = '#' + encodeURIComponent(ref);
      // console.log(encodeURIComponent(ref));
    }
  }
};
</script>
