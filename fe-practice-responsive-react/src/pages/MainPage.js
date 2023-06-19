import React from 'react';
import '../styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

export const MainPage = () => {
  return (
    <div className='flex justify-center items-start bg-red-200 w-full min-h-[2000px]'>
      <div className='w-full h-[754px] topbgimage'>
        <div id='navbar' className='flex h-[80px] justify-around items-center'>
          <div className='w-[30%] sm:w-[15%'><button className='hidden sm:block sm:ml-[20px]'>
            <FontAwesomeIcon icon={faListUl} size='2x' /></button>
          </div>
          <div className='w-[100%] flex'>
            <ul className='flex justify-evenly w-[60%] ml-[15%] lg:w-[100%] lg:ml-[0] '>
              <li className='flex justify-center items-center sm:hidden'><a href='#'>HOME</a></li>
              <li className='flex justify-center items-center sm:hidden'><a href='#'>ABOUT US</a></li>
              <li className='flex justify-center items-center sm:hidden'><a href='#'>STATUS</a></li>
              <li className='flex justify-center items-center sm:hidden'><a href='#'>SHOP</a></li>
              <li className='flex justify-center items-center sm:hidden'><a href='#'>CONTACT</a></li>
            </ul>
            <button className='w-[100px] h-[40px] bg-[#F84646] mr-[20px]  text-white rounded-[5px]'>LOGIN</button>
          </div>
        </div>

        <div className='w-full min-h-[400px] flex flex-col justify-center mt-[100px]'>
          <div className='pl-[5%] sm:pr-[5%] sm:text-center'>
            <div className='w-[50%] lg:w-[70%] sm:w-[100%]'>
              <h1 className='font-extrabold text-[60px] sm:text-[40px]'>THIS IS NEW PRACTICE I AM 24 YEARS OLD</h1>
            </div>
            <div className='w-[50%] lg:w-[70%] sm:w-[100%] mt-[20px] mb-[20px]'>
              <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>
            <div className='w-[100%]'>
              <div className='w-[502px] sm:w-[100%] h-[73px] bg-white rounded-[8px]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
