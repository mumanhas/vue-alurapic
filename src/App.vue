<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="photo of photos" :key="photo.id">
        <img :src="photo.src" :alt="photo.text">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      title : "Alurapic",
      photos: [
        {
          src: 'https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-0e01be20.jpg',
          text: 'cachorro'
        },
        {
          src: 'https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-0e01be20.jpg',
          text: 'cachorro fofinho'
        }
      ] 
    }
  }
}
</script>
