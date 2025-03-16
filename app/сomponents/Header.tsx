'use client';

import Link from 'next/link'
import React from 'react'
import headerLinks from '@/data/HeaderLinks.json'

function scrollTo(event : React.SyntheticEvent){
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute('href')?.replace('#', '');
    const element = document.getElementById(String(id))

    window.history.pushState({}, '', `#${id}`);

    element?.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToTop(){
    window.history.replaceState(null, '', window.location.pathname)

    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

const Header = () => {
    return (
        <nav className='sm:px-16 px-6 w-full flex items-center justify-between py-3 fixed top-0 bg-blue-950'>
            <div onClick={scrollToTop}>Home</div>
            <ul className='flex flex-row gap-6'>
                {headerLinks.map((link) => (
                    <li key={link.id}>
                        <Link href={link.id} onClick={scrollTo}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Header