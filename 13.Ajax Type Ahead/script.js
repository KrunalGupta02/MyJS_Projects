const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// fetching the data
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// Putting data in an empty array
const cities = [];
console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // Here we need to find out if the city or state matches what was searched

    const regex = new RegExp(wordToMatch, "gi");

    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  // console.log(this.value);
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      // Main concept
      return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
        </li>`;
    })
    // Join is used bcz we use map and it return new array every time it iterate
    .join("");

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
