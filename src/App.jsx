import "./App.css";
import { requestToHanif } from "./utilities/groq";
import { useState } from "react";
import Swal from "sweetalert2";
import Input from "./component/input";
import Title from "./component/title";
import Output from "./component/output";

function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState(""); // Add state to store last user message

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!content.trim()) {
      Swal.fire({
        title: 'Harap isi pesan',
        icon: "warning"
      })
      return;
    }

    setLoading(true);
    const userMessage = content;
    setContent("");
    setLastUserMessage(userMessage); // Store the user message

    try {
      const ai = await requestToHanif(userMessage);
      setResponses((prevResponses) => [...prevResponses, { user: userMessage, ai }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponses((prevResponses) => [...prevResponses, { user: userMessage, ai: "Error fetching response. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (!lastUserMessage.trim()) return;

    setLoading(true);

    try {
      const ai = await requestToHanif(lastUserMessage);
      setResponses((prevResponses) => [...prevResponses, { user: lastUserMessage, ai }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponses((prevResponses) => [...prevResponses, { user: lastUserMessage, ai: "Error fetching response. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="bg-zinc-900">
        <div className="flex flex-col min-h-[100vh] justify-center items-center bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
          <div className="flex flex-col w-full max-w-3xl lg:max-w-3xl 2xl:max-w-5xl rounded-xl 2xl:mt-32 mt-24 mb-20 lg:p-4 bg-white dark:bg-zinc-900 shadow-md shadow-gray-300 dark:shadow-black">
            <div className="overflow-y-auto scroll flex flex-col" id="chatDisplay">
              {responses.length === 0 ? (
                <Title/>
              ) : 
                null
              }
              <Output responses={responses} handleRefresh={handleRefresh} loading={loading}/> {/* Pass handleRefresh to Output */}
             
            </div>
          </div>
          <Input loading={loading} content={content} handleSubmit={handleSubmit} setContent={setContent} />
        </div>
      </main>
    </>
  );
}

export default App;
