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

    //sphere1 for particle scatter effects
    var distance = 85;
    var geometry = new THREE.Geometry();
    for (var i = 0; i < 1000; i++) {
      var vertex = new THREE.Vector3();
      var theta = THREE.Math.randFloatSpread(360);
      var phi = THREE.Math.randFloatSpread(360);
      vertex.x = distance * Math.sin(theta) * Math.cos(phi);
      vertex.y = distance * Math.sin(theta) * Math.sin(phi);
      vertex.z = distance * Math.cos(theta);
      geometry.vertices.push(vertex);
    }
    var s_particles = new THREE.PointCloud(
      geometry,
      new THREE.PointCloudMaterial({
        color: 0x44ccb2,
        size: 0.5
      })
    );
    s_particles.boundingSphere = 50;
    scene.add(s_particles);

    //sphere2 for particle scatter effects
    var distance = 90;
    var geometry = new THREE.Geometry();
    for (var i = 0; i < 500; i++) {
      var vertex = new THREE.Vector3();
      var theta = THREE.Math.randFloatSpread(360);
      var phi = THREE.Math.randFloatSpread(360);
      vertex.x = distance * Math.sin(theta) * Math.cos(phi);
      vertex.y = distance * Math.sin(theta) * Math.sin(phi);
      vertex.z = distance * Math.cos(theta);
      geometry.vertices.push(vertex);
    }
    var s2_particles = new THREE.PointCloud(
      geometry,
      new THREE.PointCloudMaterial({
        color: 0x44ccb2,
        size: 0.5
      })
    );
    s2_particles.boundingSphere = 50;
    scene.add(s2_particles);

    //sphere3 for particle scatter effects
    var distance = 92;
    var geometry = new THREE.Geometry();
    for (var i = 0; i < 200; i++) {
      var vertex = new THREE.Vector3();
      var theta = THREE.Math.randFloatSpread(360);
      var phi = THREE.Math.randFloatSpread(360);
      vertex.x = distance * Math.sin(theta) * Math.cos(phi);
      vertex.y = distance * Math.sin(theta) * Math.sin(phi);
      vertex.z = distance * Math.cos(theta);
      geometry.vertices.push(vertex);
    }
    var s3_particles = new THREE.PointCloud(
      geometry,
      new THREE.PointCloudMaterial({
        color: 0x44ccb2,
        size: 0.5
      })
    );
    s3_particles.boundingSphere = 50;
    scene.add(s3_particles);

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

    camera.position.z = 200;

    //function to animate 3d objects
    var animate = function() {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.001;
      particles.rotation.z += 0.0003;
      
      s_particles.rotation.x += 0.0001;
      s_particles.rotation.y += 0.0007;
      s_particles.rotation.z += 0.0001;
      
      s2_particles.rotation.x += 0.00008;
      s2_particles.rotation.y += 0.0005;
      s2_particles.rotation.z += 0.00008;
      
      s3_particles.rotation.x += 0.00005;
      s3_particles.rotation.y += 0.0003;
      s3_particles.rotation.z += 0.00005;

      bigParticles.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div className="home-background"
        onScroll={this.handleScroll.bind(this)}
        ref={ref => (this.landing = ref)}></div>
    );
  }
}

export default Home;