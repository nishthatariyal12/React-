import React, { useState } from "react";
import useUserData from "../utils/useUserData";
import { BsChatRight, BsChevronDown, BsX } from "react-icons/bs";
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
const ChatHeader = ({ isOpen, onClick }) => (
  <Flex
    className="text-medium items-center text-white bg-blue-600 h-[42px] p-4 flex justify-between gap-[2rem] rounded-t-[7px] cursor-pointer"
    onClick={onClick}
  >
    <Icon as={BsChatRight} className="-mr-[8rem]" />
    <Text>Chats</Text>
    <Icon as={BsChevronDown} />
  </Flex>
);
const UserListItem = ({ user, onClick }) => (
  <Box key={user.id} onClick={() => onClick(user)} className="cursor-pointer">
    <Flex gap="4" pb="[5px]">
      <Image
        className="w-8 h-8 rounded-full"
        src={user.profilepicture}
        alt={user.username}
      />
      <Text>{user.name}</Text>
    </Flex>
  </Box>
);
const ChatPage = () => {
  const { isLoading, userData } = useUserData();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenChats = () => {
    setOpen(!open);
    setSelectedUser(null); // Close the selected user's chat box when opening the chat list
  };

  const handleUserClick = (user) => {
    if (selectedUser === user) {
      setSelectedUser(null); // Clicking the same user again will close their chat box
    } else {
      setSelectedUser(user);
      setOpen(true); // Open the chat list when clicking on a user's chat box
    }
  };

  const handleCloseChat = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Box
      bottom="0"
      right="2rem"
      zIndex="999"
      alignSelf="end"
      position="sticky"
      float="right"
      display="flex"
      flexDirection="row-reverse"
    >
      <Box
        className="bg-white border border-blue-500"
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="250px"
        rounded="10px"
      >
        <ChatHeader isOpen={open} onClick={handleOpenChats} />
        <Box className={`p-4 h-[136px] mr-[4px] border overflow-y-auto custom-scrollbar ${open ? '' : 'hidden'}`}>
          {userData?.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              onClick={handleUserClick}
            />
          ))}
        </Box>
      </Box>
      {selectedUser && (
        <Box
          className="bg-white border border-blue-500 mt-4"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          w="250px"
          rounded="10px"
        >
          <Flex className="text-medium items-center text-white bg-blue-600 h-[42px] p-4 flex justify-between gap-[1rem] rounded-t-[7px] cursor-pointer">
            <Image
              className="w-8 h-8 rounded-full"
              src={selectedUser.profilepicture}
            />
            <Text className="text-sm font-normal">{selectedUser.name}</Text>
            <Icon as={BsChevronDown} />
            <Icon as={BsX} onClick={handleCloseChat} />
          </Flex>
          <Text>Chat with {selectedUser.name}</Text>
          {/* Add chat messages and input box here */}
        </Box>
      )}
    </Box>
  );
};

export default ChatPage;
