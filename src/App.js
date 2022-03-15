
import './App.css';
import myImg from "./Assets/image.jpg"
function App() {
  return (
    
    <div style={{ border:"solid 1px noir",maxWidth:"100vw"}}>

<h1 className="title">
  <span>B</span>
  <span>o</span>
  <span>n</span>
  <span>j</span>
  <span>o</span>
  <span>u</span>
  <span>r</span>
  </h1>

<br/>

<img className='img' src={myImg} alt="myimg" />



<img  className='imgg' src="/img.jpg" alt="imgg" />
<br/>
<iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/tQzev_ZTrYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


  );
}

export default App;
