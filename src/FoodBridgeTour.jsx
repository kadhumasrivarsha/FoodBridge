
import { useEffect, useState } from "react";
import "./FoodBridgeTour.css";

const tourSteps = [
  {
    title: "Welcome to FoodBridge",
    text: "Hello, and welcome to my FoodBridge project. FoodBridge is a food-sharing website designed to connect people who have surplus food with people who need it. The main goal is to encourage food sharing and help reduce food waste.",
    target: "top",
  },
  {
    title: "Homepage and Navigation",
    text: "This is the homepage of FoodBridge. The green and white design represents freshness, care, and sustainability. The navigation menu helps users explore the website. The main banner says, Good Food Deserves a Second Chance, and provides quick access to Donate Food and Find Food.",
    target: ".hero",
  },
  {
    title: "Donate Food",
    text: "Now we will explore the Donate Food feature. A donor can use this option to begin sharing surplus food. In this project prototype, clicking the Donate Food button opens a form. The form demonstrates the intended donation process, but submissions are not saved to a real database.",
    target: ".hero",
  },
  {
    title: "Find Food and Food Cards",
    text: "The food listing section displays example food items, such as fresh vegetables, bakery products, and cooked meals. Each card helps visitors understand what food information could be displayed. The Request button demonstrates how a person could express interest in a listing. These are sample listings, not live food availability.",
    target: ".food-section",
  },
  {
    title: "How It Works",
    text: "FoodBridge follows a simple idea. First, a donor offers surplus food. Next, someone browses the available listings. Then, the person can submit a request. Finally, the donor and recipient would coordinate the sharing process. A future version could support real-time matching and collection details.",
    target: ".how-it-works",
  },
  {
    title: "Login and Sign Up",
    text: "The Login and Sign Up options demonstrate the account interface. Login represents returning users, while Sign Up represents new users. In the current prototype, these forms demonstrate the design and basic interactions. A secure account system still needs to be connected.",
    target: "top",
  },
  {
    title: "Video and Project Impact",
    text: "The video section gives visitors a place to learn more about the FoodBridge mission. The impact section explains the intended benefits: reducing food waste, supporting communities, encouraging food sharing, and promoting a more sustainable future.",
    target: ".impact-section",
  },
  {
    title: "Conclusion and Future Scope",
    text: "To conclude, FoodBridge is a front-end prototype that demonstrates how a digital platform could make food sharing easier. Future improvements could include a real database, secure user accounts, live food listings, location-based matching, and notifications. Thank you for watching my FoodBridge project presentation.",
    target: "top",
  },
];

export default function FoodBridgeTour() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speakStep(index) {
    if (!("speechSynthesis" in window)) {
      alert("Voice narration is not supported by this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const item = tourSteps[index];
    const speech = new SpeechSynthesisUtterance(
      item.title + ". " + item.text
    );

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) =>
      /female|zira|samantha|aria|jenny|susan/i.test(voice.name)
    );

    if (femaleVoice) {
      speech.voice = femaleVoice;
    }

    speech.lang = "en-US";
    speech.rate = 0.92;
    speech.pitch = 1.08;

    speech.onend = () => setPlaying(false);
    speech.onerror = () => setPlaying(false);

    const selector = item.target;
    if (selector !== "top") {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setStep(index);
    setPlaying(true);
    window.speechSynthesis.speak(speech);
  }

  function nextStep() {
    const next = (step + 1) % tourSteps.length;
    speakStep(next);
  }

  function pauseVoice() {
    if (!("speechSynthesis" in window)) return;

    if (window.speechSynthesis.speaking &&
        !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setPlaying(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setPlaying(true);
    }
  }

  return (
    <section className="fb-tour" aria-label="FoodBridge guided tour">
      <div className="fb-tour-top">
        <span className="fb-tour-icon">▶</span>
        <div>
          <p className="fb-tour-label">FOODBRIDGE PRESENTS</p>
          <h2>Guided Project Tour</h2>
        </div>
      </div>

      <div className="fb-tour-progress">
        <span>
          Scene {step + 1} of {tourSteps.length}
        </span>
        <div className="fb-tour-track">
          <div
            className="fb-tour-fill"
            style={{
              width: `${((step + 1) / tourSteps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h3>{tourSteps[step].title}</h3>
      <p className="fb-tour-description">{tourSteps[step].text}</p>

      <div className="fb-tour-controls">
        <button
          type="button"
          onClick={() => speakStep(step)}
          className="fb-tour-play"
        >
          ▶ Play narration
        </button>

        <button
          type="button"
          onClick={pauseVoice}
          className="fb-tour-secondary"
        >
          {playing ? "Pause" : "Resume"}
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="fb-tour-secondary"
        >
          Next →
        </button>
      </div>

      <p className="fb-tour-note">
        Narration uses the voices available in your browser.
      </p>
    </section>
  );
}
