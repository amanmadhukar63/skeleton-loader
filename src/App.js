import './App.css';
import SkeletonLoader from './components/SkeletonLoader.tsx';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <div style={{width:'100%',height:'40%'}}><SkeletonLoader /> </div>
        <div style={{width:'100%',height:'60%',padding:'4px'}}>
          <div style={{margin:'10px 4px',width:'90%',height:'15%'}}><SkeletonLoader /></div>
          <div style={{margin:'10px 4px',width:'90%',height:'35%'}}><SkeletonLoader /></div>
        </div>
      </div>
      <div className='card'>
        <div style={{width:'100%',height:'40%'}}><SkeletonLoader /> </div>
        <div style={{width:'100%',height:'60%',padding:'4px'}}>
          <div style={{margin:'10px 4px',width:'90%',height:'15%'}}><SkeletonLoader /></div>
          <div style={{margin:'10px 4px',width:'90%',height:'35%'}}><SkeletonLoader /></div>
        </div>
      </div>
      <div className='card'>
        <div style={{width:'100%',height:'40%'}}><SkeletonLoader /> </div>
        <div style={{width:'100%',height:'60%',padding:'4px'}}>
          <div style={{margin:'10px 4px',width:'90%',height:'15%'}}><SkeletonLoader /></div>
          <div style={{margin:'10px 4px',width:'90%',height:'35%'}}><SkeletonLoader /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
