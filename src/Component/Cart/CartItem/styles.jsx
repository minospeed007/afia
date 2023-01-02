import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  media: {
    height: 120,
    margin:2,

  },
  cardContent: {
    display: 'flex',
  },
  cardActions:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  buttons:{
    display: 'flex',
    marginRight:10,
    color:'black',
  },
 
}));