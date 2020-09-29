<template>
    <v-navigation-drawer permanent :mini-variant="drawer" style="height: 100vh; max-height: 100vh;">
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer dark permanent>
          <v-list-item class="px-2">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-list-item-title :text="crumb"></v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-group
            v-for="(folder, i) in folders"
            :key="i"
            :prepend-icon="folder.icon"
            color="amber"
          >
            <template v-slot:activator>
              <v-list-item-title
                v-text="folder.name"
                @click.exact="callSelectFolder($event, folder)"
              ></v-list-item-title>
            </template>

            <v-list-item
              v-for="(file, j) in folder.files"
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
          </v-list-group>
        </v-navigation-drawer>
      </v-row>
    </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    crumb: "Timeline",
    folders: []
  }),
  methods: {
    loadFolders: function() {
      return [
        {
          icon: "mdi-folder",
          name: "Default folder",
          files: [
            {
              icon: "mdi-chart-timeline-variant",
              name: "First workflow",
              chunks: [
                {
                  dt: 1601288262676,
                  title: "Start your work",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288300000,
                  title: "Save your progress",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288400000,
                  title: "Sync with git",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288500000,
                  title: "Create clear summary",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288600000,
                  title: "Share with teammates",
                  content: "Type your starting point here..."
                }
              ]
            },
            {
              icon: "mdi-chart-timeline-variant",
              name: "Second workflow",
              chunks: [
                {
                  dt: 1601288262676,
                  title: "Start your work",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288300000,
                  title: "Save your progress",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288400000,
                  title: "Sync with git",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288500000,
                  title: "Create clear summary",
                  content: "Type your starting point here..."
                },
                {
                  dt: 1601288600000,
                  title: "Share with teammates",
                  content: "Type your starting point here..."
                }
              ]
            }
          ]
        }
      ];
    }
  },
  props: {
    callSelectFolder: Function,
    callSelectFile: Function,
    selectedFolder: Object,
    selectedFile: Object
  },
  mounted: function() {
    this.folders = this.loadFolders();
  }
};
</script>