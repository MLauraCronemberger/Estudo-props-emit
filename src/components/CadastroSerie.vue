<template>
  <v-dialog
    max-width="600"
    transition="dialog-bottom-transition"
    v-model="mostrarModalCadastrar"
    eager
  >
    <v-card>
      <v-card-text>
        <v-text-field
          label="Série"
          required
          outlined
          v-model="objeto.serie"
        />
        <v-text-field
          label="Nível Ensino"
          required
          outlined
          v-model="objeto.nivelEnsino"
        />
        <v-text-field
          label="Turma"
          required
          outlined
          v-model="objeto.turma"
        />
        <v-text-field
          label="Turno"
          required
          outlined
          v-model="objeto.turno"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="cadastrarSerie">Cadastrar</v-btn>
        <v-btn text @click="mostrarModalCadastrar =false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script setup>
import { ref } from 'vue';
import SerieService from '../service/SerieService';

const emit = defineEmits(['seriesCadastradas'])

// const seriesCadastradas = ref([]);

const objeto = ref({
  serie: '',
  nivelEnsino: '',
  turma: '',
  turno: '',
})

//   async function atualizarSeriesCadastradas() {
//     console.log("bateu aqui");
//     try {
//         const { data } = await SerieService.seriesCadastradas();
//         seriesCadastradas.value = data
//         console.log("baixando dnv:", seriesCadastradas);
//     } catch (e) {
//         console.error('Erro ao buscar serviços.', e)
//     }
// }

  async function cadastrarSerie() {
    try {
      const response = await SerieService.cadastrarSerie(objeto.value);
      console.log("Série cadastrada:", response.data);
      mostrarModalCadastrar.value= false;

      // await atualizarSeriesCadastradas();

      emit('seriesCadastradas', response.data)

    } catch (e) {
    console.error('Erro ao buscar serviços.', e)
    }
}

// const mostrarModalCadastrar = ref(true) // << ref aqui!
const mostrarModalCadastrar = defineModel("mostrarModalCadastrar");

function salvar() {
  console.log(objeto.value)
  mostrarModalCadastrar.value = false
}
</script>
