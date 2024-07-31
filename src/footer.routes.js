// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logoCT from "/home/sheridan95/practice_projects/PracticeProject_/src/assets/images/TinyArtisans Logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    // name: "Home",
    // image: logoCT,
    // route: "/pages/landing-pages/about-us",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/tinyartisans",
    // },
  ],
  menus: [
    // {
    //   name: "personal",
    //   items: [
    //     { name: "github", href: "https://github.com/sheridan-austad" },
    //     // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
    //     // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
    //     { name: "blog", href: "https://dev.to/sheridan95" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
