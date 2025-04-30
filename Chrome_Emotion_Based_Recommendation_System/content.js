function createLinkElement(href, rel) {
  const link = document.createElement("link");
  link.href = href;
  link.rel = rel;
  document.head.appendChild(link);
}

function createStyleElement(css) {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}

function loadGoogleSansFont() {
  createLinkElement(
    "https://fonts.googleapis.com/css?family=Google+Sans",
    "stylesheet"
  );
}

function recommendationsstyles() {
  const css = `

body {
  background: #b53e3e;
  font-family: 'Roboto', sans-serif;
  color: black;
  margin: 0;
  padding: 0;
}

a {
  color: #3ea6ff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.youreact-header {
  text-align: center;
  margin: 40px auto 40px auto;
  padding: 10px 20px;
  max-width: 90%;
}

.youreact-title {
  font-size: 2.6rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: #fff;
  text-shadow:
    0 0 5px #7b61ff,
    0 0 10px #7b61ff,
    0 0 20px #7b61ff,
    0 0 40px #4cc3ff,
    0 0 80px #4cc3ff;
  animation: flicker 3s infinite;
}

@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.85;
  }
}

.emotion-panel {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

.emotion-carousel-section {
  margin: 20px auto;
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.emotion-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  gap: 20px;
}

.emotion-carousel-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px 16px;
  z-index: 3;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s ease;
}

.emotion-carousel-btn.left {
  left: 10px;
}

.emotion-carousel-btn.right {
  right: 10px;
}

.emotion-carousel-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.emotion-carousel-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s ease;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.emotion-carousel-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 480px;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
}

.emotion-thumbnail {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.emotion-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  width: 100%;
}

.emotion-tag {
  font-size: 13px;
  font-weight: 700;
  color: #3ea6ff;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
}

.emotion-title {
  font-size: 15px;
  font-weight: 500;
  color: #3ea6ff;
  text-align: center;
  word-wrap: break-word;
}

.emotion-dropdown-menu {
  position: absolute;
  top: 5px;
  right: 25px;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.6);
  padding: 10px;
  display: none;
  flex-direction: column;
  min-width: 220px;
  z-index: 9999;
  transition: opacity 0.2s ease;
  pointer-events: auto;
}

.emotion-dropdown-menu div {
  color: #ddd;
  padding: 8px 12px;
  font-size: 14px;
  border-bottom: 1px solid #333;
}
.emotion-dropdown-menu div:last-child {
  border-bottom: none;
}

.emotion-options-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ccc;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
}

.emotion-options-button:hover {
  color: #fff;
}

.no-recommendations {
  font-size: 14px;
  color: #aaa;
  background: #1e1e1e;
  border: 1px dashed #3ea6ff;
  padding: 12px 20px;
  border-radius: 10px;
  margin: 16px 0;
  text-align: center;
  max-width: 90%;
}

@media (max-width: 768px) {
  .emotion-carousel-wrapper {
    flex-direction: column;
    padding: 0 20px;
  }

  .emotion-carousel-btn {
    position: static;
    transform: none;
    margin: 10px;
  }

  .emotion-thumbnail {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
`;

  createStyleElement(css);
}

// Initialize global styles by loading the font and creating the highlight style.
function initializeGlobalStyles() {
  loadGoogleSansFont();
  createHighlightStyle();
}

async function initializeUserVideo() {
  try {
    console.log("Requesting Camera Access...");

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const userVideo = document.createElement("video");
    userVideo.classList.add("user-expression-video");
    userVideo.srcObject = stream;
    userVideo.setAttribute("autoplay", "");
    userVideo.setAttribute("playsinline", "");

    // Style Webcam Video
    Object.assign(userVideo.style, {
      position: "fixed",
      bottom: "10px",
      right: "10px",
      width: "200px",
      height: "150px",
      border: "2px solid #4285f4",
      zIndex: "9999",
    });

    document.body.appendChild(userVideo);
    console.log("Camera Access Granted, Recording Started...");
    return true;
  } catch (error) {
    console.error("Camera Access Denied:", error);
    return false;
  }
}

function showCameraAccessMessage() {
  const message = document.createElement("div");
  Object.assign(message.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#ff4444",
    color: "white",
    fontSize: "18px",
    textAlign: "center",
    padding: "12px",
    zIndex: "9999",
    fontFamily: "'Google Sans', sans-serif",
  });

  message.textContent = message.textContent = "📷 Camera Access Denied. I will still Recommend you videos! But turning it on helps me learn what you enjoy most!!";
  document.body.appendChild(message);

  setTimeout(() => {
    if (message && message.parentNode) {
      message.parentNode.removeChild(message);
    }
  }, 10000); 
}

// Create and return the expressions table element
function createExpressionsTable() {
  const table = document.createElement("table");
  table.id = "expressionsTable";
  Object.assign(table.style, {
    position: "fixed",
    right: "0",
    top: "70%", 
    transform: "translateY(-50%)", 
    zIndex: "101",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", 
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    padding: "10px", 
    borderRadius: "5px", 
    fontFamily: "'Google Sans', sans-serif", 
  });
  document.body.appendChild(table); 
  return table;
}

// Initialization logic for the face-api models.
async function initializeFaceApiModels() {
  const MODEL_URL = chrome.runtime.getURL("models/");
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
  await faceapi.loadFaceExpressionModel(MODEL_URL);
}

// Initialize an object to store the count of each expression globally
let globalExpressionsCount = {
  angry: 0,
  disgusted: 0,
  fearful: 0,
  happy: 0,
  neutral: 0,
  sad: 0,
  surprised: 0,
};
let globalTotalExpressions = 0;

