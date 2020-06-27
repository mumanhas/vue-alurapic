<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>

    <input
      @input="filtro = $event.target.value"
      type="search"
      class="filter"
      placeholder="filtre pelo titulo da foto"
    />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.id">
        <painel :titulo="foto.titulo">
          <imagem-responsiva :src="foto.url" :alt="foto.titulo" />
          <meu-botao 
          rotulo="remover" 
          tipo="button" 
          :confirmacao="true"
          estilo="perigo"
          @botaoAtivado="remove(foto)"/>
        </painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import Painel from '../shared/painel/Painel';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
  import Botao from '../shared/botao/Botao.vue';

  export default {

    components: {
      painel : Painel,
      'imagem-responsiva' : ImagemResponsiva,
      'meu-botao' : Botao
    },

    data() {
      return {
        titulo : "Alurapic",
        fotos: [],
        filtro: ''
      }
    },

    methods: {

      remove(foto){
        alert(foto.titulo + 'foi removida');
      }

    },

    computed: {
      fotosComFiltro() {
        if (this.filtro) {
        // criando uma expressão com o valor do filtro, insensitivo
        let exp = new RegExp(this.filtro.trim(), 'i');
        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos
        }
      }
    },

    created() {
      axios.get('http://localhost:3000/v1/fotos')
      .then(res => this.fotos = res.data, err => console.log(err))
    }
  }
</script>

<style scoped>

  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filter {
    width: 100%;
  }
</style>