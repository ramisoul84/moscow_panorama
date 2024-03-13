function viewPanorama() {
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "./assets/pic.jpg",
    title: "Литовский Бульвар 44",
    autoLoad: true,
    showZoomCtrl: true,
    autoRotate: 2,
    pitch: 8,
    yaw: 120,
    hfov: 250,
  });
  console.log("started");
}
viewPanorama();
