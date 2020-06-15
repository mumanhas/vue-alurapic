<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="photo of photos" :key="photo.id">
        <img :src="photo.url" :alt="photo.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      title : "Alurapic",
      photos: [] 
    }
  },

  created() {
    axios.get('http://localhost:3000/v1/fotos')
    .then(res => this.photos = res.data, err => console.log(err))
  }
}
</script>
