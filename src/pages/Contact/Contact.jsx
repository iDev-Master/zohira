import React from "react";

const Contact = () => {
  return (
    <main>
      <section className='m-auto flex pt-[200px] justify-center gap-[72px]'>
        <div className='w-[40%] mt-[100px]' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 className='text-[70px] font-bold'>Get in touch:</h1>
          <h2 className='text-[30px] font-semibold'> Contact Details</h2>
          <h1 className="mt-[16px] font-bold text-[16px]">Phone: <span className="font-light text-gray-600">+992 915 25 6666</span> </h1>
          <h1 className="mt-[8px] font-bold text-[16px]">Phone: <span className="font-light text-gray-600">+992 0 34 34 6666</span></h1>
          <h1 className="mt-[8px] font-bold text-[16px]">Address: <span className="font-light text-gray-600">Nusratullo Makhsum st, 74/3</span><br/>
            Dushanbe 734000</h1>
          <h1 className=" font-bold text-[16px] mt-[25px]">Emaiil: <span className="font-light text-gray-600">korvonihunar@gmail.com</span></h1>
        </div>
        <div className='flex flex-col gap-11'>
          <img src="src/img/location.jpg" alt="" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" />
        </div>
      </section>


    </main>
  );
}

export default Contact;
