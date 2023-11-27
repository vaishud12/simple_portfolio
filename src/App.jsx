
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import About from './About/About'
import Skills from './Skills/Skills'
import Footer from './Footer/Footer'
function App() {
  function cli(){
    document.body.style.backgroundColor="black"
  }
  return (
    <>
      <Navbar />
      <Profile/>
      
      <About/>
      <Skills/>
  
      <Footer/>
        
    </>
  )
}

export default App

// import Aboutpr from './Aboutpr/Aboutpr'
// const App = () => {
//   return (
//     <><Aboutpr /></>
//   )
// }

// export default App