# UniPets Locator - Next.js Project Structure

```text
unipets-locator/
├── app/
│   ├── (auth)/             # Authentication routes (Login, Signup)
│   ├── (dashboard)/        # Main app features
│   │   ├── map/            # Interactive map page
│   │   ├── report/         # Emergency/Sighting report form
│   │   └── page.tsx        # Homepage (Nearby Activity)
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   └── globals.css         # Tailwind directives
├── components/
│   ├── ui/                 # Reusable UI components (Buttons, Inputs)
│   ├── map/
│   │   ├── MapComponent.tsx # Leaflet/Mapbox wrapper
│   │   └── MarkerPopup.tsx
│   ├── pets/
│   │   ├── PetCard.tsx      # Individual pet info card
│   │   └── PetList.tsx      # Sidebar list component
│   └── Layout/
│       ├── TopNavBar.tsx
│       └── SideNavBar.tsx
├── lib/
│   ├── api.ts              # API fetching logic
│   └── utils.ts            # Tailwind-merge/clsx helpers
├── public/
│   └── assets/             # Map icons & pet photos
└── tailwind.config.js       # Design tokens (Colors, Fonts)
```

## Setup Instructions
1. Initialize project: `npx create-next-app@latest`
2. Install dependencies: `npm install leaflet react-leaflet lucide-react`
3. Configure Tailwind with colors from {{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}
