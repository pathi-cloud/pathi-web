import { Typography, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import golangIcon from '../assets/golang.png';

const frontEndLangs = ['Golang']
const frontEndSkills = ['wire','grpc','chi','godog','mockery','testify','Swagger Spec','squirrel','mountebank']

const BackEndSkills = () => (
    <>
      <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar src={golangIcon} sx={{ bgcolor: "primary.main", width: '75px', height: '75px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Backend Skills
        </Typography>
        <Typography variant="h5" sx={{mt: '5%',color:"#6E07F3"}}>
          Languages I speak:
        </Typography>
        {frontEndLangs.map(skill => <Typography variant='body1' key={skill}>{skill}</Typography>)}
        <Typography variant="h6" sx={{mt: '5%',color:"#6E07F3"}}>
          Tools & Libraries
        </Typography>
        {frontEndSkills.map(skill => <Typography variant='body1' key={skill}>{skill}</Typography>)}
      </CardContent>
    </>
  );

export default BackEndSkills;