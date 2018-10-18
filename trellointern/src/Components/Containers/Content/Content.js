import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
};

function Content(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('./image.jpg')}
                        title="Create Team"
                        height='100'
                        />

                        <CardContent>
                        <Grid container>
                            
                            <Grid item xs={6}>
                            </Grid>

                            <Grid item xs={6}>
                                <Button size="small" color="secondary">
                                     Create a team
                                </Button>
                            </Grid>
                        </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('./welcome.jpg')}
                        title="Penta Boards"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Welcome to Penta Boards
                            </Typography>
                            <Typography component="p">
                            An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage
                                <strong> Jack Welch</strong>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        
                        <Grid container spacing={24}>
                            <Grid item xs={2}>
                            </Grid>

                            <Grid item xs={3}>
                                <Button size="small" color="secondary">
                                     Share
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button size="small" color="secondary">
                                    Create boards
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
            <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('./task.jpg')} 
                        title="Create a board"
                        height='100'
                        />

                        <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                            </Grid>

                            <Grid item xs={6}>
                                <Button size="small" color="secondary">
                                     Create a board
                                </Button>
                            </Grid>
                        </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
