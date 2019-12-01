const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const holder = document.querySelector("eventsWidget");
fetch(requestURL)
    .then(response=>{
      return response.json()
      })
    .then(json=>{
        const towns = json["towns"];
        for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == 'Preston') {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            p.innerHTML = `${town.events[0]}<br>${town.events[1]}<br>${town.events[2]}`;
            h2.textContent = `Upcoming Events!`;


            eventsWidget.appendChild(h2);
            eventsWidget.appendChild(p);


            holder.appendChild(eventsWidget);
            }

        });
    });
