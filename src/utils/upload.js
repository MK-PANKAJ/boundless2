/**
 * Automatically resizes and compresses a base64 image using HTML5 Canvas.
 * @param {string} base64Data - Base64 data url.
 * @param {number} maxDimension - Maximum width or height of the image.
 * @param {number} quality - Compression quality (0.0 to 1.0).
 * @returns {Promise<string>} Compressed base64 data url (JPEG format).
 */
export function compressImageIfNeeded(base64Data, maxDimension = 1600, quality = 0.8) {
  return new Promise((resolve) => {
    // If it's not a base64 image data URL, skip compression
    if (!base64Data || !base64Data.startsWith("data:image/")) {
      return resolve(base64Data);
    }

    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // Scale down proportionally if larger than maxDimension
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return resolve(base64Data);
      }

      // Draw image onto canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Export canvas to base64 JPEG format with specified quality
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
      resolve(compressedDataUrl);
    };

    img.onerror = () => {
      resolve(base64Data);
    };

    img.src = base64Data;
  });
}

/**
 * Reads a File object and compresses it into an optimized Base64 JPEG data URL.
 * @param {File} file - The file selected from input.
 * @returns {Promise<string>} Compressed Base64 data URL.
 */
export function compressAndReadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const compressed = await compressImageIfNeeded(reader.result, 1600, 0.8);
        resolve(compressed);
      } catch (err) {
        resolve(reader.result);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

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
    // Double check compression prior to upload
    const compressedBase64 = await compressImageIfNeeded(base64Data, 1600, 0.8);

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
    formData.append("file", compressedBase64);
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
