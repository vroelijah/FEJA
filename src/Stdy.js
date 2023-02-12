
import "./css/Stdy.css";


let hasStudyPageBeenCreated = false;

function createStudyPage() {
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




