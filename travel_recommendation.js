// ...existing code...
function recommendation(event) {
  event.preventDefault();
  const apiurl = "./travel_recommendation.json";
  const userInput = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  console.log("User input:", userInput);
  fetch(apiurl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched travel recommendations:", data);
      let found = null;

      // Search countries and their cities
      for (const country of data.countries) {
        if (country.name.toLowerCase().includes(userInput)) {
          found = {
            name: country.name,
            image: country.cities[0]?.imageUrl,
            description: `Explore cities like ${country.cities
              .map((c) => c.name)
              .join(", ")}`,
          };
          break;
        }
        for (const city of country.cities) {
          if (city.name.toLowerCase().includes(userInput)) {
            found = {
              name: city.name,
              image: city.imageUrl,
              description: city.description,
            };
            break;
          }
        }
        if (found) break;
      }

      // Search temples
      if (!found) {
        for (const temple of data.temples) {
          if (temple.name.toLowerCase().includes(userInput)) {
            found = {
              name: temple.name,
              image: temple.imageUrl,
              description: temple.description,
            };
            break;
          }
        }
      }

      // Search beaches
      if (!found) {
        for (const beach of data.beaches) {
          if (beach.name.toLowerCase().includes(userInput)) {
            found = {
              name: beach.name,
              image: beach.imageUrl,
              description: beach.description,
            };
            break;
          }
        }
      }

      const recommendationsDiv = document.getElementById("recommendationsDiv");
      if (found) {
        recommendationsDiv.innerHTML = `<img src="${found.image}" alt="Travel Image" style="width:300px;height:200px;">
           <h2>${found.name}</h2>
           <p>${found.description}</p>`;
      } else {
        recommendationsDiv.innerHTML =
          "<p>No recommendations found for your input.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  document.getElementById("recommendationsDiv").style.display = "block";
}
document.getElementById("btnClear").addEventListener("click", function () {
  document.getElementById("userInput").value = "";
  const recommendationsDiv = document.getElementById("recommendationsDiv");
  recommendationsDiv.innerHTML = "";
  recommendationsDiv.style.display = "none";
});
    const options = {
      timeZone: "America/New_York",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const newYorkTime = new Date().toLocaleTimeString("en-US", options);
    console.log("Current time in New York:", newYorkTime);
