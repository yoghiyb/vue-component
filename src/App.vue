<template>
  <div class="container">
    <h3>Display Label</h3>
    <div class="col">
      <div><b>Name</b></div>
      <div class="d-flex">
        <my-radio-button
          id="radio1"
          name="radio_name"
          label="Radio A"
          value="radio1"
          v-model="val"
        />
        <my-radio-button
          id="radio2"
          name="radio_name"
          label="Radio B"
          value="radio2"
          v-model="val"
        />
      </div>
    </div>
    <p>{{ val }}</p>
    <br />
    <h3>Subcomponent</h3>
    <div class="col">
      <my-radio-button
        id="rb_sub_component_1"
        name="sub_component"
        :contentCenter="true"
      >
        <input type="text" class="form-control" />
      </my-radio-button>
      <br />
      <my-radio-button
        id="rb_sub_component_2"
        name="sub_component"
        :contentCenter="true"
      >
        <span>TEST</span>
        <input type="date" class="form-control" />
      </my-radio-button>
      <br />
      <my-radio-button
        id="rb_sub_component_3"
        name="sub_component"
        :contentCenter="true"
      >
        <input type="text" class="form-control" />
        <br />
        <my-radio-button
          id="rb_sub_component_sub"
          name="sub_component_sub"
          :contentCenter="true"
        >
          <input type="text" class="form-control" />
          <br />
          <input type="text" class="form-control" />
        </my-radio-button>
      </my-radio-button>
    </div>
    <br />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyRadioButton from "./components/MyRadioButton.vue";

export default {
  name: "App",
  components: {
    MyRadioButton,
  },
  data() {
    return {
      val: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
