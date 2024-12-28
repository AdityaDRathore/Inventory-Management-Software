import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, title, children }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default CustomModal;