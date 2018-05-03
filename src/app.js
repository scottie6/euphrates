import * as Babylon from 'babylonjs' 

let canvas = document.getElementById('canvas')
let engine = new Babylon.Engine(canvas, true)

let createScene = () => {
  // Create scene, camera, light & meshes
  let scene = new Babylon.Scene(engine)
  
  let camera = new Babylon.FreeCamera('camera1', new BABYLON.Vector3(0,5,-10), scene)
  camera.setTarget(Babylon.Vector3.Zero())
  camera.attachControl(canvas, false)
  
  let light = new Babylon.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene)
  
  let sphere = Babylon.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE)
  sphere.position.y = 1
  
  let ground = Babylon.Mesh.CreateGround('ground1', 6,6,2, scene, false)
  
  // Enable WASD keys
  camera.keysUp.push(87)
  camera.keysDown.push(83)
  camera.keysLeft.push(65)
  camera.keysRight.push(68)
  
  /*
   * enable collision in progress
   *
  scene.enablePhysics()
  scene.collisionsEnabled = true
  camera.checkCollisions = true
  camera.ellipsoid = new Babylon.Vector3(1,1.5,1)
  camera.attachControl(canvas, true)
  */

  return scene
}

let scene = createScene()

engine.runRenderLoop( () => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
