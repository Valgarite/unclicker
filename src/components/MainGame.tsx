import { useEffect, useState } from "react";
import { ClickData, loadClicks, saveClicks } from "./ManejarDatos";
import { createCharacter, loadCharacters, saveCharacters } from "./ManejarPersonajes";


function MainGame(){
    loadClicks()
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const storedData = localStorage.getItem("clicks");
        if (storedData) {
          const parsedData: ClickData = JSON.parse(storedData);
          setClicks(parsedData.clicks);
        }
      }, []); // Solo se ejecutará una vez al cargar el componente
    
    const progresar = () =>{
        setClicks(clicks+1)
        const saveData: ClickData = { clicks: clicks+1 };
        saveClicks(saveData) //autosave lol
    }

    const resetClicks = () =>{
        setClicks(0)
        const saveData: ClickData = { clicks: 0 };
        saveClicks(saveData) //autosave lol
    }

    const resetTodo = () =>{
        resetClicks()
        saveCharacters({characters: []})
    }

    const crearPersonaje = () => {
        const personajesGuardados = loadCharacters()
        console.log(personajesGuardados)
        const puntos = Math.round(clicks * (Math.random()*(0.80-0.20)+0.20))
        const HP = puntos
        const ATK = (clicks-puntos)

        console.log(`
        Puntos usados: ${clicks}\n
        Salud: ${HP}\n
        Ataque: ${ATK}
        `)
        resetClicks()
        
        personajesGuardados.push(createCharacter(HP, ATK))
        const interfazPersonajes = {characters: personajesGuardados}
        saveCharacters(interfazPersonajes)
    }   
   
    return(
    <>
        <button onClick={progresar}>click!</button>
        <p>{clicks}</p>
        <button onClick={resetTodo}>💀</button>
        <button onClick={crearPersonaje}>Crear</button>
    </>
    )
}

export default MainGame;