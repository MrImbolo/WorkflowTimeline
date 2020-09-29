<template>
  <v-card app style="height: 100vh;" tile>
    <v-navigation-drawer permanent width="100%">
      <v-row fill-height no-gutters>
        <FileMenu 
          v-bind:callSelectFolder="selectFolder" 
          v-bind:callSelectFile="selectFile" 
          v-bind:selectedFolder="selectedFolder" 
          v-bind:selectedFile="selectedFile"
        ></FileMenu>
        <Timeline 
          v-bind:callSelectChunk="selectChunk" 
          v-bind:selectedFile="selectedFile"
          v-bind:selectedChunk="selectedChunk"
        ></Timeline>
        <Content v-bind:selectedChunk="selectedChunk"></Content>
      </v-row>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import FileMenu from './FileMenu.vue';
import Timeline from "./Timeline.vue";
import Content from "./Content.vue";

export default {
  data: () => ({
    selectedFolder: null,
    selectedFile: null,
    selectedChunk: null,
  }),
  components: {
    FileMenu,
    Timeline,
    Content,
  },
  methods: {
    selectFile(e, file) { 
      this.selectedFile = (!this.selectedFile) 
        ? file 
        : (this.selectedFile == file)
          ? null
          : file; 
    },
    selectFolder(e, folder) {
      // if no folder or another folder selected -> select folder, deselect file
      if (!this.selectedFolder || this.selectedFolder != folder) { 
        this.selectedFolder = folder;
        this.selectedFile = null;
      }
      // if selection is released 
      else { 
        this.selectedFolder = null;
        this.selectedFile = null;
      }
    },
    selectChunk(e, chunk) {
      this.selectedChunk = chunk;
    }
  },
};
</script>
<style lang="scss">
  .saturated {
    background-color: rgba(0, 0, 0, 0.75);
  }
</style>