const colors = [
    { name: "Red", code: "#FF5733" },
    { name: "Blue", code: "#3498DB" },
    { name: "Green", code: "#2ECC71" },
    { name: "Yellow", code: "#F1C40F" },
    { name: "Orange", code: "#E67E22" },
    { name: "Purple", code: "#9B59B6" },
    { name: "Pink", code: "#FFC0CB" },
    { name: "Brown", code: "#A52A2A" },
    { name: "Cyan", code: "#00FFFF" },
    { name: "Gray", code: "#808080" }
  ];
  
  const colorGrid = document.getElementById("colorGrid");
  const refreshAllButton = document.getElementById('refreshAllButton');
  
  function createColorGrid() {
    colorGrid.innerHTML = '';
  
    for (let i = 0; i < 10; i++) {
      const button = document.createElement("button");
      button.classList.add("button");
      button.style.backgroundColor = "#333";
      button.innerText = "Click Me";
      button.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = randomColor.code;
        button.innerText = randomColor.name;
      });
      colorGrid.appendChild(button);
    }
  }
  
  function refreshAll() {
    createColorGrid();
  }
  
  refreshAllButton.addEventListener('click', refreshAll);
  
  createColorGrid();