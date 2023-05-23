'use client';
import style from './FormTest.module.css'
import FormTestHelper from './FormTestHelper'

export const FormTest = ({ title, subtitle }) => {
    const { handleSubmit, value } = FormTestHelper();
    return (
        <div className={style.form_test_layout}   >
            <h3> {title}</h3>
            <h3> {subtitle}</h3>
            <form className={style.form_test} >
                <input className={style.form_test_input} placeholder='Nombre'></input>
                <input className={style.form_test_input} placeholder='Primer apellido'></input>
                <input className={style.form_test_input} placeholder='Segundo apellido'></input>
            </form>
            <button className={style.form_test_btn} >
                Send
            </button>
        </div>
    );
}