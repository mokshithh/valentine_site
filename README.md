# Valentine Mini-Game Website

A modern, bright-pink Valentine experience featuring three interactive games and a final proposal reveal. Built with React, Tailwind CSS, and pure JavaScript for smooth, engaging gameplay.

## Features

### Game Flow

The website guides players through a complete journey:

1. **Landing Page** - Personalized greeting with "For: Rb 🦇" and introduction to the three challenges
2. **Game 1: Find the Unique One** - Spot the cat with the rose in a grid of common cats
3. **Game 2: Memory Match** - Match 6 pairs of images with flip animations
4. **Game 3: Catch the Hearts** - Collect 10 falling hearts within 15 seconds
5. **Final Page** - The big Valentine proposal with interactive YES/NO buttons

### Design Direction

- **Vibe**: Romantic + cute + modern (not childish), very bright pink with dynamic glossy gradients
- **Colors**: Hot pink (#ff1493), bubblegum pink (#ffc0cb), white, with subtle purple accents (#9370db)
- **Typography**: Poppins for body text, Fredoka for headlines
- **Motion**: Smooth transitions, confetti/hearts on wins, micro-interactions on clicks
- **Responsive**: Mobile-first design with perfect scaling from phone to desktop

### Technical Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom pink color palette
- **Routing**: Client-side routing with Wouter
- **Components**: shadcn/ui for consistent, accessible UI elements
- **Assets**: All images embedded from the specification document

## Game Details

### Game 1: Find the Unique One

- **Mobile**: 4×6 grid (24 tiles)
- **Desktop**: 6×6 grid (36 tiles)
- **Mechanics**: Click tiles to find the unique cat with the rose
- **Feedback**: Shake animation on wrong clicks, confetti on correct
- **Hint**: One-time hint button that highlights the unique tile for 300ms

### Game 2: Memory Match (Hard Mode)

- **Cards**: 12 cards (6 pairs) using images from the specification
- **Mechanics**: Flip cards to find matching pairs
- **Flip Animation**: Smooth 3D-style flip with 800ms delay on mismatches
- **Tracking**: Displays move counter and elapsed time
- **Win Condition**: All pairs matched

### Game 3: Catch the Hearts

- **Duration**: 15 seconds
- **Target**: Collect 10 falling hearts
- **Mechanics**: Hearts fall from top, tap/click to collect
- **Display**: Counter and countdown timer visible at all times

### Final Page

- **YES Button**: Triggers confetti animation and displays "yh thashwat i thought"
- **NO Button**: Playfully runs away when hovered, cannot be clicked
- **Background**: Animated floating hearts throughout

## Features

- **Music Toggle**: Top-right corner button to play/pause background music (placeholder audio file included)
- **Progress Indicator**: Heart progress tracker showing current game status
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Smooth Animations**: Micro-interactions and transitions throughout
- **Accessibility**: Large tap targets, clear visual feedback, keyboard-friendly

## File Structure

```
client/
  public/
    assets/
      image1.png - Game 1 common tile
      image2.png - Game 1 unique tile
      image3-8.png - Game 2 memory match pairs
      image9.png - Site logo
      music.mp3 - Background music placeholder
  src/
    pages/
      Landing.tsx - Landing page with intro
      Game1.tsx - Find the Unique One game
      Game2.tsx - Memory Match game
      Game3.tsx - Catch the Hearts game
      FinalPage.tsx - Valentine proposal page
    components/
      Header.tsx - Top navigation with logo and controls
    App.tsx - Main app component with game routing
    index.css - Global styles and Valentine color palette
```

## Customization

### Music

Replace `/client/public/assets/music.mp3` with your preferred background music file (e.g., "Lover Girl" by Sattura).

### Messages

All game messages and text can be customized in the respective page components:
- Landing intro text
- Game success messages
- Final page messages

### Colors

The Valentine color palette is defined in `/client/src/index.css`:
- Primary: Hot pink (#ff1493)
- Secondary: Bubblegum pink (#ffc0cb)
- Accent: Purple (#9370db)
- Background: Light pink (#fff5f9)

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The website is a static frontend-only application that can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Manus (built-in hosting)

Simply export the project and deploy the built files.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All assets are locally included and exportable
- No backend required - pure client-side gameplay
- Lightweight and fast-loading
- Mobile-optimized with large, easy-to-tap buttons
