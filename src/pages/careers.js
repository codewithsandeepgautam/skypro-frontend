import React from 'react';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import SEO from '../components/shared/seo';
import Button from '../components/shared/button';
const Careers = () => {
  return (
    <>
      <SEO
        title=""
        description=""
        keywords=""
      />
      <InnerPageBanner title="Careers" innerPageBanner={ImageIcons.aboutBg} />
      <section className='relative '>
        <div className='container '>
          <div className='grid md:grid-cols-2 lg:gap-[50px] gap-[40px] items-center'>
            <div className='w-full md:h-[450px] sm:mh-[350px] min-h-auto'>
              <img className='object-cover object-top h-full w-full rounded-[2px]' src={ImageIcons.hiring} alt='job Opening' />
            </div>
            <div className='md:py-[25px]'>
              <h2 className='font-bold'>We are<span className='text-[#fd5901]'> Hiring!</span></h2>
              <p>We are on the hunt for the next generation of innovators with new ideas and visions to make this world a better place for everyone. If you’re one of those who knows how to carve new paths in a crowded territory, our company would love to talk to you.</p>
              <p>So, what are you waiting for? </p>
              <p className='mb-0'> Grab the opportunity to become a part of our organization. We want to hear from your side.</p>
              <Button link='Apply Now' url='' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#f5f5f5]'>
        <div className='container'>
          <div className='text-center'>
            <h2 className=' md:text-[50px] text-[40px] mb-[10px]'>Now Is <span className='font-normal'>The Time To</span> Craft Brilliance <span className='font-normal'> Together</span></h2>
            <h3 className=' font-normal mb-0'>If you Are Passionate About Your Work, then We Are Here to Give Your Career a New Height!</h3>
            <h3 className=' mb-0'>Find your Dream Job at Skypro.</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
