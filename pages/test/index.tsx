import React from 'react'



const TestPage = ({timestamp}:any) => {
  return (
    <div>
      <h1>{timestamp}</h1>
    </div>
  )
}

export default TestPage

export async function getStaticProps() {
  return {
    props: {
      timestamp: new Date().toISOString()
    },
  }
}