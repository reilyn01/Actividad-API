fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Ronaldo")

    .then(res => res.json())
    .then(data => {

    const contenedor = document.getElementById("Cartas")


    const jugadores = data.player.slice(0, 4)

    jugadores.forEach(jugador => {

    const carta = document.createElement("div")
    carta.classList.add("card")

        carta.innerHTML = `
        <img src="${jugador.strThumb}">
        <h2>${jugador.strPlayer}</h2>
        <p>${jugador.strTeam}</p>
        
    `

    contenedor.appendChild(carta)

    })

    })