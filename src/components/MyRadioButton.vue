<template>
  <div :class="['d-flex', contentCenter ? 'align-items-center' : '']">
    <input
      :class="[
        'form-check-input',
        label != null && label.length > 0 ? 'me-2' : '',
      ]"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      @click="$emit('update:modelValue', $event.target.value)"
    />
    <label
      class="form-check-label label"
      :for="id"
      v-if="label != null && label.length > 0"
      >{{ label }}</label
    >

    <div class="d-flex-column ms-2" id="c-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRadioButton",
  model: {},
  props: {
    modelValue: String,
    value: String,
    name: String,
    id: String,
    label: String,
    contentCenter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>