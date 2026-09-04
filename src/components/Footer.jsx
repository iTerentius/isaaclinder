export default function Footer() {
  return (
    <footer className="bg-red-950/10 py-10 text-sm text-brand text-center">
      <p className="flex flex-col gap-2">
        <span className="text-red-800 font-extrabold">
          Open to Frontend Developer / Frontend Engineer roles.
        </span>
        <span className="font-mono font-light">
          <a href="mailto:isaac@terenti.us" target="_blank" className="underline">Email</a> +{' '}
          <a href="https://linkedin.com/in/isaactlinder" target="_blank" className="underline">LinkedIn</a> +{' '}
          <a href="https://github.com/iTerentius" target="_blank" className="underline">GitHub</a> +{' '}
          <a href="images/Isaac-Linder-Resume-2026.pdf" target="_blank" className="underline">Resume</a>
        </span>
      </p>
    </footer>
  )
}
