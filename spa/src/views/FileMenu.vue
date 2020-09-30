<template>
    <v-navigation-drawer dark permanent :mini-variant="drawer && !isMobile" :width="isMobile ? '100%' : null" style="height: 100vh; max-height: 100vh;">
      <!-- <v-row class="fill-height" no-gutters>
        <v-navigation-drawer dark permanent> -->
          <v-list-item class="px-2">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
              Timelines
            </v-toolbar-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="(file, j) in files"
            :key="j"
            link
            @click="callSelectFile($event, file)"
          >
            <v-list-item-icon>
              <v-icon
                v-text="file.icon"
                :color="selectedFile == file ? 'amber' : ''"
              ></v-icon>
            </v-list-item-icon>

            <v-list-item-title
              v-text="file.name"
              :class="selectedFile == file ? 'amber--text' : ''"
            ></v-list-item-title>
          </v-list-item>
        <!-- </v-navigation-drawer>
      </v-row> -->
    </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    crumb: "Timeline",
  }),
  props: {
    callSelectFile: Function,
    selectedFile: Object,
    isMobile: Boolean,
    files: Array,
  },
};
</script>