import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const Confirmation = () => {
  const data = useSelector((state) => state.studentData);
  const handlechage = () => {
    // window.opener = null;
    window.open('', '_self', '');
  window.close();
  };
  return (
    <Container fixed>
      <Card sx={{ width: "max-content" }} className="app-chatbot-container">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hi {data.name} !
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your data has been added to system
          </Typography>

          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Name
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    {data.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Age
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    {data.age}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Date
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    {data.date}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Time
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    {data.time}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={handlechage}
            style={{ left: "40%" }}
          >
            Exit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Confirmation;
