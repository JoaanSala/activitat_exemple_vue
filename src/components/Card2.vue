<template>
  <div>
      <b-card
        :title="titulo"
        :img-src="srcimg"
        :img-alt="alt"
        img-top
        img-width="200"
        img-height="200"
        tag="proyecto"
        style="max-width: 20rem;"
        class="mb-2"
      >
      </b-card>

      
  </div>
</template>

<script>
export default {
  props: ["id", "titulo", "srcimg", "alt"]
};
</script>

<style scoped></style>