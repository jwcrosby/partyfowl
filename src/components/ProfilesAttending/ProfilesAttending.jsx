import React from 'react'

const ProfilesAttending = ({profilesArray, setProfilesArray}) => {
    return (
        profilesArray.map((profile) => (
            <div key={profile}>
                {profile}
            </div>
        ))
    )
}

export default ProfilesAttending