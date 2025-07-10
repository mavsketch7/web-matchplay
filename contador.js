    let tiempo = 20;
    const countdownEl = document.getElementById('countdown');

    const intervalo = setInterval(() => {
      tiempo--;
      countdownEl.textContent = tiempo;

      if (tiempo <= 0) {
        clearInterval(tiempo);
        window.close();
      }
    }, 1000);
