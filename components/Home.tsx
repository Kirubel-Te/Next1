async function Home(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums",{cache:'no-store'})
    if(!response.ok) throw Error("Failed to fetch albums")
    const albums = await response.json()
    
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {albums.map((album: {id:number, title: string}) => (
            <div key={album.id} className=' bg-gray-900 shadow-md rounded-lg p-4 transition transform hover:scale-105'>
              <h2 className="text-lg font-bold mb-2">{album.title}</h2>
              <p className="text-grey-600">Album Id: {album.id}</p>
            </div>
          ))}
        </div>
    )
}
export default Home