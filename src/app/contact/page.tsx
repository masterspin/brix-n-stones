import React from 'react';
import Header from '../../components/header'
import Form from '../../components/form'

type ContactProps = {
    
};

const Contact:React.FC<ContactProps> = () => {
    
    return(
        <div className='bg-gray-background'>
            <Header/>
            <Form/>
        </div>
    )
}
export default Contact;