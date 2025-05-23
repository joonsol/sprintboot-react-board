import React from 'react'

import "../css/CreatePost.css"
const CreatePost = () => {
  return (
    <div className='create-post-container'>
      <h1 className='create-post-title'>게시글 작성</h1>
      <form  class="create-post-form">
        <div class="form-group">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" placeholder='제목을 입력하세요'/>
        </div>
        <div class="form-group">
          <label htmlFor="title">내용</label>
          <textarea  id="content" placeholder='내용을 입력하세요'>

          </textarea>
        </div>
        <button className='submit-button' type="submit">등록</button>
      </form>
    </div>
  )
}

export default CreatePost