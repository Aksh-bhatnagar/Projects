    // Initialize the map
    var map = L.map('map').setView([24.4738, 74.8726], 13); // coordinates

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add a marker
    L.marker([24.4738, 74.8726]).addTo(map)
      .bindPopup('Hello from Neemuch!')
      .openPopup();

    // Add Geocoder control
    L.Control.geocoder({
      defaultMarkGeocode: true,
      position: 'bottomright'
    }).addTo(map);