# Valentine Game Site - Asset Mapping

## Extracted Images from DOCX

### Game 1 - Find the Unique One
- **Asset 1** (image1.png): Common tile - cute cat face (chubby, happy expression)
- **Asset 2** (image2.png): Unique tile - cat with rose (different from common tile)

### Game 2 - Memory Match (6 pairs = 12 cards)
- **Asset 3** (image3.png): Pair A - modern cafe/restaurant interior scene
- **Asset 4** (image4.png): Pair B - girl with red bow clip (dark/moody aesthetic)
- **Asset 5** (image5.png): Pair C - three girls kissing cheeks (friendship/love theme)
- **Asset 6** (image6.png): Pair D - girl with hand on face (intimate moment)
- **Asset 7** (image7.png): Extra Pair E - girl in floral jacket (harder mode)
- **Asset 8** (image8.png): Extra Pair F - TBD (harder mode)

### Site Logo
- **Asset 9** (image9.png): "wassup ladies" logo with person in casual pose

## Specifications Summary

**Design Direction:**
- Vibe: romantic + cute + modern (NOT childish)
- Colors: hot pink / bubblegum pink / white with purple accents
- Typography: modern sans for UI + cute display font for headlines
- Motion: smooth transitions, confetti/hearts on wins, micro-interactions
- Mobile-first: responsive design, large tap targets

**Game Flow:**
1. Landing → Game 1 (Find the Unique One) → Game 2 (Memory Match) → Game 3 (Catch the Hearts) → Final Question

**Landing Page:**
- Title: "For: Rb 🦇"
- Logo: Asset #9 (top-left)
- Music toggle: top-right (with placeholder audio)

**Game 1 - Find the Unique One:**
- Mobile: ~24 tiles (4×6 grid)
- Desktop: ~36 tiles (6×6 grid)
- Most tiles: Asset #1
- One unique tile: Asset #2 (shuffled each load)
- Interactions: shake on wrong click, confetti on correct
- Win message: "YRRR"

**Game 2 - Memory Match (HARD MODE):**
- 6 pairs (12 cards) using Assets #3-#8
- Card back: cute pink heart pattern
- Flip animation on tap
- Match logic: 800ms flip-back if no match
- Win message: "YRRRRR"

**Game 3 - Catch the Hearts:**
- Collect 10 falling hearts in 15 seconds
- Counter and countdown timer
- Win message: celebratory animation

**Final Page:**
- Headline: "Will you be my Valentine?"
- YES button: confetti + "yh thashwat i thought"
- NO button: runs away forever + "igh bruh"

**Technical:**
- Pure HTML/CSS/JS (no backend)
- All assets locally referenced (exportable as zip)
- Mobile responsive
- Lightweight, no heavy libraries
