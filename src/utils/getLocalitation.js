export function getLocalitation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error to get location: ", error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject("The user denied the geolocation request.");
              break;
            case error.POSITION_UNAVAILABLE:
              reject("Location information is not available.");
              break;
            case error.TIMEOUT:
              reject("The request to obtain the user's location expired.");
              break;
            default:
              reject("An unknown error occurred.");
              break;
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}
