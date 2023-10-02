"use client";

import { CalendlyWidget } from "@/components";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa6";

const AddSchedule = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userName, setUserName] = useState("");
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="mt-5 flex hover:-translate-y-1 hover:bg-opacity-70"
      >
        Add a meeting
        <FaCalendarPlus size={16} />
      </Button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange();
          setUserName("");
        }}
        size="5xl"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flexCol gap-1">
                Book a meeting
              </ModalHeader>

              <ModalBody>
                <div className="flexCenter gap-3">
                  <Input
                    label="Calendly username"
                    placeholder="Enter the meeting moderator's Calendly username. (e.g. johnsmith)"
                    className="flex-1"
                    size="sm"
                    value={userName}
                    onChange={({ target: { value } }) => {
                      setUserName(value);
                      setIsWidgetOpen(false);
                    }}
                  />
                  <Button
                    size="lg"
                    color="primary"
                    onPress={() => setIsWidgetOpen(true)}
                  >
                    Search
                  </Button>
                </div>
                {userName && isWidgetOpen && (
                  <CalendlyWidget username={userName} />
                )}
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddSchedule;
