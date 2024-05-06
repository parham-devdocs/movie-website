// stores/counter.js
import { defineStore } from 'pinia'

export const showSignin = defineStore('signin', {
  state: () => {
        return {
          showSignIn: false,
          hideSignin:false
        }
  },
  
})