import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return <Html center className='text-xl text-[rgba(71,68,72,1)] font-normal text-center'>{(Math.round(progress))}% loaded</Html>;
};

export default Loader;