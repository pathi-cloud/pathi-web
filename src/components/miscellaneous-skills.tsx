import { Typography, CardContent } from "@mui/material"
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices"
import Avatar from "@mui/material/Avatar"

const frontEndLangs = [
  "CI/CD Automation",
  "Re-usable Actions",
  "Re-Usable Workflows",
]
const frontEndSkills = [
  "Docker",
  "Kubernetes",
  "Helm",
  "GitHub Copilot",
  "Backstage",
  "PACT Broker",
]

const MiscellaneousSkills = () => (
  <>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ bgcolor: "primary.main", width: "75px", height: "75px" }}>
        <MiscellaneousServicesIcon fontSize="large" />
      </Avatar>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Miscellaneous
      </Typography>
      <Typography
        variant="h5"
        sx={{ mt: "5%", textAlign: "center", color: "#6E07F3" }}
      >
        AWS Certified <br />
        Developer Associate
      </Typography>
      {frontEndLangs.map((skill) => (
        <Typography variant="body1" key={skill}>
          {skill}
        </Typography>
      ))}
      <Typography variant="h6" sx={{ mt: "5%", color: "#6E07F3" }}>
        Tools & Libraries
      </Typography>
      {frontEndSkills.map((skill) => (
        <Typography variant="body1" key={skill}>
          {skill}
        </Typography>
      ))}
    </CardContent>
  </>
)

export default MiscellaneousSkills
