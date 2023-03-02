import axios from "react-native-axios";

const URL = "https://api.ubilisim.com/postakodu/il/";

export async function ISLEM(METHOD, UST_URL) {
  return new Promise((resolve) => {
    axios({
      method: METHOD,
      url: URL + UST_URL,
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then(async function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}
