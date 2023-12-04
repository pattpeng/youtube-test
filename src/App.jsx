
import './index.css'
import Sidebar from './Sidebar.jsx'
import GridItems from './GridItems.jsx'

function App() {
  return (
    <>
    <div className='header'>
      <div className='header1'>
        <img className='icon' src = './src/hamburger-menu.svg'></img>
        <img className='icon-logo' src = './src/youtube-logo.svg'></img>
      </div>
      <div className='header2'>
        <input className ='search-box' placeholder='Search'></input>
        <div className='search-button'><img class='search-icon' src = './src/home.svg'></img></div> 
        <div className='voice-button'><img class='voice-icon' src = './src/voice-search-icon.svg'></img></div>
        
      </div>
      <div className='header3'>
      <img className='icon'src= './src/upload.svg'></img>
      <img className='icon'src= './src/notif.svg'></img>
      <img className='icon' style={{ borderRadius: '20px' }} src= './src/profile.jpg'></img>
      </div>
    </div>
    <div className='middle'>
      <Sidebar/>
      <div className ='middle-right'>
        <div className ='float'>
          <button className='floatButton'> All </button>
          <button className='floatButton'> News </button>
          <button className='floatButton'> Music </button>
          <button className='floatButton'> Live </button>
          <button className='floatButton'> Watched </button>
          <button className='floatButton'> Recently Uploaded </button>
          <button className='floatButton'> New to you </button>
        </div>
        <div className ='grid'>
          <GridItems/>
        </div>
        <div className='shorts-header'>
          <img src='./src/shortsb.png' className='icon'/> <h2>Shorts</h2>
         </div>
        <div className='shorts-grid'>
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
            <div className='shorts-items'><img className='shorts-video' src='./src/shorts-img1.jpg'/></div> 
        </div>
        
      </div>
    </div>
       
    
    
    </>
  )
}

export default App
