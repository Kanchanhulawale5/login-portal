import React from 'react';

const UploadFileForm: React.FC = () => {

  return (
    <div className="container">
      <button className="header-button">Upload File</button>
      <button className="header-button">File Uploaded Status</button>
      <button className="header-button">Ignore File Upload</button>
      <button className="user-admin-button">User</button>
        <div className="inner-box">
          <div className="dropdown-container">
         <select className="dropdown">
           <option value="">File Type </option>
           <option value="Policy">Policy</option>
           <option value="Claim">Claim</option>
          </select>
          <select className="dropdown">
            <option value="">Select Year </option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
           </select>
           <select className="dropdown">
            <option value="">Select Month </option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
           </select>
          </div>
          <div className="upload-container">
           <button className="upload-button">Upload File </button>
           <input type="file" className="file-input"/>
           <input type="text" className="file-path" placeholder="Uploaded file path" readOnly />
          </div>
          <div className="Submit-container">
          <button className="submit-button">Submit</button>
          </div>
        </div>
    </div>  
    
    
    
  );
};

export default UploadFileForm;
