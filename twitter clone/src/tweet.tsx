// Tweet.js
import { useState } from 'react';


/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/


interface TweetProps {
    user: string;
    cont: string;
    initlike: number;
    time: string;
}

function Tweet({ user, cont, initlike, time }: TweetProps) {
    const [liked, setLiked] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(initlike);
    

    const handleLike = () => {
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
        setLiked(!liked);
    };

    return (
       <div className="tweet">
            <h1>{user}</h1>
            <h2>{cont}</h2>
            <h3>{time}</h3>
            <div>
                <span onClick={handleLike} style= {{cursor: "pointer" }}>
                    {liked ? "❤️" : "🤍"}
                </span>
                <span> {likeCount}</span>
            </div>
        </div>
    );
}


export default Tweet;