import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Box,
  Image,
  HStack,
  Container,
} from "@chakra-ui/react";

const Sport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6`
      )
      .then((r) => setData(r.data.articles))
      .catch((e) => console.log(e));
  }, []);

  console.log(data);
  return (
    <Container mr="150" ml="150">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sports</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div>
        {data.map((value) => (
          <Box key={value.url}>
            <HStack>
              <Box boxSize="sm">
                <Image boxSize="200px" src={value.urlToImage} alt="SportNews" />
              </Box>
              <Box>
                <Heading>{value.title}</Heading>
                <Text>{value.publishedAt}</Text>
                <Text>{value.description}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </div>
    </Container>
  );
};

export default Sport;
