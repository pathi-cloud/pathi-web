import { Box } from '@mui/material';


const MicroApp = ({path} : {path: string}) => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
            component="iframe"
            src={path}
            sx ={{width: '100%', height: '100%', border: 'none' }}
        />
    </Box>
  )
}

export default MicroApp;
