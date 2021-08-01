import './App.css';
import Form  from "./components/Form/index";
import {Grid} from '@material-ui/core';
function App() {
  return (
    <div className="App">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={30}>
                <Form />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
