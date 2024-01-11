// const geolib = require('geolib');

var targetElHome  = document.getElementById("HomeModal")
var targetElWarning  = document.getElementById("warningModal")
var targetElDanger  = document.getElementById("dangerModal")
let targetElLegend  = document.getElementById("legendModal")
let targetElTrackShip  = document.getElementById("trackShipModal")


// options with default values
const options = {
  placement: 'center',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
}

const modalHome = new Modal(targetElHome,options )
const modalwarning = new Modal(targetElWarning,options )
const modaldanger = new Modal(targetElDanger,options )
const modallegend = new Modal(targetElLegend,options )
const modaltrackship = new Modal(targetElTrackShip,options )


let map = L.map('map', {
  maxZoom: 14,
  minZoom: 9,
  zoomControl: false,
  dragging: true,
  scrollWheelZoom: "center",
}).setView([-6.604953643975304, 112.75182319267172], 12)

var open_street_map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

function openHomeModal() {
  modalHome.show();
}
function closeHomeModal() {
 
  modalHome.hide();
}
function openAlertModal() {
  modalwarning.show();
}
function closeWarningModal() {
 
  modalwarning.hide();
}
function openDangerModal() {
  modaldanger.show();
}

function closeDangerModal() {
  modaldanger.hide();
}
function openLegendModal() {
  modallegend.show()
}
function closeLegendModal() {
  modallegend.hide()
}

function openTrackShipModal() {
  modaltrackship.show()
}
function closeTrackShipModal() {
  modaltrackship.hide()
}

function reloadAWSPage() {
  location.reload()
}


function openCursorInfoModal() {
  $("#toast-default2").show();
}


function closeCursorInfoModal() {
  $("#toast-default2").hide();
}
function openlocation(lat,long) {
  map.setView([lat, long], 13);
}


map.addEventListener('mousemove', (event) => {
  let lat = Math.round(event.latlng.lat * 100000) / 100000;
  let lng = Math.round(event.latlng.lng * 100000) / 100000;

  $('#cursorLat').html("DMS : "+geolib.decimalToSexagesimal(lat)+ " | Decimal : "+lat);
  $('#cursorLon').html("DMS : "+geolib.decimalToSexagesimal(lng) + " | Decimal : "+lng);
  
});