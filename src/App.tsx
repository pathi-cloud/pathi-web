import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from "./components/app-header"
import { Typography, Box, Toolbar, Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import myImage from './assets/pathi-yugandhar.jpeg';
//import Grid from '@mui/material/Grid2';
import FrontEndSkills from './components/front-end-skills'
import BackEndSkills from './components/back-end-skills';
import MiscellaneousSkills from './components/miscellaneous-skills'

function App() {
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <Toolbar />
      <Box component="main" sx={{ mt: '40px', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ mt: '1rem', display:'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
          <Typography variant="h3" sx={{fontWeight: 'bold'}}>Principal Cloud Developer</Typography>
          <Typography variant="h6">Passionate About Cloud, Micro Frontends, and DevOps Automation.</Typography>
        </Box>
        <Avatar src={myImage} sx={{ mt:'30px', width: '300px', height: '300px' }} />
        <Box sx={{ mt:'30px', width:'100%', height:'500px' ,backgroundColor: "#6E07F3", display:'flex', flexDirection:'column', alignItems: 'center', color:'white', gap:'20px'}}>
          <Typography variant="h4" sx={{mt: '30px'}}>
            Hi, I'm Yugandhar. Nice to meet you.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            I am an experienced Cloud Engineer specializing in Micro Frontend Architecture and Reusable Component Design.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            With expertise in ReactJS, TypeScript, and GraphQL, I build seamless and scalable user interfaces while leveraging Golang for backend development.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            My strong background in AWS, Kubernetes, Docker, and Helm enables me to develop and deploy cloud-native applications efficiently.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: '-5%',flexDirection: {xs: 'column', sm: 'row'}, gap: '10px'}}>

            <Card variant="outlined" sx={{ minWidth: 350 }}>
              <FrontEndSkills />
            </Card>
            <Card variant="outlined" sx={{ minWidth: 350 }}>
              <BackEndSkills />
            </Card>

            <Card variant="outlined" sx={{ minWidth: 350 }}>
              <MiscellaneousSkills />
            </Card>

        </Box>
      </Box> 
      <Box component="footer" sx={{ 
        py: 2, 
        mt: 10,
        textAlign: "center", 
        backgroundColor: "#6E07F3", 
        color: "white" 
      }}>
        <Typography variant="body1">Developed with ❤️ by Yugandhar</Typography>
        <Typography variant="body2">© 2025 Yugandhar Pathi. All rights reserved.</Typography>
      </Box>
       {/* <Grid container direction="column" alignItems="center">
        <Grid>
          <Typography variant="h3" sx={{fontWeight: 'bold'}}>Principal Cloud Developer</Typography>
          <Typography variant="h6">Passionate About Cloud, Micro Frontends, and DevOps Automation.</Typography>
        </Grid>
        <Avatar src={myImage} sx={{ mt:'30px', width: '300px', height: '300px' }} />
        <Grid container direction="column" alignItems="center" size={12} spacing={{xs:2, md:3}} sx={{ mt:'30px',height:'500px',backgroundColor: "primary.main", color:'white'}}>
          <Typography variant="h4" sx={{mt: '30px'}}>
            Hi, I'm Yugandhar. Nice to meet you.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            I am an experienced Cloud Engineer specializing in Micro Frontend Architecture and Reusable Component Design.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            With expertise in ReactJS, TypeScript, and GraphQL, I build seamless and scalable user interfaces while leveraging Golang for backend development.
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>
            My strong background in AWS, Kubernetes, Docker, and Helm enables me to develop and deploy cloud-native applications efficiently.
          </Typography>
        </Grid>
        <Grid container spacing={{xs:2, md:3}} direction="row" sx={{ mt: '-5%'}}>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>
        </Grid> 
      </Grid> */}
    </>
  )
}

export default App
