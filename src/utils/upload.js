import { storage } from "../lib/firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

/**
 * Uploads a base64 encoded image to Firebase Storage.
 * @param {string} base64Data - Base64 data string (e.g. data:image/png;base64,...)
 * @param {string} folder - Folder name in storage bucket (e.g., 'events')
 * @returns {Promise<string>} Download URL of the uploaded file
 */
export async function uploadImageToFirebase(base64Data, folder = "events") {
  if (!base64Data) return "";
  try {
    // Generate unique name
    const ext = base64Data.split(";")[0].split("/")[1] || "png";
    const filename = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${ext}`;
    const storageRef = ref(storage, `${folder}/${filename}`);
    
    // Upload base64 string
    const uploadTask = await uploadString(storageRef, base64Data, 'data_url');
    
    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Firebase upload error:", error);
    throw new Error("Failed to upload image: " + error.message);
  }
}
