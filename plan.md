# Interactive Map Development Plan

## Task Overview
Create an interactive map based on modelo1.png where green circular icons above doors become hoverable hotspots that display explanatory tooltips.

## Requirements Analysis
- ✅ No external API keys needed
- ✅ Pure frontend implementation
- ✅ Use existing Next.js + TypeScript + Tailwind setup
- ✅ Leverage shadcn/ui Tooltip component
- ✅ Responsive design considerations

## Implementation Steps

### Phase 1: Setup and Image Integration
1. **Save the provided image**
   - Save modelo1.png to public/ directory
   - Optimize image for web if needed

2. **Create the main interactive map component**
   - Create `src/components/InteractiveMap.tsx`
   - Set up the base layout with the background image
   - Ensure responsive scaling

### Phase 2: Hotspot Implementation
3. **Identify hotspot positions**
   - Analyze the image to determine exact positions of green circular icons
   - Create coordinate mapping for each hotspot
   - Account for responsive positioning

4. **Create hotspot components**
   - Create `src/components/Hotspot.tsx` component
   - Implement hover states and visual feedback
   - Add accessibility features (keyboard navigation, ARIA labels)

### Phase 3: Tooltip Integration
5. **Implement tooltip functionality**
   - Use shadcn/ui Tooltip component
   - Create content for each hotspot explaining their purpose
   - Style tooltips to match the design aesthetic

6. **Add interactive content**
   - Define explanatory text for each green icon location
   - Implement smooth hover animations
   - Ensure tooltips don't overflow viewport

### Phase 4: Main Page Integration
7. **Create the main page**
   - Update `src/app/page.tsx` to display the interactive map
   - Add proper page title and meta information
   - Implement clean, modern styling

8. **Responsive optimization**
   - Ensure hotspots scale properly on different screen sizes
   - Test tooltip positioning on mobile devices
   - Add touch-friendly interactions for mobile

### Phase 5: Testing and Polish
9. **Testing and refinement**
   - Test all hotspot interactions
   - Verify tooltip content and positioning
   - Ensure accessibility compliance
   - Cross-browser compatibility check

## Technical Stack
- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Tooltip, Card, etc.)
- **Interactions**: React hooks (useState, useEffect)
- **Image**: Static asset in public/ directory

## Expected Deliverables
- Interactive map component with hoverable hotspots
- Responsive design that works on desktop and mobile
- Accessible implementation with proper ARIA labels
- Clean, modern UI following the existing design system
- Smooth hover animations and transitions

## Success Criteria
- ✅ All green circular icons are interactive
- ✅ Tooltips appear on hover with relevant explanations
- ✅ Responsive design works across devices
- ✅ Accessible to screen readers and keyboard navigation
- ✅ Smooth user experience with appropriate feedback
