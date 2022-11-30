import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}

        <Stories />

        {/* Posts */}

        <Posts />
      </section>
      <section className="hidden md:inline-grid">
        {/* Mini profile */}

        {/* Suggestion */}
      </section>
    </main>
  )
}

// md 사이즈 일때 grid-cols-3 인데, 스토리 섹션에서 2만큼을 가져간다고 한 것이다.(md:col-span-2)
// 나머지 1은 mini profile 섹션에서 가져간다
