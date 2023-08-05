import React from 'react'
import Headername from './Headername';
import './Info.css';

export default function Header() {
    return (
        <>
            <header>
                <div className='headr'>
                    <h1 className='heading'>JUSTNEWS.COM</h1>
                    <div className='abouthdr'>
                        <div className='lefthdr'> 
                            <h1 className='hdrtitle'>Only Specific News That <br/><b className='boldtext1'>Is Necessary For</b> <br/>Youuuuu... !</h1>
                            <h2 className='hdrdesc'>Fake News Are Easy To Create But We <b className='boldtext2'>Strictly Focus On Quality</b> , Not On Quantity</h2>
                            <p className='hdrdesc' style={{fontSize:"x-large"}}>You are reading the best <b className='boldtext'>News Website over the Internet</b></p>
                        </div>
                        <div className='righthdr'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdgMCK378-LeGUfql6kjYreEACTv2QKNM9g&usqp=CAU' className='newsimg' alt='A man reading newspaper'></img>
                        </div>
                    </div>
                </div>
                <div className='Header'>
                    <Headername link="/" page="All" />
                    <Headername link="/entertainment" page="Entertainment" />
                    <Headername link="/technology" page="Technology" />
                    <Headername link="/science" page="Science" />
                    <Headername link="/sports" page="Sports" />
                    <Headername link="/health" page="Health" />
                    <Headername link="/business" page="Business" />
                </div>
            </header>
        </>
    )
}
