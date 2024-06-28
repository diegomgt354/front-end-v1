import React from 'react'
const AppPagination = ({page, lastPage, onHandlePreviousPage, onHandleNextPage}) => {
    return (
        <div className="flex justify-center">
            
            <button className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 
            bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 
            disabled:opacity-50 disabled:hover:text-gray-500 disabled:hover:bg-white"
            disabled={page === 1}
            onClick={()=>onHandlePreviousPage()}
            >
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Previous
            </button>

            <span className='flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500'>Page {page} of {lastPage}</span>

            <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 
            bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700
            disabled:opacity-50 disabled:hover:text-gray-500 disabled:hover:bg-white"
            disabled={page === lastPage}
            onClick={()=>onHandleNextPage()}
            >
                Next
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>

        </div>
    )
}

export default AppPagination;
