export function getLocation() {
  const location = {
    long: 0,
    lat: 0,
  };
  navigator.geolocation.getCurrentPosition(
    (position) => {
      location.long = position.coords.longitude;
      location.lat = position.coords.latitude;
    },
    (error) => error.message,
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
}
