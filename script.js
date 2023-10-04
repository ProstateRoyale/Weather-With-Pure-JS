async function test (ss) {
    // let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    // let response = await fetch(url);

    // let commits = await response.json(); // читаем ответ в формате JSON
    // let qwe = commits[0].node_id

    // console.log(commits[0].node_id);
    // document.querySelector("#weather-info__firstToday").innerHTML = qwe




    let kel = 273


    
    let first = await fetch(ss)
    let c = await first.json()
    document.querySelector("#current-text__date").textContent = getDate()
    let icon = c.weather[0].icon
    document.querySelector("#first-top__left").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    let underIcon = c.weather[0].description
    document.querySelector("#bottom-left__underIcon").textContent = underIcon
    let ans = Math.round(c.main.temp) - kel
    document.querySelector("#bottom-center__degree").textContent = (ans) + `*C`
    let feel = Math.round(c.main.feels_like) - kel
    document.querySelector("#bottom-center__realDeagree").textContent =`Real Feel ` + (feel) + '*'
    document.querySelector("#bottom-center__sunrise").textContent = 'Sunrise: ' + getTime(c.sys.sunrise * 1000)
    document.querySelector("#bottom-center__sunset").textContent = 'Sunset: ' + getTime(c.sys.sunset * 1000)
    document.querySelector("#bottom-center__duration").textContent = 'Duration: ' + getTime((c.sys.sunset * 1000) - (c.sys.sunrise * 1000))
}

