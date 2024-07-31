// @mui material components
// import { Grid } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/art-image.jpg";

import Footer from "../Author/sections/Footer";

function ArtClasses() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          // action={{
          //   type: "external",
          //   route: "https://www.creative-tim.com/product/material-kit-react",
          //   label: "free download",
          //   color: "info",
          // }}
        />
      </MKBox>
      <MKBox
        display={{ xs: "none", lg: "flex" }}
        width="calc(100% - 2rem)"
        height="calc(100vh - 2rem)"
        borderRadius="lg"
        ml={2}
        mt={2}
        sx={{ backgroundImage: `url(${bgImage})` }}
      />
      <MKBox>
        <MKTypography variant="body1" color="black" opacity={0.8} mt={1} mb={3}>
          Art Classes
        </MKTypography>
      </MKBox>
      <Footer />
    </>
  );
}

export default ArtClasses;
