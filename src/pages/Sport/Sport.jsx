import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Sport/Sport.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
  Grid,
  GridItem,
  Button,
  Wrap,
  WrapItem
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
      <Grid
        h="50px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem colSpan={4} bg="while" border={"1px"} borderColor="red" />
      </Grid>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" color="red">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sports</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <HStack direction="column">
        <Text fontSize="25px" fontWeight="bold" color='red' >Sports</Text>
        <Wrap spacing={0} _hover>
          <WrapItem>
            <Button color="gray" variant='ghost' border="red">Gray</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Red</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Orange</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Yellow</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Green</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Teal</Button>
          </WrapItem>
          <WrapItem>
            <Button color="gray" variant='ghost'  border="red">Blue</Button>
          </WrapItem>
        </Wrap>
      </HStack>

      <Text fontWeight="bold" fontSize="20">
        Sports
      </Text>
      <HStack>
        <Box>
          <Carousel
            autoFocus={true}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows
            className="presentation-mode"
          >
            <Box maxW={730}>
              <Image src="https://images.indianexpress.com/2022/06/deborah-herold-cycling.jpg?resize=480,260" />
              <Text fontSize={25}>
                Cycling coach RK Sharma faces more heat: star cyclist Deborah
                Herold says he slapped, harassed her
              </Text>
            </Box>
            <Box maxW={720}>
              <Image src="https://images.indianexpress.com/2022/06/Untitled-design-9-3.jpg?resize=480,260" />
              <Text fontSize={25}>
                Where Liverpool’s record signing Darwin Nunez stands among
                Europe’s best goal-scorers
              </Text>
            </Box>
            <Box maxW={720}>
              <Image src="https://images.indianexpress.com/2022/06/Rahul-Tewatia.jpg?resize=480,260" />
              <Text fontSize={25}>
                ‘Expectations hurt’: Rahul Tewatia tweets after Team India snub
                for Ireland tour
              </Text>
            </Box>
            <Box maxW={720}>
              <Image src="https://images.indianexpress.com/2022/06/shreyas-iyer-rishabh-pant.jpg?resize=480,260" />
              <Text fontSize={25}>
                India versus Ireland: Rishabh Pant & Shreyas Iyer’s omission
                from T20I squad likely due to commitment for the Birmingham Test
              </Text>
            </Box>
            <Box maxW={720}>
              <Image src="https://images.indianexpress.com/2022/06/Untitled-design-7.jpg?resize=480,260" />
              <Text fontSize={25}>
                Faster, Sharper, Better – the all new Bhuvneshwar Kumar is back
                with a bang
              </Text>
            </Box>
          </Carousel>
        </Box>
        <Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/ranji-trophy-semifinal-day-3-live.jpg?resize=250,175" />
            <Text fontSize="17px">
              Faster, Sharper, Better – the all new Bhuvneshwar Kumar is back
              with a bang
            </Text>
          </Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/tomore-mumbai-cricket.jpg?resize=250,175" />
            <Text fontSize="17px">
              Faster, Sharper, Better – the all new Bhuvneshwar Kumar is back
              with a bang
            </Text>
          </Box>
        </Box>
      </HStack>

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
