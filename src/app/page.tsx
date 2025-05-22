import { AsciiArtGenerator } from "../components/ascii/AsciiArtGenerator";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-2">ADEPTUS MECHANICUS</h1>
        <h2 className="text-2xl text-gray-500 mb-6">ASCII Art Cogitator</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Convert your pict-captures to sacred binary patterns. The Omnissiah approves this machine spirit transformation.
        </p>
      </div>
      
      <AsciiArtGenerator />
    </div>
  );
}
