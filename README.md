# YouReact – Reactions that Recommend

**YouReact** is a Chrome extension that delivers emotionally personalized video recommendations on YouTube. It uses real-time facial expression recognition through your webcam, analyzes your emotional state with local machine learning, and matches content using a cloud-based backend powered by AWS Rekognition and Lambda functions. All processing is designed with privacy and responsiveness in mind.

---

## Installation

To install the extension locally:

1. Download the YouReact extension folder from this repository.
2. Open **Google Chrome**.
3. Navigate to `chrome://extensions`.
4. Enable **Developer Mode** (top right corner).
5. Click **Load unpacked**.
6. Select the folder containing the YouReact extension.
7. Open YouTube — the extension will automatically activate.

---

## How It Works

Once installed and activated:

- A floating UI panel labeled **"YouReact – Reactions that Recommend"** appears on YouTube.
- The extension requests webcam access. If granted:
  - It runs a real-time **facial emotion detection pipeline** using `face-api.js` and TensorFlow.js.
  - Every few seconds, it:
    - Captures your emotional state.
    - Takes a snapshot of the video frame.
    - Extracts video metadata.
    - Sends this data to a cloud backend for processing via AWS Lambda and Rekognition.
- Based on your emotions and video content, **personalized video recommendations** are generated and displayed in 7 categories (Happy, Sad, Angry, etc.).
- If webcam access is denied, YouReact operates in fallback mode using previously aggregated emotional data only.

---

## Features

- Real-time emotion recognition using locally stored models.
- Integration with AWS Rekognition for scene and object detection from video screenshots.
- Emotional data aggregation over time to identify dominant moods.
- Recommendations driven by visual labels and emotionally charged keyword matching.
- Emotion-aware query generation using YouTube Data API.
- Emotion video panel displayed directly on YouTube.
- Full privacy preservation — **no raw webcam data is stored or transmitted**.

---

## Privacy & Security

YouReact **does not collect or transmit personal data**. All facial recognition is performed locally in your browser. No images or identifying data leave your device. When the camera is unavailable or permission is denied, YouReact continues functioning in a read-only recommendation mode using stored emotional profiles.

---

## Additional Notes

- You must be logged in to YouTube to ensure full UI rendering and recommendation accuracy.
- If no face is detected or data cannot be retrieved from the backend, appropriate fallback messages will appear in the UI.
- If you experience missing recommendations, it may be due to **API quota limits** or **network latency**. The system will recover automatically when backend availability is restored.
