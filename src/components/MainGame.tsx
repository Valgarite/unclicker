import { useEffect, useState } from "react";

function save(datos: SaveData) {
    localStorage.setItem('clicks', JSON.stringify(datos));
}

interface SaveData{
    clicks: number;
}

function load(){
    const storedData = localStorage.getItem('clicks');
    if (storedData) {
        const parsedData: SaveData = JSON.parse(storedData);
        return parsedData.clicks
    }
    else{
        return 0
    }
}

function MainGame(){
    load()
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const storedData = localStorage.getItem("clicks");
        if (storedData) {
          const parsedData: SaveData = JSON.parse(storedData);
          setClicks(parsedData.clicks);
        }
      }, []); // Solo se ejecutará una vez al cargar el componente
    
    const progresar = () =>{
        setClicks(clicks+1)
        const saveData: SaveData = { clicks: clicks+1 };
        save(saveData) //autosave lol
    }

    const reset = () =>{
        setClicks(0)
        const saveData: SaveData = { clicks: 0 };
        save(saveData) //autosave lol
    }
   
    return(
    <>
        <button onClick={progresar}>click!</button>
        <p>{clicks}</p>
        <button onClick={reset}>💀</button>
    </>
    )
}

export default MainGame;