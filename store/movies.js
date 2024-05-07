
import { defineStore } from 'pinia'
import  dayjs  from 'dayjs';

export const movies = defineStore('movies', {
  state: () => {
        return {
          movies: [
            , {name: 'Troy', views: '56000', release_date: '2017-05-08', release_year: 2017, imdb_score: 8.8, users_score: 6.5, genre: 'war'}
            , {
              name: 'breaking bad', views: '128000', release_date: '2021-05-08', release_year: 2012, imdb_score: 7.5, users_score:8.3, genre: 'action_adventure'
            }
            , { name: 'walking dead', views: '35000', release_date: '2011-05-08', release_year: 2011, imdb_score: 7.8, users_score: 6.7, genre: 'scifi_adventure'
}
            , { name: 'maze runner', views: '312000', release_date: '2018-05-08', release_year: 2018, imdb_score: 9.1, users_score: 8.6, genre: 'dubbed_movie'
}
            ],
          
            filter_according_to:''
         }
  },
  getters: {
    filterDate: (state) => { 

      const now=dayjs()
      state.movies.forEach(e => {
       
      })
      
     },
    filterGenre: () => { },
    filter_according_to_Imdb: () => { },
    filter_according_to_users: () => { },
    filter_according_to_Imdb: () => {

     },
    filter_according_to_recently_released: () => { },
    filter_alphabetically:()=>{}


  },
  actions: {
    add_remaining_days() {
        const subtract_year = (y) => {
            
            const now=useDateFormat(useNow(),'YYYY-MM-DD')
            const diff = dayjs(now.value).diff(y,'days')
            
            
            return diff
        }
      this.movies.forEach(e => {
        const remainingYear=subtract_year(e.release_date)
        e.remaining_year=remainingYear
        
      })
      
   }
  },
})