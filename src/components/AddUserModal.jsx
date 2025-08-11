import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { addUsers } from "../services/api";
import Form from "./Form";

const AddUser = ({ isOpen, onClose, onUserAdded }) => {
  const formRef = React.useRef();

  useEffect(() => {
    if (!isOpen) {
      formRef.current?.reset();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = async (data) => {
    try {
      const userToSave = {
        ...data,
        name: data.fullName,
      };

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...existingUsers, userToSave];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const savedUser = await addUsers(userToSave);

      if (savedUser) {
        onUserAdded(savedUser);
      }

      toast.success("User saved locally and sent to server!");
      onClose();
    } catch (error) {
      toast.error("Failed to save user.");
      console.error(error);
    }
  };

  return <Form onSubmit={handleFormSubmit} isOpen={isOpen} onClose={onClose}/>;
};

export default AddUser;
