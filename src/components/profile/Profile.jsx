// eslint-disable-next-line no-unused-vars
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
