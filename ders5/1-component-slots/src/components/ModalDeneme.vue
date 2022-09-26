<template>
  <div class="container">
    <div class="header">
      <h1>Modal title</h1>
      <h1 style="background-color: yellow">{{ title }}</h1>
    </div>
    <hr />
    <div class="content my-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      quam maiores rem aperiam dolorum assumenda recusandae iusto commodi
      quidem, necessitatibus
    </div>
    <div class="content my-2" style="background-color: yellow">
      {{ content }}
    </div>
    <div
      class="content my-2"
      v-html="content2"
      style="background-color: yellow"
    ></div>
    <div>
      <!-- <slot /> -->
      <!-- 🔺 <slot name="default" /> bunu koyunca da aynısı oluyor. Aşağıda Örnek 5D -->
      <slot name="title" />
      <slot name="content" />
      <slot name="default" />
    </div>

    <hr />
    <div class="footer text-right">
      <button class="mr-2">KAPAT</button>
      <button @click="onSave" class="ml-2 green">KAYDET</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "content2", "onSave"],
};
</script>
