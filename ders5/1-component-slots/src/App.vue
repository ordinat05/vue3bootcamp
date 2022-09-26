<template>
  <!-- <div class="container"> -->
  <!-- <ModalDeneme @on-save="onSave" /> -->
  <!-- 🔺 1. yöntem Bu event yayınlandığında , bu sayfada ne yapmak istiyorsanız bunu kullanabilirsiniz.  -->
  <!-- <ModalDeneme :on-save="onSave" /> -->
  <!-- 🔺 2. yöntem on save aksiyonu için bir prop gönderiyorum, O Onsave isimli bir metoda sahip , içteki .vue sayfasından ona erişebilirdik.  -->
  <!-- <ModalDeneme
    :on-save="onSave"
    :title="'Title Üst Sayfadan gelen'"
    :content="'Content Üst Sayfadan gelen'"
    :content2="content2"
  /> -->
  <!-- 🔺 3. yöntem title, content çözümü  -->
  <ModalDeneme>
    <!-- <h3 style="background-color: rebeccapurple; color: aqua">
      5A Yöntem Slot ile gelen Title bilgisi
    </h3> -->
    <!-- 🔺  <template #default> bunu koyunca da aynısı oluyor. Aşağıda Örnek 5D -->
    <template #title>
      <h4 style="background-color: rebeccapurple; color: aqua">
        5B Yöntem Slot #title
      </h4>
    </template>
    <template #content>
      <p style="background-color: rebeccapurple; color: aqua">
        5C Yöntem Slot #content
      </p>
    </template>
    <template #default>
      <h5 style="background-color: rebeccapurple; color: aqua">
        5D Yöntem default Slot
      </h5>
    </template>
  </ModalDeneme>

  <!-- 🔺 5. yöntem title, content çözümü  -->
  <!-- <UserSection /> -->
  <!-- </div> -->
</template>

<script>
import ModalDeneme from "@/components/ModalDeneme.vue";
// import UserSection from "@/components/UserSection.vue";

export default {
  components: {
    ModalDeneme,
    // UserSection,
  },
  data() {
    return {
      content2: `<h3 class="text-red" >Content2 Üst Sayfadan gelen</h3>  <button class="mr-2" @click="onSave" class="ml-2 green">Content2 Üst Sayfadan Oluşturulan Buton</button>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved !!");
    },
  },
};
</script>
