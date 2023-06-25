import "../styles/global.css";

// export

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Building Next Js App" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>{children}</body>
    </html>
  );
}
