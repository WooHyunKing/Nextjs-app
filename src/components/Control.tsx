"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// server component 내에서는 현재 동적 라우팅의 값([id])을 layout 안에서는 알 수 없습니다.
// 따라서 useParams Hook을 사용해야 하는데 useParams는 client component입니다.
// app/layout.js 전체를 client component로 전환해도 됩니다만, server component의 이점을 포기하기는 싫기 때문에
// 여기서는 client component의 기능이 필요한 부분만 별도의 컴포넌트로 분리했습니다. ✨

const Control = () => {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default Control;
