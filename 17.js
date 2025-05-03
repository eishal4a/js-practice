function countdown() {
    const end = new Date(document.getElementById("date").value).getTime();
    const now = new Date().getTime();
    const diff = end - now;
  
    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      document.getElementById("countdown").innerText = `${d}d ${h}h ${m}m ${s}s`;
    } else {
      document.getElementById("countdown").innerText = "Time's up!";
    }
  }
  
  setInterval(countdown, 1000);
  