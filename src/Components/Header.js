import reactlogo from '../Images/logo512.png'
export default function Header1(){
    return(
        <header>
         <nav className='nav'>
          <img src={reactlogo} className='img-class'/>
          <h2 className='react-header'>React Facts</h2>
          <ul className='navBar'>
            <li>Pricing</li>
            <li>About</li>
            <li>Content</li>
          </ul>
         </nav>
        </header>

    )
}
