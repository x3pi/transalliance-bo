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
            <span style="font-weight: bold; color: blue;">{{ props.row.id }}</span>
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
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
// Vuesax styles
Vue.use(Vuesax, {
  // options here
})

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
          hidden: true,
        },
        {
          label: 'Nom',
          field: 'nom',
        },
        {
          label: 'Prénom',
          field: 'prenom',
          type: 'string',
        },
        {
          label: "Nom d'utilisateur",
          field: 'username',
          type: 'string',
        },
        {
          label: 'Email',
          field: 'email',
          type: 'email',
        },
        {
          label: 'Access token gmail',
          field: 'accessTokenGmail',
          type: 'string',
        },
        {
          label: 'Refresh token gmail',
          field: 'refreshTokenGmail',
          type: 'string',
        },
        {
          label: 'Cookie for meet',
          field: 'cookieForMeet',
          type: 'string',
        },
        {
          label: 'Telephone',
          field: 'telephone',
          type: 'string',
        },
        {
          label: 'Address',
          field: 'address',
          type: 'string',
        },
        {
          label: 'Is loaded',
          field: 'isLoaded',
          type: 'string',
        },
        {
          label: 'App version',
          field: 'appVersion',
          type: 'string',
        },
        {
          label: 'App status',
          field: 'appStatus',
          type: 'string',
        },
        {
          label: 'Date naissance',
          field: 'dateNaissance',
          type: 'string',
        },
        {
          label: 'N conducter',
          field: 'nConducteur',
          type: 'string',
        },
        {
          label: 'Pays rattachement',
          field: 'paysRattachement',
          type: 'string',
        },
        {
          label: 'Etablissement',
          field: 'etablissement',
          type: 'string',
        },
        {
          label: 'Code security',
          field: 'codeSecurity',
          type: 'string',
        },
        {
          label: 'Is enable notification',
          field: 'isEnableNotification',
          type: 'string',
        },
        {
          label: 'Raison sociale',
          field: 'raisonSociale',
          type: 'string',
        },
        {
          label: 'Avatar',
          field: 'avatar',
          type: 'string',
        },
        {
          label: 'Last time open rh',
          field: 'lastTimeOpenRh',
          type: 'string',
        },
        {
          label: 'Realm',
          field: 'realm',
          type: 'string',
        },
        {
          label: 'Email verified',
          field: 'emailVerified',
          type: 'string',
        },
        {
          label: 'Numéro de série',
          field: 'telephone',
          type: 'string',
        },
        {
          label: 'Type',
          field: 'type',
          type: 'string',
        },
        {
          label: 'Rôle',
          field: 'Role',
          type: 'string',
        },
        {
          label: 'Action',
          field: 'score',
          type: 'percentage',
        },

      ],
      rows: [
      ],
    }
  },
  created() {
    const filter = {
      where: { type: 'CONDUCTEUR' }, order: ['updatedAt DESC'], limit: 10, skip: 0,
    }
    const urlFilter = encodeURIComponent(JSON.stringify(filter))
    console.log(this.$vs)
    this.$vs.loading({
      type: 'default',
    })
    this.$http.get(`/Accounts?filter=${urlFilter}`)
      .then(res => {
        this.rows = res.data
        this.$vs.loading.close()
      })
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
