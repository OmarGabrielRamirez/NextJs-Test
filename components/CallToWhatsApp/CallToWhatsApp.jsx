
import style from './CallToWhatsApp.module.css'
import Image from 'next/image'

export const CallToWhatsApp = ({ title, number }) => {


    return (
        <div className={style.call_to__whastapp}>

            <div className={style.call_to__whastapp_title}>
                <div className={style.call_to__whastapp_title_icon}>
                    <Image src={'/icons/sounds.svg'} width={20} height={20} alt='Icon'>
                    </Image>
                </div>
                <div className={style.call_to__whastapp_title_text}>
                    {title}
                </div>
            </div>
            <div className={style.call_to__whastapp_number}>

                <div className={style.call_to__whastapp_title_icon}>
                    <Image src={'/icons/whatsapp.svg'} width={20} height={20} alt='Icon'>
                    </Image>
                </div>
                <div className={style.call_to__whastapp_title_text}>
                    <strong>{'Escríbenos: '} {number}</strong>
                </div>

            </div>
        </div>
    );
}

