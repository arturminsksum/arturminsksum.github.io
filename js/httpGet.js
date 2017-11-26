export default url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        resolve(json);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send();
  });
};
