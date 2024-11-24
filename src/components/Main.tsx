import React from 'react';
import { wrapPromise } from '../wrapPromise';

const data = {
  author: 'SEONGMIN LEE',
  createdAt: '10/21/1996',
  title: '저는 이성민입니다',
  content: {
    p1: `잼투인 회사에서 프론트엔드 개발자로 일하고 있습니다.`,
    p2: `인아웃 회사에서 프론트엔드 개발자로 일하고 있습니다.`,
    p3: `크리에이트립 회사에서 프론트엔드 개발자로 일하고 있습니다.`,
  },
};

type PostType = typeof data;

const networkRequest = (): Promise<PostType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });
};

const getData = () => {
  const promise = networkRequest();
  return wrapPromise<PostType>(promise);
};

const resource = getData();

const Main = () => {
  const post = resource.read();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <div>
          <address>{post.author}</address>
          <time dateTime={post.createdAt}>~ {post.createdAt}</time>
        </div>
        <section>
          <p>{post.content.p1}</p>
          <p>{post.content.p2}</p>
          <p>{post.content.p3}</p>
        </section>
      </article>
    </main>
  );
};

export default Main;
