function toggleMode() {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("mode", mode);
  }
  
  window.onload = () => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.classList.add("dark");
    }
  };
  