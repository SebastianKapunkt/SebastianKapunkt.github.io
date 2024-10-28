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
    "dropCount": window.innerWidth,
    "dropSpeedMin": 800,
    "dropSpeedMax": 400
  },
  "off": {
    "dropCount": window.innerWidth / 10,
    "dropSpeedMin": 0,
    "dropSpeedMax": 0
  }
}

let selectedConfiguration = configuration["off"]
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
    const randomOffest = `${getRandomInt(-200, window.innerHeight)}px`

    var drop = document.createElement("div")
    drop.classList.add("drop")
    drop.style.top = randomOffest
    if (!randomSpeed.includes("NaN")) {
      drop.style.animationDelay = 0
      drop.style.animationDuration = randomSpeed
    } else {
      drop.style.animation = "none"
    }

    var stem = document.createElement("div")
    stem.classList.add("stem")
    if (!randomSpeed.includes("NaN")) {
      stem.style.animationDelay = 0
      stem.style.animationDuration = randomSpeed
    } else {
      stem.style.animation = "none"
    }
    stem.style.backgroundColor = `hsl(${
      (360 * i / selectedConfiguration["dropCount"] * 2)
    },80%,50%)`

    drop.appendChild(stem)
    dropRow.appendChild(drop)
  }
}

function configurations() {
  Object.keys(configuration).forEach(key => {
    var configItem = document.createElement("div")
    configItem.innerText = key
    configItem.addEventListener("click", () => loadConfiguration(key), false)
    configRow.appendChild(configItem)
  })
}

rainbox()
configurations()

