;(function () {
   //PopularMovie
   let movieURL =
      'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR'
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: movieURL,
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
            console.log(`1.${result.title}`)
            $('.mySwiper > .images')
               .append(`<div class = "swiper-slide"><a href="./getDetailMovie.html?id=${
               result.id
            }">
                    <img src="${imgURL}"alt="영화포스터" />
                    </a>
                    <h3>${result.title}</h3>
                    <span>★평점: ${result.vote_average.toFixed(2)}</span>
                    <h4>${result.release_date.replaceAll('-', '.')}
                    
                    </div>
                    `)
         }
         var swiper = new Swiper('.mySwiper', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
               delay: 3000,
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
   let NewURL = `https://api.themoviedb.org/3/discover/movie?certification_country=KR&include_adult=false&include_video=false&language=ko-KR&page=1&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-01-31&sort_by=primary_release_date.desc`
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
            console.log(imgURL)
            if (results[i].poster_path === null) {
               $('.NewMovies > .row > .col-md-12').append(`
                     <a href="./getDetailMovie.html?id=${
                        results[i].id
                     }"><img src ='https://place-hold.it/200X300' alt="포스터" 
                     height="200"
                  >
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                  
                  `)
            } else {
               $('.NewMovies > .row > .col-md-12').append(`
                     <a href="./getDetailMovie.html?id=${
                        results[i].id
                     }"><img src ='${imgURL}' alt="포스터" 
                     
                  >
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                  
                 `)
            }
         }
         for (let i = 5; i < 10; i++) {
            console.log(results[i].name)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
            console.log(imgURL)
            if (results[i].poster_path === null) {
               $('.NewMovies > .row2 > .col-md-12').append(`
                    <a href="./getDetailMovie.html?id=${results[i].id}"> 
                    <img src ='https://place-hold.it/200X300' heigt='250' alt="포스터">
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                  
                  `)
            } else {
               $('.NewMovies > .row2 > .col-md-12').append(`
                    <a href="./getDetailMovie.html?id=${
                       results[i].id
                    }"> <img src ='${imgURL}' alt="포스터"  height="200"
                  >
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                  
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

   //TopRatedURL
   let TopRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: TopRatedURL,
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
            $('.TopRatedMovies > .row > .col-md-12').append(`
               
                     <a href="./getDetailMovie.html?id=${
                        results[i].id
                     }"><img src ='${imgURL}' alt="포스터" height="200px"
                  >
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                 
                    `)
         }
         for (let i = 5; i < 10; i++) {
            console.log(results[i].title)
            // console.log(result.id)
            let imgURL = `https://image.tmdb.org/t/p/w500${results[i].poster_path}`
            console.log(imgURL)
            $('.TopRatedMovies > .row2 > .col-md-12').append(`
               
                    <a href="./getDetailMovie.html?id=${
                       results[i].id
                    }"> <img src ='${imgURL}' alt="포스터" height="200px"
                  >
                  <h3>${results[i].title}</h3>
                  <span>★평점:${results[i].vote_average.toFixed(2)}</span>
                  <h4>${results[i].release_date.replaceAll('-', '.')}</h4>
                  
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
