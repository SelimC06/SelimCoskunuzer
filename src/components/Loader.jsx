import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return <Html center className='font-mono text-sm tracking-[0.2em] uppercase text-maroon text-center'>{(Math.round(progress))}% loaded</Html>;
};

export default Loader;