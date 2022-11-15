import React from "react";
import '../../styles/utils.scss';
import './countercard.css';


// const number= document.querySelectorAll(".number")
// const speed=100;
// number.forEach(element => {
//     incNumber(element)
// });
// function incNumber(elem){
// let text =+elem.innerText;
// const value=+elem.getAttribute("data-target");
// const inc=Math.floorvalue/speed;
// if(text<value){
//     elem.innerText=inc+text;
//     setTimeout(() => {
//         incNumber(elem)
//     }, 20);
// } 
// else{
//     elem.innerText=value;
// }
// }
function Countercard (){
    return <div className="main-div">
        <div className="card-div">
            <img src='./images/couple_icon.jpg' alt='' className='image-control' />
            <h1 className="number" data-target="5000">5000<span className="Add">+</span></h1>
            <p className="paragraph">মোট দ্বীনদার পাত্র-পাত্রীর</p>
            <p className="paragraph1">বায়োডাটা</p>
        </div>

        <div className="card-div">
            <img src= './images/man_icon.jpg' alt='' className='image-control' />
            <h1 className="number" data-target="1000">1000<span className="Add">+</span></h1>
            <p className="paragraph">মোট পাত্রের</p>
            <p className="paragraph1">বায়োডাটা</p>
        </div>

        <div className="card-div">
            <img src= './images/woman1_icon.jpg' alt='' className='image-control' />
            <h1 className="number" data-target="7000">7000<span className="Add">+</span></h1>
            <p className="paragraph">মোট পাত্রীর</p>
            <p className="paragraph1">বায়োডাটা</p>
        </div>


        <div className="card-div">
            <img src= './images/couple_ring_icon.jpg' alt='' className='image-control' />
            <h1 className="number" data-target="1000">1000<span className="Add">+</span></h1>
            <p className="paragraph">সর্বমোট সফল</p>
            <p className="paragraph1">বিবাহ</p>
        </div> 
    </div>

};

export default Countercard;