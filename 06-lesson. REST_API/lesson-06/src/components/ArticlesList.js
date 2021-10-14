import React from "react";

export default function ArticlesList({ articles }) {
    return (
        <ul>
            {articles.map(({ objectID, title, url }) => (
                <li key={objectID}>
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
