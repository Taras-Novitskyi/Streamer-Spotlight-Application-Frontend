import React, { useEffect, useState } from "react";

import { MiniLoader } from "../Loader/Loader";
import { AddButton } from "../Button/Button";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import {
  FormContainer,
  Form,
  Label,
  Input,
  Select,
  Textarea,
  ButtonContainer,
} from "./AddStreamerForm.styled";

const initialValues = {
  name: "",
  description: "",
  platform: "",
};

export const AddStreamerForm = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newStreamer, setNewStreamer] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {}, []);

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

      await onSubmit(newStreamer);

      setNewStreamer(initialValues);
      setFormErrors({});
      event.target.reset();
    } catch (error) {
      setFormErrors({ error });
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <AlertMessage>"Oops, something went wrong"</AlertMessage>;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={newStreamer.name}
          onChange={handleInputChange}
          required
        />
        {formErrors.name && <span>{formErrors.name}</span>}
        <Label htmlFor="platform">Platform:</Label>
        <Select
          id="platform"
          name="platform"
          value={newStreamer.platform}
          onChange={handleInputChange}
          // multiple
          required
        >
          <option value="Twitch">Twitch</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Kick">Kick</option>
          <option value="Rumble">Rumble</option>
        </Select>
        {formErrors.platform && <span>{formErrors.platform}</span>}
        <Label htmlFor="description">Description:</Label>
        <Textarea
          type="text"
          id="description"
          name="description"
          value={newStreamer.description}
          onChange={handleInputChange}
          required
        />
        {formErrors.description && <span>{formErrors.description}</span>}
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
