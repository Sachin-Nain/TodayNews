import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className='ftr'>
                    <h2 className='justnews'>JUSTNEWS.COM</h2>
                    <div className='ftrlinks'>
                        <div className='footerlinks'>
                            <a href='' className='ftra'><i className="penci-faicon fa fa-facebook"></i><span className='socialmedia'> facebook</span></a>
                        </div>
                        <div className='footerlinks'>
                            <a href='' className='ftra'><i className="penci-faicon fa fa-twitter"></i><span className='socialmedia'>twitter</span></a>
                        </div>
                        <div className='footerlinks'>
                            <a href='' className='ftra'><i className="penci-faicon fa fa-instagram"></i><span className='socialmedia'>instagram</span></a>
                        </div>
                        <div className='footerlinks'>
                            <a href='' className='ftra'><i className="penci-faicon fa fa-youtube"></i><span className='socialmedia'>youtube</span></a>
                        </div>
                    </div>
                    <hr className='hzline'/>
                    <p className='Rightres'>All Rights Reserved by Media Freedom Foundation. No part of the content on this website may be republished without written consent by Media Freedom Foundation</p>
                </div>
            </footer>
        </>
    )
}
