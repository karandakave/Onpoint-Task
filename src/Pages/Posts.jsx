import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../Store/postSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const { posts, hasMore, loading, error } = useSelector((state) => state.posts)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchPosts(page))
    }, [dispatch, page])

    const fetchMoreData = () => {
        setPage((prev) => prev + 1)
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Posts</h1>
            {loading && posts.length === 0 && <p className='text-blue-500'>Loading Post</p>}

            {error && <p className='text-red-500'> Error</p>}

            {
                !loading && !error && (

                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchMoreData}
                        hasMore={hasMore}

                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {posts.map((post) => (
                                <div key={post.id} className="p-4 border rounded shadow bg-white">
                                    <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                                    <p className="text-sm text-gray-700">{post.body}</p>
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>

                )
            }
        </div >
    )
}

export default Posts
