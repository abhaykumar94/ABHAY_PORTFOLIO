# Abhay Kumar Portfolio

An immersive developer portfolio built as a realtime film experience with:

- React + Vite + TypeScript
- Tailwind CSS with fluid design tokens
- React Three Fiber + Drei + Postprocessing
- GSAP ScrollTrigger + Observer
- Lenis smooth scroll
- Zustand stores for UI and camera direction
- Rapier-powered neural skill field
- Custom GLSL shaders for the hero particle universe

## Folder Structure

```text
src/
  app/
    screens/PortfolioExperience.tsx
    App.tsx
    router.tsx
  components/
    cursor/FluidCursor.tsx
    layout/SceneSection.tsx
    layout/SectionHeader.tsx
    preloader/Preloader.tsx
    three/CameraRig.tsx
    three/ExperienceCanvas.tsx
  content/
    profile.ts
    scenes.ts
  features/
    contact/BlackHoleField.tsx
    contact/ContactScene.tsx
    experience/ExperiencePath3D.tsx
    experience/ExperienceScene.tsx
    hero/Hero3D.tsx
    hero/HeroScene.tsx
    projects/ProjectsScene.tsx
    showreel/ShowreelPlane.tsx
    showreel/ShowreelScene.tsx
    skills/SkillsField3D.tsx
    skills/SkillsScene.tsx
  hooks/
    use-lenis-sync.ts
  shaders/
    hero/vertex.glsl
    hero/fragment.glsl
    hero/sim-vertex.glsl
    hero/sim-fragment.glsl
  stores/
    camera-store.ts
    ui-store.ts
```

## Architecture Notes

- The DOM sections behave like scenes and update route state as you scroll.
- A single fixed R3F canvas sits behind the experience and transitions with scene state.
- The hero uses a ping-pong FBO simulation so particle movement stays on the GPU.
- Projects use pinned horizontal motion through ScrollTrigger.
- Skills are represented as Rapier rigid bodies to give the network physical presence.
- The showreel section opens a placeholder modal and is ready to accept a final film asset.

## Performance Notes

- Particle count is capped at `192 x 192` for a strong visual density without overwhelming low-end GPUs.
- Draw calls stay low by keeping the hero particle field in a single `Points` object.
- Heavy scenes share one fullscreen canvas instead of mounting multiple WebGL roots.
- `AdaptiveDpr` and capped DPR keep mobile devices from overspending on pixels.
- Tailwind is used for most surface styling so the DOM stays lean and composable.
- If you add a real showreel file, prefer compressed MP4/WebM with poster fallback and lazy load it only when the showreel scene becomes active.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Replace Before Launch

- Verify OCR-derived contact details in `src/content/profile.ts`.
- Replace the showreel placeholder with an actual reel asset if available.
- Tune `SIM_SIZE` in `src/features/hero/Hero3D.tsx` based on target hardware.
