import { Admin, Resource, ShowGuesser} from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList, PostEdit } from "./components/posts";


export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit}/>
  <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
</Admin>;
