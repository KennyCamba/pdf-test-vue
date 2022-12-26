<template>
  <v-toolbar bottom elevation="0">
    <v-row justify="space-between">
      <v-btn @click="previous">Anterior</v-btn>
      <v-col cols="4">
        <v-autocomplete
          v-model="selected"
          @change="onchange"
          :items="bookmarks"
          item-text="title"
          item-value="id"
        ></v-autocomplete>
      </v-col>
      <v-btn @click="next">Siguiente</v-btn>
    </v-row>
  </v-toolbar>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selected: null,
      bookmarks: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('http://localhost:8000/pdf/bookmarks/1/navigation/')
      .then((result) => {
        this.bookmarks = result.data;
        this.selected = this.bookmarks[0].id;
        this.$emit('navigate', this.bookmarks[0].metadata);
      });
    },
    onchange(id) {
      const data = this.bookmarks.find((value) => value.id == id);
      this.$emit('navigate', data.metadata);
    },
    next() {
      if (this.selected != null) {
        const index = this.bookmarks.findIndex((value) => value.id == this.selected);
        if(index < this.bookmarks.length - 1) {
          this.selected = this.bookmarks[index + 1].id;
          this.$emit('navigate', this.bookmarks[index + 1].metadata);
        }
      }
    },
    previous() {
      if (this.selected != null) {
        const index = this.bookmarks.findIndex((value) => value.id == this.selected);
        if(index > 0) {
          this.selected = this.bookmarks[index - 1].id;
          this.$emit('navigate', this.bookmarks[index - 1].metadata);
        }
      }
    }
  }
}
</script>