<template>
  <v-col>
    <v-card height="100%">
      <v-toolbar class="justify-center bg-transparent" dense flat tile>
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
        <v-toolbar class="bg-transparent-7" dense flat tile floating>
          <!-- <template  v-if="$vuetify.breakpoint.mdAndUp"> -->
          <v-row class="fill-height">
            <v-col cols="6" md="12">
              <v-overflow-btn
                :items="dropdown_font"
                label="Select font"
                hide-details
                class="pa-0 tool"
              ></v-overflow-btn>
              <v-overflow-btn
                :items="dropdown_edit"
                label="Select size"
                hide-details
                class="pa-0"
                overflow
              ></v-overflow-btn>
            </v-col>
            <v-col cols="6" md="12">
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

              <v-btn-toggle
                v-model="toggle_exclusive"
                color="primary"
                dense
                group
              >
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
            </v-col>
          </v-row>
        </v-toolbar>
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
    selectedChunk: Object
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