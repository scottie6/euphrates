import * as Babylon from 'babylonjs' 

let canvas = document.getElementById('canvas')
let engine = new Babylon.Engine(canvas, true)

let createScene = () => {
  let scene = new Babylon.Scene(engine)
  let camera = new Babylon.FreeCamera('camera1', new BABYLON.Vector3(0,5,-10), scene)
  camera.setTarget(Babylon.Vector3.Zero())
  camera.attachControl(canvas, false)
  let light = new Babylon.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene)
  let sphere = Babylon.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE)
  sphere.position.y = 1
  let ground = Babylon.Mesh.CreateGround('ground1', 6,6,2, scene, false)

  return scene
}

let scene = createScene()

engine.runRenderLoop( () => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
    
    
