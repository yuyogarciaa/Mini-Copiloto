var map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: -75.557731, lng: 6.330313},
        zoom: 13
    });
}

const newPost = {
    "c_digo_regi_n":"001",
    "nombre_regi_n":"Valle de Aburrá",
    "c_digo_municipio":"033",
    "nombre_municipio":"Ecatepec",
    "c_digo_habilitaci_n_prestador_salud":"050880561801",
    "raz_n_social_organizaci_n":"E.S.E. HOSPITAL MARCO FIDEL SUAREZ",
    "nombre_sede":"EMPRESA SOCIAL DEL ESTADO HOSPITAL MARCO FIDEL SUAREZ",
    "n_mero_nit":"890985703",
    "d_gito_verificaci_n_nit":"5",
    "direcci_n":"CL 44 # 49B-90",
    "n_mero_tel_fono":"5569145216",
    "direcci_n_correo_electr_nico":"erick.baic@gmail.com",
    "punto":{"type":"Point","coordinates":[-75.557731,6.330313]}
}

fetch('http://201.175.39.231/TestPosiciones/Posiciones.aspx?token=copiloto', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers:{
        "Content-type":"application/json"
    }
})
    .then(res => res.json())
    .then(data=> console.log(data))