async function showFiveDay (dd) {
    let hours = await fetch(dd)
    let d = await hours.json()
    let kel = 273

    let firstIcon = d.list[1].weather[0].icon
    let secondIcon = d.list[2].weather[0].icon
    let thirdIcon = d.list[3].weather[0].icon
    let fourthIcon = d.list[4].weather[0].icon
    let fifthIcon = d.list[5].weather[0].icon
    let sixthIcon = d.list[6].weather[0].icon

    // let qwerty = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=55.755825&lon=37.617298&appid=ed6c661110d77839ca10d1a5a18babf7")
    // let f = await qwerty.json()
    // console.log(f);

    document.querySelector("#weather-info__firstToday").textContent = getHours(d.list[1].dt_txt)
    document.querySelector("#weather-info__secondToday").textContent = getHours(d.list[2].dt_txt)
    document.querySelector("#weather-info__thirdToday").textContent = getHours(d.list[3].dt_txt)
    document.querySelector("#weather-info__fourthToday").textContent = getHours(d.list[4].dt_txt)
    document.querySelector("#weather-info__fifthToday").textContent = getHours(d.list[5].dt_txt)
    document.querySelector("#weather-info__sixthToday").textContent = getHours(d.list[6].dt_txt)

    document.querySelector("#weather-info__firstIcon").src = `http://openweathermap.org/img/wn/${firstIcon}@2x.png`
    document.querySelector("#weather-info__secondIcon").src = `http://openweathermap.org/img/wn/${secondIcon}@2x.png`
    document.querySelector("#weather-info__thirdIcon").src = `http://openweathermap.org/img/wn/${thirdIcon}@2x.png`
    document.querySelector("#weather-info__fourthIcon").src = `http://openweathermap.org/img/wn/${fourthIcon}@2x.png`
    document.querySelector("#weather-info__fifthIcon").src = `http://openweathermap.org/img/wn/${fifthIcon}@2x.png`
    document.querySelector("#weather-info__sixthIcon").src = `http://openweathermap.org/img/wn/${sixthIcon}@2x.png`

    document.querySelector("#weather-info__firstForecast").textContent = d.list[1].weather[0].description
    document.querySelector("#weather-info__secondForecast").textContent = d.list[2].weather[0].description
    document.querySelector("#weather-info__thirdForecast").textContent = d.list[3].weather[0].description
    document.querySelector("#weather-info__fourthForecast").textContent = d.list[4].weather[0].description
    document.querySelector("#weather-info__fifthForecast").textContent = d.list[5].weather[0].description
    document.querySelector("#weather-info__sixthForecast").textContent = d.list[6].weather[0].description

    document.querySelector("#weather-info__firstTemp").textContent = Math.round(d.list[1].main.temp) - kel
    document.querySelector("#weather-info__secondTemp").textContent = Math.round(d.list[2].main.temp) - kel
    document.querySelector("#weather-info__thirdTemp").textContent = Math.round(d.list[3].main.temp) - kel
    document.querySelector("#weather-info__fourthTemp").textContent = Math.round(d.list[4].main.temp) - kel
    document.querySelector("#weather-info__fifthTemp").textContent = Math.round(d.list[5].main.temp) - kel
    document.querySelector("#weather-info__sixthTemp").textContent = Math.round(d.list[6].main.temp) - kel

    document.querySelector("#weather-info__firstRealFeal").textContent = Math.round(d.list[1].main.feels_like) - kel
    document.querySelector("#weather-info__secondRealFeal").textContent = Math.round(d.list[2].main.feels_like) - kel
    document.querySelector("#weather-info__thirdRealFeal").textContent = Math.round(d.list[3].main.feels_like) - kel
    document.querySelector("#weather-info__fourthRealFeal").textContent = Math.round(d.list[4].main.feels_like) - kel
    document.querySelector("#weather-info__fifthRealFeal").textContent = Math.round(d.list[5].main.feels_like) - kel
    document.querySelector("#weather-info__sixthRealFeal").textContent = Math.round(d.list[6].main.feels_like) - kel

    document.querySelector("#weather-info__firstWind").textContent = d.list[1].wind.speed + " " + windSide(d.list[0].wind.deg)
    document.querySelector("#weather-info__secondWind").textContent = d.list[2].wind.speed + " " + windSide(d.list[1].wind.deg)
    document.querySelector("#weather-info__thirdWind").textContent = d.list[3].wind.speed + " " + windSide(d.list[2].wind.deg)
    document.querySelector("#weather-info__fourthWind").textContent = d.list[4].wind.speed + " " + windSide(d.list[3].wind.deg)
    document.querySelector("#weather-info__fifthWind").textContent = d.list[5].wind.speed + " " + windSide(d.list[4].wind.deg)
    document.querySelector("#weather-info__sixthWind").textContent = d.list[6].wind.speed + " " + windSide(d.list[5].wind.deg)



    let test1 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=55.755825&lon=37.617298&appid=ed6c661110d77839ca10d1a5a18babf7")
    let u = await test1.json()
    let famOneIcon = u.weather[0].icon
    document.querySelector("#cities-first__name").textContent = u.name
    document.querySelector("#cities-first__icon").src = `http://openweathermap.org/img/wn/${famOneIcon}@2x.png`
    document.querySelector("#cities-first__temp").textContent = Math.round(u.main.temp) - kel + "*"

    let test2 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127696&appid=ed6c661110d77839ca10d1a5a18babf7")
    let v = await test2.json()
    let famTwoIcon = v.weather[0].icon
    document.querySelector("#cities-second__name").textContent = v.name
    document.querySelector("#cities-second__icon").src = `http://openweathermap.org/img/wn/${famTwoIcon}@2x.png`
    document.querySelector("#cities-second__temp").textContent = Math.round(v.main.temp) - kel + "*"

    let test3 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=38.899513&lon=-77.036536&appid=ed6c661110d77839ca10d1a5a18babf7")
    let w = await test3.json()
    let famThrIcon = w.weather[0].icon
    document.querySelector("#cities-third__name").textContent = w.name
    document.querySelector("#cities-third__icon").src = `http://openweathermap.org/img/wn/${famThrIcon}@2x.png`
    document.querySelector("#cities-third__temp").textContent = Math.round(w.main.temp) - kel + "*"

    let test4 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=56.151682&lon=56.151682&appid=ed6c661110d77839ca10d1a5a18babf7")
    let x = await test4.json()
    let famFouIcon = x.weather[0].icon
    document.querySelector("#cities-fourth__name").textContent = x.name
    document.querySelector("#cities-fourth__icon").src = `http://openweathermap.org/img/wn/${famFouIcon}@2x.png`
    document.querySelector("#cities-fourth__temp").textContent = Math.round(x.main.temp) - kel + "*"

    document.querySelector("#first-day").textContent = getFiveDay(d.list[0].dt_txt)
    document.querySelector("#second-day").textContent = getFiveDay(d.list[8].dt_txt)
    document.querySelector("#third-day").textContent = getFiveDay(d.list[16].dt_txt)
    document.querySelector("#fourth-day").textContent = getFiveDay(d.list[24].dt_txt)
    document.querySelector("#fifth-day").textContent = getFiveDay(d.list[32].dt_txt)

    document.querySelector("#first-date").textContent = getMonth(d.list[0].dt_txt)
    document.querySelector("#second-date").textContent = getMonth(d.list[8].dt_txt)
    document.querySelector("#third-date").textContent = getMonth(d.list[16].dt_txt)
    document.querySelector("#fourth-date").textContent = getMonth(d.list[24].dt_txt)
    document.querySelector("#fifth-date").textContent = getMonth(d.list[32].dt_txt)


    let daylyFirstIcon = d.list[0].weather[0].icon
    let daylySecondIcon = d.list[8].weather[0].icon
    let daylyThirdIcon = d.list[16].weather[0].icon
    let daylyFourthIcon = d.list[24].weather[0].icon
    let daylyFifthIcon = d.list[32].weather[0].icon

    document.querySelector("#first-icon").src = `http://openweathermap.org/img/wn/${daylyFirstIcon}@2x.png`
    document.querySelector("#second-icon").src = `http://openweathermap.org/img/wn/${daylySecondIcon}@2x.png`
    document.querySelector("#third-icon").src = `http://openweathermap.org/img/wn/${daylyThirdIcon}@2x.png`
    document.querySelector("#fourth-icon").src = `http://openweathermap.org/img/wn/${daylyFourthIcon}@2x.png`
    document.querySelector("#fifth-icon").src = `http://openweathermap.org/img/wn/${daylyFifthIcon}@2x.png`

    document.querySelector("#first-deg").textContent = Math.round(d.list[0].main.temp) - kel + " *C"
    document.querySelector("#second-deg").textContent = Math.round(d.list[8].main.temp) - kel + " *C"
    document.querySelector("#third-deg").textContent = Math.round(d.list[16].main.temp) - kel + " *C" 
    document.querySelector("#fourth-deg").textContent = Math.round(d.list[24].main.temp) - kel + " *C"
    document.querySelector("#fifth-deg").textContent = Math.round(d.list[32].main.temp) - kel + " *C"

    document.querySelector("#first-feel").textContent = d.list[0].weather[0].description
    document.querySelector("#second-feel").textContent = d.list[8].weather[0].description
    document.querySelector("#third-feel").textContent = d.list[16].weather[0].description
    document.querySelector("#fourth-feel").textContent = d.list[24].weather[0].description
    document.querySelector("#fifth-feel").textContent = d.list[32].weather[0].description

    let = setFirst = document.querySelector("#first-day__back")
    setFirst.addEventListener("click", async (e) => {
        e.stopPropagation()
        removeAll()
        setFirst.classList.add("five-back")
        document.querySelector("#hourly__firstToday").textContent = getHours(d.list[1].dt_txt)
        document.querySelector("#hourly__secondToday").textContent = getHours(d.list[2].dt_txt)
        document.querySelector("#hourly__thirdToday").textContent = getHours(d.list[3].dt_txt)
        document.querySelector("#hourly__fourthToday").textContent = getHours(d.list[4].dt_txt)
        document.querySelector("#hourly__fifthToday").textContent = getHours(d.list[5].dt_txt)
        document.querySelector("#hourly__sixthToday").textContent = getHours(d.list[6].dt_txt)


        let fHourlyFirstIcon = d.list[1].weather[0].icon
        let fHourlySecondIcon = d.list[2].weather[0].icon
        let fHourlyThirdIcon = d.list[3].weather[0].icon
        let fHourlyFourthIcon = d.list[4].weather[0].icon
        let fHourlyFifthIcon = d.list[5].weather[0].icon
        let fHourlySixthIcon = d.list[6].weather[0].icon

        document.querySelector("#hourly__firstIcon").src = `http://openweathermap.org/img/wn/${fHourlyFirstIcon}@2x.png`
        document.querySelector("#hourly__secondIcon").src = `http://openweathermap.org/img/wn/${fHourlySecondIcon}@2x.png`
        document.querySelector("#hourly__thirdIcon").src = `http://openweathermap.org/img/wn/${fHourlyThirdIcon}@2x.png`
        document.querySelector("#hourly__fourthIcon").src = `http://openweathermap.org/img/wn/${fHourlyFourthIcon}@2x.png`
        document.querySelector("#hourly__fifthIcon").src = `http://openweathermap.org/img/wn/${fHourlyFifthIcon}@2x.png`
        document.querySelector("#hourly__sixthIcon").src = `http://openweathermap.org/img/wn/${fHourlySixthIcon}@2x.png`

        document.querySelector("#hourly__firstForecast").textContent = d.list[1].weather[0].description
        document.querySelector("#hourly__secondForecast").textContent = d.list[2].weather[0].description
        document.querySelector("#hourly__thirdForecast").textContent = d.list[3].weather[0].description
        document.querySelector("#hourly__fourthForecast").textContent = d.list[4].weather[0].description
        document.querySelector("#hourly__fifthForecast").textContent = d.list[5].weather[0].description
        document.querySelector("#hourly__sixthForecast").textContent = d.list[6].weather[0].description

        document.querySelector("#hourly__firstTemp").textContent = Math.round(d.list[1].main.temp) - kel
        document.querySelector("#hourly__secondTemp").textContent = Math.round(d.list[2].main.temp) - kel
        document.querySelector("#hourly__thirdTemp").textContent = Math.round(d.list[3].main.temp) - kel
        document.querySelector("#hourly__fourthTemp").textContent = Math.round(d.list[4].main.temp) - kel
        document.querySelector("#hourly__fifthTemp").textContent = Math.round(d.list[5].main.temp) - kel
        document.querySelector("#hourly__sixthTemp").textContent = Math.round(d.list[6].main.temp) - kel

        document.querySelector("#hourly__firstRealFeal").textContent = Math.round(d.list[1].main.feels_like) - kel
        document.querySelector("#hourly__secondRealFeal").textContent = Math.round(d.list[2].main.feels_like) - kel
        document.querySelector("#hourly__thirdRealFeal").textContent = Math.round(d.list[3].main.feels_like) - kel
        document.querySelector("#hourly__fourthRealFeal").textContent = Math.round(d.list[4].main.feels_like) - kel
        document.querySelector("#hourly__fifthRealFeal").textContent = Math.round(d.list[5].main.feels_like) - kel
        document.querySelector("#hourly__sixthRealFeal").textContent = Math.round(d.list[6].main.feels_like) - kel

        document.querySelector("#hourly__firstWind").textContent = d.list[1].wind.speed + " " + windSide(d.list[0].wind.deg)
        document.querySelector("#hourly__secondWind").textContent = d.list[2].wind.speed + " " + windSide(d.list[1].wind.deg)
        document.querySelector("#hourly__thirdWind").textContent = d.list[3].wind.speed + " " + windSide(d.list[2].wind.deg)
        document.querySelector("#hourly__fourthWind").textContent = d.list[4].wind.speed + " " + windSide(d.list[3].wind.deg)
        document.querySelector("#hourly__fifthWind").textContent = d.list[5].wind.speed + " " + windSide(d.list[4].wind.deg)
        document.querySelector("#hourly__sixthWind").textContent = d.list[6].wind.speed + " " + windSide(d.list[5].wind.deg)
    })


    let = setSecond = document.querySelector("#second-day__back")
    setSecond.addEventListener("click", async () => {
        removeAll()
        setSecond.classList.add("five-back")
        document.querySelector("#hourly__firstToday").textContent = getHours(d.list[9].dt_txt)
        document.querySelector("#hourly__secondToday").textContent = getHours(d.list[10].dt_txt)
        document.querySelector("#hourly__thirdToday").textContent = getHours(d.list[11].dt_txt)
        document.querySelector("#hourly__fourthToday").textContent = getHours(d.list[12].dt_txt)
        document.querySelector("#hourly__fifthToday").textContent = getHours(d.list[13].dt_txt)
        document.querySelector("#hourly__sixthToday").textContent = getHours(d.list[14].dt_txt)


        let sHourlyFirstIcon = d.list[9].weather[0].icon
        let sHourlySecondIcon = d.list[10].weather[0].icon
        let sHourlyThirdIcon = d.list[11].weather[0].icon
        let sHourlyFourthIcon = d.list[12].weather[0].icon
        let sHourlyFifthIcon = d.list[13].weather[0].icon
        let sHourlySixthIcon = d.list[14].weather[0].icon

        document.querySelector("#hourly__firstIcon").src = `http://openweathermap.org/img/wn/${sHourlyFirstIcon}@2x.png`
        document.querySelector("#hourly__secondIcon").src = `http://openweathermap.org/img/wn/${sHourlySecondIcon}@2x.png`
        document.querySelector("#hourly__thirdIcon").src = `http://openweathermap.org/img/wn/${sHourlyThirdIcon}@2x.png`
        document.querySelector("#hourly__fourthIcon").src = `http://openweathermap.org/img/wn/${sHourlyFourthIcon}@2x.png`
        document.querySelector("#hourly__fifthIcon").src = `http://openweathermap.org/img/wn/${sHourlyFifthIcon}@2x.png`
        document.querySelector("#hourly__sixthIcon").src = `http://openweathermap.org/img/wn/${sHourlySixthIcon}@2x.png`

        document.querySelector("#hourly__firstForecast").textContent = d.list[9].weather[0].description
        document.querySelector("#hourly__secondForecast").textContent = d.list[10].weather[0].description
        document.querySelector("#hourly__thirdForecast").textContent = d.list[11].weather[0].description
        document.querySelector("#hourly__fourthForecast").textContent = d.list[12].weather[0].description
        document.querySelector("#hourly__fifthForecast").textContent = d.list[13].weather[0].description
        document.querySelector("#hourly__sixthForecast").textContent = d.list[14].weather[0].description

        document.querySelector("#hourly__firstTemp").textContent = Math.round(d.list[9].main.temp) - kel
        document.querySelector("#hourly__secondTemp").textContent = Math.round(d.list[10].main.temp) - kel
        document.querySelector("#hourly__thirdTemp").textContent = Math.round(d.list[11].main.temp) - kel
        document.querySelector("#hourly__fourthTemp").textContent = Math.round(d.list[12].main.temp) - kel
        document.querySelector("#hourly__fifthTemp").textContent = Math.round(d.list[13].main.temp) - kel
        document.querySelector("#hourly__sixthTemp").textContent = Math.round(d.list[14].main.temp) - kel

        document.querySelector("#hourly__firstRealFeal").textContent = Math.round(d.list[9].main.feels_like) - kel
        document.querySelector("#hourly__secondRealFeal").textContent = Math.round(d.list[10].main.feels_like) - kel
        document.querySelector("#hourly__thirdRealFeal").textContent = Math.round(d.list[11].main.feels_like) - kel
        document.querySelector("#hourly__fourthRealFeal").textContent = Math.round(d.list[12].main.feels_like) - kel
        document.querySelector("#hourly__fifthRealFeal").textContent = Math.round(d.list[13].main.feels_like) - kel
        document.querySelector("#hourly__sixthRealFeal").textContent = Math.round(d.list[14].main.feels_like) - kel

        document.querySelector("#hourly__firstWind").textContent = d.list[9].wind.speed + " " + windSide(d.list[0].wind.deg)
        document.querySelector("#hourly__secondWind").textContent = d.list[10].wind.speed + " " + windSide(d.list[1].wind.deg)
        document.querySelector("#hourly__thirdWind").textContent = d.list[11].wind.speed + " " + windSide(d.list[2].wind.deg)
        document.querySelector("#hourly__fourthWind").textContent = d.list[12].wind.speed + " " + windSide(d.list[3].wind.deg)
        document.querySelector("#hourly__fifthWind").textContent = d.list[13].wind.speed + " " + windSide(d.list[4].wind.deg)
        document.querySelector("#hourly__sixthWind").textContent = d.list[14].wind.speed + " " + windSide(d.list[5].wind.deg)
    })


    let = setThird = document.querySelector("#third-day__back")
    setThird.addEventListener("click", async () => {
        removeAll()
        setThird.classList.add("five-back")
        document.querySelector("#hourly__firstToday").textContent = getHours(d.list[17].dt_txt)
        document.querySelector("#hourly__secondToday").textContent = getHours(d.list[18].dt_txt)
        document.querySelector("#hourly__thirdToday").textContent = getHours(d.list[19].dt_txt)
        document.querySelector("#hourly__fourthToday").textContent = getHours(d.list[20].dt_txt)
        document.querySelector("#hourly__fifthToday").textContent = getHours(d.list[21].dt_txt)
        document.querySelector("#hourly__sixthToday").textContent = getHours(d.list[22].dt_txt)


        let tHourlyFirstIcon = d.list[17].weather[0].icon
        let tHourlySecondIcon = d.list[18].weather[0].icon
        let tHourlyThirdIcon = d.list[19].weather[0].icon
        let tHourlyFourthIcon = d.list[20].weather[0].icon
        let tHourlyFifthIcon = d.list[21].weather[0].icon
        let tHourlySixthIcon = d.list[22].weather[0].icon

        document.querySelector("#hourly__firstIcon").src = `http://openweathermap.org/img/wn/${tHourlyFirstIcon}@2x.png`
        document.querySelector("#hourly__secondIcon").src = `http://openweathermap.org/img/wn/${tHourlySecondIcon}@2x.png`
        document.querySelector("#hourly__thirdIcon").src = `http://openweathermap.org/img/wn/${tHourlyThirdIcon}@2x.png`
        document.querySelector("#hourly__fourthIcon").src = `http://openweathermap.org/img/wn/${tHourlyFourthIcon}@2x.png`
        document.querySelector("#hourly__fifthIcon").src = `http://openweathermap.org/img/wn/${tHourlyFifthIcon}@2x.png`
        document.querySelector("#hourly__sixthIcon").src = `http://openweathermap.org/img/wn/${tHourlySixthIcon}@2x.png`

        document.querySelector("#hourly__firstForecast").textContent = d.list[17].weather[0].description
        document.querySelector("#hourly__secondForecast").textContent = d.list[18].weather[0].description
        document.querySelector("#hourly__thirdForecast").textContent = d.list[19].weather[0].description
        document.querySelector("#hourly__fourthForecast").textContent = d.list[20].weather[0].description
        document.querySelector("#hourly__fifthForecast").textContent = d.list[21].weather[0].description
        document.querySelector("#hourly__sixthForecast").textContent = d.list[22].weather[0].description

        document.querySelector("#hourly__firstTemp").textContent = Math.round(d.list[17].main.temp) - kel
        document.querySelector("#hourly__secondTemp").textContent = Math.round(d.list[18].main.temp) - kel
        document.querySelector("#hourly__thirdTemp").textContent = Math.round(d.list[19].main.temp) - kel
        document.querySelector("#hourly__fourthTemp").textContent = Math.round(d.list[20].main.temp) - kel
        document.querySelector("#hourly__fifthTemp").textContent = Math.round(d.list[21].main.temp) - kel
        document.querySelector("#hourly__sixthTemp").textContent = Math.round(d.list[22].main.temp) - kel

        document.querySelector("#hourly__firstRealFeal").textContent = Math.round(d.list[17].main.feels_like) - kel
        document.querySelector("#hourly__secondRealFeal").textContent = Math.round(d.list[18].main.feels_like) - kel
        document.querySelector("#hourly__thirdRealFeal").textContent = Math.round(d.list[19].main.feels_like) - kel
        document.querySelector("#hourly__fourthRealFeal").textContent = Math.round(d.list[20].main.feels_like) - kel
        document.querySelector("#hourly__fifthRealFeal").textContent = Math.round(d.list[21].main.feels_like) - kel
        document.querySelector("#hourly__sixthRealFeal").textContent = Math.round(d.list[22].main.feels_like) - kel

        document.querySelector("#hourly__firstWind").textContent = d.list[17].wind.speed + " " + windSide(d.list[0].wind.deg)
        document.querySelector("#hourly__secondWind").textContent = d.list[18].wind.speed + " " + windSide(d.list[1].wind.deg)
        document.querySelector("#hourly__thirdWind").textContent = d.list[19].wind.speed + " " + windSide(d.list[2].wind.deg)
        document.querySelector("#hourly__fourthWind").textContent = d.list[20].wind.speed + " " + windSide(d.list[3].wind.deg)
        document.querySelector("#hourly__fifthWind").textContent = d.list[21].wind.speed + " " + windSide(d.list[4].wind.deg)
        document.querySelector("#hourly__sixthWind").textContent = d.list[22].wind.speed + " " + windSide(d.list[5].wind.deg)
    })


    let = setFourth = document.querySelector("#fourth-day__back")
    setFourth.addEventListener("click", async () => {
        removeAll()
        setFourth.classList.add("five-back")
        document.querySelector("#hourly__firstToday").textContent = getHours(d.list[25].dt_txt)
        document.querySelector("#hourly__secondToday").textContent = getHours(d.list[26].dt_txt)
        document.querySelector("#hourly__thirdToday").textContent = getHours(d.list[27].dt_txt)
        document.querySelector("#hourly__fourthToday").textContent = getHours(d.list[28].dt_txt)
        document.querySelector("#hourly__fifthToday").textContent = getHours(d.list[29].dt_txt)
        document.querySelector("#hourly__sixthToday").textContent = getHours(d.list[30].dt_txt)


        let fHourlyFirstIcon = d.list[25].weather[0].icon
        let fHourlySecondIcon = d.list[26].weather[0].icon
        let fHourlyThirdIcon = d.list[27].weather[0].icon
        let fHourlyFourthIcon = d.list[28].weather[0].icon
        let fHourlyFifthIcon = d.list[29].weather[0].icon
        let fHourlySixthIcon = d.list[30].weather[0].icon

        document.querySelector("#hourly__firstIcon").src = `http://openweathermap.org/img/wn/${fHourlyFirstIcon}@2x.png`
        document.querySelector("#hourly__secondIcon").src = `http://openweathermap.org/img/wn/${fHourlySecondIcon}@2x.png`
        document.querySelector("#hourly__thirdIcon").src = `http://openweathermap.org/img/wn/${fHourlyThirdIcon}@2x.png`
        document.querySelector("#hourly__fourthIcon").src = `http://openweathermap.org/img/wn/${fHourlyFourthIcon}@2x.png`
        document.querySelector("#hourly__fifthIcon").src = `http://openweathermap.org/img/wn/${fHourlyFifthIcon}@2x.png`
        document.querySelector("#hourly__sixthIcon").src = `http://openweathermap.org/img/wn/${fHourlySixthIcon}@2x.png`

        document.querySelector("#hourly__firstForecast").textContent = d.list[25].weather[0].description
        document.querySelector("#hourly__secondForecast").textContent = d.list[26].weather[0].description
        document.querySelector("#hourly__thirdForecast").textContent = d.list[27].weather[0].description
        document.querySelector("#hourly__fourthForecast").textContent = d.list[28].weather[0].description
        document.querySelector("#hourly__fifthForecast").textContent = d.list[29].weather[0].description
        document.querySelector("#hourly__sixthForecast").textContent = d.list[30].weather[0].description

        document.querySelector("#hourly__firstTemp").textContent = Math.round(d.list[25].main.temp) - kel
        document.querySelector("#hourly__secondTemp").textContent = Math.round(d.list[26].main.temp) - kel
        document.querySelector("#hourly__thirdTemp").textContent = Math.round(d.list[27].main.temp) - kel
        document.querySelector("#hourly__fourthTemp").textContent = Math.round(d.list[28].main.temp) - kel
        document.querySelector("#hourly__fifthTemp").textContent = Math.round(d.list[29].main.temp) - kel
        document.querySelector("#hourly__sixthTemp").textContent = Math.round(d.list[30].main.temp) - kel

        document.querySelector("#hourly__firstRealFeal").textContent = Math.round(d.list[25].main.feels_like) - kel
        document.querySelector("#hourly__secondRealFeal").textContent = Math.round(d.list[26].main.feels_like) - kel
        document.querySelector("#hourly__thirdRealFeal").textContent = Math.round(d.list[27].main.feels_like) - kel
        document.querySelector("#hourly__fourthRealFeal").textContent = Math.round(d.list[28].main.feels_like) - kel
        document.querySelector("#hourly__fifthRealFeal").textContent = Math.round(d.list[29].main.feels_like) - kel
        document.querySelector("#hourly__sixthRealFeal").textContent = Math.round(d.list[30].main.feels_like) - kel

        document.querySelector("#hourly__firstWind").textContent = d.list[25].wind.speed + " " + windSide(d.list[0].wind.deg)
        document.querySelector("#hourly__secondWind").textContent = d.list[26].wind.speed + " " + windSide(d.list[1].wind.deg)
        document.querySelector("#hourly__thirdWind").textContent = d.list[27].wind.speed + " " + windSide(d.list[2].wind.deg)
        document.querySelector("#hourly__fourthWind").textContent = d.list[28].wind.speed + " " + windSide(d.list[3].wind.deg)
        document.querySelector("#hourly__fifthWind").textContent = d.list[29].wind.speed + " " + windSide(d.list[4].wind.deg)
        document.querySelector("#hourly__sixthWind").textContent = d.list[30].wind.speed + " " + windSide(d.list[5].wind.deg)
    })


    let = setFifth = document.querySelector("#fifth-day__back")
    setFifth.addEventListener("click", async () => {
        removeAll()
        setFifth.classList.add("five-back")
        document.querySelector("#hourly__firstToday").textContent = getHours(d.list[33].dt_txt)
        document.querySelector("#hourly__secondToday").textContent = getHours(d.list[34].dt_txt)
        document.querySelector("#hourly__thirdToday").textContent = getHours(d.list[35].dt_txt)
        document.querySelector("#hourly__fourthToday").textContent = getHours(d.list[36].dt_txt)
        document.querySelector("#hourly__fifthToday").textContent = getHours(d.list[37].dt_txt)
        document.querySelector("#hourly__sixthToday").textContent = getHours(d.list[38].dt_txt)


        let FHourlyFirstIcon = d.list[33].weather[0].icon
        let FHourlySecondIcon = d.list[34].weather[0].icon
        let FHourlyThirdIcon = d.list[35].weather[0].icon
        let FHourlyFourthIcon = d.list[36].weather[0].icon
        let FHourlyFifthIcon = d.list[37].weather[0].icon
        let FHourlySixthIcon = d.list[38].weather[0].icon

        document.querySelector("#hourly__firstIcon").src = `http://openweathermap.org/img/wn/${FHourlyFirstIcon}@2x.png`
        document.querySelector("#hourly__secondIcon").src = `http://openweathermap.org/img/wn/${FHourlySecondIcon}@2x.png`
        document.querySelector("#hourly__thirdIcon").src = `http://openweathermap.org/img/wn/${FHourlyThirdIcon}@2x.png`
        document.querySelector("#hourly__fourthIcon").src = `http://openweathermap.org/img/wn/${FHourlyFourthIcon}@2x.png`
        document.querySelector("#hourly__fifthIcon").src = `http://openweathermap.org/img/wn/${FHourlyFifthIcon}@2x.png`
        document.querySelector("#hourly__sixthIcon").src = `http://openweathermap.org/img/wn/${FHourlySixthIcon}@2x.png`

        document.querySelector("#hourly__firstForecast").textContent = d.list[33].weather[0].description
        document.querySelector("#hourly__secondForecast").textContent = d.list[34].weather[0].description
        document.querySelector("#hourly__thirdForecast").textContent = d.list[35].weather[0].description
        document.querySelector("#hourly__fourthForecast").textContent = d.list[36].weather[0].description
        document.querySelector("#hourly__fifthForecast").textContent = d.list[37].weather[0].description
        document.querySelector("#hourly__sixthForecast").textContent = d.list[38].weather[0].description

        document.querySelector("#hourly__firstTemp").textContent = Math.round(d.list[33].main.temp) - kel
        document.querySelector("#hourly__secondTemp").textContent = Math.round(d.list[34].main.temp) - kel
        document.querySelector("#hourly__thirdTemp").textContent = Math.round(d.list[35].main.temp) - kel
        document.querySelector("#hourly__fourthTemp").textContent = Math.round(d.list[36].main.temp) - kel
        document.querySelector("#hourly__fifthTemp").textContent = Math.round(d.list[37].main.temp) - kel
        document.querySelector("#hourly__sixthTemp").textContent = Math.round(d.list[38].main.temp) - kel

        document.querySelector("#hourly__firstRealFeal").textContent = Math.round(d.list[33].main.feels_like) - kel
        document.querySelector("#hourly__secondRealFeal").textContent = Math.round(d.list[34].main.feels_like) - kel
        document.querySelector("#hourly__thirdRealFeal").textContent = Math.round(d.list[35].main.feels_like) - kel
        document.querySelector("#hourly__fourthRealFeal").textContent = Math.round(d.list[36].main.feels_like) - kel
        document.querySelector("#hourly__fifthRealFeal").textContent = Math.round(d.list[37].main.feels_like) - kel
        document.querySelector("#hourly__sixthRealFeal").textContent = Math.round(d.list[38].main.feels_like) - kel

        document.querySelector("#hourly__firstWind").textContent = d.list[33].wind.speed + " " + windSide(d.list[0].wind.deg)
        document.querySelector("#hourly__secondWind").textContent = d.list[34].wind.speed + " " + windSide(d.list[1].wind.deg)
        document.querySelector("#hourly__thirdWind").textContent = d.list[35].wind.speed + " " + windSide(d.list[2].wind.deg)
        document.querySelector("#hourly__fourthWind").textContent = d.list[36].wind.speed + " " + windSide(d.list[3].wind.deg)
        document.querySelector("#hourly__fifthWind").textContent = d.list[37].wind.speed + " " + windSide(d.list[4].wind.deg)
        document.querySelector("#hourly__sixthWind").textContent = d.list[38].wind.speed + " " + windSide(d.list[5].wind.deg)
    })
}


