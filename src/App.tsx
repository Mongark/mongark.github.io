import './App.css'

interface CardProps {
  title: string;
  description: string;
  content: any;
}

function Card(props: CardProps) {
  return(
    <div className="card">
      <h2>{ props.title       }</h2>
      <h5>{ props.description }</h5>
      { props.content     }
    </div>
  );
}

function App() {
  return (
    <>
      <div className="header">
        <h1>Geo Principe</h1>
        <p>Web Developer</p>
      </div>

      <div className="navbar">
        <a href="#">Home</a>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <Card title="Test" description="123" content={
            <>
              <p>Hellow</p> <br/>
              <p>Hellow</p> <br/>
              <p>Hellow</p>
            </>
          } />
        </div>
        <div className="rightcolumn">
          <Card title="Test" description="123" content={
            <>
              <p>Hellow</p> <br/>
              <p>Hellow</p> <br/>
              <p>Hellow</p>
            </>
          } />
        </div>
      </div>
    </>
  )
}

export default App
