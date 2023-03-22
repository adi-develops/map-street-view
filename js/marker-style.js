import { Circle, Fill, Stroke, Style } from "ol/style.js";

export let defaultStyle = new Style({
  image: new Circle({
    radius: 4,
    fill: new Fill({
      color: "orange",
    }),
    stroke: new Stroke({
      color: "white",
      width: 1,
    }),
  }),
});

export let selectedStyle = new Style({
  image: new Circle({
    radius: 5,
    fill: new Fill({
      color: "blue",
    }),
    stroke: new Stroke({
      color: "white",
      width: 2,
    }),
  }),
});