let globalLastValidPercentages = {
  angry: "",
  disgusted: "",
  fearful: "",
  happy: "",
  neutral: "",
  sad: "",
  surprised: "",
};

function resetGlobalCounts() {
  globalExpressionsCount = {
    angry: 0,
    disgusted: 0,
    fearful: 0,
    happy: 0,
    neutral: 0,
    sad: 0,
    surprised: 0,
  };
  globalTotalExpressions = 0;
}

async function detectFaces(canvas, video) {
  lastDetectionTime = Date.now();
  const warning = document.getElementById("noFaceWarning");

  if (await video_exists(video)) {
    const detections = await faceapi
      .detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options())
      .withFaceExpressions();

    if (detections.length > 0) {
      if (warning) warning.style.display = "none";
      detections.forEach((detection) => {
        const { expressions } = detection;
        for (let expression in expressions) {
          if (expressions[expression] >= 0.5) {
            globalExpressionsCount[expression]++;
            globalTotalExpressions++;
          }
        }
      });
    } else {
      if (warning) warning.style.display = "block";
    }
  } else {
    if (warning) warning.style.display = "block";
  }
}


function createFaceNotDetectedMessage() {
  const warning = document.createElement("div");
  warning.id = "noFaceWarning";
  warning.textContent = "Face not detected!";
  Object.assign(warning.style, {
    position: "fixed",
    bottom: "85px",          
    right: "35px", 
    backgroundColor: "#ff5555",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    zIndex: "9999",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    display: "none",
    fontFamily: "'Google Sans', sans-serif",
  });
  document.body.appendChild(warning);
}


function updateUI(table) {
  table.innerHTML = "";

  let maxPercentage = -1;
  let maxRow = null;

  for (let expression in globalExpressionsCount) {
    const percentage =
      globalTotalExpressions > 0
        ? (
            (globalExpressionsCount[expression] / globalTotalExpressions) *
            100
          ).toFixed(2)
        : "0.00";

    globalLastValidPercentages[expression] = percentage + "%";

    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const countCell = document.createElement("td");

    nameCell.textContent = expression;
    countCell.textContent = `${percentage}%`;

    row.appendChild(nameCell);
    row.appendChild(countCell);
    table.appendChild(row);

    if (parseFloat(percentage) > maxPercentage) {
      maxPercentage = parseFloat(percentage);
      maxRow = row;
    }
  }

  highlightMaxRow(table, maxRow);
}

function highlightMaxRow(table, maxRow) {
  const rows = table.getElementsByTagName("tr");
  for (let row of rows) {
    row.classList.remove("highlighted");
  }

  if (maxRow) {
    maxRow.classList.add("highlighted");
    maxRow.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  }
}

async function video_exists(video) {
  const rect = video.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    return true;
  } else {
    return false;
  }
}

async function position_canvas(video, canvas) {
  const rect = video.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  canvas.style.position = "fixed";
  canvas.style.left = rect.left + "px";
  canvas.style.top = rect.top + "px";
  canvas
    .getContext("2d", { willReadFrequently: true })
    .drawImage(video, 0, 0, rect.width, rect.height);
}

// Extract YouTube Tags
async function getYouTubeTags(videoId) {
  try {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    const text = await response.text();

    // Extract metadata script from the page
    const match = text.match(/"keywords":\["(.*?)"\]/);

    if (match && match[1]) {
      return match[1]
        .split('","') 
        .map((tag) => tag.toLowerCase());
    } else {
      console.warn("⚠️ No tags found for this video.");
      return [];
    }
  } catch (error) {
    console.error("❌ Error fetching tags:", error);
    return [];
  }
}

async function captureScreenshot(videoElement, videoId) {
  let canvas = document.createElement("canvas");

  // Ensure canvas dimensions are non-zero
  const videoWidth = videoElement.videoWidth || 640; 
  const videoHeight = videoElement.videoHeight || 360; 

  // Reduce canvas resolution by 50% for performance
  canvas.width = videoWidth * 0.5;
  canvas.height = videoHeight * 0.5;

  let ctx = canvas.getContext("2d");

  if (canvas.width === 0 || canvas.height === 0) {
    console.error("❌ Canvas dimensions are zero, skipping screenshot.");
    return;
  }

  // Ensure video frame is ready before drawing
  await new Promise((resolve) => requestAnimationFrame(resolve));

  ctx.filter = "grayscale(70%) contrast(80%)";
  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(
    async (blob) => {
      if (!blob) {
        console.error(
          "❌ Blob creation failed. Possible reasons: empty canvas size or unsupported format."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageData = reader.result;

        // Display the captured image in a small pop-up window
        //displayPreviewImage(imageData);

        // Collect facial expressions at the same time
        const expressionsData = getCurrentExpressionData();

        // Extract YouTube tags
        const videoTags = await getYouTubeTags(videoId);

        console.log(
          "📸 Screenshot Captured & Emotion Data Collected! Sending to Backend..."
        );
        console.log({
          video_id: videoId,
          timestamp: Date.now(),
          image: imageData.substring(0, 100) + "...",
          expressions: expressionsData,
          YoutubeVideo_tags: videoTags,
        });

        const payload = {
          Youtubeimage: imageData,
          video_id: videoId,
          UserEmotion_expressions: expressionsData,
          YoutubeVideo_tags: videoTags,
          timestamp: Date.now(),
        };

        //send data to the lembda function S3ImageRekognition
        const LAMBDA_API_URL =
          "https://4nkmc3idoc.execute-api.eu-west-2.amazonaws.com/screenshots";

        try {
          const response = await fetch(LAMBDA_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
              `Server responded with status ${response.status}: ${errorText}`
            );
          }

          const result = await response.json();
          console.log("✅ Data Sent Successfully:", result);
        } catch (error) {
          console.error("❌ Error Sending Data to Lambda:", error.message);
        }
      };

      reader.readAsDataURL(blob);
    },
    "image/jpeg",
    0.8
  ); 
}

