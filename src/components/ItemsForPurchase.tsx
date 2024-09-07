"use client"
import {cn} from '@/lib/utils'
import { useEffect, useRef, useState } from "react";
import MaxWrapper from "./MaxWrapper";
import { useInView } from "framer-motion";
import React from 'react';
import { HTMLAttributes } from 'react';
import { div } from 'framer-motion/client';


const ITEMS=[
    "/Items/1.jpg",
    "/Items/2.jpg",
    "/Items/3.jpg",
    "/Items/4.jpg",
    "/Items/5.jpg",
    "/Items/6.jpg",
]

interface ItemProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string,   
}

function Item({imgSrc, className, ...props}:ItemProps){

    const POSSIBLE_ANIMATION_DELAYS=["0s","0.1s","0.2s","0.3s","0.4s","0.5s"]

    const animationDelay=POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random()*POSSIBLE_ANIMATION_DELAYS.length)]

    return <div className={cn('animate-fade-in rounded-[2.25rem] bg-black opacity-0 shadow-xl shadow-slate-900/5', className)} 
    style={{animationDelay}}
    {...props}>
        <div className="col-span-full rounded-[2.25rem] lg:col-span-1 w-full flex justify-center  items-center  h-full">
            <div className="relative w-full h-full object-cover">
              <img src={imgSrc} alt="" className="h-[100%] rounded-[2.25rem]"/>
            </div>
          </div>
    </div>
}

function ItemColumn({
    Items,
    className,
    ItemClassName,
    msPerPixel=0
}:{
    Items:string[],
    className?:string,
    ItemClassName?:(ItemIndex: number)=>string
    msPerPixel?: number
}){
    const columnRef=useRef<HTMLDivElement|null>(null)
    const [columnHeight, setColumnHeight]=useState(0);
    const duration=`${columnHeight*msPerPixel}ms`

    useEffect(()=>{
        if(!columnRef.current)return

        const resizeObserver= new window.ResizeObserver(()=>{
            setColumnHeight(columnRef.current?.offsetHeight?? 0)
        })

        resizeObserver.observe(columnRef.current)
        return ()=>{
            resizeObserver.disconnect()
        }
    },[])

    return <div ref={columnRef} className={cn("animate-marquee space-y-8 py-4",className)} style={{'--marquee-duration':duration} as React.CSSProperties}>
        {Items.concat(Items).map((imgSrc,ItemIndex)=>{
            return <Item key={ItemIndex} className={ItemClassName?.(
                ItemIndex%Items.length
            )} imgSrc={imgSrc}/>
        })}
    </div>
}

function splitArray<T>(array: Array<T>,numParts: number){
    const result:Array<Array<T>>=[]

    for (let i = 0; i < array.length; i++) {
        const index=i%numParts
        if(!result[index]){
            result[index]=[]
        }
        result[index].push(array[i])
    }

    return result
}

const ItemsGrid=()=>{
    const containerRef=useRef<HTMLDivElement|null>(null)
    const isInView=useInView(containerRef,{once:true,amount:0.4})
    const columns=splitArray(ITEMS,3);
    const column1=columns[0]
    const column2=columns[1]
    const column3=splitArray(columns[2],2)

    return <div ref={containerRef} className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-3">
        {isInView?<>
            <ItemColumn Items={[...column1, ...column3.flat(), ...column2]} ItemClassName={(ItemIndex)=>cn({
                "md:hidden":ItemIndex>=column1.length+column3[0].length,
                'lg:hidden':ItemIndex>=column1.length,
            })}
            msPerPixel={10}/>
            <ItemColumn Items={[...column2, ...column3[1]]} ItemClassName={(ItemIndex)=>cn({
                "md:hidden":ItemIndex>=column1.length+column3[0].length,
                'lg:hidden':ItemIndex>=column1.length,
            })}
            msPerPixel={15}/>
            <ItemColumn Items={column3.flat()} 
            className='hidden md:block'
            ItemClassName={(ItemIndex)=>ItemIndex>=column2.length? "lg:hidden":""}
            msPerPixel={10}/>
        </>:null}
        <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--third-color)]'></div>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--third-color)]'></div>
    </div>
}

export const ItemsForPurchase=()=>{
    return <MaxWrapper className="relative max-w-5xl order-3">
        <img area-hidden='true' src="/what-people-are-buying.png" alt="" className="absolute select-none hidden xl:block -left-32 top-1/3"/>

        <ItemsGrid/>
    </MaxWrapper>
}
export default ItemsForPurchase;