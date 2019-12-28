import React, { Component } from "react";
import "./HomeComponent.css";
import * as THREE from "three";
import cloud from '../../3dAssets/cloud.png'

class Home extends Component {
  handleScroll() {
    let body = document.querySelector("body");
    body.style.color = "black";
  }

  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // let ambient = new THREE.AmbientLight(0x555555);
    // scene.add(ambient);


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.landing.appendChild(renderer.domElement);
    
    window.addEventListener('resize', function(){
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width,height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();      
    })
    //fog
    // scene.fog = new THREE.FogExp2(0x03544e, 0.0001);
    // renderer.setClearColor(scene.fog.color);

    //small sphere
    var distance = 80;
    var geometry = new THREE.Geometry();
    for (var i = 0; i < 4000; i++) {
      var vertex = new THREE.Vector3();
      var theta = THREE.Math.randFloatSpread(360);
      var phi = THREE.Math.randFloatSpread(360);
      vertex.x = distance * Math.sin(theta) * Math.cos(phi);
      vertex.y = distance * Math.sin(theta) * Math.sin(phi);
      vertex.z = distance * Math.cos(theta);
      geometry.vertices.push(vertex);
    }
    var particles = new THREE.PointCloud(
      geometry,
      new THREE.PointCloudMaterial({
        color: 0x44ccb2,
        size: 0.5
      })
    );
    particles.boundingSphere = 50;
    scene.add(particles);

    //big sphere
    var bigDistance = 200;
    var bigGeometry = new THREE.Geometry();
    for (var i = 0; i < 300; i++) {
      var bigVertex = new THREE.Vector3();
      var bigTheta = THREE.Math.randFloatSpread(360);
      var bigPhi = THREE.Math.randFloatSpread(360);
      bigVertex.x = bigDistance * Math.sin(bigTheta) * Math.cos(bigPhi);
      bigVertex.y = bigDistance * Math.sin(bigTheta) * Math.sin(bigPhi);
      bigVertex.z = bigDistance * Math.cos(bigTheta);
      bigGeometry.vertices.push(bigVertex);
    }
    var bigParticles = new THREE.PointCloud(
      bigGeometry,
      new THREE.PointCloudMaterial({
        color: 0xffffff
      })
    );
    bigParticles.boundingSphere = 1000;
    scene.add(bigParticles);

    //clouds
    // let cloudParticles = [];
    // let loader = new THREE.TextureLoader();
    // loader.load(cloud, function(texture){
    //   let cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    //   let cloudMaterial = new THREE.MeshLambertMaterial({
    //     map: texture,
    //     transparent: true
    //   });
    //   for(let p = 0; p < 100 ; p++){
    //     let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    //     cloud.position.set(
    //       Math.random() * 800 - 400,
    //       500,
    //       Math.random() * 500 - 500
    //     );
    //     cloud.rotation.x = 1.16;
    //     cloud.rotation.y = -0.12;
    //     cloud.rotation.x = Math.random() * 2 * Math.PI;
    //     cloud.material.opacity = 0.55;
    //     cloudParticles.push(cloud);
    //     scene.add(cloud);
    //   }
    // })

    camera.position.z = 200;
    var animate = function() {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.001;
      particles.rotation.z += 0.0003;
      bigParticles.rotation.y += 0.0001;
      // cloudParticles.forEach(p => {
      //   p.rotation.z -= 0.001
      // })
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div
        className="home-background"
        onScroll={this.handleScroll.bind(this)}
        ref={ref => (this.landing = ref)}
      ></div>
    );
  }
}

export default Home;
