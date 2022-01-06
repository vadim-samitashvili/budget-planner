import Profile from "./Profile";
import { inject, observer } from "mobx-react";

export const ProfileContainer = inject(
  ({
    rootStore: {
      userStore: { getUserData, setNewUserData },
    },
  }) => ({ getUserData, setNewUserData })
)(observer(Profile));