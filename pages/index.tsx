import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Rachel's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="gap12 grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-3 lg:col-end-13">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
