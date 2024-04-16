const panorama = new PANOLENS.ImagePanorama( 'images/panel1.jpeg' );
const panorama2 = new PANOLENS.ImagePanorama('images/pano5.jpg');
const panorama6 = new PANOLENS.ImagePanorama('images/pano6.jpg');

let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    new THREE.Vector3(9136.06, 16.30, -4290.14),
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);
panorama2.link( panorama6, infospotPositions[2]);
panorama6.link( panorama2, infospotPositions[1]);

viewer.add( panorama,panorama2, panorama6 );

function changePanorama(value) {
  switch (value) {
      case "1":
          viewer.setPanorama(panorama);
          break;
      case "2":
          viewer.setPanorama(panorama2);
          break;
      case "3":
          viewer.setPanorama(panorama6);
          break;
      default:
          break;
  }
}

