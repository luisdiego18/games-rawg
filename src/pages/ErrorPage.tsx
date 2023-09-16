import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading as={"h1"} marginY={5} fontSize="5xl">
          Ooops...
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exists."
            : "An Unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
