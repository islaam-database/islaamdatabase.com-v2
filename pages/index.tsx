import { Post } from "./Post";

interface Props {
  posts: Post[];
  dateTime: string;
}

export default function ({ posts, dateTime }: Props) {
  return <>
    <h1>Posts ({posts.length}) ({dateTime})</h1>
    <hr />
    {posts.map(p => <Post key={p.id} post={p} />)}
    {posts.map(p => <Post key={p.id} post={p} />)}
    {posts.map(p => <Post key={p.id} post={p} />)}
  </>;
}

export async function getServerSideProps() {
  const dateTime = new Date().toLocaleString();
  const posts = await fetch("https://www.reddit.com/r/nextjs.json")
    .then(r => r.json())
    .then(r => r.data.children)
    .then(r => r.map((c: any) => c.data));
  return { props: { posts, dateTime } as Props }
}


