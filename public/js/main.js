const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_rel_val = document.getElementById('temp_rel_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('middle_layer');

const getInfo = async (event) => {

    event.preventDefault();
    let cityVal = cityName.value;


    if (cityVal === "") {

        city_name.innerText = 'Please Write the name before search';
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=efe9756b85d983d0a34e44d21cfd3293`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_rel_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].arrData[0].main;

            //condition to check sunny or cloudly
            if (tempMood = "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #ecc68;'></i>";
            } else if (tempMood = "Clouds") {
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood = "Rain") {
                "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Please City name Properly';
            datahide.classList.add('data_hide');
        }
    }

}



submitBtn.addEventListener('click', getInfo);

