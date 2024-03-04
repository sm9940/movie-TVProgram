const currentURL = location.href //전체주소
const urlObj = new URL(currentURL)
const params = urlObj.searchParams

const id = params.get('with_genres') // id 파라메터 값 가져오기

let genreURL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${id}`

$.ajax({
   url: 'https://api.themoviedb.org/3/genre/tv/list?language=ko',
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization:
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI1NWNmYWQ0ZDhjOGEzZWRkMzZkYzg1YTkyM2RhYiIsInN1YiI6IjY1YjA1Y2ExMzk3NTYxMDBjYjIzMGVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4oJDDNasCBOiEjMc-1LTDrY6HDXVvRzw15XHqLE8xg',
   },
   success: function (data) {
      console.log(data)
      const genres = data.genres
      for (let genre of genres) {
         console.log(genre)
         if (genre.id == id) {
            $(`.Name`).append(`<h1 style="font-weight:bold">${genre.name}</h1>`)
         }
      }
   },
})
$.ajax({
   crossDomain: true,
   type: 'GET',
   url: genreURL,
   dataType: 'json',
   headers: {
      accept: 'application/json',
      Authorization:
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk1NGE5MWZhMzVmMzlkYjEwNmZhNzY4MWQzNDk2MiIsInN1YiI6IjY1YjA1ZDVlNzlhMWMzMDBlOTdkYmI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BktiXW_iEfxWHOCZuZbeujCk1beGAQG14-mzf9Ses84',
   },
   success: function (data) {
      // console.log(data.results)
      const results = data.results

      for (let i = 0; i <= 4; i++) {
         let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`

         if (results[i].poster_path === null) {
            $('.firstLine > .row1 > .col-md-12').append(`
             
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='http://place-hold.it/200X300' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
               
                `)
         } else {
            $('.firstLine > .row1 > .col-md-12').append(`
           
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='${imgURL}' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
         }
      }
      for (let i = 5; i <= 9; i++) {
         let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
         if (results[i].poster_path === null) {
            $('.secondLine > .row2 > .col-md-12').append(`
            
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='http://place-hold.it/200X300' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
         } else {
            $('.secondLine > .row2 > .col-md-12').append(`
            
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='${imgURL}' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
               
                `)
         }
      }
      for (let i = 10; i <= 14; i++) {
         let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
         // console.log(results[i].title)
         if (results[i].poster_path === null) {
            $('.thirdLine > .row3 > .col-md-12').append(`
              
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='http://place-hold.it/200X300' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
               `)
         } else {
            $('.thirdLine > .row3 > .col-md-12').append(`
               
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='${imgURL}' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                
                `)
         }
      }
      for (let i = 15; i <= 19; i++) {
         let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
         // console.log(results[i].title)
         if (results[i].poster_path === null) {
            $('.forthLine > .row4 > .col-md-12').append(`
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='http://place-hold.it/200X300' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
         } else {
            $('.forthLine > .row4 > .col-md-12').append(`
               <a href="./getDetailTV.html?id=${results[i].id}">
             <img src ='${imgURL}' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
               
                `)
         }
      }
   },
   error: function (request, status, error) {
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
