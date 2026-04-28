# UMATTR Vercel Package

This package now includes the core public routes for the UMATTR site:
- `/` homepage
- `/programs` AI Programs catalog page
- `/programs/foundations`
- `/programs/for-work`
- `/programs/for-business`
- `/career-intelligence`
- `/consulting`
- `/start`
- `/assessment`
- `/glossary`
- `/dashboard`
- `/about`

## Quick deploy
1. Unzip
2. Run `npm install`
3. Run `npm run dev` locally or push to Vercel

## Route notes
- Program and career package routes use placeholder Payhip destinations for launch.
- Consulting uses an inquiry-first mailto flow for now.
- Free entry routes are public utility pages that connect the site together without fake gated content.

## Chatbase
- The chatbot widget uses the official Chatbase embed script with the UMATTR agent ID defined in `lib/chatbase-config.mjs`.
- The floating assistant is mounted globally from the root layout and is hidden on `/help`.

## Copy deterrence
- Set `NEXT_PUBLIC_ENABLE_COPY_DETERRENCE=true` in Vercel to turn on the production-only devtools deterrent.
- Leave it unset or `false` to keep the site normal.
- Wrap premium prose only:

```tsx
import { ProtectedContent } from "../components/security/ProtectedContent";

export default function LessonPage({ userEmail }: { userEmail?: string }) {
  return (
    <ProtectedContent watermarkText={userEmail ?? "UMATTR Protected"} aggressive>
      <article>
        <h1>Premium lesson</h1>
        <p>This section is copy-protected.</p>
        <p data-allow-copy="true">support@umattr.ca</p>
      </article>
    </ProtectedContent>
  );
}
```

- Use `aggressive={false}` when you only want selection/right-click deterrence.
