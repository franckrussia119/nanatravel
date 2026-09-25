# Optional: replace the passport/visa illustration with a real photo

The Study in Russia page currently uses a custom illustration
(`components/illustrations/passport-illustration.tsx`), not a photo file, so
there's nothing required here.

If you'd rather use a real photo instead, add `campus.jpg` here and swap the
`<PassportIllustration />` line in
`app/[locale]/study-in-russia/page.tsx` for a `<Photo src="/images/study-russia/campus.jpg" .../>`.
