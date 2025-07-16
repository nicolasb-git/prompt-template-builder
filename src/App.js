import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    ageDescriptor: '',
    gender: '',
    specie: '',
    skinColor: '',
    hairStyleColor: '',
    eyeColor: '',
    expression: '',
    clothingDescriptionStyle: '',
    poseOrAction: '',
    backgroundEnvironment: '',
    lightingTypeSource: '',
    camera: '',
    composition: '',
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
      specie,
      skinColor,
      hairStyleColor,
      eyeColor,
      expression,
      clothingDescriptionStyle,
      poseOrAction,
      backgroundEnvironment,
      lightingTypeSource,
      camera,
      composition,
      artStyleMedium,
      moodEmotion,
    } = formData;

    const prompt = `A ${ageDescriptor} years old ${specie} ${gender} with ${skinColor} skin, ${hairStyleColor}, ${eyeColor} eyes with ${expression} expression, dressed in ${clothingDescriptionStyle}, ${poseOrAction}, set against ${backgroundEnvironment}, illuminated by ${lightingTypeSource}, shot with ${camera}, composed using ${composition}, in ${artStyleMedium}, evoking a sense of ${moodEmotion}.`;
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  // Helper: Option lists for random selection
  const optionLists = {
    ageDescriptor: [
      "Young",
      "Old",
      "Elderly",
      "Ancient",
      "Aged",
      "Youthful",
      "Juvenile",
      "Infantile",
      "Adolescent",
      "Mature",
      "Middle-aged",
      "Senior",
      "New",
      "Newborn",
      "Recent",
      "Prime (as in 'in their prime')",
      "Timeless",
      "Ageless",
      "Prehistoric",
      "Vintage",
      "Antique",
      "Modern",
      "Contemporary",
      "Medieval",
      "Archaic",
      "Primeval",
      "Centenarian",
      "Millennial",
      "Geriatric",
    ],
    gender: ["Male", "Female", "Neutral"],
    specie: [
      "Elves",
      "Dwarves",
      "Orcs",
      "Goblins",
      "Trolls",
      "Fae (Fairies)",
      "Giants",
      "Tieflings",
      "Dragonborn",
      "Vulcans",
      "Klingons",
      "Time Lords",
      "Na’vi",
      "Kryptonians",
      "Asari",
      "Twi’leks",
      "Zabrak",
      "Replicants",
      "Synths",
      "Androids",
      "Cylons",
      "Geth",
      "Mechas (with AI)",
      "Chiss",
      "Minbari",
      "Martians",
      "Tharks",
      "Ood",
      "Bajorans",
      "Cardassians",
      "Romulans",
      "Saiyans",
      "Namekians",
      "Hylians",
      "Argonians",
      "Khajiit",
      "Skaven",
      "Genasi",
      "Aasimar",
      "Goliaths",
      "Shifters",
      "Warforged",
      "Quarians",
      "Salarians",
      "Turians",
      "Yautja (Predators)",
      "Xenomorphs (with humanoid traits)",
      "Cylons",
      "Observers (Fringe)",
      "Eternals (Marvel)",
      "Deviants (Marvel)",
      "Skrulls",
      "Kree",
      "Inhumans",
      "Mutants (X-Men)",
      "Dren (Splice)",
      "Engineers (Prometheus)",
      "Morlocks (The Time Machine)",
      "Eloi (The Time Machine)",
      "Trisolarans (Three-Body Problem)",
    ],
    skinColor: [
      "Pale",
      "Fair",
      "Light",
      "Olive",
      "Tan",
      "Brown",
      "Dark Brown",
      "Black",
    ],
    hairStyleColor: [
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
    ],
    eyeColor: [
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
    ],
    expression: [
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
    ],
    clothingDescriptionStyle: [
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
    ],
    poseOrAction: [
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
    ],
    backgroundEnvironment: [
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
    ],
    lightingTypeSource: [
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
    ],
    camera: [
      "Wide angle lens",
      "Telephoto lens",
      "Macro lens",
      "Fisheye lens",
      "Tilt-shift lens",
      "Standard lens",
      "Zoom lens",
      "Prime lens",
      "360-degree camera",
      "Drone shot",
      "GoPro action cam",
      "Smartphone camera",
      "DSLR camera",
      "Mirrorless camera",
      "Vintage film camera",
      "Polaroid instant camera",
      "Infrared camera",
      "Night vision camera",
      "Thermal camera",
      "Security camera",
      "Webcam",
    ],
    composition: [
      "Close-up",
      "Wide shot",
      "Bird’s-eye view",
      "Worm’s-eye view",
      "Portrait orientation",
      "Landscape orientation",
      "Depth of field",
      "Bokeh effect",
      "Rule of thirds",
      "Symmetrical composition",
      "Dynamic angle",
      "Tilted perspective",
    ],
    artStyleMedium: [
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
    ],
    moodEmotion: [
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
    ],
  };

  // Helper: Get random value from array
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Handler: Randomize all fields
  const randomizeAll = () => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      Object.keys(optionLists).forEach((key) => {
        newData[key] = getRandom(optionLists[key]);
      });
      return newData;
    });
  };

  return (
    <div className="App">
      <h1>Humanoid Picture Prompt Builder</h1>
      <div className="form-container">
        <button type="button" onClick={randomizeAll} style={{ marginBottom: '1em' }}>
          Randomize All
        </button>
        {/* Replace Age Descriptor input with a select list */}
        <select
          name="ageDescriptor"
          value={formData.ageDescriptor}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Age Descriptor
          </option>
          {optionLists.ageDescriptor.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Gender
          </option>
          {optionLists.gender.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <select
          name="specie"
          value={formData.specie}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Specie
          </option>
          {optionLists.specie.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
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
          {optionLists.skinColor.map((color) => (
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
          {optionLists.hairStyleColor.map((hairStyle) => (
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
          {optionLists.eyeColor.map((color) => (
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
          {optionLists.expression.map((expr) => (
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
          {optionLists.clothingDescriptionStyle.map((clothing) => (
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
          {optionLists.poseOrAction.map((pose) => (
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
          {optionLists.backgroundEnvironment.map((environment) => (
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
          {optionLists.lightingTypeSource.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        <select
          name="camera"
          value={formData.camera}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Camera
          </option>
          {optionLists.camera.map((camera) => (
            <option key={camera} value={camera}>
              {camera}
            </option>
          ))}
        </select>
        <select
          name="composition"
          value={formData.composition}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Composition
          </option>
          {optionLists.composition.map((composition) => (
            <option key={composition} value={composition}>
              {composition}
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
          {optionLists.artStyleMedium.map((style) => (
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
          {optionLists.moodEmotion.map((mood) => (
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
