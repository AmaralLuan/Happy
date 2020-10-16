// create map

const map = L.map('mapid').setView([-16.500311,-49.4293875], 13);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68]
});


let marker;

// create and add markers

map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon

    marker && map.removeLayer(marker)

    // add icon layer

    marker = L.marker([lat, lng], { icon })
    .addTo(map);

});


// add photo field

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar duplicação da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se o campo está vazio

    const inputField = newFieldContainer.children[0];

    if (inputField.value == "") {
        return 
    }

    // limpar o campo antes de add ao container de #images

    inputField.value = '';

    // adicionar duplicação ao container de #images
    container.appendChild(newFieldContainer);
}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = '';
        return
    }

    // deletar o campo
    span.parentNode.remove();

}


// seleciona sim e não 

function toggleSelect (event) {
    // pegar o botão clicado

    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    // colocar a classe .active
    const button = event.currentTarget;
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]');

    // verificar se é o sim ou não
    input.value = button.dataset.value

}