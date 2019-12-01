const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];

      for (let i = 0; i < towns.length; i++) { //read through it
        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') { //if the name is equal to
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let motto = document.createElement('h3');
          let year = document.createElement('p');
          let pop = document.createElement('p');
          let makeitrain = document.createElement('p');
          let pic = document.createElement('img');

          h2.textContent = towns[i].name;
          motto.textContent = towns[i].motto;
          year.textContent = 'Year founded: ' + towns[i].yearFounded;
          pop.textContent = 'Current Population: ' + towns[i].currentPopulation;
          makeitrain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
          pic.setAttribute('src', 'images/' + towns[i].photo);

          card.appendChild(h2);
          card.appendChild(motto);
          card.appendChild(year);
          card.appendChild(pop); //popuplation
          card.appendChild(makeitrain);
          card.appendChild(pic);
          // let threetowns= new array towns[1,3,4];
          document.querySelector('div.idahoans').appendChild(card);
        }}
      });
