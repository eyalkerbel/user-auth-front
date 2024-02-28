import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

function NavigationBar(): JSX.Element {
  return <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
        User Admin App
      </Typography>
      <Button style={{marginRight: '1rem'}} color="inherit" component={Link} to="/">
        New
      </Button>
      <Button color="inherit" component={Link} to="/users">
        Users
      </Button>
    </Toolbar>
  </AppBar>
}


export default NavigationBar