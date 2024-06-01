import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PropTypes from "prop-types";
import RefreshButton from "./resfreshButton";
import { Clipboard } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { ClipboardText } from "@phosphor-icons/react/dist/ssr";

function Output({ responses, handleRefresh, loading }) {
    const [copiedText, setCopiedText] = useState(""); // Tambahkan state untuk menyimpan teks yang sudah disalin

    // Fungsi untuk menyalin teks ke clipboard
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // console.log("Teks disalin ke clipboard: ", text);
            setCopiedText(text); // Update state untuk menandai bahwa teks sudah disalin
        } catch (error) {
            // console.error("Gagal menyalin teks ke clipboard: ", error);
        }
    };

    return (
        <div>
            {responses.map((response, index) => (
                <div key={index} className="flex flex-col py-4 p-6 md:p-8 lg:p-0">
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
                    <div className="flex px-3">
                        {copiedText !== response.ai ? ( // Tampilkan tombol copy jika teks belum disalin
                           <div className="flex items-center justify-center">
                           <Clipboard size={24} className="text-white cursor-pointer" onClick={()=> copyToClipboard(response.ai)}/>
                       </div>
                        ) : ( // Tampilkan ikon Clipboard jika teks sudah disalin sebelumnya
                            <div className="flex items-center justify-center">
                                <ClipboardText size={24} className="text-gray-400 cursor-not-allowed" />
                            </div>
                        )}
                        <RefreshButton handleRefresh={handleRefresh} loading={loading} />
                    </div>
                </div>
            ))}
        </div>
    )
}

Output.propTypes = {
    responses: PropTypes.array.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Output;
