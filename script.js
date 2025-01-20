const planetsBox = document.getElementById("planets");
const audio = document.querySelector("audio");

document.addEventListener("DOMContentLoaded", async () => {
//   audio.autoplay;
  //   console.log(fetch("http://localhost:5000/planets"));
  try {
    const response = await fetch("http://localhost:5000/planets?n=8");
    const data = await response.json();
    console.log(data);
    let content = ``;
    data.map(
      (planet) =>
        (content += `
            <div id="planet-card">
      <img width="200px" height="200px" src=${planet.img} alt="" />
     <h1> ${planet.planetName} </h1>
     <h3>${planet.sign}</h3>
     <h3>
     <img width="24px" src="./assets/area.png" />
     <span>
     ${planet.surfaceArea.surfaceValue} X 10<sup>${planet.surfaceArea.surfaceExponent}</sup>km<sup>2</sup>
     </span>
     </h3>
     </div>
     `)
    );
    planetsBox.innerHTML = content;
  } catch (error) {
    console.log(error);
  }
  //   fetch("http://localhost:5000/planets")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
});

// to handle an asynchronous operation we can either a callback or a promise
// to handle promises we can use either async -await with trycatch bloc or then-catch statement
