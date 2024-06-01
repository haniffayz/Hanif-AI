// Output.jsx
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PropTypes from "prop-types";
import RefreshButton from "./resfreshButton";

function Output({ responses, handleRefresh }) { // Menambahkan properti responses
    return (
        <div>
            {responses.map((response, index) => (
                <div key={index} className="flex flex-col py-4">
                  <div className="chat-message self-end bg-blue-500 text-white max-w-xl rounded-lg px-3 py-1.5 mb-6 2xl:text-lg xl:text-sm scroll">
                    {response.user}
                  </div> 
                 <SyntaxHighlighter
                    wrapLongLines={true}
                    language="swift"
                    style={atomDark}
                    className="chat-message self-start bg-zinc-500 text-white rounded-lg px-3 py-1.5 2xl:text-lg xl:text-sm text-sm max-w-xl 2xl:max-w-2xl w-full"
                  >
                    {response.ai}
                  </SyntaxHighlighter>
                  <RefreshButton handleRefresh={handleRefresh}/>
                </div>
              ))}
        </div>
        
    )
}

Output.propTypes = {
    responses: PropTypes.bool.isRequired,
    handleRefresh: PropTypes.isRequired

}

export default Output;
