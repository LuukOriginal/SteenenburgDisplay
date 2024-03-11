let theme = localStorage.getItem('theme') || 'dark';

export function SetTheme(theme) {
    switch (theme) {
        case "light":
            document.documentElement.className = "theme-light";
            break;
        case "dark":
            document.documentElement.className = "theme-dark";
            break;
        case "automatic":
            
            break;
        default:
            break;
    }
}