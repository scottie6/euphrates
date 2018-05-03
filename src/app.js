import * as Babylon from 'babylonjs' 

let canvas = document.getElementById('canvas')
let engine = new Babylon.Engine(canvas, true)

let createScene = () => {
  // Scene
  let scene = new Babylon.Scene(engine)
  scene.gravity = new Babylon.Vector3(0, -9.81, 0)
  scene.enablePhysics()
  scene.collisionsEnabled = true
  // Camera
  let camera = new Babylon.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
  camera.setTarget(Babylon.Vector3.Zero())
  camera.attachControl(canvas, false)
  camera.checkCollisions = true
  camera.ellipsoid = new Babylon.Vector3(1, 1.5, 1)
  camera.attachControl(canvas, true)
  camera.keysUp.push(87)
  camera.keysDown.push(83)
  camera.keysLeft.push(65)
  camera.keysRight.push(68)
  
  // Meshes
  let light = new Babylon.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
  
  let sphere = Babylon.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE)
  sphere.position.y = 1
  sphere.checkCollisions = true 
  
  let ground = Babylon.Mesh.CreateGround('ground1', 6, 6, 2, scene, false)
  ground.checkCollisions = true

  return scene
}

let scene = createScene()

engine.runRenderLoop( () => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