//Display the Captured Image in a Small Window
function displayPreviewImage(imageData) {
  const imageContainer = document.createElement("div");
  imageContainer.style.position = "fixed";
  imageContainer.style.bottom = "400px";
  imageContainer.style.right = "20px";
  imageContainer.style.width = "160px";
  imageContainer.style.height = "90px";
  imageContainer.style.border = "2px solid #4CAF50";
  imageContainer.style.backgroundColor = "#fff";
  imageContainer.style.zIndex = "1000";
  imageContainer.style.borderRadius = "8px";
  imageContainer.style.zIndex = "9999";

  const img = document.createElement("img");
  img.src = imageData;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.borderRadius = "6px";

  imageContainer.appendChild(img);
  document.body.appendChild(imageContainer);

  // remove preview image after 5 seconds
  setTimeout(() => {
    document.body.removeChild(imageContainer);
  }, 5000);
}


// Capture Current Expression Data
function getCurrentExpressionData() {
  return { ...globalLastValidPercentages }; // Copy the last percentages
}

//video monitoring logic
let videoElement;
let lastVideoId = null;
let captureInterval = null;

// Monitor YouTube Video Changes
function monitorYouTubeVideoChanges() {
  const observer = new MutationObserver(() => {
    let newVideo = document.querySelector("video.html5-main-video");
    let videoId = new URLSearchParams(window.location.search).get("v");

    if (videoId) lastVideoId = videoId;

    if (newVideo && newVideo !== videoElement) {
      console.log("🔄 New YouTube Video Detected.");    
      videoElement = newVideo;
      observeVideoState();
    }

  if (isAdPlaying()) {
   console.log("⏸ YouTube Ad Detected. Screenshot paused.");
   stopScreenshotLoop(); 
  } else if (videoElement && !videoElement.paused && !captureInterval) {
    console.log("▶️ YouTubeAd finished - Starting Screenshot Loop.");
    startScreenshotLoop();
  } 
});

  observer.observe(document.body, { childList: true, subtree: true });
}


function isAdPlaying() {
  return !!document.querySelector(".ad-showing");
}

// Observe Video Play/Pause for Screenshot Capture
function observeVideoState() {
  if (!videoElement) return;

  videoElement.addEventListener("play", () => {
    if (isAdPlaying()) {
      console.log("⏸ YouTube Ad Detected. Screenshot paused.");
      stopScreenshotLoop();
    } else {
    console.log("▶️ YouTube Video Playing.");
    startScreenshotLoop();
    }
  });

  videoElement.addEventListener("pause", () => {
    console.log("⏸ YouTube Video Paused.");
    stopScreenshotLoop();
  });

  videoElement.addEventListener("ended", () => {
    console.log("⏹ YouTube Video Ended.");
    stopScreenshotLoop();
  });
}

// Start Screenshot and Expression Data Loop
function startScreenshotLoop() {
  const warning = document.getElementById("noFaceWarning");
  const isWarningVisible = warning && warning.style.display === "block";

  if (!captureInterval && !isWarningVisible) {
    console.log("▶️ Starting capture loop…");

    captureInterval = setInterval(() => {
      const stillWarningVisible = warning && warning.style.display === "block";

      if (!stillWarningVisible) {
        captureScreenshot(videoElement, lastVideoId);
      } else {
        console.log("🚫 Face not detected — skipping capture.");
      }
    }, 5000);
  }
}

function monitorCameraStatus() {
  setInterval(async () => {
    const video = document.querySelector(".user-expression-video");
    if (!video || !video.srcObject || video.srcObject.getVideoTracks().length === 0) {
      console.warn("🚫 Camera seems to be turned off or unavailable.");
      showCameraAccessMessage();
      stopScreenshotLoop();
    }
  }, 5000);
}

// Stop Screenshot and Expression Data Loop
function stopScreenshotLoop() {
  if (captureInterval) {
    console.log("⏸ Stopping Screenshot & Expression Capture.");
    clearInterval(captureInterval);
    captureInterval = null;
  }
}

// YouTube API Keys: 100.000 quota limit 
const YOUTUBE_API_KEYS = [
   'AIzaSyAvIwHxKz08-zo6_Pe9mS50jJCFafK21p8',
   'AIzaSyB_caQK40DTj6LaiH31-Np9wwX3bS6Wet0',
   'AIzaSyCvTUxplEES6Vku0XRThI-1xdwz3b4Koks',
   'AIzaSyCHvPgGIZrzl2INzUlrtnxTdcGZrfprcfM',
   'AIzaSyAnoNO6Ady4edKpLUceW-v0-ftuXUz8Xbw',
   'AIzaSyAUgrRjQsj0lrl_HqSfLLm1mFThVmC2BGM',
   'AIzaSyBM12tneZRJf8EPS4HwNsbjlCjKciLD4bU',
   'AIzaSyCluZlPnzjpVS9PKW7IK1SogPrapF4FVHM',
   'AIzaSyCSa_uS1Qds_wSUMMrjpSycb6mleAE31JQ',
   'AIzaSyBqw46KOuaRszGF5FleQGansBLlIO9aq0A'
];

let quotaExceeded = false;