function removeAll () {
    let del1 = document.querySelector("#first-day__back")
    let del2 = document.querySelector("#second-day__back")
    let del3 = document.querySelector("#third-day__back")
    let del4 = document.querySelector("#fourth-day__back")
    let del5 = document.querySelector("#fifth-day__back")
    del1.classList.remove("five-back")
    del2.classList.remove("five-back")
    del3.classList.remove("five-back")
    del4.classList.remove("five-back")
    del5.classList.remove("five-back")
}


function getTime(time) {
    let date = new Date(time)
    let hour = date.getHours()
    let min = date.getMinutes()
    return hour + ':' + min
}

function getHours(time) {
    let date = new Date(time)
    let hours = date.getHours()
    if(hours <= 12) {
        return hours + 'pm'
    } else {
        return hours + 'am'
    }
}

function windSide (side) {
    if(side === 0) {
        return "N"
    } else if (side > 0 && side < 90) {
        return "NE"
    } else if (side === 90) {
        return "E"
    } else if (side > 90 && side < 180) {
        return "ES"
    } else if (side === 180) {
        return "S"
    } else if (side > 180 && side < 270) {
        return "SW"
    } else if (side === 180) {
        return "W"
    } else if (side > 270 && side < 360) {
        return "WN"
    }
}

function getDate () {
    let date = new Date()
    let nowday = date.getDate()
    let nowMonth = date.getMonth()
    let nowYear = date.getFullYear()
    return nowday + `.` + nowMonth + `.` + nowYear
}

