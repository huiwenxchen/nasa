import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LikeButton from './Heart'
import Grid from '@mui/material/Grid'
import ShareButton from './Share'
import { StyledCard } from '../../Containers/Photos/styles'
// import { Link } from 'react-router-dom'

const Post = ({ title, copyright, date, explanation, url, mediaType }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  if (!copyright) {
    copyright = "NASA"
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  return (
    <>
    <div style={{ padding: 30}}>

    <Grid>
    <StyledCard>
    <Card sx={{ maxWidth: 500}}>
    <CardHeader
        avatar={
          <Avatar 
            sx={{ width: 40, height: 40 }}
            alt="NASA"
            src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" >
          </Avatar>
        }
        title={copyright}
        subheader={date}
      />
      <a href={url} style={{ textDecoration: 'none'}}>
        <CardMedia
          alt={title}
          src={url}
        > 
          {mediaType === "image" ? <img src={url} alt={title} width="100%vw" height="100%vh"/> : <iframe height="100%vh" width="100%vw" src={url} title={title} />}
        </CardMedia>
      </a>
      <CardContent>
        {/* <Link to={`/photos/${date}`} >Link </Link> */}
        <Typography variant="paragraph" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {explanation.substring(0, 300)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikeButton />
        <ShareButton url={url} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
      </Collapse>
    </Card>
    </StyledCard>
    </Grid>
    
    </div>
    </>
  )
}

export default Post
