import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const obj = {
        photo: { status: `${photo.status}`, body: `${photo.body}` },
        user: { firstName: `${user.firstName}`, lastName: `${user.lastName}` },
      };
      try {
        return obj;
      } catch (_) {
        return { photo: null, user: null };
      }
    });
}
