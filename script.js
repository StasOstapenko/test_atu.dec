//window.onload = function () {
//    var basemap1 = L.tileLayer('https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//    });
//
//    var oblast = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_1.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var rayon = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_2.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var terhromad = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_3.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2 + '<br /><br />' + feature.properties.ADMIN_3 + ' ТГ');
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//
//    $.getJSON("ADMIN_UKR/ADMIN_1.geojson", function (data) {
//
//        var geojson = L.geoJson(data, {
//            onEachFeature: function (feature, layer) {
//                layer.bindPopup(feature.properties.Area_Name);
//            }
//        });
//
//
//        var map = L.map('my-map', {
//            layers: [basemap1, geojson, rayon, oblast, terhromad],
//            default: [basemap1, geojson]
//        }).fitBounds(geojson.getBounds());
//
//        var baseMaps = {
//            "Область": oblast,
//            "Район": rayon,
//            "Територіальна громада": terhromad,
//
//        };
//
//        //        var overlayMaps = [geojson];
//
//        L.control.layers(baseMaps, null).addTo(map);
//        L.control.scale({
//            options: {
//                position: 'bottomleft',
//                maxWidth: 500,
//                metric: true,
//                imperial: false,
//                updateWhenIdle: false
//            }
//        }).addTo(map);
//
//
//
//    });
//};

function enable()
{

    var mainPin = document.querySelector('#checkbox1');
   var downloadButton = document.querySelectorAll('#download-button');


//mainPin.addEventListener('click', function () {
//    console.log(downloadButton);
//  downloadButton.forEach(function(item) {
//       item.removeAttribute("disabled");
//      console.log('disabled');
//  })
//});

if (mainPin.checked === true){
  downloadButton.forEach(function(item) {
   console.log('disabled:false');
       item.disabled = false;
  })
} else if (mainPin.checked === false) { 
    downloadButton.forEach(function(item) {
      item.disabled = true;
        console.log('disabled:true');
  })
}
}


  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });


function changeImg(image1, image2, image3, image4) {
    var imghol = document.getElementById("image-holder1");
    imghol.src = image1;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"

    if (image1 === "") {
        imghol.style.visibility = "hidden";
    }
    var imghol = document.getElementById("image-holder2");
    imghol.src = image2;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image2 === "") {
        imghol.style.visibility = "hidden";
    }
    var imghol = document.getElementById("image-holder3");
    imghol.src = image3;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image3 === "") {
        imghol.style.visibility = "hidden";
    }
    var imghol = document.getElementById("image-holder4");
    imghol.src = image4;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image4 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder5");
    imghol.src = image5;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image5 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder6");
    imghol.src = image6;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image6 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder7");
    imghol.src = image7;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image7 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder8");
    imghol.src = image8;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image8 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder9");
    imghol.src = image9;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image9 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder10");
    imghol.src = image10;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image10 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder11");
    imghol.src = image11;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image11 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder12");
    imghol.src = image12;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image12 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder13");
    imghol.src = image13;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image13 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder14");
    imghol.src = image14;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image14 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder15");
    imghol.src = image15;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image15 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder16");
    imghol.src = image16;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image16 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder17");
    imghol.src = image17;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image17 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder18");
    imghol.src = image18;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image18 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder19");
    imghol.src = image19;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image19 === "") {
        imghol.style.visibility = "hidden";
    }
	    var imghol = document.getElementById("image-holder20");
    imghol.src = image20;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image20 === "") {
        imghol.style.visibility = "hidden";
    }
};

