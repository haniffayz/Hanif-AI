import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import PropTypes from "prop-types"; // tambahkan import PropTypes
// import { Camera } from "@phosphor-icons/react/dist/ssr";

function Input({ loading, content, handleSubmit, setContent }) {
  return (
    <div className="px-3 bg-zinc-800 flex w-full justify-center items-center py-2 fixed bottom-0">
      <div className="flex gap-4 w-full 2xl:px-[32rem] xl:px-[14rem] lg:px-[7rem]">
        {/* <div className="flex justify-center items-center">
           <Camera className="text-white bg-zinc-600 w-14 h-14 p-2 rounded-full" size={20} />
        </div> */}
        <textarea
          placeholder="Kirim pesan ke hanif..."
          className="flex-1 p-3 w-full 2xl:h-[4rem] xl:h-[3.5rem] h-[3.5rem] rounded-xl dark:bg-zinc-700 dark:text-white dark:border-zinc-600 
          text-lg"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Perbaiki penulisan setContent
        />
        <button
          className={`bg-blue-700 hover:bg-blue-500 text-white font-bold py-1.5 px-4 rounded-lg transition duration-300 ease-in-out text-sm flex items-center justify-center ${
            loading ? "loading" : "" // Ubah loading ke "loading" sebagai class
          }`}
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
  );
}

// Menambahkan PropTypes untuk memvalidasi props
Input.propTypes = {
  loading: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
};

export default Input;


