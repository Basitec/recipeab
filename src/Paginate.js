import React from 'react'

function Paginate({ currentPage, totalPages, onPageChange }) {
  return (
    <div className='Pagination'>
      <button 
      disabled={currentPage ===1}
      onClick={()=> onPageChange(currentPage-1)}
      >Previous</button>

      <span>Page <b>{currentPage}</b> of {totalPages}</span>

      <button 
      disabled={currentPage ===totalPages}
      onClick={()=> onPageChange(currentPage+1)}
      >Next</button>
    </div>
  )
}

export default Paginate
