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

function changeColorScheme(schemeName) {
    const root = document.documentElement;
    
    const scheme = colorSchemes[schemeName];
    
    if (scheme) {
        root.style.setProperty('--bg-color', scheme.bgColor);
        root.style.setProperty('--bg-color2', scheme.bgColor2);
        root.style.setProperty('--primary-color', scheme.primaryColor);
        root.style.setProperty('--secondary-color', scheme.secondaryColor);
    }
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("closed");
}

document.addEventListener('DOMContentLoaded', function() {
    const schemeButtons = document.querySelectorAll('.color-button');
    
    schemeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const colorName = this.dataset.color;
            changeColorScheme(colorName);
        });
    });
});