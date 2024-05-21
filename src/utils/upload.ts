import axios from "axios";

const upload = async (id: `0x${string}` | undefined, file: string) => {
  const data = new FormData();
  data.append("file", file);
  data.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
  );
  data.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string);
  data.append("public_id", `profile_pics/${id}/profile_pic`);
  data.append("folder", `profile_pics/${id}`);

  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_CLOUDINARY as string,
      data
    );
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
export default upload;
