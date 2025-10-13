## SuccessModal

File: `src/renderer/src/components/SuccessModal.tsx`

### Props
- `isOpen: boolean`
- `onClose: () => void`
- `title: string`
- `message: string`
- `buttonText: string`
- `buttonLink: string`

### Behavior
- Modal overlay with success icon and a single button.
- Clicking the button triggers `onClose` and, if `buttonLink` is provided, navigates to it.

### Usage example
```tsx
<SuccessModal
  isOpen
  onClose={() => setOpen(false)}
  title="Profile updated"
  message="Your settings were saved successfully."
  buttonText="Go to dashboard"
  buttonLink="/dashboard"
/>
```
