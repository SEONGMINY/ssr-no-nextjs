import React, { lazy, Suspense } from 'react';
import { Html } from './Html';

const Main = lazy(() => import('./components/Main.jsx'));

const App = () => {
  return (
    <Html>
      <div>
        <h1>서버 사이드 렌더링 예제</h1>
        <p>이 페이지는 서버에서 렌더링되었습니다.</p>
        <Suspense fallback={<div>로딩 중...</div>}>
          <Main />
        </Suspense>
      </div>
    </Html>
  );
};

export default App;
