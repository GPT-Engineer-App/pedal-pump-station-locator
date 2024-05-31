import { useState } from "react";
import { Container, Text, VStack, Box, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const bikePumpStations = [
  { id: 1, name: "Station 1", lat: 59.3293, lng: 18.0686 },
  { id: 2, name: "Station 2", lat: 59.3326, lng: 18.0649 },
  { id: 3, name: "Station 3", lat: 59.334, lng: 18.07 },
];

const Index = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <Box width="100%" height="400px" border="1px solid #ccc" borderRadius="md" position="relative">
          {bikePumpStations.map((station) => (
            <IconButton key={station.id} aria-label={station.name} icon={<FaMapMarkerAlt />} size="lg" position="absolute" top={`calc(${station.lat - 59.3293} * 10000px)`} left={`calc(${station.lng - 18.0686} * 10000px)`} onClick={() => setSelectedStation(station)} />
          ))}
        </Box>
        {selectedStation && (
          <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text fontSize="lg">{selectedStation.name}</Text>
            <Text>Latitude: {selectedStation.lat}</Text>
            <Text>Longitude: {selectedStation.lng}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
