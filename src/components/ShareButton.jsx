// src/components/ShareButton.jsx

const ShareButton = ({ text }) => {
  const handleShare = async () => {
    const shareText =
      text || "India Language Safety Translator - Travel safe, speak local.";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "India Safety Translator",
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Copied to clipboard!");
      } catch {
        alert("Cannot share on this device.");
      }
    }
  };

  return (
    <button className="btn btn-outline" type="button" onClick={handleShare}>
      📤 Share
    </button>
  );
};

export default ShareButton;
