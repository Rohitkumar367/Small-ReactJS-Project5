import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {

    let curElem = props.curElem;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(curElem.id)){
            // already liked
            setLikedCourses((prev) => prev.filter( cid => (cid !== curElem.id) ));
            toast.warning('like removed')
        }
        else{
            // not liked
            if(likedCourses.length === 0){
                setLikedCourses([curElem.id])
            }
            else{
                setLikedCourses((prev) => [...prev, curElem.id])
            }
            toast.success('Liked Successfully')
        }
    }

    return (
        <div className='w-[300px] bg-black bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src = {curElem.image.url}  alt={curElem.image.alt} />
                <button className='w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-[-15px] grid place-items-center' onClick={clickHandler}>
                    {
                        likedCourses.includes(curElem.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
            <div>
                <p className='text-white font-semibold text-lg leading-6'>{curElem.title}</p>
                <p className='mt-2 text-white'>
                    {
                        curElem.description.length > 100 ? (curElem.description.substr(0,100)) + "..." : (curElem.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card
