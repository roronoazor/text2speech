import { render } from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './MenuBar';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


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


function DeveloperComponent(){
  const classes = useStyles();
    return (
    <div className="App">
        <ButtonAppBar />
        <Typography gutterBottom variant="h5" component="h4">
          About the developer
        </Typography>
        <Container>
        <Typography gutterBottom variant="h5" component="p">
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/assets/developer_cover_photo.jpg"
                title="profile image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  Hi, Nice to Meet You
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Need my services for a project you are working on??? Get in touch
                  <p>Whatsapp contact: 08106439619, 08138539470</p>
                  <p>Email: ugoodumegwu@gmail.com</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Typography align="left" variant="subtitle1" component="p">
            My name is Odumegwu Ugochukwu Pascal, am a passionate software developer, Data analyst and scientist from Nigeria.
            am currently working towards my master's degree, i have close to 5 year's experience in the tech industry, am a 
            full-stack developer, my tech stack includes python/django for backend development, java/spring mvc for fintech solutions and
            react/react-native for front-end and mobile applications. my philosophy in coding is <a href="http://blogs.wsj.com/digits/2011/08/24/steve-jobss-best-quotes/">simple is better than complex</a> which is
            the zen of python, and this principle guides me in writing simple and efficient code, irrespective of the programming language 
            i happen to be working with.
          </Typography>
          </Typography>
          <Typography align="left" variant="h5" component="h5">
            <u>Other skills & proficiencies:</u>
          <List className={classes.list_items}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Data Analysis, Data Scientist and A.I engineer" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Software Design" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Teamwork" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Software Debugging" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Software Design" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Software Documentation using ADT" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Problem Solving" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Understanding Software Requirements" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Understanding Software Development Process" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Effective Communication with Clients" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Understanding Algorithm Design (including time complexity and space complexity)" />
            </ListItem>
            
          </List>
          </Typography>
          <Typography align="left" variant="h5" component="h5">
            <p><u>Links to other projects</u></p>
            <p>Coming Soon</p>
            <p><u>Links to Main Porfolio page</u></p>
            <p>Coming Soon</p>            
          </Typography>
          
        </Container>
    </div>
    )
  }


export default DeveloperComponent;
  