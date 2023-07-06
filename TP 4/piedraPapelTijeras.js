function obtenerJugadaComputadora() {
    const numeroAleatorio = Math.floor(Math.random() * 3);
  
    if (numeroAleatorio === 0) {
      return "piedra";
    } else if (numeroAleatorio === 1) {
      return "papel";
    } else {
      return "tijeras";
    }
  }
  
  function obtenerJugadaUsuario() {
    const jugadaUsuario = prompt("Elige tu jugada: piedra, papel o tijeras").toLowerCase();
  
    if (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijeras") {
      console.log("Por favor, elige entre las siguientes opciones: piedra, papel o tijeras.");
      return obtenerJugadaUsuario();
    }
  
    return jugadaUsuario;
  }
  
  function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
      return "Empate";
    } else if (
      (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
      (jugadaUsuario === "tijeras" && jugadaComputadora === "papel") ||
      (jugadaUsuario === "papel" && jugadaComputadora === "piedra")
    ) {
      return "Felicitaciones, Ganaste!";
    } else {
      return "Perdiste... =(";
    }
  }
  
  function jugarPiedraPapelTijeras() {
    const jugadaComputadora = obtenerJugadaComputadora();
  
    const jugadaUsuario = obtenerJugadaUsuario();
  
    const resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
  
    console.log(`La computadora elige: ${jugadaComputadora}.`);
    console.log(`El usuario elige: ${jugadaUsuario}.`);
    console.log(`El resultado fue: ${resultado}.`);
  }

  jugarPiedraPapelTijeras();