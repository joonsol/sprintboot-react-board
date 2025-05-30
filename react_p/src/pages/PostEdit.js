import React,{useState,useEffect} from 'react'
import "../css/PostEdit.css"
import { useParams, useNavigate,Link } from 'react-router-dom'
const PostEdit = () => {
const {id}=useParams()
const navigate= useNavigate()

const [title, setTitle]=useState('')

const [content, setContent]=useState('')


useEffect(()=>{

  setTitle(`${id}번째 게시글 작성`)
  setContent(`${id}번째 게시글 상세 내용입니다.`)

},[id])


const handleSubmit=(e)=>{
  e.preventDefault()

  alert('게시글이 수정되었습니다.')
  navigate(`/post/${id}`)
}
  return (
    <div className='post-edit-container'>
      <h1 className="post-edit-title">게시글 수정</h1>
      <form onSubmit={handleSubmit} className='post-edit-form'>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input 
          id={title}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder='제목을 입력하세요'

          type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea 
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          placeholder='내용을 입력하세요'
          id="content" />

        </div>
        <div className="button-group">
          <button type="submit" className='submit-button'>수정완료</button>
          <Link to="/"  className='cancel-button'>취소</Link>
        </div>
      </form>
    </div>
  )
}

export default PostEdit