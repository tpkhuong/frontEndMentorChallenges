import "../styles/global.css";

// export
export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Building Next Js App" />
      <body>{children}</body>
    </html>
  );
}
