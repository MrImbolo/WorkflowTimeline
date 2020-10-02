<template>
  <v-card app style="height: 100vh; max-height: 100vh;" tile>
    <template>
      <v-navigation-drawer permanent width="100%">
        <v-row fill-height no-gutters>
          <FileMenu
            v-bind:callSelectFile="selectFile"
            v-bind:selectedFile="selectedFile"
            v-bind:isMobile="isMobile"
            v-bind:files="files"
            v-if="showFileMenu()"
          ></FileMenu>
          <Timeline
            v-bind:selectedFile="selectedFile"
            v-bind:callClearFile="clearFile"
            v-bind:callSelectChunk="selectChunk"
            v-bind:selectedChunk="selectedChunk"
            v-bind:isMobile="isMobile"
            v-if="showTimeline()"
          ></Timeline>
          <Editor
            v-bind:selectedChunk="selectedChunk"
            v-bind:callClearChunk="clearChunk"
            v-bind:isMobile="isMobile"
            v-if="showEditor()"
          ></Editor>
        </v-row>
      </v-navigation-drawer>
    </template>
  </v-card>
</template>
<script>
import FileMenu from "./FileMenu.vue";
import Timeline from "./Timeline.vue";
import Editor from "./Editor.vue";

export default {
  data: () => ({
    selectedFile: null,
    selectedChunk: null,
    isMobile: false,
    files: [
      {
        icon: "mdi-timeline",
        name: "First workflow",
        chunks: [
          {
            dt: 1601288262676,
            title: "Start your work with very loooooooooooooooooooooooong title",
            content: "11111111111"
          },
          {
            dt: 1601288300000,
            title: "Save your progress",
            content: "222222222222"
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
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
            content: "Type your starting point here..."
          },
          {
            dt: 1601288500000,
            title: "Create clear summary",
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
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
      {
        icon: "mdi-timeline",
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
      },
    ]
  }),
  components: {
    FileMenu,
    Timeline,
    Editor
  },
  methods: {
    selectFile(e, file) {
      this.selectedFile = !this.selectedFile
        ? file
        : this.selectedFile == file
        ? null
        : file;
    },
    clearFile() {
      this.selectedFile = null;
    },
    selectChunk(e, chunk) {
      this.selectedChunk = chunk;
    },
    clearChunk() {
      this.selectedChunk = null;
    },
    showFileMenu() {
      return (
        (this.isMobile && !this.selectedFile && !this.selectedChunk) ||
        !this.isMobile
      );
    },
    showTimeline() {
      return (
        (this.isMobile && this.selectedFile && !this.selectedChunk) ||
        !this.isMobile
      );
    },
    showEditor() {
      return (
        (this.isMobile && this.selectedFile && this.selectedChunk) ||
        !this.isMobile
      );
    }
  },
  mounted() {
    this.isMobile = this.$vuetify.breakpoint.smAndDown;
  },
  watch: {
    "$vuetify.breakpoint.smAndDown": function(val) {
      this.isMobile = val;
    }
  }
};
</script>
<style lang="scss">
.saturated {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>