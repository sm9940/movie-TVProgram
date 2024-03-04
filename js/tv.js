;(function () {
   // Hot TV Program
   let TVURL =
      'https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1&region=KR'
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: TVURL,
      dataType: 'json',
      headers: {
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI1NWNmYWQ0ZDhjOGEzZWRkMzZkYzg1YTkyM2RhYiIsInN1YiI6IjY1YjA1Y2ExMzk3NTYxMDBjYjIzMGVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4oJDDNasCBOiEjMc-1LTDrY6HDXVvRzw15XHqLE8xg', //서버의 정보를 알려준다
      },
      success: function (data) {
         const results = data.results
         console.log(results)

         for (const result of results) {
            let imgURL = `https://image.tmdb.org/t/p/w500${result.poster_path}`
            console.log(`1.${result.name}`)
            if (result.poster_path === null) {
               $('.mySwiper > .images')
                  .append(`<div class = "swiper-slide"><a href="./getDetailTV.html?id=${
                  result.id
               }">
                    <img src="http://place-hold.it/200X300"alt="포스터" width="250"/>
                    </a>
                    <h3>${result.name}</h3>
                    <span>★평점: ${result.vote_average.toFixed(2)}</span>
                    <h4>${result.first_air_date.replaceAll('-', '.')}<h4>
                    
                    </div>
                    `)
            } else {
               $('.mySwiper > .images')
                  .append(`<div class = "swiper-slide"><a href="./getDetailTV.html?id=${
                  result.id
               }">
                    <img src="${imgURL}"alt="포스터" width="250"/>
                    </a>
                    <h3>${result.name}</h3>
                    <span>★평점: ${result.vote_average.toFixed(2)}</span>
                    <h4>${result.first_air_date.replaceAll('-', '.')}<h4>
                    
                    </div>
                    `)
            }
         }

         var swiper = new Swiper('.mySwiper', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
               delay: 1500,
               disableOnInteraction: false,
            },
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
         })
      },
      error: function (request, status, error) {
         console.log('code:' + request.status)
         console.log('message:' + request.responseText)
         console.log('error:' + error)
      },
   })
   //New TV
   let NewURL = `https://api.themoviedb.org/3/discover/tv?first_air_date.gte=2024-01-01&first_air_date.lte=2024-01-31&include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=primary_release_date.desc`
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: NewURL,
      dataType: 'json',
      headers: {
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI1NWNmYWQ0ZDhjOGEzZWRkMzZkYzg1YTkyM2RhYiIsInN1YiI6IjY1YjA1Y2ExMzk3NTYxMDBjYjIzMGVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4oJDDNasCBOiEjMc-1LTDrY6HDXVvRzw15XHqLE8xg', //서버의 정보를 알려준다
      },
      success: function (data) {
         const results = data.results

         for (let i = 0; i < 5; i++) {
            console.log(results[i].title)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`

            if (results[i].poster_path === null) {
               $('.NewTV > .row > .col-md-12').append(`
             <a href="./getDetailTV.html?id=${
                results[i].id
             }"><img src ='http://place-hold.it/200X300' alt="포스터" 
                height="200"
                >
                <h3>${results[i].name}</h3>
                <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
            } else {
               $('.NewTV > .row > .col-md-12').append(`
             <a href="./getDetailTV.html?id=${
                results[i].id
             }"><img src ='${imgURL}' alt="포스터" 
                height="200"
                >
                <h3>${results[i].name}</h3>
                <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
            }
         }
         for (let i = 5; i < 10; i++) {
            console.log(results[i].name)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
            console.log(imgURL)
            if (results[i].poster_path === null) {
               $('.NewTV > .row2 > .col-md-12').append(`
             <a href="./getDetailTV.html?id=${
                results[i].id
             }"><img src ='http://place-hold.it/200X300' alt="포스터" 
                height="200"
                >
                <h3>${results[i].name}</h3>
                <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                </a>
                `)
            } else {
               $('.NewTV > .row2 > .col-md-12').append(`
             <a href="./getDetailTV.html?id=${
                results[i].id
             }"><img src ='${imgURL}' alt="포스터" 
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

   // Top Rated Program
   let TopRatedTVURL = `https://api.themoviedb.org/3/tv/top_rated?language=ko-KR&page=1`
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: TopRatedTVURL,
      dataType: 'json',
      headers: {
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI1NWNmYWQ0ZDhjOGEzZWRkMzZkYzg1YTkyM2RhYiIsInN1YiI6IjY1YjA1Y2ExMzk3NTYxMDBjYjIzMGVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4oJDDNasCBOiEjMc-1LTDrY6HDXVvRzw15XHqLE8xg', //서버의 정보를 알려준다
      },
      success: function (data) {
         const results = data.results

         for (let i = 0; i < 5; i++) {
            console.log(results[i].title)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
            console.log(imgURL)
            $('.TopRatedTV > .row > .col-md-12').append(`
                     <a href="./getDetailTV.html?id=${
                        results[i].id
                     }"><img src ='${imgURL}' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                  </a>
                  `)
         }
         for (let i = 5; i < 10; i++) {
            console.log(results[i].name)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
            console.log(imgURL)
            $('.TopRatedTV > .row2 > .col-md-12').append(`
                    <a href="./getDetailTV.html?id=${
                       results[i].id
                    }"> <img src ='${imgURL}' alt="포스터"  height="200"
                  >
                  <h3>${results[i].name}</h3>
                  <span>★평점:${results[i].vote_average
                     .toFixed(2)
                     .replaceAll('-', '.')}</span>
                  <h4>${results[i].first_air_date.replaceAll('-', '.')}</h4>
                  
                 `)
         }
      },
      error: function (request, status, error) {
         console.log('code:' + request.status)
         console.log('message:' + request.responseText)
         console.log('error:' + error)
      },
   })
})()
