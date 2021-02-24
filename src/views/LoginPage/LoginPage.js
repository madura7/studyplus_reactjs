import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={5}>
          <div style={{ backgroundColor: "#D1D0CE", height: "100vh" }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.achievegoalListText2}>StudyPlus</p>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={7}>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Login</h4>
              <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={"fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={"fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={"fab fa-google-plus-g"} />
                </Button>
              </div>
            </CardHeader>

            <p className={classes.divider}>Or Be Classical</p>
            <CardBody>
              <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "email",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Password"
                id="pass"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  ),
                  autoComplete: "off",
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg">
                Get started
              </Button>
            </CardFooter>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
