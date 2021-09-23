import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  headers: {
    authorization: 'omz8O3mxzWvgIeZO7wjhmvRlFBaRNe1HgIJ5VAyLZcOXHwg60BEOB88szMRMi8Xv',
  },
  baseURL: process.env.VUE_APP_API_V3,
})

Vue.prototype.$http = axiosIns

export default axiosIns
