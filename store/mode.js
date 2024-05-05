// stores/counter.js
import { defineStore } from 'pinia'

export const darkmode_lightmode_handler = defineStore('counter', {
  state: () => {
        return {
            backgoundColor: 'white',
            font: { b_color: 'black' },
        dark_mode:true
        }
  },
  
  actions: {
    increment() {
      this.count++
    },
  },
})