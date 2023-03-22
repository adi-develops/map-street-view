// Fucntion to add the panorama image to the viewer

function showPanorama(viewer, fileName) {
  let panorama = new PANOLENS.ImagePanorama("../images/" + fileName);
  viewer.dispose();
  viewer.add(panorama);
}

export default showPanorama;
