import { h } from "preact";
import { useState, useEffect } from "preact/hooks"
import register from "preact-custom-element";

import UpdateInfo from "./UpdateInfo";
import UpdatePassword from "./UpdatePassword";

const Profile = (props) => {
    return (
        <div>
            <UpdateInfo action={props.actionui} data={props.data} />
            <UpdatePassword action={props.actionup} />
        </div>
    );
};

export default Profile;

register(
    Profile,
    "profile-form",
    []
);