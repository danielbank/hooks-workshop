import React, { useState, useEffect } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

function Feed() {
  const [newPosts, setNewPosts] = useState(null)
  const [posts, setPosts] = useState(null)
  const [limit, setLimit] = useState(3)
  const [time, setTime] = useState(Date.now())

  useEffect(() => subscribeToNewFeedPosts(time, setNewPosts), [time])

  useEffect(() => {
    let isCurrent = true
    loadFeedPosts(time, limit).then(posts => {
      if (isCurrent) setPosts(posts)
    })
    return () => {
      isCurrent = false
    }
  }, [time, limit])

  return (
    <div className="Feed">
      <div className="Feed_button_wrapper">
        {newPosts && newPosts.length > 0 && (
          <button
            className="Feed_new_posts_button icon_button"
            onClick={() => {
              // not necessary cuz of load effect but makes it faster (optimistic rendering)
              // setPosts([...newPosts, ...posts])
              setLimit(limit + newPosts.length)
              setTime(Date.now())
              // not necessary cuz subscribe reruns with new time and gets 0 and setsNewPosts with that
              // setNewPosts(null)
            }}
          >
            View {newPosts.length} Posts
          </button>
        )}
      </div>

      {posts &&
        posts.map((post, index) => <FeedPost key={post.id} post={post} />)}

      <div className="Feed_button_wrapper">
        <button
          className="Feed_new_posts_button icon_button"
          onClick={() => {
            setLimit(limit + 3)
          }}
        >
          View More
        </button>
      </div>
    </div>
  )
}
