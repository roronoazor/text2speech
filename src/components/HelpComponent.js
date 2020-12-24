import ButtonAppBar from './MenuBar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      float: "right"
    },
    list_items:{
      width: '100%',
      maxWidth: 500
    },
    media: {
      height: 200,
    },
    container:{
  
    }
  });
  


function HelpComponent(){

    const classes = useStyles();

    return (
    <div className="App">
        <ButtonAppBar />
        <Typography gutterBottom variant="h5" component="h4">
          About the application
        </Typography>
        <Container>
          <Typography align="left" variant="h5" component="h5">
            <p><u>Project Description</u></p>
            <Typography align="left" variant="body1" component="p">
                <p>The core functionality provided by this application, is an interface which allows a user to 
                    convert any written text to speech. the application gives the user the choice on how to input 
                    the written text, you could either:
                    <ul>
                        <li>type the text in the textbox provided, and click on the text to speech button</li>
                        <li>a user could also upload a .txt file from thier computer, using the file selector button</li>
                    </ul>
                </p>
                <p>Also a future realease of this application is coming soon, that will allow a user upload .pdf files
                    and convert them to speech.
                </p>
            </Typography>
            <Typography align="left" variant="subtitle2" component="p">
                <p>please note: as this is a demo application, there is an implicit limit to the number of text that
                    will be converted to speech, for a premium version of this application please contact the developer.
                </p>
            </Typography>
          </Typography>
    
          <Typography align="left" variant="h5" component="h5">
            <p><u>Tech Stack Used</u></p>
            <Typography align="left" variant="body1" component="p">
            <List className={classes.list_items}>
            <ListItem>
              <ListItemAvatar>      
                <Avatar alt="react_logo" src="/assets/logo192.png" />
              </ListItemAvatar>
              <ListItemText primary="React Js along with Material U.I design was used for front-end functionality and design" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                  <Avatar alt="google_logo" src="/assets/google_icon.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Googles Text to Speech A.P.I engine was employed" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="django_logo" src="/assets/django_icon.jpg" />
              </ListItemAvatar>
              <ListItemText primary="python/django was used on the backend to extract text from the uploaded pdf (functionality still under work)" />
            </ListItem>
          </List>
          
            </Typography>
          </Typography>
          
          <Typography align="left" variant="h5" component="h5">
            <p><u>Bugs & Issues</u></p>
            <Typography align="left" variant="body1" component="p">
                <p>Please if you noticed any bug or issue, or you have any idea on how to improve this application.
                    we would love to hear from you, either via Whatsapp: 081064439619, Email: ugoodumegwu@gmail.com
                </p>
            </Typography>
          </Typography>
        </Container>
    </div>
    )
  }
  

  export default HelpComponent;