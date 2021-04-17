import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
    }
}))

const Home = () => {
  const classes = useStyles();
  return (
      <h1>This is the home page</h1>
  )
}

export default Home
