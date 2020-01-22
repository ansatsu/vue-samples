<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Reacting to promises</h1>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <p>tja left</p>
            <v-btn v-on:click="makePromise">Make a promise!</v-btn>
          </v-col>
          <v-col cols="6">
            <HelloWorld :promiseProp="thePromise" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: { HelloWorld }
})
export default class App extends Vue {
  thePromise: Promise<Date> = new Promise((res, rej) => {});

  makePromise() {
    this.thePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date());
      }, 2000);
    });
  }
}
</script>
