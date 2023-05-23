'use client';
import style from './ReportSiniester.module.css'
import ReportSiniesterHelper from './ReportSiniesterHelper'
import Image from 'next/image'
import { use } from "react";
export const ReportSiniester = ({ title, subtitle }) => {
    // GET JSON PRELOADING
    const { getPostsTest } = ReportSiniesterHelper();
    const posts = use(getPostsTest());

    // HOOK SET STATE
    // const { onClickBtn, value } = ReportSiniesterHelper();
    // console.log(value);

    return (
        <div className={style.report_siniester_card}>
            {/* {value ? <button className={style.btn_test} onClick={onClickBtn}>
                TEST HOOK ENABLED

            </button> : <button className={style.btn_test} onClick={onClickBtn} >
                TEST HOOK DISABLED

            </button>
            } */}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}