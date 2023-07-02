import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { refreshError } from "../../redux/streamer/streamerSlice";
import { MiniLoader } from "../Loader/Loader";
import { AddButton } from "../Button/Button";
import {
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Select,
  Textarea,
  ButtonContainer,
  ErrorContainer,
} from "./AddStreamerForm.styled";

const initialValues = {
  name: "",
  description: "",
  platform: "",
};

const validateForm = (newStreamer) => {
  const errors = {};

  if (!newStreamer.name.trim()) {
    errors.name = "Name is required";
  }

  if (!newStreamer.platform.trim()) {
    errors.platform = "Platform is required";
  }

  if (!newStreamer.description.trim()) {
    errors.description = "Description is required";
  }

  return errors;
};

export const AddStreamerForm = ({ onSubmit }) => {
  const [newStreamer, setNewStreamer] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewStreamer({
      ...newStreamer,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const errors = validateForm(newStreamer);

      if (Object.keys(errors).length === 0) {
        await onSubmit(newStreamer);

        setNewStreamer(initialValues);
        event.target.reset();
        setFormErrors({});
      } else {
        setFormErrors(errors);
      }
    } catch (error) {
      dispatch(refreshError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit} novalidate="novalidate">
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={newStreamer.name}
            onChange={handleInputChange}
            placeholder="Bob Smith"
            required
          />
          {formErrors.name && (
            <ErrorContainer>{formErrors.name}</ErrorContainer>
          )}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="platform">Platform</Label>
          <Select
            id="platform"
            name="platform"
            value={newStreamer.platform}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected>
              Select platform
            </option>
            <option value="Twitch">Twitch</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Kick">Kick</option>
            <option value="Rumble">Rumble</option>
          </Select>
          {formErrors.platform && (
            <ErrorContainer>{formErrors.platform}</ErrorContainer>
          )}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="description">Description</Label>
          <Textarea
            type="text"
            id="description"
            name="description"
            value={newStreamer.description}
            onChange={handleInputChange}
            placeholder="Some info.."
            required
          />
          {formErrors.description && (
            <ErrorContainer>{formErrors.description}</ErrorContainer>
          )}
        </InputContainer>
        <ButtonContainer>
          {isLoading ? (
            <MiniLoader />
          ) : (
            <AddButton type="submit">Create</AddButton>
          )}
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};
