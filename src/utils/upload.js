/**
 * Helper to compute SHA-1 in the browser using the Web Crypto API.
 */
async function sha1(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-1', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Uploads a base64 encoded image to Cloudinary using a signed API upload.
 * (We keep the function name uploadImageToFirebase so we do not have to modify
 * any imports or logic inside AddEvent / EditEvent, minimizing code churn).
 * 
 * @param {string} base64Data - Base64 data string (e.g. data:image/png;base64,...)
 * @param {string} folder - Folder name in Cloudinary (e.g., 'events/covers')
 * @returns {Promise<string>} Secure URL of the uploaded image
 */
export async function uploadImageToFirebase(base64Data, folder = "events") {
  if (!base64Data) return "";
  
  // If the image is already a URL, return it as-is (prevents re-uploading on edits)
  if (base64Data.startsWith("http://") || base64Data.startsWith("https://")) {
    return base64Data;
  }

  try {
    const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME || "";
    const apiKey = import.meta.env.CLOUDINARY_API_KEY || "";
    const apiSecret = import.meta.env.CLOUDINARY_API_SECRET || "";

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error("Cloudinary credentials are missing in your local .env file.");
    }

    const timestamp = Math.floor(Date.now() / 1000);
    
    // Sort parameters alphabetically: folder, then timestamp
    const signatureString = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
    const signature = await sha1(signatureString);

    const formData = new FormData();
    formData.append("file", base64Data);
    formData.append("folder", folder);
    formData.append("timestamp", timestamp);
    formData.append("api_key", apiKey);
    formData.append("signature", signature);

    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || "Failed to upload to Cloudinary.");
    }

    const result = await response.json();
    return result.secure_url; // Returns the secure HTTPS URL from Cloudinary
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image: " + error.message);
  }
}
