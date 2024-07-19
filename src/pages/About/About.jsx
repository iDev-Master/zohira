import Aos from 'aos';
import 'animate.css'
import React, { useEffect } from 'react'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const About = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <main>
      <section>
        <div className="bg-[url('src/img/Zoi.avif')] bg-cover bg-no-repeat w-[1296] m-auto h-[800px]" data-aos="fade-up"
          data-aos-duration="3000">
          <div className='bg-[#00000083] h-[800px]'>
            <h1 className=' text-center text-[60px] font-medium text-white pt-[300px] tracking-widest' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
              CARAVAN OF ARTS<br />
              BETTER WORLD
            </h1>
          </div>
        </div>
      </section>

      <section className='mt-[150px] mb-20'>
        <div className='flex justify-around'>
          <div>
            <h3 className='text-[20px] font-sans font-bold mt-[150px] text-black w-[500px]' data-aos="fade-right">
              Caravan of Art LLC is a distinguished educational and consulting firm
              committed to delivering unparaleled services in the domains of medical
              education, foreign language instruction, information technology training, and
              business consulting. Our mission is to empower individuals and organizations
              with the knowledge and skils necessary to excel in today's dynamic world.
            </h3>
          </div>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img className='w-[450px] rounded-2xl shadow-slate-600 shadow-xl' src="src/img/girl(2).jpg" alt="" />
          </div>
        </div>
        <div className=''>
          <img className='shadow-slate-600 shadow-lg w-[200px] rounded-2xl flex absolute left-[750px] top-[1200px]' src="src/img/photo.avif" alt="" />
        </div>
      </section>

      <section className='mt-[250px]'>
        <div>
          <h1 className='text-center text-black font-semibold text-[70px] font-sans mt-[200px]' data-aos="flip-left">Why Choose Us !? </h1>
        </div>
        <div className='mt-[80px] flex justify-center' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <img src="src/img/Savol.jpg" alt="" />
        </div>

        <div className='flex justify-around mt-[200px] mb-[150px]'>
          <div className='mt-[170px] w-[40%]' data-aos="zoom-in-left">
            <h2 className='text-[18px] font-sans'><span className='font-bold text-[20px]'>• Expertise : </span> Our team comprises seasoned professionals
              with a passion for teaching and consulting.</h2>

            <h2 className='text-[18px] font-sans'><span className='font-bold text-[20px]'>• Customized Solutions : </span> We tailor our services to meet
              the unique needs of each client.</h2>

            <h2 className='text-[18px] font-sans'><span className='font-bold text-[20px]'>• Comprehensive Support : </span>From initial consultation to
              ongoing support, we are dedicated to ensuring client
              success.</h2>

            <h2 className='text-[18px] font-sans'><span className='font-bold text-[20px]'>• Innovative Approach : </span>We leverage the latest teaching
              methods and technological advancements to deliver
              superior education and consulting services.</h2>
          </div>
          <div className='mt-[100px] flex justify-center' data-aos="zoom-out">
            <img className='rounded-2xl shadow-slate-900 shadow-2xl' src="src/img/lamp.jpg" alt="" />
          </div>
        </div>

      </section>

      


      
      <section className='m-auto flex mt-[250px] justify-center gap-[72px]'>
        <div className='w-[40%] mt-[80px]' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 className='text-[50px] font-bold'>KARAVAN OF ARTS</h1>
          <h2 className='ml-[120px] text-[30px] font-semibold'> BETTER WORLD</h2>
          <p className='text-[21px] mt-[8px] font-sans font-medium'>•  Founded in 2021, Caravan of Art LLC started
            as a small consultancy firm and has since
            expanded into a comprehensive service
            provider. Over the years, we have achieved
            significant milestones, including four years
            of excellent teaching experience, with more
            than 1,000 certified graduates and 1,000
            successful people in the market taught. Our
            commitment to quality and innovation has
            built a strong reputation in the industry.  </p>
        </div>
        <div className='flex flex-col gap-11'>
          <img src="src/img/photo_16.jpg" alt="" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" />
        </div>
      </section>












      <section className='mt-[300px]'>
        <div className='pb-[200px]'>
          <div>
            <h1 className='text-center font-sans text-[40px] font-bold' data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0" >Academy Programs</h1>
          </div>
          <div>
            <div>
              <h1 className='mt-[30px] w-[800px] m-auto text-center text-[18px]' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"> Our academy programs offer educational and training
                sessions across various fields of study. We provide
                courses in professional development, technical skills,
                leadership training, and personal enrichment,
                designed to foster growth and learning. We have
                academies in <span>Vahdat, Dushanbe, Hisor, Shahrinav,
                  Khatlon,</span> and <span>Khujand</span>, offering localized and
                accessible education to a wide range of students.</h1>
            </div>
            <div className='mt-[50px]'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide> <img src="src/images/one.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/two.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/three.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/four.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/five.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/six.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/seven.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/eight.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/nine.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/ten.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/eleven.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="src/images/twelve.jpg" alt="" /> </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>



      <section className='mt-[20px]'>
        <div className="box">
          <div className="OurVision">
            <h1 className='OurVision-h1  mt-[10px]'>Our Vision</h1>
            <p className='OurVision-p  mt-[30px]'> To be a premier provider of education
              and consulting services, renowned for
              our commitment to excellence,
              innovation, and the comprehensive
              development of individuals and
              organizations.</p>
          </div>
          <div className="OurMission">
            <h1 className='OurVision-h1'>Our Mission</h1>
            <p className='OurVision-p'> To deliver exceptional education that equips
              individuals with the competencies required for
              professional success.
              To offer expert consulting services that drive
              organizational growth and operational efficiency.
              To promote a culture of continuous learning and
              improvement through innovative and engaging
              educational experiences.</p>
          </div>
        </div>
      </section>




      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </main>
  );
}

export default About