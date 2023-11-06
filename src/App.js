import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS styles
import "@aws-amplify/ui-react/styles.css"; // Import AWS Amplify UI styles

import { listNotes } from "./graphql/queries"; // Import GraphQL queries
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations"; // Import GraphQL mutations
import { API, Storage } from "aws-amplify"; // Import AWS Amplify API and Storage
import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react"; // Import AWS Amplify UI components

const App = ({ signOut, user }) => {
  const [notes, setNotes] = useState([]); // Initialize 'notes' state to hold note data

  useEffect(() => {
    fetchNotes(); // When the component mounts, fetch and display notes
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes }); // Fetch notes data from GraphQL
    const notesFromAPI = apiData.data.listNotes.items; // Extract the notes

    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name); // Fetch image URLs from S3
          note.image = url; // Update note with image URL
        }
        return note;
      })
    );
    setNotes(notesFromAPI); // Set the 'notes' state with the fetched notes
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
      author: user.attributes.email,
    };
    if (!!data.image) await Storage.put(data.name, image); // Upload image to S3 if provided
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes(); // Create a new note and refresh the notes list
    event.target.reset(); // Clear the form fields
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id); // Remove the deleted note from the list
    setNotes(newNotes); // Update 'notes' state
    await Storage.remove(name); // Delete associated image from S3
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <Heading level={1}>Notes</Heading> {/* Display the title 'Notes' */}
      <View style={{ position: "absolute", top: "20px", right: "20px" }}>
        <Button
          variation="primary"
          as="a"
          href="./main.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML Directory
        </Button> {/* Display a nicely formatted button linking to the HTML directory */}
      </View>

      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <View name="image" as="input" type="file" style={{ alignSelf: "end" }} />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>

      <Table className="notes-table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map((note, index) => (
            <React.Fragment key={note.id || note.name}>
              <TableRow>
                <TableCell>
                  <Text as="strong" fontSize={12} color={"#666699"}>
                    {note.author.substring(0, note.author.indexOf("@"))}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text>{note.name}</Text>
                </TableCell>
                <TableCell>
                  {note.image && (
                    <Image
                      src={note.image}
                      alt={`visual aid for ${note.name}`}
                      style={{ width: 200 }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Button variation="link" onClick={() => deleteNote(note)}>
                    <Text as="strong" fontSize={10} color={"#ff6600"}>
                      Delete
                    </Text>
                  </Button>
                </TableCell>
              </TableRow>
              {index < notes.length - 1 && (
                <tr className="vertical-line">
                  <td colSpan="4"></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      <Button onClick={signOut}>Sign Out</Button> {/* Display a "Sign Out" button */}
    </div>
  );
};

export default withAuthenticator(App); // Export the component wrapped with AWS Amplify's authentication features