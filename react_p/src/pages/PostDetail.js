import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../css/PostDetail.css"
import axios from 'axios'
const PostDetail = () => {

  const { id } = useParams()


  const [post, setPost] = useState({

    title: "",
    content: ""
  })
  const getPost = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then(response => {
        console.log("게시글 가져오기 성공", response.data)
        setPost(response.data)
      })
      .catch(error => {
        console.error("게시글 가져오기 실패", error)
      })
  }


  useEffect(() => {
    getPost()
  }, [])

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