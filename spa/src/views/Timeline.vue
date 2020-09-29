<template>
  <v-navigation-drawer dark permanent :mini-variant="drawer" mini-variant-width="96" style="height: 100vh; max-height: 100vh;" width="386">
    <v-list-item class="px-0">
      <v-list-item class="px-0">
        <!-- <v-text-field 
        label="Search..." 
        hide-details 
        dense
        v-model="search"
        :prepend-icon="!drawer ? 'mdi-chevron-left' : 'mdi-chevron-right'"
        @click:prepend="drawer=!drawer"
        ></v-text-field> -->
        <v-toolbar dense flat color="transparent" :class="drawer ? 'justify-center' : '' ">
          <v-btn icon
            @click="drawer=!drawer">
            <v-icon>{{!drawer ? 'mdi-chevron-left' : 'mdi-chevron-right'}}</v-icon>
          </v-btn>
          <v-text-field 
            v-if="!drawer"
            label="Search..." 
            hide-details 
            dense
            v-model="search"
          ></v-text-field>
        </v-toolbar>
      </v-list-item>
    </v-list-item>

    <v-divider></v-divider>

    <v-timeline dense v-if="selectedFile" class="pa-0">
        <v-timeline-item
          small 
          v-ripple
          class="px-0 py-3 selectable-item"
          :color="selectedChunk == chunk ? 'amber' : 'white'"
          :fill-dot="!selectedChunk == chunk"
          v-for="(chunk, i) in getVisibleChunks()"
          :key="i"
          @click.native="callSelectChunk($event, chunk)">
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
    selectedFile: Object,
    selectedChunk: Object
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