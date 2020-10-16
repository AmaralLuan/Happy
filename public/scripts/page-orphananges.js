// create map

const map = L.map('mapid').setView([-16.500311,-49.4293875], 13);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker ({id, name, lat, lng}) {
    
    

    // create popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanange?id=${id}" <img src="/images/arrow-white.svg" </a>`)
    
    
    
    
    // create and add markup
    L.marker([lat,lng], { icon })
        .addTo(map)
        .bindPopup(popup);
}

const orphanangesSpan = document.querySelectorAll('.orphananges span');
orphanangesSpan.forEach((span) => {
    const orphanange = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanange)
})

