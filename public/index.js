const convertBtn = document.querySelector(".convert-button");
const urlInput = document.querySelector(".url-input");
const errorElement = document.querySelector(".error-message");

const showError = (error) => {
  errorElement.style.display = "block";
  errorElement.textContent = error;
};

const downloadFile = (url, filename = "insta-video.mp4") => {
  const anchor = document.createElement("a");
  anchor.style.display = "none";

  anchor.href = url;
  anchor.download = filename;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

const handleResponse = async (response) => {
  const dataJson = await response.json();
  if (dataJson.error) {
    showError(dataJson.error);
  } else {
    errorElement.style.display = "none";
    const filename = "instagram_" + dataJson.name + ".mp4";
    const url = dataJson.url;
    downloadFile(url, filename);
  }
};

const handleError = (error) => {
  showError("Something went wrong. Make sure the video url is correct.");
};

const fetchVideo = async () => {
  convertBtn.disabled = true;
  const videoUrl = urlInput.value;
  if (videoUrl === "") {
    showError("Please provide a instagram post ID");
  } else {
    await fetch(`/api?id=${urlInput.value}`).then(handleResponse, handleError);
  }
  convertBtn.disabled = false;
};

convertBtn.onclick = fetchVideo;
