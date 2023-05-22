import {MlString} from "./base/mlString";
import {Bio} from "./base/bio";
import {Social} from "./base/social";

export type ProfileEstablishedYear = number;
export type Profile = {
    id: UniqueId;
    avatar: Link;
    fullName: MlString;
    bio: Bio;
    socials: Social[],
    established: ProfileEstablishedYear;
}
