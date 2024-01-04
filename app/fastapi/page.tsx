const { Suspense } = require('react')

async function getPosts() {
  const url1 = 'http://nginx/'
  // const url1 = 'https://jsonplaceholder.typicode.com/posts'
  const res = await fetch(url1, { cache: 'no-store' })
  return res.json();
}

// ページ全体を表示するReact関数コンポーネント(async)
export default async function Page() {
  const posts = await getPosts();
  console.log('in posts')

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ul> {
      posts.map((p) => { // 1 記事一覧
        return (
          <li key={p.id}>
            <h3>記事ID {p.id} : {p.title}</h3>
            <p>{p.body}</p>
          </li>
        )
      })
      } </ul>
    </Suspense>
  )
}
