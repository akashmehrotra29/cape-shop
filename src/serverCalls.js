import axios from "axios";
class error extends Error {}

export const serverCall = async ({ url, request, dataBody, dataId }) => {
  switch (request) {
    case "GET":
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          return res;
        }
      } catch {
        throw new Error("get call failed");
      }
      break;

    case "POST":
      try {
        const res = await axios.post(url, dataBody);
        if (res.status === 202) return res;
      } catch (err) {
        throw new Error(err, "post call failed");
      }
      break;

    case "PATCH":
      try {
        const res = await axios.patch(url, dataBody);
        if (res.status === 200) return res;
      } catch {
        throw new Error("patch call failed");
      }
      break;

    case "DELETE":
      try {
        const res = await axios.delete(url, dataBody);
        if (res.status === 200) return res;
      } catch {
        throw new Error("delete call failed");
      }
      break;

    default:
      return null;
  }
};
