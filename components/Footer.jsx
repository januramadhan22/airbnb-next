import React from "react";

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full p-2 md:px-10 border-t-2 bg-white flex items-center justify-between">
      <div>
        <p>© 2023 Airbnb, Inc.</p>
      </div>

      <div className="flex gap-4">
        <button>Privasi</button>
        <button>Ketentuan</button>
        <button>About</button>
      </div>
    </footer>
  );
}

export default Footer;