// Random API key selection
function getRandomApiKey() {
  const index = Math.floor(Math.random() * YOUTUBE_API_KEYS.length);
  return YOUTUBE_API_KEYS[index];
}

let topLabels = {};

// Fetch top labels from Lambda function GetTopEmotionLabels
async function fetchTopLabels() {
  try {
    const response = await fetch('https://kmi44nr6kgwhtz3h2f4wsbt2qi0unatz.lambda-url.eu-west-2.on.aws/');
    const data = await response.json();
    topLabels = data;
    console.log("✅ Top emotion labels fetched:", topLabels);
  } catch (e) {
    console.error("❌ Failed to fetch top labels:", e);
    topLabels = {}; 
  }
}

//Dataset for SearchQueries
function pickWeightedKeyword(emotion) {
  const emotionKeywords = {
    angry: [
      { word: "rage", weight: 5 },
      { word: "fight", weight: 5 },
      { word: "attack", weight: 4 },
      { word: "injustice", weight: 4 },
      { word: "revenge", weight: 4 },
      { word: "confrontation", weight: 3 },
      { word: "meltdown", weight: 2 },
      { word: "rant", weight: 2 },
      { word: "insult", weight: 2 },
      { word: "scandal", weight: 2 },
      { word: "drama", weight: 1 }
    ],
  
    sad: [
      { word: "crying", weight: 5 },
      { word: "heartbreaking", weight: 5 },
      { word: "loss", weight: 4 },
      { word: "farewell", weight: 4 },
      { word: "emotional", weight: 3 },
      { word: "grief", weight: 3 },
      { word: "sorrow", weight: 2 },
      { word: "tears", weight: 2 },
      { word: "funeral", weight: 2 },
      { word: "alone", weight: 1 },
      { word: "regret", weight: 1 }
    ],
  
    happy: [
      { word: "surprise", weight: 5 },
      { word: "joy", weight: 5 },
      { word: "celebration", weight: 4 },
      { word: "cute", weight: 4 },
      { word: "funny", weight: 3 },
      { word: "heartwarming", weight: 3 },
      { word: "adorable", weight: 2 },
      { word: "smile", weight: 2 },
      { word: "reunion", weight: 2 },
      { word: "baby", weight: 1 },
      { word: "awesome", weight: 1 }
    ],
  
    fearful: [
      { word: "scary", weight: 5 },
      { word: "horror", weight: 5 },
      { word: "jumpscare", weight: 4 },
      { word: "creepy", weight: 4 },
      { word: "possessed", weight: 3 },
      { word: "abandoned", weight: 3 },
      { word: "haunted", weight: 3 },
      { word: "paranormal", weight: 2 },
      { word: "ghost", weight: 2 },
      { word: "nightmare", weight: 1 },
      { word: "escape", weight: 1 }
    ],
  
    disgusted: [
      { word: "gross", weight: 5 },
      { word: "disgusting", weight: 5 },
      { word: "cringe", weight: 4 },
      { word: "disturbing", weight: 4 },
      { word: "nasty", weight: 3 },
      { word: "weird", weight: 3 },
      { word: "unbearable", weight: 2 },
      { word: "repulsive", weight: 2 },
      { word: "vomit", weight: 1 },
      { word: "infection", weight: 1 },
      { word: "bad hygiene", weight: 1 }
    ],
  
    surprised: [
      { word: "unexpected", weight: 5 },
      { word: "plot twist", weight: 5 },
      { word: "shock", weight: 4 },
      { word: "insane", weight: 4 },
      { word: "reveal", weight: 3 },
      { word: "mind blown", weight: 3 },
      { word: "unbelievable", weight: 2 },
      { word: "wtf", weight: 2 },
      { word: "crazy", weight: 1 },
      { word: "twist", weight: 1 },
      { word: "what happened", weight: 1 }
    ],
  
    neutral: [
      { word: "documentary", weight: 5 },
      { word: "explainer", weight: 4 },
      { word: "informative", weight: 4 },
      { word: "review", weight: 3 },
      { word: "analysis", weight: 3 },
      { word: "history", weight: 2 },
      { word: "science", weight: 2 },
      { word: "interview", weight: 2 },
      { word: "educational", weight: 1 },
      { word: "news", weight: 1 },
      { word: "explained", weight: 1 }
    ]
  };
  
  const keywords = emotionKeywords[emotion];
  const totalWeight = keywords.reduce((sum, k) => sum + k.weight, 0);
  const rand = Math.random() * totalWeight;

  let cumulative = 0;
  for (const k of keywords) {
    cumulative += k.weight;
    if (rand < cumulative) {
      return k.word;
    }
  }
}

function generateEmotionQuery(label, emotion) {

  const keyword = pickWeightedKeyword(emotion);

  return `${label} ${keyword}`;
}

