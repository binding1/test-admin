import { Admin, Resource, ShowGuesser} from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./components/users";
import { ProfileList } from "./components/profiles";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { CommentList, CommentEdit, CommentCreate } from "./components/comments";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./authProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={PostIcon}/>
  <Resource name="profile" list={ProfileList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon}/>
  {/* <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon}/> */}
</Admin>;
