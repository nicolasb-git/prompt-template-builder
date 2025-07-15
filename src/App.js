import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    ageDescriptor: '',
    gender: '',
    skinColor: '',
    hairStyleColor: '',
    eyeColor: '',
    expression: '',
    clothingDescriptionStyle: '',
    poseOrAction: '',
    backgroundEnvironment: '',
    lightingTypeSource: '',
    artStyleMedium: '',
    moodEmotion: '',
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generatePrompt = () => {
    const {
      ageDescriptor,
      gender,
      skinColor,
      hairStyleColor,
      eyeColor,
      expression,
      clothingDescriptionStyle,
      poseOrAction,
      backgroundEnvironment,
      lightingTypeSource,
      artStyleMedium,
      moodEmotion,
    } = formData;

    const prompt = `A ${ageDescriptor} ${gender} with ${skinColor} skin, ${hairStyleColor}, ${eyeColor} eyes with ${expression} expression, dressed in ${clothingDescriptionStyle}, ${poseOrAction}, set against ${backgroundEnvironment}, illuminated by ${lightingTypeSource}, in ${artStyleMedium}, evoking a sense of ${moodEmotion}.`;
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  return (
    <div className="App">
      <h1>Woman Picture Prompt Template Builder</h1>
      <div className="form-container">
        <input
          type="text"
          name="ageDescriptor"
          placeholder="Age Descriptor"
          value={formData.ageDescriptor}
          onChange={handleChange}
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Gender
          </option>
          {[
            "Male",
            "Female",
          ].map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <select
          name="skinColor"
          value={formData.skinColor}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Skin Color
          </option>
          {[
            "Pale",
            "Fair",
            "Light",
            "Olive",
            "Tan",
            "Brown",
            "Dark Brown",
            "Black",
          ].map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        <select
          name="hairStyleColor"
          value={formData.hairStyleColor}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Hair Style and Color
          </option>
          {[
            "bald",
            "hairy",
            "Long straight hair",
            "Wavy shoulder-length hair",
            "Curly bob",
            "Pixie cut",
            "Buzz cut",
            "High ponytail",
            "Low bun",
            "Messy bun",
            "Braided crown",
            "French braid",
            "Dutch braid",
            "Twin braids",
            "Afro",
            "Mohawk",
            "Undercut",
            "Side shave",
            "Spiky hair",
            "Slicked back",
            "Side part",
            "Center part",
            "Dreadlocks",
            "Cornrows",
            "Top knot",
            "Layered cut",
            "Mullet",
            "Shag cut",
            "Pompadour",
            "Faux hawk",
            "Space buns",
            "Half-up half-down",
          ].map((hairStyle) => (
            <option key={hairStyle} value={hairStyle}>
              {hairStyle}
            </option>
          ))}
        </select>
        <select
          name="eyeColor"
          value={formData.eyeColor}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Eye Color
          </option>
          {[
            "Brown",
            "Dark Brown",
            "Light Brown",
            "Hazel",
            "Green",
            "Blue",
            "Light Blue",
            "Dark Blue",
            "Gray",
            "Light Gray",
            "Dark Gray",
            "Amber",
            "Golden",
            "Violet",
            "Purple",
            "Red",
            "Pink",
            "Heterochromia",
            "Albino",
          ].map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        <select
          name="expression"
          value={formData.expression}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Expression
          </option>
          {[
            "Neutral",
            "Happy",
            "Sad",
            "Angry",
            "Surprised",
            "Confused",
            "Determined",
            "Confident",
            "Shy",
            "Mysterious",
            "Suspicious",
            "Amused",
            "Serious",
            "Thoughtful",
            "Worried",
            "Excited",
            "Calm",
            "Intense",
            "Gentle",
            "Fierce",
            "Dreamy",
            "Focused",
            "Relaxed",
            "Alert",
            "Tired",
            "Energetic",
            "Melancholic",
            "Optimistic",
            "Pessimistic",
            "Curious",
            "Bored",
            "Interested",
            "Disinterested",
            "Friendly",
            "Hostile",
            "Welcoming",
            "Distant",
            "Warm",
            "Cold",
            "Passionate",
            "Reserved",
          ].map((expr) => (
            <option key={expr} value={expr}>
              {expr}
            </option>
          ))}
        </select>
        <select
          name="clothingDescriptionStyle"
          value={formData.clothingDescriptionStyle}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Clothing Description and Style
          </option>
          {[
            "Long flowing dress",
            "Tight leather jacket",
            "Oversized hoodie",
            "Cropped denim jacket",
            "High-waisted jeans",
            "Ripped skinny jeans",
            "Pleated skirt",
            "Floor-length gown",
            "Button-up shirt",
            "Sleeveless tank top",
            "Turtleneck sweater",
            "Baggy cargo pants",
            "Fitted blazer",
            "Trench coat",
            "Bomber jacket",
            "Sports jersey",
            "Graphic T-shirt",
            "Lace blouse",
            "Silk kimono",
            "Wool cardigan",
            "Military uniform",
            "School uniform",
            "Business suit",
            "Lab coat",
            "Chef’s apron",
            "Medieval armor",
            "Futuristic bodysuit",
            "Cyberpunk outfit",
            "Steampunk attire",
            "Traditional kimono",
            "Hanbok dress",
            "Saree with embroidery",
            "Gothic lolita dress",
            "Punk leather outfit",
            "Victorian dress",
            "Casual summer dress",
            "Winter parka",
            "Swimsuit with sarong",
            "Yoga outfit",
            "Hiking gear",
            "Tactical vest",
            "Robe with hood",
            "Cape with fur trim",
            "Sequin party dress",
            "Denim overalls",
            "Crop top and shorts",
            "Crop top and skirt",
            "Flannel shirt",
            "Fishnet stockings",
            "Platform boots",
            "Sandals with straps",
            "Sneakers with neon laces",
            "Basic cotton briefs",
            "Boxer shorts",
            "Boxer briefs",
            "High-waisted panties",
            "Low-rise briefs",
            "Seamless underwear",
            "Lace-trimmed briefs",
            "Sports bra",
            "Bralette",
            "Underwire bra",
            "Strapless bra",
            "Push-up bra",
            "Bikini-style underwear",
            "Thong",
            "Hipster cut",
            "Boyshorts",
            "Thermal underwear",
            "Compression shorts",
            "Shapewear bodysuit",
            "Camisole with built-in bra",
            "Longline bra",
            "Mesh panel briefs",
            "Satin lingerie set",
            "Ribbed cotton set",
            "Silk slip",
          ].map((clothing) => (
            <option key={clothing} value={clothing}>
              {clothing}
            </option>
          ))}
        </select>
        <select
          name="poseOrAction"
          value={formData.poseOrAction}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Pose or Action
          </option>
          {[
            "Standing with arms at sides",
            "Sitting upright on a chair",
            "Crouching with hands on the ground",
            "Leaning against a wall with crossed arms",
            "Walking forward",
            "Running mid-stride",
            "Jumping with knees bent",
            "Arms crossed",
            "Hands on hips",
            "Hands behind back",
            "One hand in pocket",
            "Both hands in pockets",
            "Arms raised in victory",
            "Kneeling on one knee",
            "Lying on the ground",
            "Pointing forward",
            "Waving one hand",
            "Holding an object with both hands",
            "Throwing something",
            "Drawing a sword",
            "Aiming a bow",
            "Casting a spell",
            "Floating in mid-air",
            "Balancing on one leg",
            "Dodging sideways",
            "Blocking with arms",
            "Hugging someone",
            "Whispering to another character",
            "Laughing with head tilted back",
            "Crying with hands covering face",
            "Looking over shoulder",
            "Sitting cross-legged",
            "Meditating with closed eyes",
            "Reaching upward",
            "Falling backward",
            "Slouching in a chair",
            "Holding a weapon defensively",
            "Charging forward",
            "Saluting",
            "Clapping hands",
            "Holding a phone to ear",
            "Drinking from a cup",
            "Reading a book",
            "Typing on a keyboard",
            "Stretching arms overhead",
            "Scratching head",
            "Hands on cheeks in surprise",
            "Covering ears",
            "Holding chest in pain",
            "Kneeling with hands raised",
          ].map((pose) => (
            <option key={pose} value={pose}>
              {pose}
            </option>
          ))}
        </select>
        <select
          name="backgroundEnvironment"
          value={formData.backgroundEnvironment}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Background or Environment
          </option>
          {[
            "Forest",
            "Desert",
            "Snowy mountain",
            "Beach",
            "Urban street",
            "Rooftop at night",
            "Futuristic city",
            "Medieval village",
            "Ancient ruins",
            "Space station",
            "Alien planet",
            "Underwater reef",
            "Castle interior",
            "Throne room",
            "Dungeon",
            "Library",
            "Laboratory",
            "School classroom",
            "Abandoned warehouse",
            "Battlefield",
            "Garden at sunset",
            "Rainy alley",
            "Cyberpunk alley",
            "Floating island",
            "Volcano crater",
            "Temple courtyard",
            "Train station",
            "Airport terminal",
            "Carnival at night",
            "Marketplace",
            "Farm field",
            "Cliffside",
            "Moonlit lake",
            "Foggy swamp",
            "Ice cave",
            "Lava cave",
            "Magical forest",
            "Haunted mansion",
            "Sci-fi control room",
            "Steampunk workshop",
            "Fairy glade",
            "Pirate ship deck",
            "Suburban neighborhood",
            "Luxury apartment",
            "Hospital room",
            "War-torn city",
            "Underground bunker",
            "Sky temple",
            "Digital cyberspace",
          ].map((environment) => (
            <option key={environment} value={environment}>
              {environment}
            </option>
          ))}
        </select>
        <select
          name="lightingTypeSource"
          value={formData.lightingTypeSource}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Lighting Type or Source
          </option>
          {[
            "Sunlight (natural daylight)",
			"Moonlight (cool, soft natural light)",
			"Firelight (candles, torches, campfires)",
			"Ambient daylight (diffused, cloudy sky)",
			"Incandescent bulb (warm, soft artificial light)",
			"Fluorescent light (cool, harsh indoor lighting)",
			"LED light (versatile, energy-efficient lighting)",
			"Neon light (bright, colorful glow)",
			"Halogen light (intense, white artificial light)",
			"Spotlight (focused beam, dramatic effect)",
			"Streetlight (urban night lighting)",
			"TV or screen glow (cool, ambient electronic light)",
			"Laser light (sharp, concentrated beam)",
			"Stage lighting (theatrical, colored or dynamic)",
			"Lantern (portable, warm light source)",
			"Chandelier (elegant, multi-bulb ceiling light)",
			"Backlighting (light from behind the subject)",
			"Rim lighting (glow outlining the subject)",
			"Side lighting (strong shadows, dramatic depth)",
			"Top lighting (light from above, natural or artificial)",
			"Underlighting (light from below, eerie effect)",
			"Soft lighting (diffused, gentle shadows)",
			"Hard lighting (sharp shadows, high contrast)",
			"Volumetric lighting (visible light rays in fog or dust)",
			"Global illumination (realistic light bounce in 3D)",
			"HDRI lighting (high dynamic range image-based lighting)",
          ].map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        <select
          name="artStyleMedium"
          value={formData.artStyleMedium}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Art Style or Medium
          </option>
          {[
            "Colored pencil",
            "Charcoal",
            "Oil painting",
            "Pastel",
            "Graffiti",
            "Tattoo",
            "Comic strip",
            "Cartoon",
            "Vintage Disney",
            "Studio Ghibli",
            "Caricature",
            "Animated drawing",
            "Coloring page",
            "Manga",
            "Anime",
            "Science fiction",
            "Steampunk",
            "Realistic fantasy",
            "Pixel art",
            "Low poly",
            "Papercut",
            "Abstract art",
			      "Photo realistic",
          ].map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        <select
          name="moodEmotion"
          value={formData.moodEmotion}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Mood or Emotion
          </option>
          {[
            "Peaceful",
            "Tense",
            "Romantic",
            "Mysterious",
            "Melancholic",
            "Joyful",
            "Chaotic",
            "Hopeful",
            "Gloomy",
            "Serene",
            "Suspenseful",
            "Dreamy",
            "Nostalgic",
            "Angry",
            "Energetic",
            "Lonely",
            "Intimate",
            "Dramatic",
            "Eerie",
            "Uplifting",
            "Tragic",
            "Whimsical",
            "Fearful",
            "Triumphant",
            "Desperate",
            "Playful",
            "Cold",
            "Warm",
            "Oppressive",
            "Liberating",
          ].map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
        <button onClick={generatePrompt}>Generate Prompt</button>
      </div>
      {generatedPrompt && (
        <div className="prompt-output">
          <p>{generatedPrompt}</p>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
