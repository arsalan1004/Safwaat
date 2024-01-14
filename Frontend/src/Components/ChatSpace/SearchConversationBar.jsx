import React from 'react'
import { useImperativeHandle } from 'react'

const SearchConversationBar = ({search, setSearch}) => {



  return (
    <form className='w-[90%] mx-auto py-4'>
      {/* <label htmlFor='search' className='hidden'>Search</label> */}
      <input  
        type='text'
        className='w-[100%] mx-auto outline-none rounded-[40px] px-2 py-2 font-Poppins text-[12px] font-regular'
        role='searchbox'
        placeholder='search conversations..'
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        
      />
    </form>
  )
}

export default SearchConversationBar