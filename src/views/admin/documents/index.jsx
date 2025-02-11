// Chakra imports
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaFilePdf, FaFileMedical, FaFilePrescription, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import Dropzone from "views/admin/profile/components/Dropzone";
import React from "react";

const documentsData = [
  { date: "February 10, 2025", title: "MRI Scan Report", format: "PDF", icon: FaFilePdf },
  { date: "February 5, 2025", title: "Blood Test Results", format: "PDF", icon: FaFileMedical },
  { date: "January 25, 2025", title: "Chemotherapy Prescription", format: "PDF", icon: FaFilePrescription },
  { date: "January 15, 2025", title: "Oncologist Consultation Notes", format: "PDF", icon: FaFilePdf },
  { date: "December 20, 2024", title: "Surgery Discharge Summary", format: "PDF", icon: FaFileMedical },
];

const educationalResources = [
  { title: "Understanding Sarcoma", link: "#", icon: FaExternalLinkAlt },
  { title: "Managing Chemotherapy Side Effects", link: "#", icon: FaExternalLinkAlt },
  { title: "Exercise Tips for Cancer Patients", link: "#", icon: FaExternalLinkAlt },
  { title: "Mental Health Support for Cancer Patients", link: "#", icon: FaExternalLinkAlt },
  { title: "Nutritional Guidance During Treatment", link: "#", icon: FaExternalLinkAlt },
];

export default function DocumentsPage(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card p='20px' align='center' direction='column' w='100%' {...rest}>
        <Flex alignItems='center' w='100%' mb='30px'>
          <Icon as={FaFileMedical} color={brandColor} w='24px' h='24px' me='12px' />
          <Text color={textColor} fontSize='lg' fontWeight='700'>
            Important Medical Documents
          </Text>
          <Menu ms='auto' />
        </Flex>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} px='11px'>
          {documentsData.map((doc, index) => (
            <GridItem key={index} p='15px' bg={boxBg} borderRadius='8px' display='flex' alignItems='center'>
              <Icon as={doc.icon} color={brandColor} w='24px' h='24px' me='16px' />
              <Text fontWeight='bold' color={textColor} fontSize='md'>{doc.title}</Text>
              <Text ms='auto' color='gray.500' fontSize='sm'>{doc.date}</Text>
            </GridItem>
          ))}
        </Grid>
      </Card>
      
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt='20px'>
        <Card p='20px' align='center' direction='column' w='100%' {...rest}>
          <Flex alignItems='center' w='100%' mb='30px'>
            <Icon as={FaBookOpen} color={brandColor} w='24px' h='24px' me='12px' />
            <Text color={textColor} fontSize='lg' fontWeight='700'>
              Recommended Educational Resources
            </Text>
          </Flex>
          <Box px='11px'>
            {educationalResources.map((resource, index) => (
              <Flex key={index} mb='20px' align='center' justifyContent='space-between'>
                <Link href={resource.link} isExternal>
                  <Text fontWeight='bold' color={textColor} fontSize='md'>{resource.title}</Text>
                </Link>
                <Link href={resource.link} isExternal>
                  <Icon as={resource.icon} color={brandColor} w='20px' h='20px' ms='8px' />
                </Link>
              </Flex>
            ))}
          </Box>
        </Card>
        <Card p='20px' align='center' direction='column' w='100%' h='100%'>
          <Flex alignItems='center' w='100%' mb='40px'>
            <Icon as={MdUpload} color={brandColor} w='24px' h='24px' me='12px' />
            <Text color={textColor} fontSize='lg' fontWeight='700'>
              Secure Document Upload
            </Text>
          </Flex>
          <Box h='250px' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Dropzone
              w='100%'
              content={
                <Box textAlign='center'>
                  <Icon as={MdUpload} w='80px' h='80px' color={brandColor} mb='10px' />
                  <Text fontSize='xl' fontWeight='700' color={brandColor}>
                    Upload Files
                  </Text>
                </Box>
              }
            />
            <Text mt='10px' fontSize='sm' fontWeight='500' color='secondaryGray.500' textAlign='center' mb='15px'>
              PDF and DOCX files are allowed. You can securely upload your medical reports, insurance documents, and other important files here.
            </Text>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}
