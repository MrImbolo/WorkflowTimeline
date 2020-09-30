<template>
  <v-navigation-drawer dark permanent :mini-variant="drawer" :width="isMobile ? '100%' : '300'" mini-variant-width="96" style="height: 100vh; max-height: 100vh;">
    <v-list-item class="px-0">
      <v-list-item class="px-0">
        <v-toolbar dense flat color="transparent" :class="drawer ? 'justify-center' : '' ">
          <v-app-bar-nav-icon @click="callClearFile($event)" v-if="isMobile">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title class="pa-0">
            <v-text-field 
              v-if="!drawer"
              label="Search..." 
              hide-details 
              dense
              v-model="search"
            ></v-text-field>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="drawer = !drawer" v-if="!isMobile">
            <v-icon>
              {{!drawer ? 'mdi-chevron-left' : 'mdi-chevron-right'}}
            </v-icon>
          </v-btn>
        </v-toolbar>
      </v-list-item>
    </v-list-item>

    <v-divider></v-divider>

    <v-timeline dense v-if="selectedFile" class="pa-0">
      <v-tooltip right v-for="(chunk, i) in getVisibleChunks()" :key="i" :value="i === tooltipShown && !isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-timeline-item
            v-bind="attrs"
            v-on="on"
            small 
            v-ripple
            class="px-0 py-3 selectable-item"
            :color="selectedChunk == chunk ? 'amber' : 'white'"
            :fill-dot="!selectedChunk == chunk"
            @click.native="callSelectChunk($event, chunk)"
            @mouseover.native="tooltipShown = i"
            @mouseleave.native="tooltipShown = null"
          >
          <v-row class="pa-0" v-if="!drawer">
            <v-col cols="4" class="pa-0">
              <small :class="selectedChunk == chunk ? 'amber--text' : 'white--text'">{{dtShorten(chunk.dt)}}</small>
            </v-col>
            <v-col class="pa-0">
              <span class="caption" :class="selectedChunk == chunk ? 'amber--text' : 'white--text'">
                {{chunk.title}}
              </span>
            </v-col>
          </v-row>
        </v-timeline-item>
        </template>
        <span>{{chunk.title}}</span>
      </v-tooltip>
        
    </v-timeline>
    <v-card class="grow">
      <v-card-text class="py-0">
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    search: '',
    tooltipShown: null,
  }),
  methods: {
    dtShorten:(dt) => { 
      var date = new Date(dt);
      var currentDate = new Date();
      if (date.getFullYear() < currentDate.getFullYear())
        return date.getFullYear();
      else  
        return `${date.toLocaleString()}`;
    },
    getVisibleChunks() {      
      if (!this.search)
        return this.selectedFile.chunks;
      
      return this.selectedFile.chunks.filter(x => this.dtShorten(x.dt).includes(this.search) || x.title.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  props: {
    callSelectChunk: Function,
    callClearFile: Function,
    selectedFile: Object,
    selectedChunk: Object,
    isMobile: Boolean
  },
};
</script>
<style lang="scss" scoped>
  .selectable-item {
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

    &:hover {
      background-color: rgba(117, 117, 117, 1);
    }
  }
</style>