import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-h-14 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {/* Titel oben */}
      <div className="text-center w-full mb-16">
        <h1 className="text-4xl sm:text-10xl md:text-6x3 font-extrabold text-white tracking-tight">
          Willkommen bei Stübi Digital
        </h1>
        <p className="mt-10000 text-lg sm:text-xl text-white">
          Dein Partner für digitale Lösungen, die deinem Unternehmen zum Erfolg
          verhelfen.
        </p>
      </div>

      {/* Split-Screen Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Linker Bereich */}
        <div className="w-full lg:w-1/2 flex justify-start items-center p-8 lg:p-16 h-full"> {/* h-full hinzugefügt */}
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3x3 lg:text-4xl font-bold mb-4">
              Willkommen bei Stübi Digital
            </h2>
            <p className="text-lg sm:text-xl mb-20">
              Dein Partner für digitale Lösungen, die deinem Unternehmen zum
              Erfolg verhelfen.
            </p>
            {/* Hier könnte noch ein weiteres Bild oder CTA eingebaut werden */}
            <Link
              href="#"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 m-9"
            >
              Mehr erfahren
            </Link>
            <div className="space-x-9">
              <button>Kostenlose Beratung</button>
              <button>Unsere Arbeiten</button>
            </div>
          </div>
        </div>

        {/* Rechter Bereich */}
        <div className="w-full lg:w-1/2 flex justify-end items-start p-8 lg:p-16 relative h-full"> {/* h-full hinzugefügt */}
          {/* Bild oben rechts */}
          <div className="absolute top-0 right-0 p-4 w-3/6">
            
            {/* Link zu einer externen Seite */}
            <Link href="https://stuebenhofer-weg.de/iserv/auth/login?_target_path=/iserv/auth/auth?_iserv_app_url%3D%2Fiserv%2F%26client_id%3D5_5p3u4yhl5ckc0ss4go44w44wk88w4s4g0c008s0cws0cowcs4o%26nonce%3Da2457052-7cf1-4f24-8d64-fa11491d8309%26redirect_uri%3Dhttps%253A%2F%2Fstuebenhofer-weg.de%2Fiserv%2Fapp%2Fauthentication%2Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520uuid%2520iserv%253Asession-id%2520iserv%253Aweb-ui%2520iserv%253A2fa%253Aconfiguration%2520iserv%253Aaccess-groups%26state%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjEifQ.eyJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsIm5vbmNlIjoiYTI0NTcwNTItN2NmMS00ZjI0LThkNjQtZmExMTQ5MWQ4MzA5IiwiYWRtaW4iOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsImV4cCI6MTczOTg2NjI5NiwibmJmIjoxNzMyMDkwMjM2LCJpYXQiOjE3MzIwOTAyOTYsInNpZCI6IiJ9.XnqFa_iMjaAFHHIFfP6WNHuQ5rCS4NAjC4-18zpCtLtOa3wKIgijJQSwHjuGbEFQHt4qKFQyFe3jSevQ5__mFw">
              Weitere Seiten
            </Link>

            {/* Link zu einer internen Seite */}
            <Link
              href="/team"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 m-9"
            >
              zu uns
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
