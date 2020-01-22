<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Vuex demo</h1>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="inputField" label="Write something here"></v-text-field>
            <v-btn v-on:click="commitValue">Commit to store</v-btn>
          </v-col>
          <v-col cols="6"><SomeComponent /></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SomeComponent from "@/components/SomeComponent.vue";

@Component({
  components: { SomeComponent }
})
export default class App extends Vue {
  inputField: string = "";

  commitValue() {
    this.$store.commit("updateValue", this.inputField);
  }
}
</script>