//Dataset for Video confidence Calculation
function scoreEmotionFromText(text, emotion) {
  const emotionLexicon = {
    angry: [
      { word: "rage", weight: 5 },
      { word: "angry", weight: 5 },
      { word: "furious", weight: 5 },
      { word: "mad", weight: 4 },
      { word: "explosion", weight: 4 },
      { word: "fight", weight: 4 },
      { word: "attack", weight: 4 },
      { word: "shouting", weight: 3 },
      { word: "violence", weight: 3 },
      { word: "meltdown", weight: 3 },
      { word: "confrontation", weight: 3 },
      { word: "hate", weight: 3 },
      { word: "rant", weight: 2 },
      { word: "drama", weight: 2 },
      { word: "slammed", weight: 2 },
      { word: "furor", weight: 2 },
      { word: "insult", weight: 2 },
      { word: "screaming", weight: 2 },
      { word: "road rage", weight: 2 },
      { word: "temper", weight: 1 },
      { word: "triggered", weight: 1 },
      { word: "burned", weight: 1 },
      { word: "argument", weight: 1 },
      { word: "riots", weight: 1 },
      { word: "exposed", weight: 1 },
      { word: "controversy", weight: 1 },
      { word: "slap", weight: 1 },
      { word: "fightback", weight: 1 },
      { word: "clash", weight: 1 },
      { word: "cancelled", weight: 1 },
      { word: "flames", weight: 1 },
      { word: "outburst", weight: 1 },
      { word: "fury", weight: 1 },
      { word: "madness", weight: 1 },
      { word: "violently", weight: 1 },
      { word: "destroyed", weight: 1 },
      { word: "conflict", weight: 1 },
      { word: "drama alert", weight: 1 },
      { word: "insane reaction", weight: 1 },
      { word: "war", weight: 1 }
    ],
  
    sad: [
      { word: "crying", weight: 5 },
      { word: "tears", weight: 5 },
      { word: "sad", weight: 5 },
      { word: "grief", weight: 5 },
      { word: "loss", weight: 4 },
      { word: "heartbreaking", weight: 4 },
      { word: "depression", weight: 4 },
      { word: "goodbye", weight: 3 },
      { word: "farewell", weight: 3 },
      { word: "tragedy", weight: 3 },
      { word: "death", weight: 3 },
      { word: "alone", weight: 3 },
      { word: "miss you", weight: 3 },
      { word: "gone", weight: 2 },
      { word: "last moments", weight: 2 },
      { word: "hurt", weight: 2 },
      { word: "broke down", weight: 2 },
      { word: "gloomy", weight: 2 },
      { word: "nostalgia", weight: 2 },
      { word: "emotional", weight: 2 },
      { word: "funeral", weight: 2 },
      { word: "buried", weight: 2 },
      { word: "pain", weight: 2 },
      { word: "mourn", weight: 2 },
      { word: "longing", weight: 1 },
      { word: "tragic", weight: 1 },
      { word: "regret", weight: 1 },
      { word: "sorrow", weight: 1 },
      { word: "hopeless", weight: 1 },
      { word: "lost", weight: 1 },
      { word: "good times", weight: 1 },
      { word: "cried", weight: 1 },
      { word: "missed", weight: 1 },
      { word: "forever", weight: 1 },
      { word: "left behind", weight: 1 }
    ],
  
   happy: [
  { word: "joy", weight: 5 },
  { word: "happy", weight: 5 },
  { word: "laugh", weight: 5 },
  { word: "smile", weight: 5 },
  { word: "fun", weight: 5 },
  { word: "cute", weight: 4 },
  { word: "heartwarming", weight: 4 },
  { word: "adorable", weight: 4 },
  { word: "wholesome", weight: 4 },
  { word: "celebration", weight: 4 },
  { word: "reunion", weight: 3 },
  { word: "funny", weight: 3 },
  { word: "baby", weight: 3 },
  { word: "positivity", weight: 3 },
  { word: "hilarious", weight: 3 },
  { word: "pure", weight: 3 },
  { word: "sunshine", weight: 2 },
  { word: "lol", weight: 2 },
  { word: "yay", weight: 2 },
  { word: "awesome", weight: 2 },
  { word: "amazing", weight: 2 },
  { word: "cheerful", weight: 2 },
  { word: "delight", weight: 2 },
  { word: "made my day", weight: 2 },
  { word: "good vibes", weight: 2 },
  { word: "smiling", weight: 2 },
  { word: "win", weight: 2 },
  { word: "good news", weight: 2 },
  { word: "golden", weight: 2 },
  { word: "uplifting", weight: 1 },
  { word: "adorbs", weight: 1 },
  { word: "grateful", weight: 1 },
  { word: "giggling", weight: 1 },
  { word: "kindness", weight: 1 },
  { word: "inspiring", weight: 1 },
  { word: "satisfying", weight: 1 },
  { word: "made me smile", weight: 1 },
  { word: "blessed", weight: 1 },
  { word: "thankful", weight: 1 },
  { word: "cute overload", weight: 1 },
  { word: "heart full", weight: 1 },
  { word: "magic moment", weight: 1 },
  { word: "smiles all around", weight: 1 },
  { word: "pure joy", weight: 1 },
  { word: "love this", weight: 1 },
  { word: "my heart", weight: 1 },
  { word: "laughing out loud", weight: 1 }
]
,
  
    fearful: [
  { word: "scary", weight: 5 },
  { word: "horror", weight: 5 },
  { word: "terrifying", weight: 5 },
  { word: "fear", weight: 5 },
  { word: "jumpscare", weight: 4 },
  { word: "nightmare", weight: 4 },
  { word: "haunted", weight: 4 },
  { word: "possessed", weight: 3 },
  { word: "paranormal", weight: 3 },
  { word: "ghost", weight: 3 },
  { word: "demon", weight: 3 },
  { word: "screamed", weight: 3 },
  { word: "shadow", weight: 2 },
  { word: "escape", weight: 2 },
  { word: "panic", weight: 2 },
  { word: "eerie", weight: 2 },
  { word: "abandoned", weight: 2 },
  { word: "darkness", weight: 2 },
  { word: "possessed", weight: 2 },
  { word: "unexplained", weight: 2 },
  { word: "evil", weight: 2 },
  { word: "warning", weight: 2 },
  { word: "satanic", weight: 1 },
  { word: "ritual", weight: 1 },
  { word: "strange", weight: 1 },
  { word: "disturbed", weight: 1 },
  { word: "ghoul", weight: 1 },
  { word: "trapped", weight: 1 },
  { word: "weird noise", weight: 1 },
  { word: "bloodcurdling", weight: 1 },
  { word: "mystery", weight: 1 },
  { word: "unsettling", weight: 1 },
  { word: "screams", weight: 1 },
  { word: "dark web", weight: 1 },
  { word: "cursed", weight: 1 },
  { word: "fearful", weight: 1 },
  { word: "killer", weight: 1 },
  { word: "danger", weight: 1 },
  { word: "terror", weight: 1 },
  { word: "hunted", weight: 1 },
  { word: "chased", weight: 1 },
  { word: "surveillance", weight: 1 }
]
,
   disgusted: [
  { word: "gross", weight: 5 },
  { word: "disgusting", weight: 5 },
  { word: "cringe", weight: 5 },
  { word: "nasty", weight: 4 },
  { word: "repulsive", weight: 4 },
  { word: "vomit", weight: 4 },
  { word: "infection", weight: 3 },
  { word: "ooze", weight: 3 },
  { word: "lice", weight: 3 },
  { word: "roaches", weight: 3 },
  { word: "worms", weight: 3 },
  { word: "pus", weight: 3 },
  { word: "dirty", weight: 2 },
  { word: "unbearable", weight: 2 },
  { word: "weird", weight: 2 },
  { word: "bad hygiene", weight: 2 },
  { word: "diseased", weight: 2 },
  { word: "contamination", weight: 2 },
  { word: "greasy", weight: 2 },
  { word: "filthy", weight: 2 },
  { word: "unwatchable", weight: 2 },
  { word: "unsanitary", weight: 2 },
  { word: "yuck", weight: 1 },
  { word: "ugh", weight: 1 },
  { word: "ew", weight: 1 },
  { word: "slimy", weight: 1 },
  { word: "stinky", weight: 1 },
  { word: "abomination", weight: 1 },
  { word: "toxic", weight: 1 },
  { word: "feces", weight: 1 },
  { word: "rotten", weight: 1 },
  { word: "gore", weight: 1 },
  { word: "decay", weight: 1 },
  { word: "spoiled", weight: 1 },
  { word: "foul", weight: 1 },
  { word: "sickening", weight: 1 },
  { word: "repugnant", weight: 1 },
  { word: "maggots", weight: 1 },
  { word: "disfigure", weight: 1 }
]
,
  
   surprised: [
  { word: "shock", weight: 5 },
  { word: "unexpected", weight: 5 },
  { word: "surprised", weight: 5 },
  { word: "wtf", weight: 5 },
  { word: "insane", weight: 4 },
  { word: "unbelievable", weight: 4 },
  { word: "plot twist", weight: 4 },
  { word: "omg", weight: 3 },
  { word: "twist", weight: 3 },
  { word: "mind blown", weight: 3 },
  { word: "crazy", weight: 3 },
  { word: "no way", weight: 2 },
  { word: "what just happened", weight: 2 },
  { word: "unexpected ending", weight: 2 },
  { word: "never saw it coming", weight: 2 },
  { word: "jaw drop", weight: 2 },
  { word: "suddenly", weight: 2 },
  { word: "out of nowhere", weight: 2 },
  { word: "biggest twist", weight: 2 },
  { word: "unexpected reveal", weight: 1 },
  { word: "didn’t expect", weight: 1 },
  { word: "wild", weight: 1 },
  { word: "plot twist", weight: 1 },
  { word: "unreal", weight: 1 },
  { word: "wtf moment", weight: 1 },
  { word: "bizarre", weight: 1 },
  { word: "insanity", weight: 1 },
  { word: "how?", weight: 1 },
  { word: "what the hell", weight: 1 },
  { word: "unpredictable", weight: 1 }
]
,
  
   neutral: [
  { word: "documentary", weight: 5 },
  { word: "explained", weight: 5 },
  { word: "news", weight: 5 },
  { word: "informative", weight: 4 },
  { word: "review", weight: 4 },
  { word: "educational", weight: 4 },
  { word: "interview", weight: 3 },
  { word: "facts", weight: 3 },
  { word: "overview", weight: 3 },
  { word: "summary", weight: 3 },
  { word: "analysis", weight: 3 },
  { word: "study", weight: 2 },
  { word: "learning", weight: 2 },
  { word: "history", weight: 2 },
  { word: "science", weight: 2 },
  { word: "explanation", weight: 2 },
  { word: "research", weight: 2 },
  { word: "deep dive", weight: 2 },
  { word: "case study", weight: 2 },
  { word: "opinion", weight: 1 },
  { word: "overview", weight: 1 },
  { word: "insight", weight: 1 },
  { word: "report", weight: 1 },
  { word: "analysis", weight: 1 },
  { word: "educational video", weight: 1 },
  { word: "walkthrough", weight: 1 },
  { word: "coverage", weight: 1 },
  { word: "news segment", weight: 1 },
  { word: "informational", weight: 1 },
  { word: "seminar", weight: 1 },
  { word: "presentation", weight: 1 },
  { word: "guide", weight: 1 },
  { word: "neutral", weight: 1 }
]

  };
  
const keywords = emotionLexicon[emotion];

let score = 0;
const lowerText = text.toLowerCase();

keywords.forEach(({ word, weight }) => {
  // Use includes() for fuzzier matching
  if (lowerText.includes(word)) {
    score += weight;
  }
});

const realisticMax = 10;
const rawConfidence = score / realisticMax;
const confidence = Math.min(Math.pow(rawConfidence, 0.75), 1);

return { score, confidence };
}

