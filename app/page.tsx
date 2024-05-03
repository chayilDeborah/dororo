import Image from 'next/image'
import Homepage from './components/Homepage';
import Do from '../app/assets/Do.png'


export default function Home() {
  return (
    <main className='flex justify-center  '>
      <section className='lg:max-w-[1305px] w-full lg:mx-[0px] mx-auto lg:w-full' >
        <div className='relative'>
          <div className='lg:w-full h-[7494px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714696784/Do_vqk3kd.png")] lg:pb-[200px] bg-cover bg-center w-full '>
            <div className='absolute w-full lg:mx-[0px] mx-auto flex justify-center '>
              <Homepage />
            </div>
          </div>
        </div>
        
        {/* <Homepage /> */}
      </section>
    </main>
  )
}
