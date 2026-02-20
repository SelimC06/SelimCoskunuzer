import React from 'react';
{/*rgba(241, 240, 234, 1)*/}
const ParallaxBackground = () => {
    return (
        <section className="absolute inset-0 -z-10" style={{ backgroundColor: "rgba(232, 229, 218, 1)" }}>
            <div className='relative h-screen overflow-y-hidden'>
                <div className='absolute inset-0 w-full h-screen -z-50'></div>
                {/* style={{
                //     backgroundColor: "rgba(241, 240, 234, 0.3)",
                //     backgroundImage: "url(/assets/background3.jpg)",
                //     backgroundPosition: "bottom",
                //     backgroundSize: "cover",
                // }}/>}
                {/* <div className='absolute inset-0 -z-40'
                style={{
                    backgroundImage: "url(/assets/2817.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>*/}
            </div>
        </section>
    )
}
{/*
    const ParallaxBackground = () => {
    return (
        <section className="absolute inset-0" bg-white/30>
            <div className='relative h-screen overflow-y-hidden'>
                <div className='absolute inset-0 w-full h-screen -z-50'></div>
                    style={{
                //     backgroundColor: "rgba(241, 240, 234, 0.3)",
                //     backgroundImage: "url(/assets/background3.jpg)",
                //     backgroundPosition: "bottom",
                //     backgroundSize: "cover",
                }}/>}
                <div className='absolute inset-0 -z-40'
                style={{
                    backgroundImage: "url(/assets/2817.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
            </div>
        </section>
    )
}
*/}

export default ParallaxBackground;