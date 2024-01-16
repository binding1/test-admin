// in src/posts.tsx
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />    
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


export const PostEdit = () => (
    <Edit>
        <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);