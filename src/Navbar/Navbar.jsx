import './Navbar.css'

const Navbar = () => {
  
  
  function cli(){
    const a=document.getElementById("nav1");
    const b=document.getElementById("abt1");
    const c=document.getElementById("skill1");
    const d=document.getElementById("foot1");
  
    a.style.backgroundColor="black"
    b.style.backgroundColor="black"
    c.style.backgroundColor="black"
    d.style.backgroundColor="black"
    a.style.color="white"
    b.style.color="white"
    c.style.color="white"
    d.style.color="white"
  }
  function dbcli(){
    const a=document.getElementById("nav1");
    const b=document.getElementById("abt1");
    const c=document.getElementById("skill1");
    const d=document.getElementById("foot1");
  
    a.style.backgroundColor="white"
    b.style.backgroundColor="white"
    c.style.backgroundColor="white"
    d.style.backgroundColor="white"
    a.style.color="black"
    b.style.color="black"
    c.style.color="black"
    d.style.color="black"
  }
  return (
    <><div className="Navbar" id='nav1'>
    <nav>
        <div><i className="fa-brands fa-apple"></i></div>
        <div>Home</div>
        <div>About</div>
        <div>Gallery</div>
        <div>Contact</div>
        <div>Services</div>
        <div className="media"><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-twitter"></i>
        
        <button onClick={cli} onDoubleClick={dbcli}>dmode</button>
        </div>
    </nav>
  </div>
  <div class></div>
  </>
    

  )
}

export default Navbar