<template>
    <v-data-table
  v-model:search="search"
  :filter-keys="['serie', 'turma', 'nivelEnsino']"
  :items="seriesCadastradas"
  :headers="headers"
  class="text-left"
>
  <template v-slot:[`item.acoes`]="{ item }">
    <div class="d-flex justify-center">
      <v-btn
        icon
        size="small"
        variant="text"
        @click="visualizarItem(item.id)"
        class="mr-1"
      >
        <v-icon color="primary">mdi-eye</v-icon>
      </v-btn>
      
      <v-btn
        icon
        size="small"
        variant="text"
        @click="editarItem(item.id)"
        class="mr-1"
      >
        <v-icon color="orange">mdi-pencil</v-icon>
      </v-btn>
      
      <v-btn
        icon
        size="small"
        variant="text"
        @click="excluirItem(item.id)"
      >
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
    </div>
  </template>
</v-data-table>
    <br>
    <br>
      <v-btn color="primary" @click="mostrarModal">Cadastrar Série</v-btn>

      <CadastroSerie v-model:mostrarModalCadastrar="mostrarModalCadastrar"  @seriesCadastradas="atualizarLista"/>

</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import CadastroSerie from './CadastroSerie.vue'
import SerieService from '../service/SerieService';

const mostrarModalCadastrar= ref(false);
const search = ref('')

const headers = [
  { title: 'Série', value: 'serie', sortable: true },
  { title: 'Turma', value: 'turma', sortable: true },
  { title: 'Nível de Ensino', value: 'nivelEnsino', sortable: true },
  { title: 'Ações', value: 'acoes', sortable: false, align: 'center' }
]

   const seriesCadastradas = ref([]);

    async function fetchSeriesCadastradas() {
        try {
            const { data } = await SerieService.seriesCadastradas();
            seriesCadastradas.value = data
        } catch (e) {
            console.error('Erro ao buscar serviços.', e)
        }
}

    function atualizarLista(novaSerie) {
        console.log("Recebi do filho:", novaSerie)
        seriesCadastradas.value.push(novaSerie)
    }

    onMounted(() => {
        console.log('Componente montado')
        fetchSeriesCadastradas()
    })

    function mostrarModal () {
    mostrarModalCadastrar.value = true;
    }

    function visualizarItem(id) {
    console.log('Visualizar', id)
    }
    function editarItem(id) {
    console.log('Editar', id)
    }
    function excluirItem(id) {
    console.log('Excluir', id)
    }

</script>