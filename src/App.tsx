import { Admin, Resource, ShowGuesser} from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./authProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon}/>
</Admin>;
