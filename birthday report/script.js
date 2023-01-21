


function birthdayCoundown() {
    const birthdayDate = new Date ("December 4, 2022 20:07");
    const now = new Date ();
    const dift = birthdayDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(dift/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((dift%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((dift%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor ((dift%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    setInterval(birthdayCoundown,1000);

    if (dift<=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;

        clearInterval(timerID);
        happyBirthday()
    }

}

let timerID = setInterval(birthdayCoundown,1000);

function happyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "С днем Рождения!!!";
    heading.classList.add("newClass");
}

birthdayCoundown();

const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    document.body.style.backgroundImage = "url('blue.jpg')";
    btn.innerHTML = "Хочу обратно зеленый фон";


} )  


