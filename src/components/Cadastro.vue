<template>

<v-text-field
    label="Nome"
    required
    outlined
    width="500px"
    v-model="objeto.nome"
    >

</v-text-field>

<v-button
label="cadastrar">

</v-button>

</template>

<script setup>
import { ref } from 'vue'

const objeto = {
    nome: ""

}


</script>

<style>

</style>