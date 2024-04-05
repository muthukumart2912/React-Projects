import { Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Header from "./components/header";
import Featuredpost from "./components/featuredPost";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./components/postCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import styled from "@emotion/styled";
import Footer from "./components/footer";

const Demogrid = new styled(Grid)({
  marginTop: "20px",
});

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Featuredpost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Demogrid container spacing={5}>
          <Main title="From the Firehouse" />
          <Sidebar
            tittle={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Demogrid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      ></Footer>
    </ThemeProvider>
  );
}

export default App;
