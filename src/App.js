import resume from './components/resume'
import Name from './components/name'
import Photo from './components/photo'
import Date from './components/date'
import Skills from './components/skills'
import Character from './components/character'
import Wishes from './components/wishes'
import './app.css'

function App() {
  return (
    <div className='my-container'>
      <div className='my-resume'>
        <Name name={resume.name}/>
        <Photo photo={resume.photo}/>
        <Date date={resume.date}/>
        <Skills skills={resume.skills}/>
        <Character character={resume.character}/>
        <Wishes wishes={resume.wishes}/>
      </div>
    </div>
  );
}

export default App;