window.addEventListener("load", function () {
    console.log('query');
    var base_dir = 'static/atlas_materials/';



    var svgObject = document.getElementById('svg-object').contentDocument;

    var svg = svgObject.getElementById('obl_crimea');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ARK1.png', base_dir + 'ARK2.png')
        $('#exampleModalCenter').modal('show');
         console.log('Крим - це Україна!');
    });

    var svg = svgObject.getElementById('obl_zhytomyr');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zhytomyr1.png', base_dir + 'zhytomyr2.png', base_dir + 'zhytomyr3.png', base_dir + 'zhytomyr4.png', base_dir + 'zhytomyr5.png', base_dir + 'zhytomyr6.png', base_dir + 'zhytomyr7.png', base_dir + 'zhytomyr8.png', base_dir + 'zhytomyr9.png', base_dir + 'zhytomyr10.png', base_dir + 'zhytomyr11.png', base_dir + 'zhytomyr12.png', base_dir + 'zhytomyr13.png', base_dir + 'zhytomyr14.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_vinnytsia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'vinnytsa1.png', base_dir + 'vinnytsa2.png', base_dir + 'vinnytsa3.png', base_dir + 'vinnytsa4.png', base_dir + 'vinnytsa5.png', base_dir + 'vinnytsa6.png', base_dir + 'vinnytsa7.png', base_dir + 'vinnytsa8.png', base_dir + 'vinnytsa9.png', base_dir + 'vinnytsa10.png', base_dir + 'vinnytsa11.png', base_dir + 'vinnytsa12.png', base_dir + 'vinnytsa13.png', base_dir + 'vinnytsa14.png', base_dir + 'vinnytsa15.png', base_dir + 'vinnytsa16.png')
        $('#exampleModalCenter').modal('show');
    });


    var svg = svgObject.getElementById('obl_volyn');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'volynska1.png', base_dir + 'volynska2.png', base_dir + 'volynska3.png', base_dir + 'volynska4.png', base_dir + 'volynska5.png', base_dir + 'volynska6.png', base_dir + 'volynska7.png', base_dir + 'volynska8.png', base_dir + 'volynska9.png', base_dir + 'volynska10.png', base_dir + 'volynska11.png', base_dir + 'volynska12.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_dnipro');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'dnipro1.png', base_dir + 'dnipro2.png', base_dir + 'dnipro3.png', base_dir + 'dnipro4.png', base_dir + 'dnipro5.png', base_dir + 'dnipro6.png', base_dir + 'dnipro7.png', base_dir + 'dnipro8.png', base_dir + 'dnipro9.png', base_dir + 'dnipro10.png', base_dir + 'dnipro11.png', base_dir + 'dnipro12.png', base_dir + 'dnipro13.png', base_dir + 'dnipro14.png', base_dir + 'dnipro15.png', base_dir + 'dnipro16.png', base_dir + 'dnipro17.png', base_dir + 'dnipro18.png', base_dir + 'dnipro19.png', base_dir + 'dnipro20.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_donetsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'donetsk1.png', base_dir + 'donetsk2.png', base_dir + 'donetsk3.png', base_dir + 'donetsk4.png', base_dir + 'donetsk5.png', base_dir + 'donetsk6.png', base_dir + 'donetsk7.png', base_dir + 'donetsk8.png', base_dir + 'donetsk9.png', base_dir + 'donetsk10.png', base_dir + 'donetsk11.png', base_dir + 'donetsk12.png', base_dir + 'donetsk13.png', base_dir + 'donetsk14.png', base_dir + 'donetsk15.png', base_dir + 'donetsk16.png', base_dir + 'donetsk17.png', base_dir + 'donetsk18.png', base_dir + 'donetsk19.png', base_dir + 'donetsk20.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_zakarpattia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zakarpattya1.png', base_dir + 'zakarpattya2.png', base_dir + 'zakarpattya3.png', base_dir + 'zakarpattya4.png', base_dir + 'zakarpattya5.png', base_dir + 'zakarpattya6.png', base_dir + 'zakarpattya7.png', base_dir + 'zakarpattya8.png', base_dir + 'zakarpattya9.png', base_dir + 'zakarpattya10.png', base_dir + 'zakarpattya11.png', base_dir + 'zakarpattya12.png', base_dir + 'zakarpattya13.png', base_dir + 'zakarpattya14.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_zaporizhzhia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zaporizhya1.png', base_dir + 'zaporizhya2.png', base_dir + 'zaporizhya3.png', base_dir + 'zaporizhya4.png', base_dir + 'zaporizhya5.png', base_dir + 'zaporizhya6.png', base_dir + 'zaporizhya7.png', base_dir + 'zaporizhya8.png', base_dir + 'zaporizhya9.png', base_dir + 'zaporizhya10.png', base_dir + 'zaporizhya11.png', base_dir + 'zaporizhya12.png', base_dir + 'zaporizhya13.png', base_dir + 'zaporizhya14.png', base_dir + 'zaporizhya15.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_frankivsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ivano-frank1.png', base_dir + 'ivano-frank2.png', base_dir + 'ivano-frank3.png', base_dir + 'ivano-frank4.png', base_dir + 'ivano-frank5.png', base_dir + 'ivano-frank6.png', base_dir + 'ivano-frank7.png', base_dir + 'ivano-frank8.png', base_dir + 'ivano-frank9.png', base_dir + 'ivano-frank10.png', base_dir + 'ivano-frank11.png', base_dir + 'ivano-frank12.png', base_dir + 'ivano-frank13.png', base_dir + 'ivano-frank14.png', base_dir + 'ivano-frank15.png', base_dir + 'ivano-frank16.png', base_dir + 'ivano-frank17.png', base_dir + 'ivano-frank18.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kyiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kyivska1.png', base_dir + 'kyivska2.png', base_dir + 'kyivska3.png', base_dir + 'kyivska4.png', base_dir + 'kyivska5.png', base_dir + 'kyivska6.png', base_dir + 'kyivska7.png', base_dir + 'kyivska8.png', base_dir + 'kyivska9.png', base_dir + 'kyivska10.png', base_dir + 'kyivska11.png', base_dir + 'kyivska12.png', base_dir + 'kyivska13.png', base_dir + 'kyivska14.png', base_dir + 'kyivska15.png', base_dir + 'kyivska16.png', base_dir + 'kyivska17.png', base_dir + 'kyivska18.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kirovohrad');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kirovohrad1.png', base_dir + 'kirovohrad2.png', base_dir + 'kirovohrad3.png', base_dir + 'kirovohrad4.png', base_dir + 'kirovohrad5.png', base_dir + 'kirovohrad6.png', base_dir + 'kirovohrad7.png', base_dir + 'kirovohrad8.png', base_dir + 'kirovohrad9.png', base_dir + 'kirovohrad10.png', base_dir + 'kirovohrad11.png', base_dir + 'kirovohrad12.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_luhansk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'luhanska1.png', base_dir + 'luhanska2.png', base_dir + 'luhanska3.png', base_dir + 'luhanska4.png', base_dir + 'luhanska5.png', base_dir + 'luhanska6.png', base_dir + 'luhanska7.png', base_dir + 'luhanska8.png', base_dir + 'luhanska9.png', base_dir + 'luhanska10.png', base_dir + 'luhanska11.png', base_dir + 'luhanska12.png', base_dir + 'luhanska13.png', base_dir + 'luhanska14.png', base_dir + 'luhanska15.png', base_dir + 'luhanska16.png', base_dir + 'luhanska17.png', base_dir + 'luhanska18.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_lviv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'lvivska1.png', base_dir + 'lvivska2.png', base_dir + 'lvivska3.png', base_dir + 'lvivska4.png', base_dir + 'lvivska5.png', base_dir + 'lvivska6.png', base_dir + 'lvivska7.png', base_dir + 'lvivska8.png', base_dir + 'lvivska9.png', base_dir + 'lvivska10.png', base_dir + 'lvivska11.png', base_dir + 'lvivska12.png', base_dir + 'lvivska13.png', base_dir + 'lvivska14.png', base_dir + 'lvivska15.png', base_dir + 'lvivska16.png', base_dir + 'lvivska17.png', base_dir + 'lvivska18.png', base_dir + 'lvivska19.png', base_dir + 'lvivska20.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_mykolaiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'mykolaivska1.png', base_dir + 'mykolaivska2.png', base_dir + 'mykolaivska3.png', base_dir + 'mykolaivska4.png', base_dir + 'mykolaivska5.png', base_dir + 'mykolaivska6.png', base_dir + 'mykolaivska7.png', base_dir + 'mykolaivska8.png', base_dir + 'mykolaivska9.png', base_dir + 'mykolaivska10.png', base_dir + 'mykolaivska11.png', base_dir + 'mykolaivska12.png', base_dir + 'mykolaivska13.png', base_dir + 'mykolaivska14.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_odesa');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'odeska1.png', base_dir + 'odeska2.png', base_dir + 'odeska3.png', base_dir + 'odeska4.png', base_dir + 'odeska5.png', base_dir + 'odeska6.png', base_dir + 'odeska7.png', base_dir + 'odeska8.png', base_dir + 'odeska9.png', base_dir + 'odeska10.png', base_dir + 'odeska11.png', base_dir + 'odeska12.png', base_dir + 'odeska13.png', base_dir + 'odeska14.png', base_dir + 'odeska15.png', base_dir + 'odeska16.png', base_dir + 'odeska17.png', base_dir + 'odeska18.png', base_dir + 'odeska19.png', base_dir + 'odeska20.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_poltava');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'poltavska1.png', base_dir + 'poltavska2.png', base_dir + 'poltavska3.png', base_dir + 'poltavska4.png', base_dir + 'poltavska5.png', base_dir + 'poltavska6.png', base_dir + 'poltavska7.png', base_dir + 'poltavska8.png', base_dir + 'poltavska9.png', base_dir + 'poltavska10.png', base_dir + 'poltavska11.png', base_dir + 'poltavska12.png', base_dir + 'poltavska13.png', base_dir + 'poltavska14.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_rivne');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'rivno1.png', base_dir + 'rivno2.png', base_dir + 'rivno3.png', base_dir + 'rivno4.png', base_dir + 'rivno5.png', base_dir + 'rivno6.png', base_dir + 'rivno7.png', base_dir + 'rivno8.png', base_dir + 'rivno9.png', base_dir + 'rivno10.png', base_dir + 'rivno11.png', base_dir + 'rivno12.png', base_dir + 'rivno13.png', base_dir + 'rivno14.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_sumy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'sumy1.png', base_dir + 'sumy2.png', base_dir + 'sumy3.png', base_dir + 'sumy4.png', base_dir + 'sumy5.png', base_dir + 'sumy6.png', base_dir + 'sumy7.png', base_dir + 'sumy8.png', base_dir + 'sumy9.png', base_dir + 'sumy10.png', base_dir + 'sumy11.png', base_dir + 'sumy12.png', base_dir + 'sumy13.png', base_dir + 'sumy14.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_ternopil');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ternopil1.png', base_dir + 'ternopil2.png', base_dir + 'ternopil3.png', base_dir + 'ternopil4.png', base_dir + 'ternopil5.png', base_dir + 'ternopil6.png', base_dir + 'ternopil7.png', base_dir + 'ternopil8.png', base_dir + 'ternopil9.png', base_dir + 'ternopil10.png', base_dir + 'ternopil11.png', base_dir + 'ternopil12.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kharkiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kharkiv1.png', base_dir + 'kharkiv2.png', base_dir + 'kharkiv3.png', base_dir + 'kharkiv4.png', base_dir + 'kharkiv5.png', base_dir + 'kharkiv6.png', base_dir + 'kharkiv7.png', base_dir + 'kharkiv8.png', base_dir + 'kharkiv9.png', base_dir + 'kharkiv10.png', base_dir + 'kharkiv11.png', base_dir + 'kharkiv12.png', base_dir + 'kharkiv13.png', base_dir + 'kharkiv14.png', base_dir + 'kharkiv15.png', base_dir + 'kharkiv16.png', base_dir + 'kharkiv17.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kherson');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kherson1.png', base_dir + 'kherson2.png', base_dir + 'kherson3.png', base_dir + 'kherson4.png', base_dir + 'kherson5.png', base_dir + 'kherson6.png', base_dir + 'kherson7.png', base_dir + 'kherson8.png', base_dir + 'kherson9.png', base_dir + 'kherson10.png', base_dir + 'kherson11.png', base_dir + 'kherson12.png', base_dir + 'kherson13.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_khmelnytsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'khmelnytsk1.png', base_dir + 'khmelnytsk2.png', base_dir + 'khmelnytsk3.png', base_dir + 'khmelnytsk4.png', base_dir + 'khmelnytsk5.png', base_dir + 'khmelnytsk6.png', base_dir + 'khmelnytsk7.png', base_dir + 'khmelnytsk8.png', base_dir + 'khmelnytsk9.png', base_dir + 'khmelnytsk10.png', base_dir + 'khmelnytsk11.png', base_dir + 'khmelnytsk12.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_cherkasy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'cherkasy1.png', base_dir + 'cherkasy2.png', base_dir + 'cherkasy3.png', base_dir + 'cherkasy4.png', base_dir + 'cherkasy5.png', base_dir + 'cherkasy6.png', base_dir + 'cherkasy7.png', base_dir + 'cherkasy8.png', base_dir + 'cherkasy9.png', base_dir + 'cherkasy10.png', base_dir + 'cherkasy11.png', base_dir + 'cherkasy12.png', base_dir + 'cherkasy13.png', base_dir + 'cherkasy14.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernihiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'chernihiv1.png', base_dir + 'chernihiv2.png', base_dir + 'chernihiv3.png', base_dir + 'chernihiv4.png', base_dir + 'chernihiv5.png', base_dir + 'chernihiv6.png', base_dir + 'chernihiv7.png', base_dir + 'chernihiv8.png', base_dir + 'chernihiv9.png', base_dir + 'chernihiv10.png', base_dir + 'chernihiv11.png', base_dir + 'chernihiv12.png', base_dir + 'chernihiv13.png', base_dir + 'chernihiv14.png', base_dir + 'chernihiv15.png', base_dir + 'chernihiv16.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernivtsi');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'chernivtsi1.png', base_dir + 'chernivtsi2.png', base_dir + 'chernivtsi3.png', base_dir + 'chernivtsi4.png', base_dir + 'chernivtsi5.png', base_dir + 'chernivtsi6.png', base_dir + 'chernivtsi7.png', base_dir + 'chernivtsi8.png', base_dir + 'chernivtsi9.png', base_dir + 'chernivtsi10.png', base_dir + 'chernivtsi11.png')
        $('#exampleModalCenter').modal('show');
    });
});



//  http://{s}.tile.osm.org/{z}/{x}/{y}.png