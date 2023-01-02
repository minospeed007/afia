import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    marginLeft:5,
    marginTop:100,
  },
  media: {
    height: 100,
    width: 200,
    paddingTop: '56.25%', // 16:9
    marginLeft:5,

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
