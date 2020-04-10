import React, { useRef, useEffect } from "react"
import { Scene, PerspectiveCamera, DirectionalLight, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styled from "styled-components"

export default function ModelArea() {
        
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current

        const scene = new Scene()
        const fov = 25
        const aspect = canvas.clientWidth / canvas.clientHeight
        const near = 0.1
        const far = 100
        const camera = new PerspectiveCamera(fov, aspect, near, far)
        camera.position.set(19, 10, 19)
        const renderer = new WebGLRenderer({canvas: canvas, alpha: true})
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

        const color = 0xFFFFFF
        const intensity = 1
        const light = new DirectionalLight(color, intensity)
        light.position.set(10, 30, 40)
        camera.add(light)
        scene.add(camera)
        
        let mesh

        const loader = new GLTFLoader()
        loader.load(
            '../models/velo.gltf',

            function(gltf) {
                mesh = gltf.scene
                scene.add( mesh )
                mesh.position.y = - 1.2
            }
        )

        const controls = new OrbitControls(camera, canvas)
        controls.update()
        controls.enableZoom = false

        const animate = () => {
            requestAnimationFrame(animate)
            if (mesh) {
                mesh.rotation.y += 0.002
            }
            renderer.render(scene, camera)
        }

        animate()

    }, [])

    return (
        <Canvas ref={canvasRef} />
    )
}

const Canvas = styled.canvas`
    display: block;
    height: 100%;
    width: 100%;
    transform: translate(-80px, 80px);
`