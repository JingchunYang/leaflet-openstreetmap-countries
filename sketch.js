let countriesgeojson;
let xx = 0, yy = 0;
let radius = 80;
function preload() {
    //create a div using p5.js
    mapDiv = createElement('div');
    mapDiv.id("mapid");

    countriesgeojson = loadJSON('countries.geojson');
}

function setup() {
    // console.log(countriesgeojson.features.length)
    //;

    console.log(countriesgeojson.features[99].properties.ADMIN);

    // noCanvas();
    createCanvas(100, 100)
    var map = L.map('mapid').setView([51.505, -0.09], 2);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('England.<br> Easily customizable.')
        .openPopup();


    let geoData = [{
        "type": "Feature",
        "properties": { "ADMIN": "Aruba", "ISO_A3": "ABW", "ISO_A2": "AW" },
        "geometry": { "type": "MultiPolygon", "coordinates": [[[[-69.996937628999916, 12.577582098000036], [-69.936390753999945, 12.531724351000051], [-69.924672003999945, 12.519232489000046], [-69.915760870999918, 12.497015692000076], [-69.880197719999842, 12.453558661000045], [-69.876820441999939, 12.427394924000097], [-69.888091600999928, 12.417669989000046], [-69.908802863999938, 12.417792059000107], [-69.930531378999888, 12.425970770000035], [-69.945139126999919, 12.44037506700009], [-69.924672003999945, 12.44037506700009], [-69.924672003999945, 12.447211005000014], [-69.958566860999923, 12.463202216000099], [-70.027658657999922, 12.522935289000088], [-70.048085089999887, 12.531154690000079], [-70.058094855999883, 12.537176825000088], [-70.062408006999874, 12.546820380000057], [-70.060373501999948, 12.556952216000113], [-70.051096157999893, 12.574042059000064], [-70.048736131999931, 12.583726304000024], [-70.052642381999931, 12.600002346000053], [-70.059641079999921, 12.614243882000054], [-70.061105923999975, 12.625392971000068], [-70.048736131999931, 12.632147528000104], [-70.00715084499987, 12.5855166690001], [-69.996937628999916, 12.577582098000036]]]] }
    }






    ]



    let addedGeoJSON = L.geoJSON(countriesgeojson, {
        style: function (feature) {
            return {
                "color": "yellow",
                "weight": 1,
                "opacity": 0.65
            }
        },

        onEachFeature: function (feature, layer) {
            console.log(feature)
            if (feature.geometry.type === 'MultiPolygon') {
                // let country = JSON.parse(JSON.stringify(feature.properties)).ADMIN;
                // layer.bindPopup(country);
            }
        }
    }).addTo(map).on('click', handleClick);
    document.getElementById("defaultCanvas0").style.zIndex = 1000;
    document.getElementById("defaultCanvas0").style.top = "50px";
    document.getElementById("defaultCanvas0").style.position = "absolute";
    //map.fitBounds(addedGeoJSON.getBounds(), {padding: [10,10]});
}
function handleClick(e) {
    //some stuff then:
    console.log(e.containerPoint)
    xx = parseInt(e.containerPoint.x);
    yy = parseInt(e.containerPoint.y);
    document.getElementById("defaultCanvas0").style.top = `${yy - radius / 2}px`;
    document.getElementById("defaultCanvas0").style.left = `${xx - radius / 2}px`;
}
function draw() {
    clear()
    ellipse(radius / 2, radius / 2, radius, radius);


}