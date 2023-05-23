'use client';
import style from './NavBarTitle.module.css'
import NavBarTitleHelper from './NavBarTitleHelper'
import Image from 'next/image'

export const NavBarTitle = ({ title, subtitle }) => {
    const { onClickBack } = NavBarTitleHelper();

    return (
        <div className={style.nav_bar}>
            <div className={style.nav_bar_title}>
                <div className={style.nav_bar_icon} onClick={onClickBack} >
                    <Image src={'/icons/back.svg'} width={20} height={20} alt='Icon back'></Image>
                </div>
                <div>
                    <h2>
                        {title}
                    </h2>
                </div>
            </div>
            <div className={style.nav_bar_subtitle}>
                {subtitle}
            </div>
        </div>
    );
}