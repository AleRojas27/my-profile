'use client'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import imgProfile from '@/assets/img/Yo2.jpg'

export default function Header(){

    return(

        <div className="container-fluid header">

            <div className='container'>

                <div className="headerProfile">

                    <FontAwesomeIcon icon={faBars} className="iconHeader" />

                    <div className="">

                        <Image src={imgProfile} className="imgProfileHeader" height="50" width="50" />

                    </div>

                </div>

            </div>

        </div>
    )
}