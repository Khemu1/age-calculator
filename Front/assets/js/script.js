let button = document.querySelector("img");
let chnageY = document.querySelector(".numY");
let chnageM = document.querySelector(".numM");
let chnageD = document.querySelector(".numD");

button.addEventListener("click", function () {
    let UserYear = document.querySelector("#year").value;
    let UserMonth = document.querySelector("#month").value - 1;
    let UserDay = document.querySelector("#day").value;

    let CurrentDate = new Date();
    let BirthDate = new Date(UserYear, UserMonth, UserDay);

    if (
        UserYear !== "" &&
        UserYear < 2023 &&
        UserMonth >= 0 &&
        UserMonth <= 11
    ) {
        if (
            (UserMonth === 0 ||
                UserMonth === 2 ||
                UserMonth === 4 ||
                UserMonth === 6 ||
                UserMonth === 7 ||
                UserMonth === 9 ||
                UserMonth === 11) &&
            UserDay >= 1 &&
            UserDay <= 31
        ) {
            calculateAge(CurrentDate, BirthDate);
        } else if (
            (UserMonth === 3 ||
                UserMonth === 5 ||
                UserMonth === 8 ||
                UserMonth === 10) &&
            UserDay >= 1 &&
            UserDay <= 30
        ) {
            calculateAge(CurrentDate, BirthDate);
        } else if (
            UserMonth === 1 &&
            ((UserYear % 4 === 0 && UserYear % 100 !== 0) ||
                UserYear % 400 === 0) &&
            UserDay >= 1 &&
            UserDay <= 29
        ) {
            calculateAge(CurrentDate, BirthDate);
        } else if (UserMonth === 1 && UserDay >= 1 && UserDay <= 28) {
            calculateAge(CurrentDate, BirthDate);
        } else {
            document.querySelector(".checkD").style.display = "block";
            document.querySelector(".numY").textContent = "- -";
            document.querySelector(".numM").textContent = "- -";
            document.querySelector(".numD").textContent = "- -";
        }
    } else {
        document.querySelector(".checkD").style.display = "block";
        document.querySelector(".numY").textContent = "- -";
        document.querySelector(".numM").textContent = "- -";
        document.querySelector(".numD").textContent = "- -";
    }
});

function calculateAge(currentDate, birthDate) {
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;

    animateAgeValues(years, months, days);
}

function animateAgeValues(years, months, days) {
    gsap.to(chnageY, {
        textContent: Math.round(years),
        duration: 2,
        ease: "power2.out",
    });
    gsap.to(chnageM, {
        textContent: months.toFixed(0),
        duration: 2,
        ease: "power2.out",
    });
    gsap.to(chnageD, {
        textContent: days.toFixed(0),
        duration: 2,
        ease: "power2.out",
    });
}
