import * as React from 'react';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function Hero(): JSX.Element {
  return (
    <Canvas style={{ height: '50vh' }}>
      <ambientLight intensity={0.9} color="white" />
      <React.Suspense fallback={null}>
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            metalness={0.1}
            roughness={0.0}
            envMapIntensity={0.4}
            color="white"
          />
        </mesh>
      </React.Suspense>
      <Environment files="envmap.hdr" />
    </Canvas>
  )
}

export default Hero;
