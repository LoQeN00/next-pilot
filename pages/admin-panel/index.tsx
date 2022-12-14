import React from 'react'


interface Props {
    paths: Array<string>
}

const AdminPanel = ({paths}: Props) => {

    const revalidate = async (path: string) => {
        const data = await fetch(`/api/revalidate?page=${path}`)
        const json = await data.json()
        console.log(json)
    }

    console.log(paths)
  return (
    <div>
        <h1>AdminPanel</h1>
        {paths && paths.map((path, index) => {
            return (
                <div key={index} style={{padding: "10px"}}>
                    <p>{path}</p>
                    <button onClick={() => revalidate(path)}>Odśwież strone</button>
                </div>
            )
        })}
    </div>
  )
}


export const getServerSideProps = async () => {
    const data = await fetch("http://localhost:3000/api/getPages")
    const response = await data.json()
    


    return {
        props: {paths: response.paths}
    }
   
    
    
}


export default AdminPanel
