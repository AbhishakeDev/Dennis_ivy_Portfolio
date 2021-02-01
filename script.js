//for light change
const themeDots = document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        let mode = dot.dataset.mode
        setTheme(mode)
    })
})

const setTheme = (mode) => {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode) //changing the localstorage everytime to retain state
}

//for setting the theme to the local storage to retain state
let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}