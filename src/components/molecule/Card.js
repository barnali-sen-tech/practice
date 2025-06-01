import React from 'react';
import '../molecule/Card.css'
import Heading from '../atomic/Heading';
import ButtonAtomic from '../atomic/Button';

const Card =()=>{

    return(<>
    <div className='container-fluid'>

        <div className='container'>
            {/* <p>I am a Card.</p> */}
            <Heading title="PSD" subtitle="my card" size="large"></Heading>
            <ButtonAtomic type="SUCCESS" size="medium" roundedCorner={true}>button atomic</ButtonAtomic>
        </div>
    </div>
    
    </>)
}

export default Card;