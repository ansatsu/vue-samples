<template>
  <div>
    <p>hello: {{ resolvedValue }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop()
  promiseProp!: Promise<Date>;

  resolvedValue: Date = new Date(1980, 1, 1);

  get stuffle() {
    return this.promiseProp.then(result => (this.resolvedValue = result));
  }
}
</script>
