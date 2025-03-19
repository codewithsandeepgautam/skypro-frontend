import React, { useEffect } from 'react'
import Button from '../components/shared/button'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/shared/seo'

const NotFoundPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    })
    return (
        <>
            <SEO title="404" />
            <section className='md:py-[120px] py-[70px] text-white'>
                <div className='container'>
                    <div className="text-center">
                        <h1 className="md:text-[200px] text-[100px] md:leading-[200px] leading-[100px] pt-[40px] ">4<span className="animate-bounce inline-block text-[#fd5901]">0</span>4</h1>
                        <h3 className="mb-[20px]">Oops! Something is wrong.</h3>
                        <Button url='/' link='Go to Home' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFoundPage