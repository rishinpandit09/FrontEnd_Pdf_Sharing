import React, { useRef } from "react";

function FileUploadComponent() {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    if (fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      // Perform file upload logic here
      console.log("Uploading file:", file);
      // Reset file input
      fileInputRef.current.value = null;
    }
  };

  return (
    <div>
      <label
        htmlFor="file-input"
        className="custom-file-upload"
        style={{ marginLeft: "50px" }}
      >
        Upload
      </label>
      <input
        id="file-input"
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleUpload}
      />
    </div>
  );
}

export default FileUploadComponent;
