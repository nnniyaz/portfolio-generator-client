import {MlString} from "../base/mlString";
import {Social} from "../base/social";
import {Bio} from "../base/bio";

export type ProfileAvatarUrl = string;
export type ProfileEstablishedYear = number;
export type Profile = {
    avatarUrl: ProfileAvatarUrl;
    email: Email;
    fullName: MlString;
    bio: Bio;
    socials: Social[];
    establishedYear: ProfileEstablishedYear;
}
