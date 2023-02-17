import React from "react";
import Image from "next/image";
import style from "./cardArticle.module.css";
import Link from "next/link";

export const CardArticle = ({ title, image, date, url }) => {
    return (
        <article className={style.card}>
            <Link href={url} passHref>
                <a target="_blank" className={style.link}>
                    <div className={style.card__image}>
                        <Image
                            className={style.image}
                            src={image}
                            alt={title}
                            width={250}
                            height={150}
                        />
                        <h2 className={style.h2}>{title}</h2>
                        <div className={style.meta}>
                            <span>{date}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    );
};
