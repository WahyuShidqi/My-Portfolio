import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass] = useState('text-animate')

    return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', " ", 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>I'm a very ambitious web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p>I have skill to work as front-end developer as well as back-end developer</p>
        </div>
    </div>
  )
}

export default About;