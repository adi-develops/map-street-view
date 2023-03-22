import "../style.css";
import { Feature, Map, View } from "ol";
import OSM from "ol/source/OSM";
import { Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Point } from "ol/geom";
import Select from "ol/interaction/Select.js";
import { selectedStyle, defaultStyle } from "./marker-style";

import coordinates from "../coordinates";
import showPanorama from "./panorama";

// Panorama Viewer on Right Side

let imageContainer = document.getElementById("pano-image");

let viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: false,
});

// Map on Left Side

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    // center: [1218984.9347529362, 6621066.618837557],
    center: coordinates[0].longitude_latitude,
    zoom: 18,
  }),
});

let vectorSource = new VectorSource();
let vectorLayer = new VectorLayer({
  source: vectorSource,
});
map.addLayer(vectorLayer);

const markerArray = new Array();

for (let i = 0; i < coordinates.length; i++) {
  markerArray.push(
    new Feature({
      geometry: new Point(coordinates[i].longitude_latitude),
    })
  );
}

for (let i = 0; i < coordinates.length; i++) {
  markerArray[i].setStyle(defaultStyle);
}

vectorSource.addFeatures(markerArray);

let select = new Select({
  layers: [vectorLayer],
});
map.addInteraction(select);

select.on("select", function (event) {
  // Reset style of previously selected feature
  let deselectedFeature = event.deselected[0];
  if (deselectedFeature) {
    deselectedFeature.setStyle(defaultStyle);
  }

  // Set style of newly selected feature and find the coordinates of the selected point
  let selectedFeature = event.selected[0];

  if (selectedFeature) {
    selectedFeature.setStyle(selectedStyle);
    let clickedLongitude = event.selected[0].getGeometry().flatCoordinates[0];

    let foundCoordinate = coordinates.find(
      (item) => item.longitude_latitude[0] == clickedLongitude
    );
    console.log(foundCoordinate);

    fetch("../images/" + foundCoordinate.file_name)
      .then((response) => {
        if (response.ok) {
          showPanorama(viewer, foundCoordinate.file_name);
        } else {
          viewer.dispose();
          alert("Image not found!");
        }
      })
      .catch((error) => console.error(error));
  }
});
