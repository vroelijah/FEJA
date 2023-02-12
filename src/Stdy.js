import "./css/Stdy.css";

let hasStudyPageBeenCreated = false;

function createStudyPage() {

    const buttonContainer = document.createElement("div");
buttonContainer.style.position = "fixed";
buttonContainer.style.top = "0";
buttonContainer.style.left = "0";

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.style.backgroundColor = "white";
homeButton.style.color = "black";
homeButton.style.fontSize = "24px";
homeButton.style.padding = "12px";
homeButton.style.border = "1px solid black";

buttonContainer.appendChild(homeButton);
document.body.appendChild(buttonContainer);

  if (!hasStudyPageBeenCreated) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "column";
    buttonContainer.style.alignItems = "center";

    const heading = document.createElement("h1");
    heading.textContent = "Study Spots";
    heading.style.fontSize = "36px";
    heading.style.marginTop = "50px";

    buttonContainer.appendChild(heading);

    const buttons = [
      { label: "Melville Library", color: "red" },
      { label: "SAC", color: "red" },
      { label: "Union", color: "red" },
      { label: "Health Science Building", color: "red" },
      { label: "Chemisitry Building", color: "red" },
      { label: "Frey Hall", color: "red" }
    ];

    buttons.forEach(({ label, color }, index) => {
      const button = document.createElement("button");
      button.textContent = label;
      button.style.backgroundColor = color;
      button.style.color = "white";
      button.style.fontSize = "24px";
      button.style.padding = "32px";
      button.style.margin = "16px";
      button.style.borderRadius = "4px";
      button.style.width = "200px";
      button.style.height = "200px";
      button.style.border = "10px solid white";

      if (index % 2 === 0) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";
        row.appendChild(button);
        buttonContainer.appendChild(row);
      } else {
        const lastRow = buttonContainer.lastChild;
        lastRow.appendChild(button);
      }
    });

    document.body.appendChild(buttonContainer);
    hasStudyPageBeenCreated = true;
  }
}

export default createStudyPage;
