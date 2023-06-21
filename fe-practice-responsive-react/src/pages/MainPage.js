import React from 'react';
import '../styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineUsers } from 'react-icons/hi';
import imgInfo1 from '../File.png'
import imgInfo2 from '../Star.png'
import imgInfo3 from '../Crown.png'
import imgInfo4 from '../ChartBar.png'
import imgInfo5 from '../ChartPieSlice.png'
import imgInfo6 from '../FigmaLogo.png'
import imgPart4Horizon from '../infoPart4-horizontal.png'
import imgPart4Vertical from '../infoPart4-vertical.png'

import imgPart5first from '../part5-firstPic.jpg'
import imgPart5second from '../part5-secondPic.jpg'

import imgPart6_1_1 from '../imagePart6-1-1.png'
import imgPart6_2_1 from '../imagePart6-2-1.png'
import imgPart6_temp1 from '../imagePart6_temp1.png'
import imgPart6_temp2 from '../imagePart6_temp2.png'
import imgPart6_temp3 from '../imagePart6_temp3.png'

import Users from '../Users.png'
import groupIcon from '../Group 8.png'
export const MainPage = () => {
  return (
    <div className='flex flex-col justify-start items-start bg-white w-full min-h-[5000px]'>
      {/* this is 1 */}
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

        <div id='top-info' className='w-full min-h-[400px] flex flex-col justify-center mt-[100px]'>
          <div className='pl-[5%] sm:pr-[5%] sm:text-center'>
            <div className='w-[50%] lg:w-[60%] sm:w-[100%]'>
              <div className='font-extrabold text-[60px] sm:text-[40px]'>THIS IS NEW PRACTICE I AM 24 YEARS OLD</div>
            </div>
            <div className='w-[50%] lg:w-[60%] sm:w-[100%] mt-[20px] mb-[40px]'>
              <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>
            <div className='w-[100%]'>
              <div className='w-[502px] sm:w-[100%] h-[73px] bg-white rounded-[8px]'></div>
            </div>
          </div>
        </div>
      </div>

      {/* this is 2 */}
      <div className='flex flex-col justify-center items-center mt-[5px] w-full min-h-[400px] bg-white'>
        <div className='w-[50%] font-extrabold text-[36px] text-center mb-[30px]'>Kalite ve Süreç Yönetimi</div>
        <div className='w-[80%] text-center text-[24px]'>
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımıåzla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </div>
      </div>
      {/* this is 3 */}
      <div className='w-full bg-white min-h-[400px] flex justify-center'>
        <div className='grid grid-cols-3 grid-rows-2 min-h-[400px] w-[80%] gap-4 lg:grid-cols-2 sm:grid-cols-1'>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10' src={imgInfo1} alt='image'></img>
              <div className='absolute z-[1] top-0 right-0 rounded-full bg-[#FF5391] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 1</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10 p-[0px]' src={imgInfo2} alt='image'></img>
              <div className='absolute z-[1] top-[10px] left-0 rounded-full bg-[#7553FF] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 2</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10 p-[10px]' src={imgInfo3} alt='image'></img>
              <div className='absolute z-[1] top-[20px] right-0 rounded-full bg-[#53C1FF] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 3</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10 p-[10px]' src={imgInfo4} alt='image'></img>
              <div className='absolute z-[1] top-[22px] left-[15px] rounded-full bg-[#53ACFF] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 4</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10 p-[10px]' src={imgInfo5} alt='image'></img>
              <div className='absolute z-[1] top-[10px] right-[10px] rounded-full bg-[#FF5353] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 5</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
          <div className='flex justify-center flex-col items-center text-center'>
            <div className='relative'>
              <img className='relative z-10 p-[10px]' src={imgInfo6} alt='image'></img>
              <div className='absolute z-[1] top-[0px] right-[10px] rounded-full bg-[#FFBA53] w-[45px] h-[45px]'></div>
            </div>
            <div className='font-extrabold text-[24px]'>Header 6</div>
            <div className='text-[18px]'>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</div>
          </div>
        </div>
      </div>

      {/* this is 4 */}
      <div className='w-full mt-[100px]'>
        <img className='w-full sm:hidden' src={imgPart4Horizon}></img>
        <img className='w-full hidden sm:block' src={imgPart4Vertical}></img>
      </div>

      {/* this is part 5 */}
      <div className='mt-[80px] w-full flex justify-center'>
        <div className='w-[80%] 2xl:w-[1200px] lg:w-[100%]'>
          <div className='grid grid-cols-2 gap-5 sm:grid-cols-1 sm:text-center'>
            <div className='lg:p-[8%] sm:order-2' >
              <div className='lg:text-[56px] text-[64px] font-bold'>HEADER PART 5 FIRST</div>
              <div className='lg:text-[14px] mt-[20px] mb-[30px]'>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</div>
              <div><button className='rounded-[8px] w-[160px] h-[48px] text-white bg-[#F84646] sm:w-full'>CLICK</button></div>
            </div>
            <div className='lg:p-[8%] sm:order-1 flex justify-end' >
              <img className='object-contain' src={imgPart5first}></img>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-5 mt-[50px] sm:grid-cols-1 sm:text-center'>
            <div className='flex items-center lg:p-[8%]'><img className='object-cover' src={imgPart5second}></img>
            </div>
            <div className='lg:p-[8%] '>
              <div className='lg:text-[56px] text-[64px] font-bold'>HEADER PART 5 SECOND</div>
              <div className='lg:text-[14px] mt-[20px] mb-[30px]'>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</div>
              <div><button className='rounded-[8px] w-[25%] h-[48px] text-white bg-[#F84646] sm:w-full'>CLICK</button></div>
            </div>
          </div>
        </div>
      </div>

      {/* This is part 6 */}
      <div className='flex flex-col items-center w-full min-h-[603px] bg-gray-200 mt-[80px] text-center'>
        <div className='font-extrabold text-[48px] mt-[50px] mmd:text-[36px]'> Header Part 6 Hello World</div>
        <div className='text-[18px] mmd:text-[14px] mmd:mt-[10px] mmd:mb-[40px]'>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</div>
        <div className='w-[80%] flex justify-evenly min-h-[603px] lg:w-[100%] mmd:flex-col mmd:items-center'>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_1_1}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center mmd:mt-[24px] mmd:mb-[24px]'>
            <div className='mb-[14%] flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_2_1}></img>
            </div>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_temp1}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center mmd:mb-[40px]'>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_temp2}></img>
            </div>
            <div className='mb-[14%] mt-[14%] flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_temp3}></img>
            </div>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_1_1}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center mmd:hidden'>
            <div className='mb-[14%] flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_temp2}></img>
            </div>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_2_1}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center mmd:hidden'>
            <div className='flex justify-center bg-white rounded-[8px] w-[170px] h-[96px]'>
              <img className='object-contain' src={imgPart6_temp1}></img>
            </div>
          </div>
        </div>
      </div>


      {/* This is part 7 */}
      <div className='w-full min-h-[700px] flex justify-center items-center'>
        <div className='w-full text-center flex flex-col justify-center items-center'>
          <div className='relative flex justify-center w-[200px]'>
            <img className='relative z-10' src={Users}></img>
            <div className='absolute right-[40px] top-[10px]  w-[61px] h-[61px] rounded-full bg-[#F84646]'></div>
          </div>
          <div className='text-[48px] font-extrabold'>INFO PART 7</div>
          <div className='mb-[20px] text-[18px]'>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</div>
          <div>
            <button className='rounded-[8px] text-white bg-[#F84646] w-[204px] h-[70px]'>CLICK ME!</button>
          </div>
        </div>
      </div>
      <footer className='w-full bg-red-500 min-h-[536px]'>
        <div className='w-full flex justify-center mt-[100px]'>
          <div className='w-[80%] grid grid-cols-4 text-[#E6E6E6] mmd:grid-cols-2 sm:grid-cols-1'>
            <div className='min-h-[1px] flex flex-col sm:mb-[20px]'>
              <div className='footer-font-family mb-[20px] font-bold text-white'>Çözüm ve Hizmetler</div>
              <div className='footer-font-family mb-[20px]'>Yazılım Geliştirme</div>
              <div className='footer-font-family mb-[20px]'>Outsourcing</div>
              <div className='footer-font-family mb-[20px]'>Kalite ve Süreç Yönetimi</div>
              <div className='footer-font-family mb-[20px]'>Danışmanlık</div>
              <div className='footer-font-family mb-[20px]'>IoT Destekli Çözümler</div>
            </div>
            <div className='min-h-[1px] flex flex-col sm:mb-[20px]'>
              <div className='footer-font-family mb-[20px] font-bold text-white '>Çözüm ve Hizmetler</div>
              <div className='footer-font-family mb-[20px]'>Kalite ve Süreç Yönetimi</div>
              <div className='footer-font-family mb-[20px]'>Yazılım Geliştirme</div>
              <div className='footer-font-family mb-[20px]'>Danışmanlık</div>
              <div className='footer-font-family mb-[20px]'>IoT Destekli Çözümler</div>
            </div>
            <div className='min-h-[1px] flex flex-col sm:mb-[20px]'>
              <div className='footer-font-family mb-[20px] font-bold text-white'>Çözüm ve Hizmetler</div>
              <div className='footer-font-family mb-[20px]'>Kalite ve Süreç Yönetimi</div>
              <div className='footer-font-family mb-[20px]'>Yazılım Geliştirme</div>
              <div className='footer-font-family mb-[20px]'>Danışmanlık</div>
            </div>
            <div className='min-h-[1px] flex flex-col sm:mb-[20px]'>
              <div className='footer-font-family mb-[20px] font-bold text-white'>Çözüm ve Hizmetler</div>
              <div className='footer-font-family mb-[20px]'>Kalite ve Süreç Yönetimi</div>
              <div className='footer-font-family mb-[20px]'>Yazılım Geliştirme</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[40px]'>
          <div className='w-[80%] flex justify-between sm:flex-col'> 
            <div className='text-white sm:mb-[100px] sm:order-2'>© Copyright 2010-2021 - Can Çevik</div>
            <div>
              <img className='sm:order-1 sm:mb-[20px]' src={groupIcon}></img>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
