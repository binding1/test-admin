// in src/posts.tsx
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    Edit, 
    Create,
    SimpleForm, 
    TextInput, 
    ReferenceInput,
    useRecordContext
} from "react-admin";

const commentFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const CommentList = () => (
    <List filters={commentFilters}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="postId" reference="posts" link="show" />    
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

const CommentBody = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.body}"` : ''}</span>;
};

export const CommentEdit = () => (
    <Edit title={<CommentBody />}>
        <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
    );