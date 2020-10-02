<template>
  <v-col>
    <v-card height="100%" width="100%">
      <v-toolbar class="justify-center bg-transparent" dense flat tile>
          <v-app-bar-nav-icon @click="callClearChunk($event)" v-if="isMobile">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-app-bar-nav-icon>
        <v-text-field
          dense
          hide-details
          v-if="selectedChunk"
          v-model="selectedChunk.title"
          class="input-centered"
        >
          <v-icon slot="prepend">
            mdi-playlist-edit
          </v-icon>
        </v-text-field>
      </v-toolbar>
      <v-card-text>
        <Editor v-model="selectedChunk.content" width="auto" height="80vh" :image-provider="imageProvider" v-if="selectedChunk" :key="selectedChunk.title" /> 
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import Editor from '@baoshishu/vue-editor';

export default {
  data: () => ({
    editorValue: '',
    imageProvider: {
        name: 'qiniu', // provider name
        token:
          '-qWchT63mkZEJch0ygm3bN9h3peInHqCcSAEMtvV:9YAz4dCiB3EAdYuoDVO0YvObtqY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTkwMjAyODY1NX0=', // upload token
        domain: '/', // upload domain
        modifier: ({ width, height, url }) => {
          height;
          if (width < 750) {
            return url
          } else {
            return `${url}?imageMogr2/thumbnail/750x/`
          }
        },
      },
  }),
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    }
  },
  props: {
    selectedChunk: Object,
    callClearChunk: Function,
    isMobile: Boolean
  },
  components: {
    Editor, 
  }
};
</script>
<style lang="scss">
.input-centered {
  & input {
    text-align: center;
  }
}
</style>