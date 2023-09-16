export function fetchData() {
    
    const url = "https://data.grandpoitiers.fr/api/explore/v2.1/catalog/datasets/mobilites-stationnement-des-parkings-en-temps-reel/records?limit=20";
    
    return fetch(url, { method: "GET" })
      .then(response => response.json())
      .catch(error => {
        console.error("Erreur lors de la récupération des données de l'API :", error);
        throw error; // Pour propager l'erreur en cas d'échec de la requête
      });
  }




