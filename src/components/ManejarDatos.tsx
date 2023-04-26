export function saveClicks(datos: ClickData) {
    localStorage.setItem('clicks', JSON.stringify(datos));
}

export interface ClickData{
    clicks: number;
}

export function loadClicks(){
    const storedData = localStorage.getItem('clicks');
    if (storedData) {
        const parsedData: ClickData = JSON.parse(storedData);
        return parsedData.clicks
    }
    else{
        return 0
    }
}