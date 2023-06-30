import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((values) => values.map((value) => {
      if (value.status === 'fulfilled') {
        return [{
          status: value.status,
          value: value.value,
        }];
      } return [{
        status: value.status,
        reason: value.reason,
      }];
    }));
}
