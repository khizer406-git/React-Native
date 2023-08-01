import './App.css';
import Button from './Button';
import Header from './Header'
import Tasker from './Tasker'

function App(){

    const handleClick = () => {
        console.log("Click parent")
    }

    return(
        <div>
            <Header title={'tut'}/>
            <Button color={'green'} text={'Add'} func={handleClick}/>
            <Tasker/>
        </div>
    )
  }

export default App;