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
      <v-card dense flat tile>
        <v-overflow-btn
          dense
          :items="dropdown_font"
          label="Select font"
          hide-details
          class="pa-0"
        ></v-overflow-btn>
        <v-overflow-btn
          dense
          :items="dropdown_edit"
          editable
          label="Select size"
          hide-details
          class="pa-0"
        ></v-overflow-btn>

        <v-btn-toggle
          v-model="toggle_multiple"
          color="primary"
          dense
          group
          multiple
        >
          <v-btn :value="1" text>
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>

          <v-btn :value="2" text>
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>

          <v-btn :value="3" text>
            <v-icon>mdi-format-underline</v-icon>
          </v-btn>

          <v-btn :value="4" text>
            <v-icon>mdi-format-color-fill</v-icon>
          </v-btn>
        </v-btn-toggle>

        <v-divider vertical></v-divider>

        <v-btn-toggle v-model="toggle_exclusive" color="primary" dense group>
          <v-btn :value="1" text>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>

          <v-btn :value="2" text>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>

          <v-btn :value="3" text>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn :value="4" text>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-card>
      <v-card-text>
        <v-textarea
          v-if="selectedChunk"
          name="input-7-1"
          no-resize
          v-model="selectedChunk.content"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data: () => ({
    dropdown_font: [
      { text: "Arial" },
      { text: "Calibri" },
      { text: "Courier" },
      { text: "Verdana" }
    ],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" }
    ],
    toggle_exclusive: 2,
    toggle_multiple: [1, 2, 3]
  }),
  props: {
    selectedChunk: Object,
    callClearChunk: Function,
    isMobile: Boolean
  }
};
</script>
<style lang="scss">
.input-centered {
  & input {
    text-align: center;
  }
}
.toolbar-wrap {
  // max-height: auto !important;
  
  & > div > div {
    // flex-wrap: wrap;
    // max-height: auto !important;
    flex-shrink: 1;
  }
  
  // & .combobox {
  //   max-width: 50%;
  // }
}
</style>