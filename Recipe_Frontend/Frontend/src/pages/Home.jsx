import React from 'react'
import image from '../assets/image.png'
function Home() {
  return (
    <>
    
      <section className="home">
        <div className="left">
          <h1 style={{marginBottom:'1 rem'}} >Food Recipe</h1>
          <h5 style={{margin:'2rem 0'}}>Explore a world of flavors, share your own recipes, and connect with fellow food lovers. From home cooks to seasoned chefs, BiteBuddies makes cooking social, fun, and effortless. Save favorites, collaborate in real time, and bring your culinary ideas to life.</h5>
          <button>Share your Recipe</button>
        </div>
        <div className="right">
        <img  src={image} width="1120px" height="300 px"></img>

        </div>

      </section>
      <div className='bg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,64L14.1,80C28.2,96,56,128,85,117.3C112.9,107,141,53,169,48C197.6,43,226,85,254,117.3C282.4,149,311,171,339,197.3C367.1,224,395,256,424,234.7C451.8,213,480,139,508,96C536.5,53,565,43,593,58.7C621.2,75,649,117,678,138.7C705.9,160,734,160,762,176C790.6,192,819,224,847,213.3C875.3,203,904,149,932,144C960,139,988,181,1016,208C1044.7,235,1073,245,1101,213.3C1129.4,181,1158,107,1186,90.7C1214.1,75,1242,117,1271,112C1298.8,107,1327,53,1355,58.7C1383.5,64,1412,128,1426,160L1440,192L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>
       </div>
      
    </>
  )
}

export default Home
