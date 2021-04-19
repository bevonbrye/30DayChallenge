const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then(data => data.json()).then(moreData => cities.push(...moreData))

function findMatches(wordToMatch, cities) { 
    return cities.filter(place => { 
        //figure out if city or state matches what was searched
        //put var in reg expression
        //wordToMatch is the passed val and g = global and i incensitive 
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    
    })
}

function renderMatches() { 
    const matchArray = findMatches(this.value, cities); 
    const html = matchArray.map(place => { 
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`)
        return `
            <li>
                <span class="name"> ${place.city}, ${place.state} </span>
                <span class="population">${place.population}</span>
            </li>
        `
        
    }).join('')
    suggestions.innerHTML = html
}; 

const searchPoint = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchPoint.addEventListener('change', renderMatches)
searchPoint.addEventListener('keyup', renderMatches)

