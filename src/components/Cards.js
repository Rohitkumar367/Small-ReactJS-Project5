import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

    let courses = props.courses;
    let allCourses = [];
    const[likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses(){
        if(category === 'All'){
            Object.values(courses).forEach( (arr) => {
                arr.forEach( (element) => {
                    allCourses.push(element);
                })
            })
        }
        else{
            // main sirf specific category ka array pass karunga
            courses[category].forEach((element) => {
                allCourses.push(element)
            })
        }
    }
    getCourses();



    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                allCourses.map((curElem) => {
                    return <Card key={curElem.id} curElem={curElem} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}

export default Cards
