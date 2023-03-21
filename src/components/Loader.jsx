import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        fontSize: 30,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 100,
        marginRight: 100,
      }}>
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default Loader
