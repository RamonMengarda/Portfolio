import React from 'react';
import ReactDOM from 'react-dom';
import { ExcelRenderer, OutTable } from 'react-excel-renderer';

import './styles.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {

  var fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               
  }
  
  return (
    <div className="App">
      <FadeInSection>
        <div className="firstbox">
          <div className='en'>
            Hello, my name is Ramon Mengarda. I'm a developer
          </div>
          <hr></hr>
          <div className='pt'>
            Olá, meu nome é Ramon Mengarda. Sou desenvolvedor.
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="box">
          <div className='en'>
            Let me show you what I can do:
          </div>
          <hr></hr>
          <div className='pt'>
            Deixa eu te mostrar o que eu sei: 
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="box">
          <div className='en'>
            This portfolio is architetured using microservices, using different languages.
          </div>
          <hr></hr>
          <div className='pt'>
            Este portfolio é arquitetado em microsserviços, usando diferentes liguagens.
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="box">
          <div className='en'>
            Each part is accessible via REST API or messagery service.
          </div>
          <hr></hr>
          <div className='pt'>
            Cada parte está acessível por API REST ou serviço de mensageria.
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="box">
          <div className='en'>
          All services are running on containers and are built with CI/CD pipelines.
          </div>
          <hr></hr>
          <div className='pt'>
          Todos os serviços estão rodando em conteineres e são construídos com pipelines de CI/CD.
          </div>
        </div>
      </FadeInSection>
    </div>
    <p>
      <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
      <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
    </p>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);