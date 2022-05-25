import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Sphere from './components/sphere'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="App">
      <h3>3D Simulation</h3>
      <Canvas style={{ position: 'fixed', top: 0, left: 0 }}>
        <OrbitControls enableZoom={false} color="0xffffff" />
        <ambientLight intensity={1} color="0xffffff" />
        <directionalLight position={[-2, 5, 2]} intensity={2} color="orange" />
        <Sphere />
      </Canvas>
    </div>
  )
}

export default App
