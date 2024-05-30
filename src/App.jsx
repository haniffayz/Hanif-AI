import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import "./App.css";
import { requestToHanif } from "./utilities/groq";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async () => {
    const content = document.getElementById("content").value;
    setUserMessage(content); // Set the user message
    setLoading(true);
    setTimeout(async () => {
      const ai = await requestToHanif(content);
      setData(ai);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
    <main className="bg-zinc-900">
      <div className="flex flex-col min-h-[100vh] justify-center items-center bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
        <div className="flex flex-col w-full max-w-3xl 2xl:max-w-5xl rounded-xl lg:mt-2 mt-20 mb-20 p-4 bg-white dark:bg-zinc-900 shadow-md shadow-gray-300 dark:shadow-black">
          <div className="flex-1 p-3 overflow-y-auto scroll flex flex-col" id="chatDisplay">
          {userMessage ? (
            <div className="chat-message self-end bg-blue-500 text-white max-w-xl rounded-lg px-3 py-1.5 mb-6 2xl:text-lg xl:text-sm scroll">
                {userMessage}
              </div>
            ) : <h1 className="text-white">Tanyakan apapun pada Hanif</h1>}
            {loading ? (
              <div className="self-start bg-zinc-500 text-white rounded-lg px-3 py-1.5 2xl:text-lg xl:text-sm max-w-xl 2xl:max-w-2xl w-full flex items-center justify-center">
                <div className="custom-loader mr-2"></div>
                Loading...
              </div>
            ) : (
              data && (
                <SyntaxHighlighter
                wrapLongLines={true}
                language="swift"
                style={oneDark}
                className="chat-message self-start bg-zinc-500 text-white rounded-lg px-3 py-1.5 2xl:text-lg xl:text-sm text-sm max-w-xl 2xl:max-w-2xl w-full">
                  {data}
                </SyntaxHighlighter>
              )
            )}
          </div>

        </div>
        <div className="px-3 bg-zinc-800 flex w-full justify-center items-center py-2 fixed bottom-0">
            <div className="flex gap-4 w-full 2xl:px-[32rem] xl:px-[14rem] lg:px-[7rem]">
              <textarea
                placeholder="Kirim pesan ke hanif..."
                className="flex-1 p-3 w-full 2xl:h-[4rem] xl:h-[3.5rem] h-[3.5rem] rounded-xl dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-lg"
                id="content"
                type="text"
              />
              <button
                className={`bg-blue-700 hover:bg-blue-500 text-white font-bold py-1.5 px-4 rounded-lg transition duration-300 ease-in-out text-sm flex items-center justify-center ${loading ? "loading" : ""}`}
                id="sendButton"
                onClick={handleSubmit}
                type="button"
                disabled={loading}
              >
                {loading ? (
                  <div className="custom-loader"></div>
                ) : (
                  <PaperPlaneRight size={24} />
                )}
              </button>
            </div>
          </div>
      </div>
  </main>
    </>
  );
}

export default App;

