'use client'
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Settings } from "../type";
type Props = {
  value: Settings;
}
const EditSettings: React.FC<Props> = ({ value }) => {
  const router = useRouter();
  const [version, setVersion] = useState(value.version);
  const [faq, setFaq] = useState(value.faq);
  const [tos, setTos] = useState(value.tos);
  const updateSettings = useCallback(async () => {
    const res = await fetch(`/api/settings`, {
      method: 'PUT',
      body: JSON.stringify({ version: version, faq: faq, tos: tos }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.ok) {
      alert('Settings updated');
      router.refresh();
    } else {
      alert('Settings failed to update');
    }
  }, [faq, router, tos, version]);

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
      <div className="sm:col-span-2">
        <label htmlFor="version" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Version</label>
        <input
          name="version"
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="faq" className="inline-block text-gray-800 text-sm sm:text-base mb-2">FAQ</label>
        <textarea
          name="faq"
          className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
          value={faq}
          onChange={(e) => setFaq(e.target.value)}
        ></textarea>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="tos" className="inline-block text-gray-800 text-sm sm:text-base mb-2">TOS</label>
        <textarea
          name="tos"
          className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
          value={tos}
          onChange={(e) => setTos(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
        <button onClick={updateSettings} className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2">Save</button>
      </div>
    </div>
  );
}

export default EditSettings;
