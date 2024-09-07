import Image from "next/image";
import MaxWrapper from '../components/MaxWrapper'
import { Check,Star } from "lucide-react";
import LavenderImg from '../../public/Lavender.jpg'
import { Icons } from "@/components/Icons";
import ItemsForPurchase from "@/components/ItemsForPurchase";

export default function Home() {
  return (
    <div className="bg-[#fff2e2]">
      <section>
        <MaxWrapper className="pb-16 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-20" >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/logo.png" alt="" className="w-full"/>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Where Every Purchase feels like a <span className="bg-[#e2bbf7] px-2 text-[#fff2e2]">Fairy Tail</span></h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap ">
                Timeless <span className="font-semibold">Elegance</span>, Modern <span className="font-semibold">Glamour</span>.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[var(--secondary-color)]"/>
                    Premium Craftsmanship
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[var(--secondary-color)]"/>
                    Eco-Friendly Choices
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[var(--secondary-color)]"/>
                    Exclusive Collections
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img className="inline-block h-10 w-10 rounded-full" src="/users/user-1.png" alt="User Image" />
                  <img className="inline-block h-10 w-10 rounded-full" src="/users/user-2.png" alt="User Image" />
                  <img className="inline-block h-10 w-10 rounded-full" src="/users/user-3.png" alt="User Image" />
                  <img className="inline-block h-10 w-10 rounded-full" src="/users/user-4.jpg" alt="User Image" />
                  <img className="inline-block object-cover h-10 w-10 rounded-full" src="/users/user-5.jpg" alt="User Image" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
                    <Star className="h-4 w-4 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
                    <Star className="h-4 w-4 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
                    <Star className="h-4 w-4 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
                    <Star className="h-4 w-4 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
                  </div>

                  <p>
                    <span className="font-semibold">1.25M</span> Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-6 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-[70vh]">
            <div className="relative md:max-w-xl">
              <img src='./Lavender.png' alt="" className="h-[90%]"/>
            </div>
          </div>
        </MaxWrapper>
      </section>

      {/* Product Description Section */}
      <section className="bg-[var(--third-color)] py-16">
        <MaxWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !loading-tight font-bold text-5xl md:text-6xl">What our<span className="relative px-2">Customers<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-[var(--secondary-color)]"/></span> Say</h2>
            <img src="/Lavender-2.png" alt="" className="w-24 order-0 lg:order-2" />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
            </div>
              <div className="text-lg leading-8">
                <p>
                Fantastic shopping experience! The product <span className="p-0.5 bg-[var(--secondary-color)] text-white">quality exceeded my expectations</span>, and delivery was super fast
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-1.png" alt="user" className="rounded-full h-12 w-12 object-cover"/>
                <div className='flex flex-col'>
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                      <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second user review */}
          <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
              <Star className="h-5 w-5 text-[var(--secondary-color)] fill-[var(--secondary-color)]"></Star>
            </div>
              <div className="text-lg leading-8">
                <p>
                The user-friendly interface made <span className="p-0.5 bg-[var(--secondary-color)] text-white"> shopping a breeze</span>, and I appreciated the quick checkout process!
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-4.jpg" alt="user" className="rounded-full h-12 w-12 object-cover"/>
                <div className='flex flex-col'>
                  <p className="font-semibold">Jason</p>
                  <div className="flex gap-1.5 items-center">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                      <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWrapper>

        <div className="pt-24 flex flex-col items-center ">
          <div className='flex flex-col md:flex-row items-center'>
          <h2 className="order-2 mt-2 tracking-tight text-center text-balance !loading-tight font-bold text-4xl md:text-5xl">
            What other Customers <span className="relative px-2">are buying<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-[var(--secondary-color)]"/></span>
          </h2>
          <img src="/Lavender-2.png" alt="" className="w-20 order-1 lg:order-3" />
          </div>
          <ItemsForPurchase/>
        </div>
      </section>

      
    </div>
  );
}
