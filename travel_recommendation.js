// ...existing code...
function recommendations(event) {
  event.preventDefault();
  cosnt = apiurl = "./travel_recommendation.json";
 fetch(apiurl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched travel recommendations:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  return [
