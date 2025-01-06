const colorSchemes = {
    yellow: {
        bgColor: '#100D11',
        bgColor2: '#140D19',
        primaryColor: '#DFFFBD',
        secondaryColor: '#FDFEB7'
    },
    purple: {
        bgColor: '#100D11',
        bgColor2: '#140D19',
        primaryColor: '#F4DAFA',
        secondaryColor: '#8B73A0'
    },
    turquoise: {
        bgColor: '#140D19',
        bgColor2: '#100D11',
        primaryColor: '#488FE3',
        secondaryColor: '#56CFE1'
    },
    turquoise2: {
        bgColor: '#140D19',
        bgColor2: '#100D11',
        primaryColor: '#80FFD8',
        secondaryColor: '#4EA8DE'
    },
    cyberpunk: {
        bgColor: '#140D19',
        bgColor2: '#100D11',
        primaryColor: '#80FFDB',
        secondaryColor: '#7400BB'
    }
};

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("closed");
}

function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    
    for(let cookie of cookies) {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length);
        }
    }
    return null;
}

function changeColor(colorName) {
    const root = document.documentElement;
    const color = colorSchemes[colorName];
    
    if (color) {
        root.style.setProperty('--bg-color', color.bgColor);
        root.style.setProperty('--bg-color2', color.bgColor2);
        root.style.setProperty('--primary-color', color.primaryColor);
        root.style.setProperty('--secondary-color', color.secondaryColor);
        
        setCookie('preferredColor', colorName, 30);
    }
}

function loadSavedColor() {
    const savedColor = getCookie('preferredColor');
    
    if (savedColor && colorSchemes[savedColor]) {
        changeColor(savedColor);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-button');
    
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const colorName = this.dataset.color;
            changeColor(colorName);
        });
    });
    
    loadSavedColor();
});

