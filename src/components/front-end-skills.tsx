import HtmlIcon from '@mui/icons-material/Html';
import { Typography, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const frontEndLangs = ['JavaScript', 'TypeScript', 'ReactJS', 'HTML5', 'CSS']
const frontEndSkills = ['Jest','Cypress','Redux','Storybook','Contract Testing']

const FrontEndSkills = () => (
    <>
      <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar sx={{ bgcolor: "primary.main", width: '75px', height: '75px' }}>
          <HtmlIcon fontSize='large'/> 
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Frontend Skills
        </Typography>
        <Typography variant="h5" sx={{mt: '5%', color:"#6E07F3"}}>
          Languages I speak:
        </Typography>
        {frontEndLangs.map(skill => <Typography variant='body1' key={skill}>{skill}</Typography>)}
        <Typography variant="h6" sx={{mt: '5%', color:"#6E07F3"}}>
          Tools & Libraries
        </Typography>
        {frontEndSkills.map(skill => <Typography variant='body1' key={skill}>{skill}</Typography>)}
      </CardContent>
    </>
  );

export default FrontEndSkills;