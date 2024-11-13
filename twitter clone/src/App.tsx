// App.js
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {tweetsData.map(tweet => (
          <Tweet
            key = {tweet.id}
            user = {tweet.username}
            cont = {tweet.content}
            initlike = {tweet.likes}
            time = {tweet.timestamp}
            />
        ))}
        </div>
    </div>
  );
}

export default App;
