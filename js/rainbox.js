const configuration = {
    "relaxed": {
        "dropCount": window.innerWidth / 50,
        "dropSpeedMin": 5000,
        "dropSpeedMax": 2000,
    },
    "rain": {
        "dropCount": window.innerWidth / 20,
        "dropSpeedMin": 3000,
        "dropSpeedMax": 1000,
    },
    "intense": {
        "dropCount": window.innerWidth / 1,
        "dropSpeedMin": 800,
        "dropSpeedMax": 400
    }
}

let selectedConfiguration = configuration["rain"]
const dropRow = document.getElementById("rainbox")
const configRow = document.getElementById("rainbox-config")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function loadConfiguration(type) {
    dropRow.innerHTML = ''
    selectedConfiguration = configuration[type]
    rainbox()
}

function rainbox() {
    for (let i = 0; i < selectedConfiguration["dropCount"]; i++) {
        const randomSpeed = `${getRandomInt(
            selectedConfiguration["dropSpeedMax"],
            selectedConfiguration["dropSpeedMin"]
            )}ms`
        const randomDelay = `${getRandomInt(1000,10000)}ms`
      
        var drop = document.createElement("div")
        drop.classList.add("drop")
        drop.style.animationDelay = randomDelay
        drop.style.animationDuration = randomSpeed
        
        var stem = document.createElement("div")
        stem.classList.add("stem")
        stem.style.animationDelay = randomDelay
        stem.style.animationDuration = randomSpeed
        stem.style.backgroundColor = `hsl(${
            (360 * i / selectedConfiguration["dropCount"] * 2)
          },80%,50%)`
        
        drop.appendChild(stem)
        dropRow.appendChild(drop)
      }
}

function configurations () {
    Object.keys(configuration).forEach(key => {
        var configItem = document.createElement("div")
        configItem.innerText = key
        configItem.addEventListener("click", () => loadConfiguration(key), false)
        configRow.appendChild(configItem)
    })
}

rainbox()
configurations()

