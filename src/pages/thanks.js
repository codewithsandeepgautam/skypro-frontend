import React, { useEffect } from 'react'
import Button from '../components/shared/button'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/shared/seo'

const Thanks = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });
    return (
        <>
            <SEO
                title='Thank You'
                noIndex
            />
            <section className='md:py-[120px] py-[70px] '>
                <div className='container'>
                    <div className="text-center">
                        <h1 className='md:text-[120px] sm:text-[80px] text-[50px] animate-bounce duration-1000 hover:animate-none'>Thank You</h1>
                        <Button url='/' link='Go to Home' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thanks
