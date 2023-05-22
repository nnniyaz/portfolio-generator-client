import {Bio} from "./base/bio";
import {Social} from "./base/social";
import {MlString} from "./base/mlString";

export type ProfileEstablishedYear = number;

export type ProfileId = UniqueId;

export type Profile = {
    id: ProfileId;
    avatar: Link;
    fullName: MlString;
    bio: Bio;
    socials: Social[],
    established: ProfileEstablishedYear;
}