async function fetchEmotionVideos(emotion) {
  if (!topLabels[emotion] || topLabels[emotion].length === 0) return [];

  const labelObjects = topLabels[emotion];
  const videos = [];

  for (const { label, score: labelScore } of labelObjects) {
    const query = generateEmotionQuery(label, emotion);
    const encodedQuery = encodeURIComponent(query);

    let failedApiKeys = 0;

    for (const apiKey of YOUTUBE_API_KEYS) {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodedQuery}&key=${apiKey}`;

      try {
        const res = await fetch(url);

        if (!res.ok) {
          const errText = await res.text();
          console.log(`⚠️ API Key failed (${apiKey}): ${errText}`);
          failedApiKeys++;
          continue;
        }

        const data = await res.json();
        const item = data.items && data.items[0];

        if (item) {
          const text = `${item.snippet.title} ${item.snippet.description}`;
          const { score, confidence } = scoreEmotionFromText(text, emotion);
          videos.push({
            ...item,
            emotionScore: score,
            textConfidence: confidence,
            queryLabel: label,
            labelScore: labelScore,
          });
          break;
        }

      } catch (e) {
        console.error(`❌ Error with API key ${apiKey}:`, e);
        failedApiKeys++;
      }
    }

    if (failedApiKeys === YOUTUBE_API_KEYS.length) {
      quotaExceeded = true;
      console.error("❌ All API keys failed. Quota likely exceeded.");
    }
  }

  return videos;
}


function renderEmotionCarousel(emotionData) {
  const existing = document.querySelector(".emotion-panel");
  if (existing) existing.remove();

  const panel = document.createElement("div");
  panel.className = "emotion-panel";

  const header = document.createElement("div");
  header.className = "youreact-header";
  header.innerHTML = `
    <div class="youreact-title">YouReact – Reactions that Recommend.</div>
  `;
  panel.appendChild(header);

  if (quotaExceeded) {
    const errorBanner = document.createElement("div");
    errorBanner.className = "no-recommendations";
    errorBanner.innerHTML = `
      ⚠️ <strong>YouReact</strong> recommendations are temporarily unavailable. Learning is in progress...`;
    panel.appendChild(errorBanner);
    insertEmotionPanelWhenReady(panel);
    return;
  }

  const emotionTagLines = {
    angry: ["Videos to make you angry", "Prepare to get mad", "This might tick you off"],
    sad: ["Heartbreaking moments", "Tears incoming...", "Get the tissues ready"],
    fearful: ["Scary stuff ahead", "Creepy but true", "Try not to flinch"],
    disgusted: ["Cringe warning", "You might gag...", "Gross, but addictive"],
    surprised: ["Prepare to be shocked", "You won’t believe this", "Plot twist ahead"],
    happy: ["Feel-good content", "Smile boosters 😊", "Videos to lift your mood"],
    neutral: ["Educational picks", "Calm & informative", "Facts, no fluff"]
  };

  function getRandomTag(emotion) {
    const options = emotionTagLines[emotion] || [emotion.toUpperCase()];
    return options[Math.floor(Math.random() * options.length)];
  }

  emotionData.forEach(({ emotion, videos }) => {
    const section = document.createElement("div");
    section.className = "emotion-carousel-section";

    if (!videos || videos.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-recommendations";
      noResults.innerHTML = `I don’t have enough "${emotion}" data just yet.<br>But I’m paying attention. Let’s keep watching. I’m learning from you.`;
      section.appendChild(noResults);
      panel.appendChild(section);
      return;
    }

    let currentIndex = 0;

    const wrapper = document.createElement("div");
    wrapper.className = "emotion-carousel-wrapper";

    const leftBtn = document.createElement("button");
    leftBtn.textContent = "←";
    leftBtn.className = "emotion-carousel-btn left";
    leftBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
      renderCurrentCard();
    };

    const rightBtn = document.createElement("button");
    rightBtn.textContent = "→";
    rightBtn.className = "emotion-carousel-btn right";
    rightBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % videos.length;
      renderCurrentCard();
    };

    const slider = document.createElement("div");
    slider.className = "emotion-carousel-slider";

    function renderCurrentCard() {
      slider.innerHTML = "";

      const video = videos[currentIndex];
      const card = document.createElement("div");
      card.className = "emotion-carousel-card";

      const thumbnail = document.createElement("img");
      thumbnail.src = video.snippet.thumbnails.medium.url;
      thumbnail.className = "emotion-thumbnail";

      const tagLine = document.createElement("div");
      tagLine.className = "emotion-tag";
      tagLine.textContent = getRandomTag(emotion);

      const link = document.createElement("a");
      link.className = "emotion-title";
      link.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      link.textContent = video.snippet.title;

      const moreBtn = document.createElement("button");
      moreBtn.innerHTML = "⋮";
      moreBtn.className = "emotion-options-button";

      const dropdown = document.createElement("div");
      dropdown.className = "emotion-dropdown-menu";
      dropdown.innerHTML = `
        <div><strong>Emotion:</strong> ${emotion.toUpperCase()}</div>
        <div><strong>Score:</strong> ${video.emotionScore}</div>
        <div><strong>Confidence Video selected:</strong> ${(video.textConfidence * 100).toFixed(1)}%</div>
        <div><strong>Label:</strong> ${video.queryLabel}</div>
        <div><strong>Score for label Used:</strong> ${video.labelScore}</div>
      `;

      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isVisible = dropdown.style.display === "flex";
        document.querySelectorAll(".emotion-dropdown-menu").forEach((d) => d.style.display = "none");
        dropdown.style.display = isVisible ? "none" : "flex";
      });

      document.addEventListener("click", () => {
        dropdown.style.display = "none";
      });

      const infoWrapper = document.createElement("div");
      infoWrapper.className = "emotion-info";
      infoWrapper.style.display = "flex";
      infoWrapper.style.flexDirection = "column";
      infoWrapper.style.justifyContent = "center";
      infoWrapper.style.flex = "1";

      infoWrapper.append(tagLine, link);
      card.append(thumbnail, infoWrapper, moreBtn, dropdown);
      slider.appendChild(card);
    }

    renderCurrentCard();
    wrapper.appendChild(leftBtn);
    wrapper.appendChild(slider);
    wrapper.appendChild(rightBtn);

    section.appendChild(wrapper);
    panel.appendChild(section);
  });

  insertEmotionPanelWhenReady(panel);
}

async function updateEmotionRecommendations() {
  if (Object.keys(topLabels).length === 0) {
    await fetchTopLabels(); 
  }

  const emotions = ["angry", "disgusted", "fearful", "happy", "neutral", "sad", "surprised"];
  const allVideos = [];

  for (const emotion of emotions) {
    try {
      const emotionVideos = await fetchEmotionVideos(emotion);
      allVideos.push({ emotion, videos: emotionVideos });
    } catch (err) {
      console.warn(`⚠️ Error fetching videos for ${emotion}:`, err);
    }
  }

  renderEmotionCarousel(allVideos);
}

function observeUrlChanges(callback) {
  let lastUrl = location.href;

  // Create a MutationObserver to watch for page changes
  const observer = new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      console.log("🔗 URL changed:", currentUrl);
      callback(currentUrl);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}


function insertEmotionPanelWhenReady(panel) {
  const maxWaitTime = 5000;
  const startTime = Date.now();

  const tryInsert = () => {
    const path = location.pathname;
    const isVideoPage = path === "/watch";
    const isHomeOrSearchPage = path === "/" || path.startsWith("/results") || path.startsWith("/feed");

    const rightSidebar = document.querySelector("ytd-watch-next-secondary-results-renderer");
    const mainGrid = document.querySelector("#contents.ytd-rich-grid-renderer");

    let inserted = false;

    if (isVideoPage && rightSidebar && !rightSidebar.contains(panel)) {
      rightSidebar.prepend(panel);
      console.log("✅ Inserted recommendations into right-side panel (video page).");
      inserted = true;

    } else if (isHomeOrSearchPage && mainGrid && !mainGrid.contains(panel)) {
      mainGrid.prepend(panel);
      console.log("✅ Inserted recommendations into homepage/search grid.");
      inserted = true;
    }

    return inserted;
  };

  if (!tryInsert()) {
    const observer = new MutationObserver(() => {
      const inserted = tryInsert();

      if (inserted) {
        observer.disconnect();
      } else if (Date.now() - startTime > maxWaitTime) {
        console.error("❌ Failed to insert emotion-based recommendations: No valid container found.");
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}


window.onload = async () => {

  recommendationsstyles();

  //camera access 
  const camerAccessFranted = await initializeUserVideo();

if (!camerAccessFranted ) {
  showCameraAccessMessage();
} else {
  
  await initializeFaceApiModels();

  createFaceNotDetectedMessage(); 

  // Map to store the canvas, table, and observers associated with each video element
  const videoMap = new Map();
  resetGlobalCounts(); // Reset the counts initially

  let lastDetectionTime = Date.now();

  // Create the table once and use it globally.
  const expressionsTable = createExpressionsTable();

//Display recommendations 
 await updateEmotionRecommendations();

  //reset the emotion expressions every 3 seconds
  setInterval(() => {
    resetGlobalCounts(); 
  }, 3000);

  // update the canvas size and position and draw video onto canvas
  const updateCanvas = async (canvas, Video) => {
    if (Video) {
      await position_canvas(Video, canvas);
    }

    if (Date.now() - lastDetectionTime > 100) {
      await detectFaces(canvas, Video);
      updateUI(document.getElementById("expressionsTable"));
    }
    requestAnimationFrame(() => updateCanvas(canvas, Video)); 
  };

  //new IntersectionObserver instance
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Get the canvas and observers from the map
      const data = videoMap.get(entry.target);

      if (data) {
        // If the video element is not in the viewport or not visible
        if (!entry.isIntersecting) {
          // Remove the canvas and table from the body
          if (data.canvas.parentNode) {
            data.canvas.parentNode.removeChild(data.canvas);
            data.table.parentNode.removeChild(data.table); 
          }
        } else {
          // Add the canvas and table to the body
          if (!data.canvas.parentNode) {
            document.body.appendChild(data.canvas);
            document.body.appendChild(data.table);
          }
        }
      }
    });
  });

  // Specifically observe only the webcam video element
  const observeUserVideo = () => {
    const userVideo = document.querySelector(".user-expression-video");
    if (!userVideo) {
      console.error("❌ User video not found!");
      return;
    }

    const canvas = document.createElement("canvas");
    const table = document.createElement("table");
    table.id = "expressionsTable";
    document.body.appendChild(canvas);
    document.body.appendChild(table);

    const resizeObserver = new ResizeObserver(() => {
      position_canvas(userVideo, canvas);
    });
    resizeObserver.observe(userVideo);

    const mutationObserver = new MutationObserver(() => {
      position_canvas(userVideo, canvas);
    });
    mutationObserver.observe(userVideo, { attributes: true });

    updateCanvas(canvas, userVideo);
  };

  observeUserVideo();

  monitorYouTubeVideoChanges();
  monitorCameraStatus();
}

  observeUrlChanges(() => {
    updateEmotionRecommendations(); 
  });
};
