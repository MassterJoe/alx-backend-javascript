export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve, reject) => {
    Promise.race([chinaDownload, USDownload])
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