function getFiveDay (five) {
    let now = new Date()
    let n = now.getDay()
    let all = new Date(five)
    let day = all.getDay()
    if(day === 0) {
        if(day === n) {
            return "TODAY"
        } else {return "SUN"}
    } else if(day === 1) {
        if(day === n) {
            return "TODAY"
        } else {return "MON"}
    } else if(day === 2) {
        if(day === n) {
            return "TODAY"
        } else {return "TUE"}
    } else if(day === 3) {
        if(day === n) {
            return "TODAY"
        } else {return "WED"}
    } else if(day === 4) {
        if(day === n) {
            return "TODAY"
        } else {return "THU"}
    } else if(day === 5) {
        if(day === n) {
            return "TODAY"
        } else {return "FRI"}
    } else if(day === 6) {
        if(day === n) {
            return "TODAY"
        } else {return "SAT"}
    }
}

function getMonth(month) {
    let all = new Date(month)
    let date = all.getDate()
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const d = new Date(month);
    let name = months[d.getMonth()] + " " + date;
    return name
}

function london (cord) {
    let engRegEx = /london/i
    let rusRegEx = /лондон/i

    let res = cord.match(engRegEx) || cord.match(rusRegEx)

    if(!res) {
        throw new Error("You picked wrong house fool")
    }
}


