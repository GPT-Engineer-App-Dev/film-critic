import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Movie Reviews
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share reviews of your favorite movies.
        </Text>
        <Box w="full" py={5}>
          <Heading as="h2" size="lg" mb={4}>
            Featured Movies
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/movie1.jpg" alt="Movie 1" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 1
                </Heading>
                <Text>
                  A brief description of Movie 1. This is where you can add a short review or summary.
                </Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/movie2.jpg" alt="Movie 2" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 2
                </Heading>
                <Text>
                  A brief description of Movie 2. This is where you can add a short review or summary.
                </Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/movie3.jpg" alt="Movie 3" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 3
                </Heading>
                <Text>
                  A brief description of Movie 3. This is where you can add a short review or summary.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;