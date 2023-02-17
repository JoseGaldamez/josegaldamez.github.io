import React, { useEffect, useState } from "react";
import { CardArticle } from "../cardArticle";
import { Title } from "../title";
import style from "./personalblog.module.css";

export const PersonalBlog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const res = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@josegaldamez1991"
        );
        const data = await res.json();
        const { items } = data;
        setPosts(items);
    };

    return (
        <section className={style.main}>
            <Title text="Blog Personal" />
            <div className={style.blog}>
                {posts.map((post, index) => {
                    return (
                        <CardArticle
                            key={index}
                            title={post.title}
                            image={post.thumbnail}
                            date={post.pubDate}
                            url={post.link}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default PersonalBlog;
