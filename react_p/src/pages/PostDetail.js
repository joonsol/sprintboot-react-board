import React from 'react'
import { useParams, Link } from 'react-router-dom'
import "../css/PostDetail.css"
const PostDetail = () => {

  const { id } = useParams()


  const post = {
    id,
    title: `${id}번째 게시글`,
    content: `${id}번째 게시글 상세 내용입니다., 이곳에 게시글이 들어갑니다.`
  }

  const handleDelete = () => {
    alert('게시글 삭제')
  }
  return (
    <div className='post-detail-container'>
      <h1 class="post-detail-title">
        {post.title}
      </h1>
      <p class="post-detail-content">
        {post.content}
      </p>
      <div class="button-group">
        <Link to={`/post/edit/${id}`} className='edit-button'>수정하기</Link>
        <button onClick={handleDelete} className='delete-button'>
          삭제하기
        </button>
        <Link to='/' className='back-link'>목록으로 돌아가기</Link>

      </div>
    </div>
  )
}

export default PostDetail