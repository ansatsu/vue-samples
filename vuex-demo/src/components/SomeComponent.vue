<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Value from store:</div>
      <p class="display-1 text--primary">
        {{ this.$store.state.theValue }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class SomeComponent extends Vue {}
</script>
