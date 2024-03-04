;(function () {
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
            if (result.poster_path === null) {
               $('.mySwiper > .images')
                  .append(`<div class = "swiper-slide"><a href="./getDetailTV.html?id=${
                  result.id
               }">
                    <img src="http://place-hold.it/200X300"alt="포스터" height="100"/>
                    </a>
                    <h3>${result.name}</h3>
                    <span>★평점: ${result.vote_average.toFixed(2)}</span>
                    <h4>${result.first_air_date.replaceAll('-', '.')}
                    </div>
                    `)
            } else {
               $('.mySwiper > .images')
                  .append(`<div class = "swiper-slide"><a href="./getDetailTV.html?id=${
                  result.id
               }">
                    <img src="${imgURL}"alt="포스터" height="100"/>
                    </a>
                    <h3>${result.name}</h3>
                    <span>★평점: ${result.vote_average.toFixed(2)}</span>
                    <h4>${result.first_air_date.replaceAll('-', '.')}
                    </div>
                    `)
            }
         }
         var swiper = new Swiper('.mySwiper', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
               delay: 3000,
               disableOnInteraction: true,
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
   const currentURL = location.href //전체주소
   const urlObj = new URL(currentURL)
   const params = urlObj.searchParams

   const id = params.get('id') // id 파라메터 값 가져오기

   let moviesURL = `https://api.themoviedb.org/3/tv/${id}?language=ko-KR&page=1&region=KR`

   $.ajax({
      crossDomain: true,
      type: 'GET',
      url: moviesURL,
      dataType: 'json',
      headers: {
         //headers: 서버에 정보를 알려준다.
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk1NGE5MWZhMzVmMzlkYjEwNmZhNzY4MWQzNDk2MiIsInN1YiI6IjY1YjA1ZDVlNzlhMWMzMDBlOTdkYmI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BktiXW_iEfxWHOCZuZbeujCk1beGAQG14-mzf9Ses84',
      },
      success: function (data) {
         console.log(data.genres)
         let genres = data.genres
         let imgURL = `https://image.tmdb.org/t/p/w500${data.poster_path}`
         if (data.poster_path === null) {
            $('.getDetailTV > .GetDetailTVName > .row').append(`
         <div class="col-md-9 List" style="display:flex; ">
         <img src="http://place-hold.it/200X300" alt="포스터" height="450"/>
         <div style= "display:flex;justify-content: center; flex-direction:column; "><h2 style="font-size: 30px; font-weight: bolder">${
            data.name
         }</h2>
            <p style ="font-size: 20px"> 개요:${data.overview}<p/>
            <p style="color:red">★ 평점: ${data.vote_average.toFixed(2)}<p/>
            <p>첫 방영일: ${data.first_air_date.replaceAll('-', '.')}</p>
            <p class="genre">장르:
            </div>
            </div>
            `)
            for (let genre of genres) {
               $('.genre').append(`${genre.name}. `)
               console.log(genre.name)
            }
         } else {
            $('.getDetailTV > .container > .row').append(`
         <div class="col-md-9 List" style="display:flex; ">
         <img src="${imgURL}" alt="포스터" height="450"/>
         <div style= "display:flex;justify-content: center; flex-direction:column;"><h2 style="font-size: 2rem; font-weight: bolder">${
            data.name
         }</h2>
            <p style ="font-size: 20px"> 개요:${data.overview}<p/>
            <p style="color:red">★ 평점: ${data.vote_average.toFixed(2)}<p/>
            <p>첫 방영일: ${data.first_air_date.replaceAll('-', '.')}</p>
            <p class="genre">장르:
            </div>
            </div>
            
            
            `)
            for (let genre of genres) {
               $('.genre').append(`${genre.name}. `)
               console.log(genre.name)
            }
         }
      },
      error: function (request, status, error) {
         console.log('code:' + request.status)
         console.log('message:' + request.responseText)
         console.log('error:' + error)
      },
   })
   //주요인물
   let peopleURL = `https://api.themoviedb.org/3/tv/${id}/credits?language=ko-KR`

   $.ajax({
      crossDomain: true,
      type: 'GET',
      url: peopleURL,
      dataType: 'json',
      headers: {
         //headers: 서버에 정보를 알려준다.
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk1NGE5MWZhMzVmMzlkYjEwNmZhNzY4MWQzNDk2MiIsInN1YiI6IjY1YjA1ZDVlNzlhMWMzMDBlOTdkYmI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BktiXW_iEfxWHOCZuZbeujCk1beGAQG14-mzf9Ses84',
      },
      success: function (data) {
         console.log(data)

         const casts = data.cast
         console.log(casts)

         if (casts[0]) {
            for (let i = 0; i <= 5; i++) {
               let result = casts[i]
               console.log(result)
               let imgURL = `https://image.tmdb.org/t/p/w300${result.profile_path}`
               if (result.profile_path === null) {
                  $('.PeopleList > .row > .container').append(`
                   <div class="card bg-dark " style="width:18rem">
            <img src ="http://place-hold.it/200X300" alt="인물" height="200" >
            <div class="card-body">
            <p style="font-size:1.2rem; color:white; font-weight:bold;">${result.name}</p>
            </div>
      `)
               } else {
                  $('.PeopleList > .row > .container').append(`
                     
                    <div class="card bg-dark " style="width:18rem">
         <img src ="${imgURL}" alt="인물" height="200">
         <div class="card-body">
         <p style="font-size:1.2rem; color:white; font-weight:bold;">${result.name}</p>
         </div>
         </div>
   `)
               }
            }
         } else {
            $('.PeopleList').append(`<div style="margin-right:20px;">
                         <p>주요 인물이 없습니다</p>
                         </div>
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
