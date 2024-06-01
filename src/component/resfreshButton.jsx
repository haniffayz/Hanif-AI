import { ArrowClockwise } from "@phosphor-icons/react/dist/ssr";
import PropTypes from "prop-types";

function RefreshButton({ handleRefresh, loading }) { // Add handleRefresh prop
  return (
    <div className="flex justify-start p-2">
      {loading ? (
        <div className="custom-loader"></div>
      ) : <ArrowClockwise size={24} className="text-white flex justify-end cursor-pointer" onClick={handleRefresh} />
      }
      
    </div>
  );
}

RefreshButton.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
  loading: PropTypes.isRequired
};

export default RefreshButton;
