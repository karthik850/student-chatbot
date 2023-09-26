import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Card sx={{ width: "max-content" }} className="app-chatbot-home">
        {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
        <CardContent className="animate__animated animate__pulse">
          <Typography gutterBottom variant="h5" component="div">
            Welcome to student Info
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter into the student Info System
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button variant="contained" onClick={() => navigate("/chatbot")}>
            Enroll Now!
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default HomePage;
