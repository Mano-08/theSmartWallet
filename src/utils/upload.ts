import axios from "axios";

const upload = async (file: string) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "localservice");

  try {
    const res = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL as string,
      data
    );
    console.log(res.data);
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
