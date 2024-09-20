import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>404 Not Found</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page you are looking for does not exist."
            : "An error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