let myForm = document.querySelector("#sub")

myForm.addEventListener("click", async (e) => {
    e.preventDefault()
    try{
        let result = document.querySelector("#Search").value
        document.querySelector("#tabsWrap").classList.remove("err")
        let one = await test(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=ed6c661110d77839ca10d1a5a18babf7`)
        let two = await showFiveDay(`https://api.openweathermap.org/data/2.5/forecast?q=${result}&appid=ed6c661110d77839ca10d1a5a18babf7`)
    } catch (e) {
        document.querySelector("#error").classList.add("e")
        document.querySelector("#error").classList.remove("err")
        document.querySelector("#tabsWrap").classList.add("err")
    }
})




document.addEventListener('DOMContentLoaded', function(e){
    let list = document.querySelectorAll('#tabNav a');
    list = Array.prototype.slice.call(list, 0);
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            e.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));
            document.querySelector('#tabNav .act')
                .classList.remove('act');
            document.querySelector('#tabsWrap .act')
                .classList.remove('act');
            el.classList.add('act');
            tab.classList.add('act');
        })
    })
})


window.addEventListener('DOMContentLoaded', (event) => {
    try {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = (position.coords.latitude);
            let lon = (position.coords.longitude)
            test(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed6c661110d77839ca10d1a5a18babf7`)
            showFiveDay(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ed6c661110d77839ca10d1a5a18babf7`)
        });
    } catch (e) {
        test("https://api.openweathermap.org/data/2.5/weather?lat=41.299496&lon=69.240074&appid=ed6c661110d77839ca10d1a5a18babf7")
        showFiveDay("https://api.openweathermap.org/data/2.5/forecast?lat=41.299496&lon=69.240074&appid=ed6c661110d77839ca10d1a5a18babf7")
    }
});