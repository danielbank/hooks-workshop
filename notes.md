# Refs Don't Have To Be For Elements

```js
const history = useRef() // equivalent to this.history in a class constructor()
```

# Lore

Prefer flat objects over nested objects

# Chrome Dev Tools Fun

\$0 // get the element selected

console.dir(\$0)

<div children="1">2</div>
^^ 2 wins, no 1

# Feed Exercise

- Don't initialize the posts as an empty array `[]`. Default it to `null`. This handles the case where we have a flicker of "You have no posts", to "Just kidding, you do have posts"... we can handle the loading state with `posts = null` vs `posts = []` which means we legit have no posts

- isCurrent is the supreme nomenclature for the cancellation variable

- The following does not prevent the feed load more from showing only the next (limit) posts on clicking [View More]... it will show new ones up top also

```js
const time = Date.now()
```

The following will only show the next (limit) posts without showing new ones
const time:

```js
const time = useState(Date.now())
```

- Following not necessary cuz subscribe reruns with new time and gets 0 and setsNewPosts with that

```js
setNewPosts(null)
```

- Following not necessary cuz of load effect but makes it faster (optimistic rendering)

```js
setPosts([...newPosts, ...posts])
```

- troch/reinspect library to tie reducer into redux dev tools
