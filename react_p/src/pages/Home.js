import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
const Home = () => {

  const allPosts = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    title: `${index + 1}번째 게시글`,
    content: `${index + 1}번째 게시글 내용입니다.`,
  }))

  const postsPerpage = 10
  const [currentPage, setCurrentPage] = useState(1)



  const indexOfLastPost = currentPage * postsPerpage
  const indexOfFirstPost = indexOfLastPost - postsPerpage

  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost)


  const totalPages = Math.ceil(allPosts.length / postsPerpage)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='home-container'>
      <h1 class="home-title">게시글 목록</h1>
      <div class="posts-list">
        {currentPosts.map(post => (
          <div key={post.id} className='post-card'>
            <h2 className='post-title'>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p class="post-content">
              {post.content}
            </p>

          </div>
        ))}
      </div>
      <div class="pagination">
        {pageNumbers.map((number)=>(
          <button 

          className={`page-btn ${number===currentPage? 'active':''}`}
          key={number}>
            {number}
          </button>
        ))}
      </div>
      <Link to="/create" className='create-link'>게시글 작성하기</Link>
    </div>
  )
}

export default Home