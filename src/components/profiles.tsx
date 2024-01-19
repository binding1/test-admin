import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField } from "react-admin";

export const ProfileList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="name" />
                </Datagrid>
            )}
        </List>
    );
};