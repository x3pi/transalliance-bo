<template>
  <div>
    <b-card
      class="card-table"
      title="Kick start your project 🚀"
    >
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :select-options="{ enabled: true,disableSelectInfo: true, }"
      >

        <template
          slot="table-row"
          slot-scope="props"
        >
          <span v-if="props.column.field == 'id'">
            <span style="font-weight: bold; color: blue;">{{ props.row.age }}</span>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import { BCard } from 'bootstrap-vue'

export default {
  name: 'MyComponent',
  components: {
    VueGoodTable,
    BCard,
  },
  data() {
    return {
      columns: [
        {
          label: 'Id',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Nom',
          field: 'nom',
        },
        {
          label: 'Prénom',
          field: 'age',
          type: 'number',
        },
        {
          label: "Nom d'utilisateur",
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Email',
          field: 'email',
          type: 'email',
        },
        {
          label: 'Access token gmail',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Refresh token gmail',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Cookie for meet',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Telephone',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Address',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Is loaded',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'App version',
          field: 'score',
          type: 'Date naissance',
        },
        {
          label: 'Date naissance',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'N conducter',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Pays rattachement',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Etablissement',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Code security',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Is enable notification',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Raison sociale',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Avatar',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Last time open rh',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Realm',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Email verified',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Numéro de série',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Type',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Rôle',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Action',
          field: 'score',
          type: 'percentage',
        },

      ],
      rows: [
        {
          id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343,
        },
        {
          id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343,
        },
        {
          id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343,
        },
        {
          id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343,
        },
        {
          id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343,
        },
        {
          id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343,
        },
      ],
    }
  },
}
</script>

<style >
  .vgt-table thead th{
    background: white !important;
  }
  .vgt-table th.vgt-checkbox-col {
    background: white !important;
  }
</style>
