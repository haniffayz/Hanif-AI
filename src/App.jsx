// App.jsx
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

  return (
    <>
      <main className="bg-zinc-900">
        <div className="flex flex-col min-h-[100vh] justify-center items-center bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
          <div className="flex flex-col w-full max-w-3xl 2xl:max-w-5xl rounded-xl 2xl:mt-32 mt-20 mb-20 p-4 bg-white dark:bg-zinc-900 shadow-md shadow-gray-300 dark:shadow-black">
            <div className="flex-1 p-3 overflow-y-auto scroll flex flex-col" id="chatDisplay">
              {responses.length === 0 ? (
                <Title/>
              ) : 
                null
              }
              <Output responses={responses} /> {/* Perbaikan properti response menjadi responses */}
             
            </div>
          </div>
          <Input loading={loading} content={content} handleSubmit={handleSubmit} setContent={setContent} /> {/* Menambahkan properti content */}
        </div>
      </main>
    </>
  );
}

export default App;
